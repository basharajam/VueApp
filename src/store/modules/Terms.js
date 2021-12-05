import axios from "axios";
import cookie from 'vue-cookies'


const state  = {
  Categories:[],
  Tags:[]
}

const getters = {
    Categories:state=>state.Categories,
    Tags:state=>state.Tags
}

const actions = {



  //Get Terms
  getTerms({commit}){


    var CountryVal= cookie.get('shipCountry');
    var CurrVal = cookie.get('wmc_current_currency');
    let cur;
    let country
    if(CountryVal && CurrVal){

        cur=CurrVal;
        country= CountryVal;
    }

    else{
        cur='SAR';
        country='SA';
    }
    const SetUrl = process.env.VUE_APP_DEVBASEURL+'/Terms/'+cur+'/'+country;
    axios.get(SetUrl).then(function(response){

        if(response.data.status){
          
          var data = response.data.items;

          commit('Categories',data.Categories)
          commit('Tags',data.Tags)
        }
        

    })
  }

}

const mutations = {
 Categories:(state,Categories) => (state.Categories = Categories),
 Tags:(state,Tags)=>(state.Tags = Tags)
}

export default {
    state,
    getters,
    actions,
    mutations

}