<template>
  
  <div class="container-fluid">
      <div class="TitleList">
        <h3 class="text-right" >توزيعات عيد ميلاد</h3>
      </div>

      <div class="ProdList container">
        <div class="scrollmenu d-sm-none d-none">
            <ProdCard v-for="Product in ProdByTax2" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </div>
        <div class="row">          
              <ProdGridBox v-for="Product in ProdByTax2" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3"></ProdGridBox>                
        </div>
      </div>
  
  
  </div>
  
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
import ProdGridBox from '../items/ProdGridBox.vue';
import {mapGetters} from 'vuex';


export default {

  name:'ProdsByTax2',
  components:{
    ProdCard,
    ProdGridBox
  },
  computed:{
      ...mapGetters(['ProdByTax2'])
  }

}
</script>

<style>



/* .ProdList .row{

 
  overflow-x: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  

/* } */ 


</style>