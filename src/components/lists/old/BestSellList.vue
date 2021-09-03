<template>
  
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="#" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >الاكثر مبيعا</h3>
      </div>
      <b-skeleton-wrapper :loading="BestSellList">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>
          <div class="ProdList">

        <div class="scrollmenu">
            <ProdCard v-for="Product in ProdBestSell" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>

            
          </div>
        </div>

      </b-skeleton-wrapper>


  
  
  </div>
  
</template>

<script>

import ProdCard from '../../items/ProdCard.vue';
import ProdListLoader from '../../widgets/PordListLoader.vue';
import {mapGetters} from 'vuex';

export default {

  components:{
    ProdCard,
    ProdListLoader
  },
  computed:{
      ...mapGetters(['ProdBestSell'])
  },
  data(){

      return {
        BestSellList:true
      }

    },
    watch:{
      ProdBestSell(newValue){
          if(newValue.length > 0){
              this.BestSellList=false;
          }
      },
    }

}
</script>

<style>




</style>