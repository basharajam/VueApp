<template>
    <div class="container-fluid" >
      <div class="TitleList">
        <h3 class="text-right">زينة أطفال</h3>
      </div>
      <div class="ProdList container">
        <div class="scrollmenu d-sm-none d-none">
            <ProdCard v-for="Product in ProdByTax1" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </div>
        <div class="row">          
              <ProdGridBox v-for="Product in ProdByTax1" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3"></ProdGridBox>                
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