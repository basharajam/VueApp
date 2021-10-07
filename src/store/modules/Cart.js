// import axios from "axios";
// import cookie from 'vue-cookies'

const state = {
    Cart:[],
    FullPrice:0
}

const getters = {

    Cart:state=>state.Cart,
    FullPrice:state=>state.FullPrice

}

const actions  = {


    AddToCartS({state,commit,getters},Product){


        var Prod = {
            item:Product,
            qty:1
        }

        //Check if Cart is Empty 
        if(state.Cart.length == 0 ){

            console.log("Cart Is Empty")
            
            var newCart0 = state.Cart
            newCart0.push(Prod)
        
            //Add New Item 
            commit('Cart',newCart0)

        }
        else{
            console.log('Cart Is not Empty')
            var CartArr = state.Cart;
            console.log(CartArr)
            var FilterCart = CartArr.find(obj => {
                return obj.item.id == Product.id
            })

            if(FilterCart){

                //if Cart Is Not Empty And The Item Is !New 
                console.log('item Already Exists')
                console.log('increase Qty')

                 state.Cart.forEach(item =>{

                    if(item.item.id === Product.id){

                        var oldQty = item.qty
                        var newQty =item.qty = oldQty + 1;
                        return {item :item.item ,qty : newQty}

                    }
                })

                commit('Cart',state.Cart)
 
            }
            else{

                //if Cart Is Not Empty And The Item Is New
                console.log('item Is New ')

                var newCart = state.Cart
                newCart.push(Prod)
                commit('Cart',newCart)

            }

        }

        let FullPrice;
        //Set Full Price
        //Check Product Type 
        if(Product.type === 'variable '){
            console.log('Variable Product')
        }
        else if (Product.type === 'simple'){

            if(Product.on_sale){
                FullPrice =parseInt(Product.sale_price) + getters.FullPrice
           }
           else{
                FullPrice = parseInt(Product.regular_price) + getters.FullPrice
           }
        }



        commit('FullPrice',FullPrice)
        
    
    },

    RemoveFromCart({state,commit},ProdId){

        //filter Cart Arr 
        var FilterCartArr = state.Cart.findIndex(item =>{
             return item.item.id === ProdId
        })

        //Remove item From Array

        var removedItem =state.Cart.splice(FilterCartArr,1)
        var newCart = state.Cart

        commit('Cart',newCart)

        //Reduce Full Price

        // var itemQty=removedItem[0].qty

        // var FullPrice =getters.FullPrice - res.ProductPrice * itemQty
        console.log(removedItem)
        // commit('FullPrice',FullPrice)

    },


    increaseQtyS({state,commit},ProdId){

        
        //filter Cart Arr 
        state.Cart.forEach(item =>{

            if(item.item.id === ProdId){
                var oldQty = item.qty
                var newQty =item.qty = oldQty + 1;
                return {item :item.item ,qty : newQty}
            }
        })
        commit('Cart',state.Cart)

    },
    reduceQtyS({state,commit},ProdId){

        state.Cart.forEach(item =>{

            //reduce item qty by 1
            if(item.item.id === ProdId && item.qty > 1 ){
                var oldQty = item.qty
                var newQty =item.qty = oldQty - 1;
                return {item :item.item ,qty : newQty}
            }
            //remove item if qty === 1
            else if (item.item.id === ProdId && item.qty === 1 ){

                var FilterCartArr = state.Cart.findIndex(itemx =>{
                    return itemx.item.id === ProdId
               })
                return state.Cart.splice(FilterCartArr,1)
            }
        })

        commit('Cart',state.Cart)

    }



}

const mutations = {
    Cart:(state,Product) => (state.Cart = Product),
    FullPrice:(state,FullPrice) =>(state.FullPrice = FullPrice)
}


export default {
    state,
    getters,
    actions,
    mutations

}