<template>
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://www.alyaman.com/product-tag/ksa_decoration_group/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >زينة اليوم الوطني السعودي</h3>
      </div>

      <div class="ProdList">

        <div class="scrollmenu d-sm-block d-none">
            <ProdCard v-for="Product in ProdByTax8" v-bind:key="Product.id" v-bind:Product="Product" class=" "></ProdCard>
        </div>

        <div class="d-sm-none d-block">
        <div class="container-fluid">
          <div class="row">
              <ProdCard v-for="Product in FilterArr" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem hideAddToCart"></ProdCard>                
          </div>
        </div>
        </div>
      </div>
  </div>
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
// import ProdGridBox from '../items/ProdGridBox.vue';
import {mapGetters} from 'vuex';
export default {
    name:'prodsByTax',
    components:{
        ProdCard,
        // ProdGridBox
    },
    computed:{
      ...mapGetters(['ProdByTax8']),
      FilterArr:function () {
          return this.ProdByTax8.slice(0,4)
      }

    }

}
</script>

<style>

</style>