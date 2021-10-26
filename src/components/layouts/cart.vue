<template>
  
  <div :class="{displayC: displaCart} " >
    <div class="CartOverlay">

    </div>
    <div class="Cart">
        <button @click="hideCart()" >X</button>
        <h3 class="text-center">السلة</h3>
        <div class="overflow-auto cartBody" >
            <div v-for="(item, index) in Cart" v-bind:key="index" class='CartItem d-flex' >
                <img :src="item.item.images[0].src" width="100" height="100"/>
                <div class="flex-grow-1">
                    <div class="CartItemHeading d-flex justify-content-between">
                        <p>{{ item.item.name }}</p>
                        <button @click="RemoveItem(item.item.id)" class="align-self-start" >X</button>
                    </div>
                    <div class="CartItemBody d-flex justify-content-between">
                        <div class="" v-if="item.item.on_sale" ></div>
                        <p>{{ item.item.regular_price * item.qty }}</p>
                        <div class="d-flex align-self-start qtyCounter">
                            <button class="align-self-start" @click="increaseQty(item.item.id)">+</button>
                            <span>{{ item.qty }}</span>
                            <button class="align-self-start" @click="reduceQty(item.item.id)" >-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed-bottom position-relative d-flex flex-column">
            <p class="text-center">الأجمالي :{{ Cart.length }} منتجات  - {{ FullPrice }}</p>
            <router-link :to="{ name:'Checkout' }" class="CheckoutBtn mx-2 text-center">
                إتمام الطلب
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>

import {mapActions,mapGetters} from 'vuex';
export default {

    data(){
        return {
            displaCart:false
        }
    },
    mounted(){
     this.$root.$on('DisplayCart', () => {

     this.displaCart = ! this.displaCart;
    })
    },
    computed:{
        ...mapGetters(['Cart','FullPrice'])
    },
    methods:{
        hideCart:function(){
            this.displaCart=false
        },
        RemoveItem:function(id){

         
            this.RemoveFromCart(id)
          
        },
        increaseQty:function(id){
            this.increaseQtyS(id)
        },
        reduceQty:function(id){
            this.reduceQtyS(id)
        },
        ...mapActions(['RemoveFromCart','increaseQtyS','reduceQtyS'])
    }

}
</script>

<style scoped>


.Cart{
    background: #ffffff;
    z-index: 997;
    position: fixed;
    left: -36%;
    width: 36%;
    height: 100%;
}

.Cart h3 {
    margin-top: 8px;
}

.CartOverlay{
    width: 80%;
    height: 100%;
    background: #00000034;
    position: fixed;
    z-index: 997;
    display: none;
}

.displayC .CartOverlay{
    display:block !important;
    backdrop-filter: blur(0.8px);
}

.displayC .Cart{
left:0 !important

}

.CartItem{
border-bottom: 1px rgba(0, 0, 0, 0.096) solid;
padding: 6px;
margin: 0 6px;

}
.CartItemHeading , .CartItemBody{
    text-align: right;
    padding: 6px;
}

.CartItemHeading p {
    font-weight: bold;
}

.CartItemBody p {
    font-size: 12px;
    font-weight: bold;
    margin: auto 6px;
    color: #fa650f;
}

.qtyCounter{
    border: 1px rgba(0, 0, 0, 0.336) solid;
    border-radius: 6px;
}
.qtyCounter button {
    background: none;
    border: none;
    padding: 6px;
}

.qtyCounter span{
    padding: 6px;
    margin: auto;
}

.CheckoutBtn{
    background: #fa650f;
    border: 1px #fa650f solid;
    border-radius: 6px;
    padding: 6px;
    color: white;
}

.cartBody{
    height: 70%;
}

</style>