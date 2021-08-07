<template>
  <div class="">
      <div class="TitleList" style="margin-bottom: 4px;">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/product-tag/baby_box_group/" class="">عرض المزيد</a>
        </div>
        <h3 class="text-right" >توزيعات علب كرتون</h3>
      </div>
      <b-skeleton-wrapper :loading="ProdByTax7Loading">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>
        <div class="ProdList ">
          <div class="scrollmenu "  v-if="$mq === 'md' || $mq === 'lg'">
              <ProdCard v-for="Product in ProdByTax7" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-2"></ProdCard>
          </div>
          <div class="container-fluid" v-if="$mq === 'sm'">
            <div class="row ">
                <ProdGridBox v-for="Product in ProdByTax7" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-3 GridItem grid-discount"></ProdGridBox>                
            </div>
          </div>
        </div>

      </b-skeleton-wrapper>

  </div>
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
import ProdGridBox from '../items/ProdGridBox.vue';
import ProdListLoader from '../widgets/PordListLoader.vue';
import {mapGetters} from 'vuex';
export default {
    name:'prodsByTax7',
    components:{
        ProdCard,
        ProdGridBox,
        ProdListLoader
    },
    computed:{
      ...mapGetters(['ProdByTax7'])
    },
        data(){

      return {
        ProdByTax7Loading:true
      }

    },
    watch:{
      ProdByTax7(newValue){
          if(newValue.length > 0){
              this.ProdByTax7Loading=false;
          }
      },
    }

}
</script>

<style>

</style>