import axios from "axios";

const state={
    config:{},
    CurrCountry:{}
}

const getters={
    config:state=>state.config,
    CurrCountry:state=>state.CurrCountry
}


const actions={
    getConfig({commit}){
      var url='http://127.0.0.1:8000/api/getConfig';
      axios.get(url).then(function(resp){
        commit('config',resp.data.item)
      })

      var CurrCountryObj={
        CurrVal:'SAR',
        CountryVal:'SA',
        CountryValText:'السعودية'
      }
      commit('CurrCountry',CurrCountryObj)

    }
}


const mutations={
  config:(state,config)=>(state.config = config),
  CurrCountry:(state,CurrCountry)=>(state.CurrCountry = CurrCountry)
}















export default {
    state,
    getters,
    actions,
    mutations
}