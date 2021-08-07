<template>
  
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/product-category/%d8%a3%d8%b9%d9%8a%d8%a7%d8%af-%d9%85%d9%8a%d9%84%d8%a7%d8%af/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >توزيعات عيد ميلاد</h3>
      </div>

      <b-skeleton-wrapper :loading="ProdByTax2Loading">
      <template #loading>
        <ProdListLoader></ProdListLoader>
      </template>

      <div class="ProdList ">
            <div class="scrollmenu "  v-if="$mq === 'md' || $mq === 'lg'">
                <ProdCard v-for="Product in ProdByTax2" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
            </div>
            <div v-if="$mq === 'sm'" >
              <div class="container-fluid">
                <div class="row">
                    <ProdCard v-for="Product in filterArr" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem hideAddToCart"></ProdCard>                
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


// import ProdGridBox from '../items/ProdGridBox.vue';
import {mapGetters} from 'vuex';


export default {

        name:'ProdsByTax2',
        components:{
          ProdCard,
          ProdListLoader,
          
          
          // ProdGridBox
        },
        computed:{
            ...mapGetters(['ProdByTax2']),
            filterArr:function() {
              
              return this.ProdByTax2.slice(0,4)

            }
        },
        data(){

          return {
              ProdByTax2Loading:true
          }

        },
        watch:{
          ProdByTax2(newValue){
              if(newValue.length > 0){
                  this.ProdByTax2Loading=false;
              }
          },
      }

}
</script>

<style>


</style>