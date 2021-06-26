<template>
    <div class="container-fluid" >
      <div class="TitleList">
        <h3 class="text-right">نقترح لك </h3>
      </div>
       <div class="ProdList ">
        <div class="scrollmenu ">
            <ProdCard v-for="Product in ProdByTax5" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </div>
        <!-- <div class="row">          
              <ProdGridBox v-for="Product in ProdByTax4" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3"></ProdGridBox>                
        </div> -->
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProdCard from '../items/ProdCard.vue';
// import ProdGridBox from '../items/ProdGridBox.vue';

export default {

  name:'ProdsByTax5',
  components:{
    ProdCard,
    // ProdGridBox
  },
  computed:{
    ...mapGetters(['ProdByTax5'])
  }

}
</script>

<style>


</style>