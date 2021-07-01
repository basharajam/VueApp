<template>
  <div class="">
      <div class="TitleList" style="margin-bottom: 4px;">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/product-tag/baby_box_group/" class="">عرض المزيد</a>
        </div>
        <h3 class="text-right" >توزيعات علب كرتون</h3>
      </div>

      <div class="ProdList ">
        <div class="scrollmenu d-sm-none d-none">
            <ProdCard v-for="Product in ProdByTax7" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </div>
        <div class="container-fluid">
          <div class="row">
              <ProdGridBox v-for="Product in ProdByTax7" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-3 GridItem grid-discount"></ProdGridBox>                
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
import ProdGridBox from '../items/ProdGridBox.vue';
import {mapGetters} from 'vuex';
export default {
    name:'prodsByTax7',
    components:{
        ProdCard,
        ProdGridBox
    },
    computed:{
      ...mapGetters(['ProdByTax7'])
    }

}
</script>

<style>

</style>