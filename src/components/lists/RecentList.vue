<template>
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/product-category/%d8%a7%d9%84%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >وصلنا حديثا</h3>
      </div>

      <div class="ProdList">

        <div class="scrollmenu">
            <ProdCard v-for="Product in RecentProd" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>

          </div>
      </div>
  </div>
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
import {mapGetters} from 'vuex';
export default {
    name:'RecentList',
    components:{
        ProdCard
    },
    computed:{
      ...mapGetters(['RecentProd'])
    }

}
</script>

<style>

</style>