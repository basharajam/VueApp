<template>
  <div class="">
      <div class="TitleList">
      <div class="float-left ShowMoreBtn" >
          <a href="#" class="pull-left">عرض المزيد</a>
      </div>
        <h3 class="text-right" >عروض خاصة</h3>
      </div>

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