<template>
    <div class="" >
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/product-category/%d9%85%d9%88%d8%a7%d9%84%d9%8a%d8%af/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right">زينة منوعة</h3>
      </div>
      <div class="ProdList ">
        <div class="scrollmenu  d-sm-block d-none">
            <ProdCard v-for="Product in ProdByTax1" v-bind:key="Product.id" v-bind:Product="Product" class="col-sm-3"></ProdCard>
        </div>
        <div class="container-fluid">
          <div class="row d-sm-none d-flex">
              <ProdCard v-for="Product in FilterArr" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem grid-discount hideAddToCart"></ProdCard>                
          </div>
        </div>    
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProdCard from '../items/ProdCard.vue';
// import ProdGridBox from '../items/ProdGridBox.vue';
export default {

  name:'ProdsByTax1',
  components:{
    ProdCard,
    // ProdGridBox
  },
  computed:{
    ...mapGetters(['ProdByTax1']),
    FilterArr:function () {
      return this.ProdByTax1.slice(0,4)
    }
  }

}
</script>

<style>


</style>