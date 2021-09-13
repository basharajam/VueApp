import axios from "axios";
import cookie from 'vue-cookies'

const state  = {

    LandingLayout:[],
    ProdByCatLayout:[]    
}

const getters = {

    LandingLayout:state=>state.LandingLayout,
    ProdByCat:state=>state.ProdByCat,
    ProdByCatLayout:state=>state.ProdByCatLayout
}

const actions = {


    getLanding({commit}){

        var CountryVal= cookie.get('shipCountry');
        var CurrVal = cookie.get('wmc_current_currency');
        let cur;
        let country



        //var setUrl ='https://phplaravel-608610-2049275.cloudwaysapps.com/api/Products/'+cur;
        if(CountryVal && CurrVal){

            cur=CurrVal;
            country= CountryVal;
        }

        else{

            //get User Region
            // axios.get('https://api.ipregistry.co/?key=ujxmbnhgocsp5a').then(function(response) {
            //     console.log(response.data)
            //      cur =response.data.currency.code;
            //      country=response.data.currency.symbol_native;
            //      console.log(cur)
            //      console.log(country)
            //     //var setUrl =process.env.VUE_APP_BASEURLPROD+'Products/'+cur;
            //     //var setUrl ='http://127.0.0.1:8000/api/Products/'+cur;
            //   })
            cur='SAR';
            country='SA';
        }
        //http://127.0.0.1:8000/api/Products/USD/UAE
        //https://wordpress-608610-2061089.cloudwaysapps.com/
        
        //var setUrl ='http://127.0.0.1:8000/api/Products/'+cur+'/'+country;
        //X
        var setUrl ='http://phplaravel-608610-2049275.cloudwaysapps.com/api/Products/'+cur+'/'+country;
        //Or
        //var setUrl= 'https://phplaravel-608610-2037155.cloudwaysapps.com/api/Products/'+cur+'/'+country;
          axios.get(setUrl).then(function(response){
    
            if(response.status != 200){
          
                console.log('Badddddddddddddddddddd')
            }
            else{

                //Category
                // commit('Categories',response.data.Categories)
                // //anding Page Layout
                // console.log(response.data)
               

                // landing page 
                var items=response.data
                commit('LandingLayout',items)
                

            }
        })
    },
    

    getProdByCat({commit}){

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
        var setUrl ='http://127.0.0.1:8000/api/ProdByCat/مزهريات/'+cur+'/'+country;
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

    }
}

const mutations = {

    LandingLayout:(state,LandingLayout) =>(state.LandingLayout = LandingLayout),
    ProdByCatLayout:(state,ProdByCatLayout)=>(state.ProdByCatLayout = ProdByCatLayout)
}

export default {
    state,
    getters,
    actions,
    mutations

}