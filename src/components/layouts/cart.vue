<template>
  
  <div :class="{displayC: displaCart} " >
    <div class="CartOverlay">

    </div>
    <div class="Cart">
        <button @click="hideCart()" >X</button>
        <h3 class="text-center">السلة</h3>
        <div v-for="(item, index) in Cart" v-bind:key="index" >
            <h3>{{ item.item.name }}</h3>
            <button @click="RemoveItem(item.item.id)" >X</button>
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
     this.$root.$on('DisplayCart', (value) => {
     console.log(value)
     this.displaCart = ! this.displaCart;
    })
    },
    computed:{
        ...mapGetters(['Cart'])
    },
    methods:{
        hideCart:function(){
            this.displaCart=false
        },
        RemoveItem:function(id){

            console.log('Clicked')
            this.RemoveFromCart(id)
            console.log('Removed')
        },
        ...mapActions(['RemoveFromCart'])
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
    background: #00000059;
    position: fixed;
    z-index: 997;
    display: none;
}

.displayC .CartOverlay{
    display:block !important;
    backdrop-filter: blur(2px);
}

.displayC .Cart{
left:0 !important

}


</style>