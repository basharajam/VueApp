import axios from "axios";


const state  = {
    RecentProd:[],
    ProdOffers:[],
    ProdBestSell:[],
    ProdMostPopular:[],
    ProdByTax:[],
    ProdByTax0:[],
    ProdByTax1:[],
    ProdByTax2:[],
    ProdByTax3:[],
    ProdByTax4:[],
    ProdByTax5:[],
    ProdByTax6:[],
    ProdByTax7:[],
    ProdByTax8:[],
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
    ProdMostPopular:state=>state.ProdMostPopular,
    ProdByTax1:state=>state.ProdByTax1,
    ProdByTax2:state=>state.ProdByTax2,
    ProdByTax3:state=>state.ProdByTax3,
    ProdByTax4:state=>state.ProdByTax4,
    ProdByTax5:state=>state.ProdByTax5,
    ProdByTax6:state=>state.ProdByTax6,
    ProdByTax7:state=>state.ProdByTax7,
    ProdByTax8:state=>state.ProdByTax8,
    ProdByBox:state=>state.ProdByBox,
    ProdDecRope:state=>state.ProdDecRope,
    ProdDecSticker:state=>state.ProdDecSticker,
    ProdDecIns:state=>state.ProdDecIns,
    ProdDecTag:state=>state.ProdDecTag

}

