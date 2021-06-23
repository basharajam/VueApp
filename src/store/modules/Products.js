import axios from "axios";


const state  = {
    RecentProd:[],
    ProdOffers:[],
    ProdByTax:[],
    ProdByTax0:[],
    ProdBestSell:[],
    ProdByTax1:[],
    ProdByTax2:[],
    ProdByTax3:[],
    ProdByTax4:[],


    ProdByBox:[],
    ProdDecRope:[],
    ProdDecSticker:[],
    ProdDecIns:[],
    ProdDecTag:[]
    
}

const getters = {
    ProdOffers:state=>state.ProdOffers,
    RecentProd:state=>state.RecentProd,
    ProdByTax:state=>state.ProdByTax,
    ProdByTax0:state=>state.ProdByTax0,
    ProdBestSell:state=>state.ProdBestSell,
    ProdByTax1:state=>state.ProdByTax1,
    ProdByTax2:state=>state.ProdByTax2,
    ProdByTax3:state=>state.ProdByTax3,
    ProdByTax4:state=>state.ProdByTax4,


    ProdByBox:state=>state.ProdByBox,
    ProdDecRope:state=>state.ProdDecRope,
    ProdDecSticker:state=>state.ProdDecSticker,
    ProdDecIns:state=>state.ProdDecIns,
    ProdDecTag:state=>state.ProdDecTag

}

const actions = {


    getRecentProd({commit}){
        
        
        var SetUrl='https://alyaman.com/wp-json/wc/v3/products?featured = true& per_page=8';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
           
                console.log('Badddddddddddddddddddd')
            }
            else{
           
                commit('RecentProd',response.data)

            }

        })
    },

    getProdByTax({commit}){
        

        var SetUrl='https://alyaman.com/wp-json/wc/v3/products?tag=714&per_page=8';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
          
                console.log('Badddddddddddddddddddd')
            }
            else{
  
                commit('ProdByTax',response.data)

            }

        })
    },
    getProdByTax0({commit}){

        var SetUrl = 'https://alyaman.com/wp-json/wc/v3/products?tag=677&per_page=4';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
       
                console.log('Badddddddddddddddddddd')
            }
            else{

                commit('ProdByTax0',response.data)

            }

        })



    },

    getProdOffers({commit}){

        var SetUrl='https://alyaman.com/wp-json/wc/v3/products?tag=695&per_page=8';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
           
                console.log('Badddddddddddddddddddd')
            }
            else{
          
                commit('ProdOffers',response.data)

            }

        })
    },

    getProdBestSell({commit}){

        var SetUrl='https://alyaman.com/wp-json/wc/v3/products?featured = true&?per_page=8';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
           
                console.log('Badddddddddddddddddddd')
            }
            else{
          
                commit('ProdBestSell',response.data)

            }

        })

    },

    getProdByTax1({commit}){

        var SetUrl='https://alyaman.com/wp-json/wc/v3/products?tag=681&per_page=4';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
           
                console.log('Badddddddddddddddddddd')
            }
            else{
          
                commit('ProdByTax1',response.data)

            }

        })

    },

    getProdByTax2({commit}){

        var SetUrl='https://alyaman.com/wp-json/wc/v3/products?tag=695&per_page=4';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
           
                console.log('Badddddddddddddddddddd')
            }
            else{
          
                commit('ProdByTax2',response.data)

            }

        })

    },

    getProdByTax3({commit}){

        var SetUrl='https://alyaman.com/wp-json/wc/v3/products?tag=707&per_page=4';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
           
                console.log('Badddddddddddddddddddd')
            }
            else{
          
                commit('ProdByTax3',response.data)

            }

        })


    },
    getProdByTax4({commit}){

        var SetUrl='https://alyaman.com/wp-json/wc/v3/products?tag=705&per_page=4';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
           
                console.log('Badddddddddddddddddddd')
            }
            else{
          
                commit('ProdByTax4',response.data)

            }

        })


    },

















    getProdByBox({commit}){


        //Do Requset 
        var SetUrl = 'https://alyaman.com/wp-json/wc/v3/products?tag=696&per_page=8';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){

                console.log('Badddddddddddddddddddd')
            }
            else{

                commit('ProdByBox',response.data)

            }

        })
    },

    getProdDecRope({commit}){

        var Seturl = ' https://alyaman.com/wp-json/wc/v3/products?tag=703&per_page=8';

        axios.get(Seturl).then(function(response){

            if(response.status != 200){

                console.log('baddddd')

            }
            else{

                commit('ProdDecRope',response.data)

            }

        })

    },

    getProdDecSticker({commit}){

        var SetUrl = 'https://alyaman.com/wp-json/wc/v3/products?tag=704per_page=8';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){

                console.log('baddddd')

            }
            else{

                commit('ProdDecSticker',response.data)

            }

        })

    },

    getProdDecIns({commit}){

        var SetUrl = 'https://alyaman.com/wp-json/wc/v3/products?tag=705per_page=8';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){

                console.log('baddddd')

            }
            else{

                commit('ProdDecIns',response.data)

            }

        })

    },

    getProdDecTag({commit}){

        var SetUrl = 'https://alyaman.com/wp-json/wc/v3/products?tag=707per_page=8';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){

                console.log('baddddd')

            }
            else{

                commit('ProdDecTag',response.data)

            }

        })

    }


}

const mutations = {
    ProdByBox:(state,ProdByBox) => (state.ProdByBox = ProdByBox),
    ProdDecRope:(state,ProdDecRope) => (state.ProdDecRope = ProdDecRope),
    ProdDecSticker:(state,ProdDecSticker) => (state.ProdDecSticker = ProdDecSticker),
    ProdDecIns:(state,ProdDecIns) => (state.ProdDecIns = ProdDecIns),
    ProdDecTag:(state,ProdDecTag) => (state.ProdDecTag = ProdDecTag),



    ProdOffers:(state,ProdOffers)=>(state.ProdOffers = ProdOffers),
    RecentProd:(state,RecentProd) =>(state.RecentProd = RecentProd),
    ProdByTax:(state,ProdByTax)=>(state.ProdByTax = ProdByTax),
    ProdByTax0:(state,ProdByTax0)=>(state.ProdByTax0 = ProdByTax0),
    ProdBestSell:(state,ProdBestSell)=>(state.ProdBestSell =ProdBestSell),
    ProdByTax1:(state,ProdByTax1)=>(state.ProdByTax1=ProdByTax1),
    ProdByTax2:(state,ProdByTax2)=>(state.ProdByTax2=ProdByTax2),
    ProdByTax3:(state,ProdByTax3)=>(state.ProdByTax3=ProdByTax3),
    ProdByTax4:(state,ProdByTax4)=>(state.ProdByTax4=ProdByTax4)
}

export default {
    state,
    getters,
    actions,
    mutations

}