import axios from "axios";
import cookie from 'vue-cookies'

const state  = {
    // RecentProd:[],
    // ProdOffers:[],
    // ProdBestSell:[],
    // ProdMostPopular:[],
    // ProdByTax:[],
    // ProdByTax0:[],
    // ProdByTax1:[],
    // ProdByTax2:[],
    // ProdByTax3:[],
    // ProdByTax4:[],
    // ProdByTax5:[],
    // ProdByTax6:[],
    // ProdByTax7:[],
    // ProdByTax8:[],
    // ProdByTax9:[],
    // ProdInBox:[],
    // ProdInBox0:[],
    // ProdInBox1:[],
    // ProdInBox2:[],
    // ProdByBox:[],
    LandingLayout:[]
    
}

const getters = {
    // ProdOffers:state=>state.ProdOffers,
    // RecentProd:state=>state.RecentProd,
    // ProdByTax:state=>state.ProdByTax,
    // ProdByTax0:state=>state.ProdByTax0,
    // ProdBestSell:state=>state.ProdBestSell,
    // ProdMostPopular:state=>state.ProdMostPopular,
    // ProdByTax1:state=>state.ProdByTax1,
    // ProdByTax2:state=>state.ProdByTax2,
    // ProdByTax3:state=>state.ProdByTax3,
    // ProdByTax4:state=>state.ProdByTax4,
    // ProdByTax5:state=>state.ProdByTax5,
    // ProdByTax6:state=>state.ProdByTax6,
    // ProdByTax7:state=>state.ProdByTax7,
    // ProdByTax8:state=>state.ProdByTax8,
    // ProdByTax9:state=>state.ProdByTax9,

    // ProdInBox:state=>state.ProdInBox,
    // ProdInBox0:state=>state.ProdInBox0,
    // ProdInBox1:state=>state.ProdInBox1,
    // ProdInBox2:state=>state.ProdInBox2,
    // ProdByBox:state=>state.ProdByBox,
    LandingLayout:state=>state.LandingLayout

}

const actions = {


    getProdByTax({commit}){

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
        
        var setUrl ='http://127.0.0.1:8000/api/Products/'+cur+'/'+country;
        //X
        //var setUrl ='https://phplaravel-608610-2049275.cloudwaysapps.com/api/Products/'+cur+'/'+country;
        //Or
        //var setUrl= 'https://phplaravel-608610-2037155.cloudwaysapps.com/api/Products/'+cur+'/'+country;
          axios.get(setUrl).then(function(response){
    
            if(response.status != 200){
          
                console.log('Badddddddddddddddddddd')
            }
            else{

                //Category
                commit('Categories',response.data.Categories)
                //anding Page Layout
                console.log(response.data)
               

                // landing page 
                var items=response.data
                commit('LandingLayout',items)
                
                // items.forEach(element => {
                //     if(element.type !== 'banner'){
                //         commit(element.name,element.items)
                //     }
                // });

            }
        })
    },
}

const mutations = {

    LandingLayout:(state,LandingLayout) =>(state.LandingLayout = LandingLayout),
    // ProdByBox:(state,ProdByBox) => (state.ProdByBox = ProdByBox),
    // ProdInBox:(state,ProdInBox) => (state.ProdInBox = ProdInBox),
    // ProdInBox0:(state,ProdInBox0) => (state.ProdInBox0 = ProdInBox0),
    // ProdInBox1:(state,ProdInBox1) => (state.ProdInBox1 = ProdInBox1),
    // ProdInBox2:(state,ProdInBox2) => (state.ProdInBox2 = ProdInBox2),

    // ProdOffers:(state,ProdOffers)=>(state.ProdOffers = ProdOffers),
    // ProdMostPopular:(state,ProdMostPopular)=>(state.ProdMostPopular=ProdMostPopular),
    // RecentProd:(state,RecentProd) =>(state.RecentProd = RecentProd),
    // ProdBestSell:(state,ProdBestSell)=>(state.ProdBestSell =ProdBestSell),

    // ProdByTax:(state,ProdByTax)=>(state.ProdByTax = ProdByTax),
    // ProdByTax0:(state,ProdByTax0)=>(state.ProdByTax0 = ProdByTax0),
    // ProdByTax1:(state,ProdByTax1)=>(state.ProdByTax1=ProdByTax1),
    // ProdByTax2:(state,ProdByTax2)=>(state.ProdByTax2=ProdByTax2),
    // ProdByTax3:(state,ProdByTax3)=>(state.ProdByTax3=ProdByTax3),
    // ProdByTax4:(state,ProdByTax4)=>(state.ProdByTax4=ProdByTax4),
    // ProdByTax5:(state,ProdByTax5)=>(state.ProdByTax5=ProdByTax5),
    // ProdByTax6:(state,ProdByTax6)=>(state.ProdByTax6=ProdByTax6),
    // ProdByTax7:(state,ProdByTax7)=>(state.ProdByTax7=ProdByTax7),
    // ProdByTax8:(state,ProdByTax8)=>(state.ProdByTax8=ProdByTax8),
    // ProdByTax9:(state,ProdByTax9)=>(state.ProdByTax9=ProdByTax9),
    
}

export default {
    state,
    getters,
    actions,
    mutations

}