const actions = {


    getRecentProd({commit}){
        
        
        var SetUrl=process.env.VUE_APP_BASEURL+'products?featured = true& per_page=8';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
           
                console.log('Badddddddddddddddddddd')
            }
            else{
           
                commit('RecentProd',response.data)

            }

        })
    },
    getProdOffers({commit}){

        var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=739&per_page=12&status=publish';
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

        var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=672&per_page=8&status=publish';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
           
                console.log('Badddddddddddddddddddd')
            }
            else{
          
                commit('ProdBestSell',response.data)

            }

        })

    },

    getProdMostPopular({commit}){

        var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=719&per_page=8&status=publish';
        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
           
                console.log('Badddddddddddddddddddd')
            }
            else{
          
                commit('ProdMostPopular',response.data)

            }

        })

    },
    getProdByTax({commit}){

        // var setUrl =process.env.VUE_APP_BASEURLPROD+'Products';
        var setUrl ='http://127.0.0.1:8000/api/Products';
        axios.get(setUrl).then(function(response){

            if(response.status != 200){
          
                console.log('Badddddddddddddddddddd')
            }
            else{

                //Category
                commit('Categories',response.data.Categories)
                
                console.log(response.data)
                commit('ProdByTax',response.data.ProdByTax)
                commit('ProdByTax0',response.data.ProdByTax0)
                commit('ProdByTax1',response.data.ProdByTax1)
                commit('ProdByTax2',response.data.ProdByTax2)
                commit('ProdByTax3',response.data.ProdByTax3)
                commit('ProdByTax4',response.data.ProdByTax4)
                commit('ProdByTax5',response.data.ProdByTax5)
                commit('ProdByTax6',response.data.ProdByTax6)
                commit('ProdByTax7',response.data.ProdByTax7)
                commit('ProdByTax8',response.data.ProdByTax8)

            }

        })

    },

    // getProdByTax({commit}){
        

    //     var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=699&per_page=12&status=publish';
    //     axios.get(SetUrl).then(function(response){

    //         if(response.status != 200){
          
    //             console.log('Badddddddddddddddddddd')
    //         }
    //         else{
  
    //             commit('ProdByTax',response.data)

    //         }

    //     })
    // },
    // getProdByTax0({commit}){

    //     var SetUrl = process.env.VUE_APP_BASEURL+'products?tag=718&per_page=12&status=publish';
    //     axios.get(SetUrl).then(function(response){

    //         if(response.status != 200){
       
    //             console.log('Badddddddddddddddddddd')
    //         }
    //         else{

    //             commit('ProdByTax0',response.data)
                

    //         }

    //     })



    // },



    // getProdByTax1({commit}){

    //     var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=720&per_page=6&status=publish';
    //     axios.get(SetUrl).then(function(response){

    //         if(response.status != 200){
           
    //             console.log('Badddddddddddddddddddd')
    //         }
    //         else{
          
    //             commit('ProdByTax1',response.data)

    //         }

    //     })

    // },

    // getProdByTax2({commit}){

    //     var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=695&per_page=12&status=publish';
    //     axios.get(SetUrl).then(function(response){

    //         if(response.status != 200){
           
    //             console.log('Badddddddddddddddddddd')
    //         }
    //         else{
          
    //             commit('ProdByTax2',response.data)

    //         }

    //     })

    // },

    // getProdByTax3({commit}){

    //     var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=731&per_page=12&status=publish';
    //     axios.get(SetUrl).then(function(response){

    //         if(response.status != 200){
           
    //             console.log('Badddddddddddddddddddd')
    //         }
    //         else{
          
    //             commit('ProdByTax3',response.data)

    //         }

    //     })


    // },
    // getProdByTax4({commit}){

    //     var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=705&per_page=12&status=publish';
    //     axios.get(SetUrl).then(function(response){

    //         if(response.status != 200){
           
    //             console.log('Badddddddddddddddddddd')
    //         }
    //         else{
          
    //             commit('ProdByTax4',response.data)

    //         }

    //     })

    // },
    // getProdByTax5({commit}){

    //     var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=723&per_page=10&status=publish';
    //     axios.get(SetUrl).then(function(response){

    //         if(response.status != 200){
           
    //             console.log('Badddddddddddddddddddd')
    //         }
    //         else{
          
    //             commit('ProdByTax5',response.data)

    //         }

    //     })

    // },

    // getProdByTax6({commit}){

    //     var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=717&per_page=12&status=publish';
    //     axios.get(SetUrl).then(function(response){

    //         if(response.status != 200){
           
    //             console.log('Badddddddddddddddddddd')
    //         }
    //         else{
          
    //             commit('ProdByTax6',response.data)

    //         }

    //     })

    // },
    // getProdByTax7({commit}){

    //     var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=716&per_page=12&status=publish';
    //     axios.get(SetUrl).then(function(response){

    //         if(response.status != 200){
           
    //             console.log('Badddddddddddddddddddd')
    //         }
    //         else{
          
    //             commit('ProdByTax7',response.data)

    //         }

    //     })

    // },
    // getProdByTax8({commit}){

    //     var SetUrl=process.env.VUE_APP_BASEURL+'products?tag=703&per_page=12&status=publish';
    //     axios.get(SetUrl).then(function(response){

    //         if(response.status != 200){
           
    //             console.log('Badddddddddddddddddddd')
    //         }
    //         else{
          
    //             commit('ProdByTax8',response.data)

    //         }

    //     })

    // },


















    getProdByBox({commit}){


        //Do Requset 
        var SetUrl = process.env.VUE_APP_BASEURL+'products?tag=696&per_page=8&status=publish';
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

        var Seturl = process.env.VUE_APP_BASEURL+'products?tag=703&per_page=4&status=publish';

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

        var SetUrl = process.env.VUE_APP_BASEURL+'products?tag=704&per_page=4&status=publish';
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

        var SetUrl = 'https://alyaman.com/wp-json/wc/v3/products?tag=705&per_page=4&status=publish';
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

        var SetUrl = 'https://alyaman.com/wp-json/wc/v3/products?tag=707&per_page=4&status=publish';
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
    ProdMostPopular:(state,ProdMostPopular)=>(state.ProdMostPopular=ProdMostPopular),
    RecentProd:(state,RecentProd) =>(state.RecentProd = RecentProd),

    
    ProdByTax:(state,ProdByTax)=>(state.ProdByTax = ProdByTax),
    ProdByTax0:(state,ProdByTax0)=>(state.ProdByTax0 = ProdByTax0),
    ProdBestSell:(state,ProdBestSell)=>(state.ProdBestSell =ProdBestSell),
    ProdByTax1:(state,ProdByTax1)=>(state.ProdByTax1=ProdByTax1),
    ProdByTax2:(state,ProdByTax2)=>(state.ProdByTax2=ProdByTax2),
    ProdByTax3:(state,ProdByTax3)=>(state.ProdByTax3=ProdByTax3),
    ProdByTax4:(state,ProdByTax4)=>(state.ProdByTax4=ProdByTax4),
    ProdByTax5:(state,ProdByTax5)=>(state.ProdByTax5=ProdByTax5),
    ProdByTax6:(state,ProdByTax6)=>(state.ProdByTax6=ProdByTax6),
    ProdByTax7:(state,ProdByTax7)=>(state.ProdByTax7=ProdByTax7),
    ProdByTax8:(state,ProdByTax8)=>(state.ProdByTax8=ProdByTax8),
    
}

export default {
    state,
    getters,
    actions,
    mutations

}