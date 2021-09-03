<template>
    <div class="" >
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a :href="ProdByTax1.link" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right">{{ ProdByTax1.title }}</h3>
      </div>

      <b-skeleton-wrapper :loading="ProdByTax1Loading">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>

        <div class="ProdList ">
              <div class="scrollmenu"  v-if="$mq === 'md' || $mq === 'lg'" >
                  <ProdCard v-for="Product in ProdByTax1.items" v-bind:key="Product.id" v-bind:Product="Product" class="col-sm-3"></ProdCard>
              </div>
              <div  v-if="$mq === 'sm' && FilterArr.length > 0 " >
                <div class="container-fluid">
                  <div class="row d-flex">
                      <ProdCard v-for="Product in FilterArr " v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem grid-discount hideAddToCart"></ProdCard>                
                  </div>
                </div>    
              </div>

        </div>
      </b-skeleton-wrapper>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProdCard from '../../items/ProdCard.vue';
import ProdListLoader from '../../widgets/PordListLoader.vue';

// import ProdGridBox from '../items/ProdGridBox.vue';
export default {

  name:'ProdsByTax1',
  components:{
    ProdCard,
    ProdListLoader,
    
    // ProdGridBox
  },
  computed:{
    ...mapGetters(['ProdByTax1']),

  },
  data(){

  return {
      ProdByTax1Loading:true,
      FilterArr:[]
  }

},
watch:{
  ProdByTax1(newValue){
      if(newValue.items.length > 0){
          this.ProdByTax1Loading=false;
          this.FilterArr=this.ProdByTax1.items.slice(0,4)
      }
  },
}
  

}
</script>

<style>


</style>