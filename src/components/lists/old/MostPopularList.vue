<template>
  
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          
          <a :href="ProdMostPopular.link" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >{{ ProdMostPopular.title }}</h3>
      </div>
    <b-skeleton-wrapper :loading="MostPopLoading">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>
      <div class="ProdList">
        <div class="scrollmenu">
            <ProdCard v-for="Product in ProdMostPopular.items" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
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
      ...mapGetters(['ProdMostPopular'])
  },
    data(){

    return {
      MostPopLoading:true
    }

  },
  watch:{
    ProdMostPopular(newValue){
        if(newValue.items.length > 0){
            this.MostPopLoading=false;
        }
    },
  }

}
</script>

<style>




</style>