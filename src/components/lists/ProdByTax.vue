<template>
  <div class="container-fluid">
      <div class="TitleList">
        <h3 class="text-right" >العيد الوطني السعودي</h3>
      </div>

      <div class="ProdList">

        <div class="scrollmenu d-sm-block d-none">
            <ProdCard v-for="Product in ProdByTax" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </div>

        <div class="d-sm-none d-block">
            <div class="row">                
              <ProdGridBox v-for="Product in ProdByTax" v-bind:key="Product.id" v-bind:Product="Product" class="col-6"></ProdGridBox>                
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
    name:'prodsByTax',
    components:{
        ProdCard,
        ProdGridBox
    },
    computed:{
      ...mapGetters(['ProdByTax'])
    }

}
</script>

<style>

</style>