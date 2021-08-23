<template>
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a :href="ProdByTax0.link" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >{{ProdByTax0.title}}</h3>
        <!-- <h3 class="text-right" >{{ $t('translation1') }}</h3> -->
      </div>

      <b-skeleton-wrapper :loading="ProdByTax0Loading">
      <template #loading>
        <ProdListLoader></ProdListLoader>
      </template>
      <div class="ProdList ">
              <div class="scrollmenu"  v-if="$mq === 'md' || $mq === 'lg'">
                  <ProdCard v-for="Product in ProdByTax0.items" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-2"></ProdCard>
              </div>
              <div  v-if="$mq === 'sm'" >
                <div class="container-fluid">
                  <div class="row">
                      <ProdGridBox v-for="Product in ProdByTax0.items" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-3 GridItem grid-discount"></ProdGridBox>                
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
        
        if(newValue.items.length > 0){
          
            this.ProdByTax0Loading=false;
        }
    },
  }

}
</script>

<style>

</style>