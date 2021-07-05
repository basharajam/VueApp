<template>
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/product-category/%d8%a7%d9%84%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >العيد الوطني السعودي</h3>
      </div>

      <div class="ProdList">

        <div class="scrollmenu d-sm-block d-none">
            <ProdCard v-for="Product in ProdByTax" v-bind:key="Product.id" v-bind:Product="Product" class=" "></ProdCard>
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
      ...mapGetters(['ProdByTax']),
      FilterArr:function () {
          return this.ProdByTax.slice(0,4)
      }

    }

}
</script>

<style>

</style>