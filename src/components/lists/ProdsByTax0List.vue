<template>
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/%d9%85%d8%ac%d9%85%d9%88%d8%b9%d8%a9-%d8%aa%d9%88%d8%b2%d9%8a%d8%b9%d8%a7%d8%aa-%d8%b2%d8%ac%d8%a7%d8%ac%d9%8a%d8%a9-%d8%a3%d8%b9%d8%b1%d8%a7%d8%b3/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >توزيعات زجاجية</h3>
      </div>

      <div class="ProdList ">
        <div class="scrollmenu d-sm-block d-none">
            <ProdCard v-for="Product in ProdByTax0" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-2"></ProdCard>
        </div>
        <div class="container-fluid">
          <div class="row d-sm-none">
              <ProdGridBox v-for="Product in ProdByTax0" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-3 GridItem grid-discount"></ProdGridBox>                
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