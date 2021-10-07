
import axios from "axios";

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


        console.log(form)

        var url = 'http://127.0.0.1:8000/api/RegisterByMail';
        axios.post(url,form).then(function(response){
            
            console.log(response)

            commit('User',response.data.item.user)
            commit('Token',response.data.item.token)
        })
        

    },

    LoginUser(){

        console.log('Login Working')

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
