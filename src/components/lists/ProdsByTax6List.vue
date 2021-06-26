<template>
  <div class="">
      <div class="TitleList" style="margin-bottom: 4px;">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D9%88%D8%B2%D9%8A%D8%B9%D8%A7%D8%AA-%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%83%D9%8A%D8%A9/?product-page=2" class="">عرض المزيد</a>
        </div>
        <h3 class="text-right" >توزيعات بلاستيك</h3>
      </div>

      <div class="ProdList ">
        <div class="scrollmenu d-sm-none d-none">
            <ProdCard v-for="Product in ProdByTax6" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </div>
        <div class="container">
          <div class="row">
              <ProdGridBox v-for="Product in ProdByTax6" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-3 GridItem"></ProdGridBox>                
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
    name:'prodsByTax6',
    components:{
        ProdCard,
        ProdGridBox
    },
    computed:{
      ...mapGetters(['ProdByTax6'])
    }

}
</script>

<style>

</style>