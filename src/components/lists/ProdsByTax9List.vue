<template>
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://www.alyaman.com/product-tag/ksa_decoration_group/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >مزهريات</h3>
      </div>

      <b-skeleton-wrapper :loading="ProdByTax9Loading">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>
        <div class="ProdList">

          <div class="scrollmenu "  v-if="$mq === 'md' || $mq === 'lg'">
              <ProdCard v-for="Product in ProdByTax9" v-bind:key="Product.id" v-bind:Product="Product" class=" "></ProdCard>
          </div>

          <div v-if="$mq === 'sm'">
          <div class="container-fluid">
            <div class="row">
                <ProdCard v-for="Product in FilterArr" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem hideAddToCart"></ProdCard>                
            </div>
          </div>
          </div>
        </div>

      </b-skeleton-wrapper>

  </div>
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
// import ProdGridBox from '../items/ProdGridBox.vue';
import ProdListLoader from '../widgets/PordListLoader.vue';
import {mapGetters} from 'vuex';
export default {
    name:'prodsByTax',
    components:{
        ProdCard,
        ProdListLoader
        // ProdGridBox
    },
    computed:{
      ...mapGetters(['ProdByTax9']),
      FilterArr:function () {
          return this.ProdByTax9.slice(0,4)
      }

    },
    data(){

      return {
        ProdByTax9Loading:true
      }

    },
    watch:{
      ProdByTax9(newValue){
          if(newValue.length > 0){
              this.ProdByTax9Loading=false;
          }
      },
    }

}
</script>

<style>

</style>