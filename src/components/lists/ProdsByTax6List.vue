<template>
  <div class="container-fluid">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="#" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >توزيعات بلاستيك</h3>
      </div>

      <div class="ProdList ">
        <div class="scrollmenu d-sm-none d-none">
            <ProdCard v-for="Product in ProdByTax6" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </div>
        <div class="row ">          
              <ProdGridBox v-for="Product in ProdByTax6" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-3 GridItem"></ProdGridBox>                
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