import axios from "axios";
import cookie from 'vue-cookies';
import Vue from 'vue'

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

        //Progress Bar
        Vue.prototype.$Progress.start()

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

        var setUrl =process.env.VUE_APP_DEVBASEURL+'/Products/'+cur+'/'+country;

          axios.get(setUrl).then(function(response){
    
            // landing page 
            var items=response.data
            commit('LandingLayout',items)

            //Finish Progress
            Vue.prototype.$Progress.finish()
        
        })
    },
    

    getProdByCat({commit},ProdByCat){

        //Start Progress
        Vue.prototype.$Progress.start()

        
        
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
        var setUrl =process.env.VUE_APP_DEVBASEURL+'/ProdByCat/'+ProdByCat+'/'+cur+'/'+country;
        axios.get(setUrl).then(function(response){
            
            
            // Product By Category
            var items=response.data
            commit('ProdByCatLayout',items)
            
            //Finish Progress
            Vue.prototype.$Progress.finish()

        })

    },
    getProdByTag({commit},ProdByTag){

        //Start Progress
        Vue.prototype.$Progress.start()

        
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
        var setUrl =process.env.VUE_APP_DEVBASEURL+'/ProdByTag/'+ProdByTag+'/'+cur+'/'+country;
        axios.get(setUrl).then(function(response){
            
            //anding Page Layout
            //console.log(response.data)
            
            // Product By Category
            var items=response.data
            commit('ProdByTagLayout',items)
            
            //Finish Progress
            Vue.prototype.$Progress.finish()
                
    
        })


    },
    getProdOne({commit},ProdName){

        //Start Progress
        Vue.prototype.$Progress.start()

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

        var url = process.env.VUE_APP_DEVBASEURL+'/ProdOne/'+ProdName+'/'+cur+'/'+country;
        axios.get(url).then(function(response){
            commit('ProdOne',response.data)

           

            //Finish Progress
            Vue.prototype.$Progress.finish()
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