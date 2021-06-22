<template>
  <div class="">
      <div class="TitleList">
        <h3 class="text-right" >أحبال زينة العيد الوطني</h3>
      </div>

      <div class="ProdList">

        <div class="scrollmenu">
            <ProdCard v-for="Product in ProdDecRope" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>

          </div>
      </div>
  </div>
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
import {mapGetters} from 'vuex';
export default {
    name:'prodsByTax0',
    components:{
        ProdCard
    },
    computed:{
      ...mapGetters(['ProdDecRope'])
    }

}
</script>

<style>

</style>