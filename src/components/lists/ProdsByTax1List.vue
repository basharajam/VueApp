<template>
    <div class="" >
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/product-category/%d9%85%d9%88%d8%a7%d9%84%d9%8a%d8%af/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right">زينة منوعة</h3>
      </div>
      <div class="ProdList ">
        <div class="scrollmenu d-sm-none d-none">
            <ProdCard v-for="Product in ProdByTax1" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </div>
        <div class="container-fluid">
          <div class="row">
              <ProdGridBox v-for="Product in ProdByTax1" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem grid-discount"></ProdGridBox>                
          </div>
        </div>    
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProdCard from '../items/ProdCard.vue';
import ProdGridBox from '../items/ProdGridBox.vue';
export default {

  name:'ProdsByTax1',
  components:{
    ProdCard,
    ProdGridBox
  },
  computed:{
    ...mapGetters(['ProdByTax1'])
  }

}
</script>

<style>


</style>