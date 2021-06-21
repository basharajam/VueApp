import axios from "axios";


const state  = {
    ProdByBox:[],
    ProdDecRope:[],
    ProdDecSticker:[],
    ProdDecIns:[],
    ProdDecTag:[]
    
}

const getters = {
    ProdByBox:state=>state.ProdByBox,
    ProdDecRope:state=>state.ProdDecRope,
    ProdDecSticker:state=>state.ProdDecSticker,
    ProdDecIns:state=>state.ProdDecIns,
    ProdDecTag:state=>state.ProdDecTag

}

const actions = {

    getProdByBox({commit}){


        //Do Requset 
        var SetUrl = 'https://alyaman.com/wp-json/wc/v3/products?tag=696';
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

        var Seturl = ' https://alyaman.com/wp-json/wc/v3/products?tag=703';

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

        var SetUrl = 'https://alyaman.com/wp-json/wc/v3/products?tag=704';
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

        var SetUrl = 'https://alyaman.com/wp-json/wc/v3/products?tag=705';
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

        var SetUrl = 'https://alyaman.com/wp-json/wc/v3/products?tag=707';
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
    ProdDecTag:(state,ProdDecTag) => (state.ProdDecTag = ProdDecTag)

}

export default {
    state,
    getters,
    actions,
    mutations

}