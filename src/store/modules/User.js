
import axios from "axios"; 
import VueCookie from 'vue-cookies';
import CryptoJS from 'crypto-js'


const state = {
    User:{},
    Token:{}
}

const getters = {
    User:state=>state.User,
    Token:state=>state.Token
}

const actions = {

    RegisterUser({commit},form){

        var url = 'http://127.0.0.1:8000/api/RegisterByMail';
        axios.post(url,form).then(function(response){
            

            commit('User',response.data.item.user)
            commit('Token',response.data.item.token)
        })
        

    },
    LoginWithMail({commit},form){
        var url = 'http://127.0.0.1:8000/api/LoginByMail';
        axios.post(url,form).then(function(resp){

            // commit('User',resp.data.item.user)
            // commit('Token',resp.data.item.token)

            //Encrypt Data 
            const key = process.env.VUE_APP_ENCKEY //
            const iv = process.env.VUE_APP_ENCIV // 
            const txt= resp.data.item.user;
            
            const cipher = CryptoJS.AES.encrypt(txt, CryptoJS.enc.Utf8.parse(key), {
                iv: CryptoJS.enc.Utf8.parse(iv),
                mode: CryptoJS.mode.CBC
            })

            //Save On Cookie

            commit('User',resp.data.item.user.ID)
            commit('Token',cipher.toString())
            VueCookie.set('stateCount',resp.data.item.user.ID+22)
            VueCookie.set('token',cipher.toString())
            //Save On Cookie

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
        VueCookie.set('stateCount',user.ID+22)
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
