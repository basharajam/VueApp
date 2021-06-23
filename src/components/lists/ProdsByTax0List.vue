<template>
  <div class="">
      <div class="TitleList">
        <h3 class="text-right" >توزيعات زجاجية</h3>
      </div>

      <div class="ProdList">
        <div class="scrollmenu d-sm-none d-none">
            <ProdCard v-for="Product in ProdByTax0" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </div>
        <div class="row">          
              <ProdGridBox v-for="Product in ProdByTax0" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3"></ProdGridBox>                
        </div>
      </div>
  </div>
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
import ProdGridBox from '../items/ProdGridBox.vue';
import {mapGetters} from 'vuex';
export default {
    name:'prodsByTax0',
    components:{
        ProdCard,
        ProdGridBox
    },
    computed:{
      ...mapGetters(['ProdByTax0'])
    }

}
</script>

<style>

</style>