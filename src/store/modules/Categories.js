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

            const SetUrl = 'https://phplaravel-608610-2049275.cloudwaysapps.com/api/Categories';
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