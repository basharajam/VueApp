<template>
  <div class="">


      <div class="ProdList">

        <div class="scrollmenu">
            <ProdCard v-for="Product in ProdOffers" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>

          </div>
      </div>
  </div>
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
import {mapGetters} from 'vuex';
export default {
    name:'OffersList',
    components:{
        ProdCard
    },
    computed:{
      ...mapGetters(['ProdOffers'])
    }

}
</script>

<style>

</style>