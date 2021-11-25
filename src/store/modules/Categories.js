import axios from "axios";
import cookie from 'vue-cookies'



const state  = {
  Categories:[]
}

const getters = {
    Categories:state=>state.Categories,
}

const actions = {

        //Get Categories
        getCategories({commit}){

            
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
            const SetUrl = 'https://phplaravel-608610-2049275.cloudwaysapps.com/api/Categories/'+cur+'/'+country;
            axios.get(SetUrl).then(function(response){

                if(response.status != 200){

                    console.log('Badddddddddd')

                }
                else{
                    commit('Categories',response.data)
                }
                

            })
        }
        //Done

}

const mutations = {
    Categories:(state,Categories) => (state.Categories = Categories)
}

export default {
    state,
    getters,
    actions,
    mutations

}