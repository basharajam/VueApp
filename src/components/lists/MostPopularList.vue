<template>
  
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/%d8%b1%d8%a7%d8%a6%d8%ac%d8%a9/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >الاكثر رواجا</h3>
      </div>

      <div class="ProdList">

        <div class="scrollmenu">
            <ProdCard v-for="Product in ProdMostPopular" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>

            
          </div>
      </div>
  
  
  </div>
  
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
import {mapGetters} from 'vuex';

export default {

  components:{
    ProdCard
  },
  computed:{
      ...mapGetters(['ProdMostPopular'])
  }

}
</script>

<style>




</style>