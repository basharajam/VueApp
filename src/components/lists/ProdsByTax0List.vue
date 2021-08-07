<template>
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/%d9%85%d8%ac%d9%85%d9%88%d8%b9%d8%a9-%d8%aa%d9%88%d8%b2%d9%8a%d8%b9%d8%a7%d8%aa-%d8%b2%d8%ac%d8%a7%d8%ac%d9%8a%d8%a9-%d8%a3%d8%b9%d8%b1%d8%a7%d8%b3/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >توزيعات زجاجية</h3>
        <!-- <h3 class="text-right" >{{ $t('translation1') }}</h3> -->
      </div>

      <b-skeleton-wrapper :loading="ProdByTax0Loading">
      <template #loading>
        <ProdListLoader></ProdListLoader>
      </template>
      <div class="ProdList ">
              <div class="scrollmenu"  v-if="$mq === 'md' || $mq === 'lg'">
                  <ProdCard v-for="Product in ProdByTax0" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-2"></ProdCard>
              </div>
              <div  v-if="$mq === 'sm'" >
                <div class="container-fluid">
                  <div class="row">
                      <ProdGridBox v-for="Product in ProdByTax0" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-3 GridItem grid-discount"></ProdGridBox>                
                  </div>
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
    name:'prodsByTax0',
    components:{
        ProdCard,
        ProdGridBox,
        ProdListLoader,
        
    },
    computed:{
      ...mapGetters(['ProdByTax0'])
    },
      data(){

  return {
      ProdByTax0Loading:true
    }

  },
  watch:{
    ProdByTax0(newValue){
        if(newValue.length > 0){
            this.ProdByTax0Loading=false;
        }
    },
  }

}
</script>

<style>

</style>