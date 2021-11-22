import Vue from 'vue'
import axios from "axios"; 
import VueCookie from 'vue-cookies';
import CryptoJS from 'crypto-js'
import router from '../../router/index';

const state = {
    User:{},
    Token:{}
}

const getters = {
    User:state=>state.User,
    Token:state=>state.Token,

}

const actions = {

    RegisterUser({commit},form){

        var url = 'http://127.0.0.1:8000/api/RegisterByMail';
        axios.post(url,form).then(function(response){
            

            commit('User',response.data.item.user.ID)
            commit('Token',response.data.item.token)

        })
        

    },
    LoginWithMail({commit},form){

        const vm = new Vue({})
        var url = 'http://127.0.0.1:8000/api/LoginByMail';
        axios.post(url,form).then(function(resp){

            if(resp.data.status){

                console.log('Successfully Logged-In')

                //Encrypt Token 
                const key = process.env.VUE_APP_ENCKEY //
                const iv = process.env.VUE_APP_ENCIV // 
                const txt= resp.data.items.token;
                
                const cipher = CryptoJS.AES.encrypt(txt, CryptoJS.enc.Utf8.parse(key), {
                    iv: CryptoJS.enc.Utf8.parse(iv),
                    mode: CryptoJS.mode.CBC
                })

                commit('User',resp.data.items.user)
                commit('Token',cipher)

                //Save Token in Cookies
                VueCookie.set('token',cipher.toString())

                //Set Token Auth header Axios
                axios.defaults.headers.common['Authorization'] = 'Bearer '+txt
                
                router.push({ name:'Home' })


            }
        }).catch(()=>{
            vm.$bvToast.toast('Unable To Login Worng Mail Or Password',{
                title:'',
                variant: 'danger',
                solid:true
            })
        })
    },
    LoginWithSocialite({commit},data){

        //Encrypt Data 
        const key = process.env.VUE_APP_ENCKEY //
        const iv = process.env.VUE_APP_ENCIV // 
        const txt= data.token;
        
        const cipher = CryptoJS.AES.encrypt(txt, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC
        })

        var user=JSON.parse(data.user.replace(/&quot;/g,'"'));

        //Save On Cookie

        commit('User',user.ID)
        commit('Token',cipher.toString())
        VueCookie.set('stateCount',user.ID)
        VueCookie.set('token',cipher.toString())
        
    },
    LoginWithCookie({commit},{UserId,Token}){

        commit('User',UserId)
        commit('Token',Token)
    },

    LogOut({commit}){

        
        commit('User',{})
        commit('Token',null)


    }
}

const mutations = {
    User:(state,User)=>(state.User = User),
    Token:(state,Token)=>(state.Token = Token)
}

export default {
  state,
  getters,
  actions,
  mutations
}
