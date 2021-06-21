<template>
  
  <div>
      <div class="TitleList">
        <h3 class="text-center" >تغريسات العيد الوطني السعودي</h3>
      </div>

      <div class="ProdList">

        <div class="scrollmenu">
            <ProdCard v-for="Product in ProdDecIns" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
          </div>
      </div>
  
  
  </div>



  
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
import {mapGetters} from 'vuex';


export default {

  name:'ProdsByTax2',
  components:{
    ProdCard
  },
  computed:{
      ...mapGetters(['ProdDecIns'])
  }

}
</script>

<style>



/* .ProdList .row{

 
  overflow-x: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  

/* } */ 


</style>