// import axios from "axios";
import cookie from 'vue-cookies'
import CryptoJS from 'crypto-js'

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
            qty:Product.min_qty
        }

        


        //Check if Cart is Empty 
        if(state.Cart.length == 0 ){

            var newCart0 = state.Cart
            newCart0.push(Prod)
        
            //add new item to cookie
    
            //Add New Item to state 
            commit('Cart',newCart0)
            
        }
        else{
           
            var CartArr = state.Cart;
           
            var FilterCart = CartArr.find(obj => {
                return obj.item.id == Product.id
            })

            if(FilterCart){

                //if Cart Is Not Empty And The Item Is !New 

                 state.Cart.forEach(item =>{

                    if(item.item.id === Product.id){

                        var oldQty = item.qty;
                        var newQty =item.qty = parseInt(oldQty) + parseInt(Product.min_qty);
                        return {item :item.item ,qty : newQty}
                    }
                })
 
            }
            else{

                //if Cart Is Not Empty And The Item Is New

                var newCart = state.Cart
                newCart.push(Prod)
                commit('Cart',newCart)
            }

        }

        //Update Cookie cart 
        //console.log(state.Cart)
        //const key = process.env.VUE_APP_ENCKEY // 
        //const cipher = CryptoJS.AES.encrypt(JSON.stringify(state.Cart),key).toString()
        //cookie.set('vcart',cipher)


        let FullPrice;
        //Set Full Price
        //Check Product Type 
        if (Product.type === 'simple'){
            
            if(Product.on_sale){
                FullPrice =parseFloat(Product.sale_price) * parseFloat(Product.min_qty) + parseFloat(getters.FullPrice) 
           }
           else{
                FullPrice = parseFloat(Product.regular_price) * parseFloat(Product.min_qty) + parseFloat(getters.FullPrice)
           }
        }

        commit('FullPrice',FullPrice)
        
    
    },

    RemoveFromCart({state,commit,getters},ProdId){

        //filter Cart Arr 
        var FilterCartArr = state.Cart.findIndex(item =>{
             return item.item.id === ProdId
        })

        var Product = state.Cart.find(item=>{
            return item.item.id === ProdId
        })

        //Remove item From Array
        state.Cart.splice(FilterCartArr,1)
        var newCart = state.Cart

        commit('Cart',newCart)
        
        //Update Cookie cart 
        const key = process.env.VUE_APP_ENCKEY // 
        const cipher = CryptoJS.AES.encrypt(JSON.stringify(newCart),key).toString()
        cookie.set('vcart',cipher)


        if (Product.item.type === 'simple'){
            

            let rmProdPrice;
            if(Product.on_sale){
                rmProdPrice=parseFloat(Product.item.sale_price) * Product.qty;
            }
            else{
                rmProdPrice=parseFloat(Product.item.regular_price) * Product.qty;
            }
           var rmFullPrice=parseFloat(getters.FullPrice) - parseFloat(rmProdPrice);

        }

        commit('FullPrice',rmFullPrice)

    },


    increaseQtyS({state,commit,getters},ProdId){

        let Product;
        //filter Cart Arr 
        state.Cart.forEach(item =>{

            
            if(item.item.id === ProdId){
                var oldQty = item.qty
                var newQty =item.qty = parseInt(oldQty) + 1;
                Product=item.item;
                return {item :item.item ,qty : newQty}
            }
        })

        //Increase Full Price
        var FullPrice=getters.FullPrice;
        let IncreasedPrice;

        if(Product.type === 'simple'){

            if(Product.on_sale){

                //console.log(Product.sale_price)
                IncreasedPrice = parseFloat(Product.sale_price) + parseFloat(FullPrice);

            }   
            else{
            
                //Increse Full Price
                IncreasedPrice = parseFloat(Product.regular_price) + parseFloat(FullPrice);
                commit('FullPrice',IncreasedPrice)

            }


        }else{

            if(Product.on_sale){

                //increase Qty

                console.log(Product.regular_price)
            }


        }

        console.log(FullPrice)
        

        commit('Cart',state.Cart)

    },
    reduceQtyS({state,commit},product){

        var ProdId=product.id;
        var minQty=parseInt(product.min_qty);

        state.Cart.forEach(item =>{

            //Display erro if item qty < minQty
            if (item.item.id === ProdId && parseInt(item.qty) === minQty){

                console.log('unable To reqduce Qty minQty Error')
            }
            //reduce item qty by 1
            else if(item.item.id === ProdId && item.qty > 1 ){
                var oldQty = item.qty
                var newQty =item.qty = parseInt(oldQty) - 1;
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

    },
    AddToCartCookie({commit},cartArr){

        let newCart=[];
        cartArr.forEach((item)=>{
            newCart.push(item);
        })

        commit('Cart',newCart)
    },

    emptyCart({commit}){

      commit('Cart',[])
      commit('FullPrice',0)
      
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