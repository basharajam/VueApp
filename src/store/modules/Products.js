import axios from "axios";
import cookie from 'vue-cookies'

const state  = {

    LandingLayout:[],
    ProdByCatLayout:[],
    ProdByTagLayout:[],
    ProdOne:{} 
}

const getters = {

    LandingLayout:state=>state.LandingLayout,
    ProdByCat:state=>state.ProdByCat,
    ProdByCatLayout:state=>state.ProdByCatLayout,
    ProdByTagLayout:state=>state.ProdByTagLayout,
    ProdOne:state=>state.ProdOne
}

const actions = {


    getLanding({commit}){

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

        
        var setUrl ='http://127.0.0.1:8000/api/Products/'+cur+'/'+country;

          axios.get(setUrl).then(function(response){
    
            if(response.status != 200){
          
                console.log('Badddddddddddddddddddd')
            }
            else{

                // landing page 
                var items=response.data
                console.log(items)
                commit('LandingLayout',items)
                

            }
        })
    },
    

    getProdByCat({commit},ProdByCat){

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
        var setUrl ='http://127.0.0.1:8000/api/ProdByCat/'+ProdByCat+'/'+cur+'/'+country;
        axios.get(setUrl).then(function(response){
    
            if(response.status != 200){
          
                console.log('Badddddddddddddddddddd')
            }
            else{

                //anding Page Layout
                //console.log(response.data)
               
                // Product By Category
                var items=response.data
                commit('ProdByCatLayout',items)
                

            }
        })

    },
    getProdByTag({commit},ProdByTag){

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
        var setUrl ='http://127.0.0.1:8000/api/ProdByTag/'+ProdByTag+'/'+cur+'/'+country;
        axios.get(setUrl).then(function(response){
    
            if(response.status != 200){
          
                console.log('Badddddddddddddddddddd')
            }
            else{

                //anding Page Layout
                //console.log(response.data)
               
                // Product By Category
                var items=response.data
                commit('ProdByTagLayout',items)
                

            }
        })


    },
    getProdOne({commit},ProdName){

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

        var url = 'http://127.0.0.1:8000/api/ProdOne/'+ProdName+'/'+cur+'/'+country;
        axios.get(url).then(function(response){
            commit('ProdOne',response.data)
        })
    }
}

const mutations = {

    LandingLayout:(state,LandingLayout) =>(state.LandingLayout = LandingLayout),
    ProdByCatLayout:(state,ProdByCatLayout)=>(state.ProdByCatLayout = ProdByCatLayout),
    ProdByTagLayout:(state,ProdByTagLayout)=>(state.ProdByTagLayout = ProdByTagLayout),
    ProdOne:(state,ProdOne)=>(state.ProdOne = ProdOne)
}

export default {
    state,
    getters,
    actions,
    mutations
}