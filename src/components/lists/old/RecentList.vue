<template>
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a :href="RecentProd.link" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >{{ RecentProd.title }}</h3>
      </div>

      <b-skeleton-wrapper :loading="RecentListLoading">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>
          <div class="ProdList">

            <div class="scrollmenu">
                <ProdCard v-for="Product in RecentProd.items" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>

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
    name:'RecentList',
    components:{
        ProdCard,
        ProdListLoader
    },
    computed:{
      ...mapGetters(['RecentProd'])
    },
    data(){

      return {
        RecentListLoading:true
      }

    },
    watch:{
      RecentProd(newValue){
          if(newValue.items.length > 0){
              this.RecentListLoading=false;
          }
      },
    }

}
</script>

<style>

</style>