<template>
  <div class="">
      <div class="TitleList" style="margin-bottom: 4px;">
        <div class="float-left ShowMoreBtn" >
          <a :href="ProdByTax6.link" class="">عرض المزيد</a>
        </div>
        <h3 class="text-right" >{{ ProdByTax6.title }}</h3>
      </div>
      <b-skeleton-wrapper :loading="ProdByTax6Loading">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>
        <div class="ProdList ">
          <div class="scrollmenu "  v-if="$mq === 'md' || $mq === 'lg'">
              <ProdCard v-for="Product in ProdByTax6.items" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-2"></ProdCard>
          </div>
          <div class="container-fluid" v-if="$mq === 'sm'">
            <div class="row">
                <ProdGridBox v-for="Product in ProdByTax6.items" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-3 GridItem"></ProdGridBox>                
            </div>
          </div>
        </div>

      </b-skeleton-wrapper>

  </div>
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
import ProdListLoader from '../widgets/PordListLoader.vue';
import ProdGridBox from '../items/ProdGridBox.vue';
import {mapGetters} from 'vuex';
export default {
    name:'prodsByTax6',
    components:{
        ProdCard,
        ProdGridBox,
        ProdListLoader
    },
    computed:{
      ...mapGetters(['ProdByTax6'])
    },
    data(){

      return {
        ProdByTax6Loading:true
      }

    },
    watch:{
      ProdByTax6(newValue){
          if(newValue.items.length > 0){
              this.ProdByTax6Loading=false;
          }
  },
}

}
</script>

<style>

</style>