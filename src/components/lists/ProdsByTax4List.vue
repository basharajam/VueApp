<template>
    <div class="" >
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/product-tag/ksa_topper_group/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right">تغريسات العيد الوطني السعودي</h3>
      </div>
       <div class="ProdList ">
        <div class="scrollmenu d-sm-none d-none">
            <ProdCard v-for="Product in ProdByTax4" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </div>
        <div class="container">
          <div class="row">
              <ProdGridBox v-for="Product in ProdByTax4" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem"></ProdGridBox>                
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

  name:'ProdsByTax3',
  components:{
    ProdCard,
    ProdGridBox
  },
  computed:{
    ...mapGetters(['ProdByTax4'])
  }

}
</script>

<style>


</style>