import axios from "axios";

const state  = {
  Categories:[]
}

const getters = {
    Categories:state=>state.Categories,
}

const actions = {

        //Get Categories
        getCategories({commit}){

            const SetUrl = 'https://alyaman.com/wp-json/wc/v3/products/categories?per_page=12';
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