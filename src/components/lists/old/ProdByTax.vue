<template>
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a :href="ProdByTax.link" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >{{ ProdByTax.title }}</h3>
      </div>

      <b-skeleton-wrapper :loading="ProdByTaxLoading">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>
        <div class="ProdList">
              <div class="scrollmenu"  v-if="$mq === 'md' || $mq === 'lg'" >
                  <ProdCard v-for="Product in ProdByTax.items" v-bind:key="Product.id" v-bind:Product="Product" class=" "></ProdCard>
              </div>
              <div   v-if="$mq === 'sm' && FilterArr.length > 0 " >
                <div class="container-fluid">
                  <div class="row">
                    <ProdCard  v-for="Product in FilterArr" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem hideAddToCart"></ProdCard>                
                  </div>
              </div>
          </div>
            


        </div>
      </b-skeleton-wrapper>

  </div>
</template>

<script>

import ProdCard from '../../items/ProdCard.vue';
import ProdListLoader from '../../widgets/PordListLoader.vue';
// import ProdGridBox from '../items/ProdGridBox.vue';
import {mapGetters} from 'vuex';
export default {
    components:{
        ProdCard,
        ProdListLoader,
        
        // ProdGridBox
    },
    computed:{
      ...mapGetters(['ProdByTax']),
      
    },
    data(){

      return {
        ProdByTaxLoading:true,
        FilterArr:[]
      }

    },
    watch:{
      ProdByTax(newValue){
          if(newValue.items.length > 0){
              this.ProdByTaxLoading=false;
              this.FilterArr=this.ProdByTax.items.slice(0,4);
          }
          
         
      },
    }

}
</script>

<style>

</style>