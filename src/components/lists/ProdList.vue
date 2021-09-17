<template>
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a :href="ProdList.link" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >{{ProdList.title}}</h3>
        <!-- <h3 class="text-right" >{{ $t('translation1') }}</h3> -->
      </div>

      <b-skeleton-wrapper :loading="ProdListLoading">
      <template #loading>
        <ProdListLoader></ProdListLoader>
      </template>
      <div class="ProdList ">
                <!-- Desktop Display -->
                <mq-layout :mq="['md','lg']" >
                  <div class="scrollmenu"  v-if="ProdList.Display ==='list' " >
                      <ProdCard v-for="Product in ProdList.items" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-2"></ProdCard>
                  </div>
                </mq-layout>


                <mq-layout :mq="['md','lg']" >
                  <Flickity ref="flickity" :options="flickityOptions" v-if="ProdList.Display ==='slider' && ProdList.items.length != 0 ">
                      <ProdCard  class="carousel-cell" v-for="Product in ProdList.items" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
                  </Flickity>
                </mq-layout>
              <!-- End Desktop Display -->


              <!-- Mobile Display -->
              <mq-layout :mq="['sm']" >
                <div  v-if=" ProdList.mobileDisplay ==='grid3'" :mq="['sm']" >
                  <div class="container-fluid">
                    <div class="row">
                        <ProdGridBox v-for="Product in ProdList.items" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-3 GridItem grid-discount"></ProdGridBox>                
                    </div>
                  </div>
                </div>
              </mq-layout>
              <mq-layout :mq="['sm']" >
                <div v-if=" ProdList.mobileDisplay ==='grid' && FilterArr.length > 0 " :mq="['sm']">
                    <div class="container-fluid">
                      <div class="row">
                          <ProdCard v-for="Product in FilterArr" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem hideAddToCart"></ProdCard>                
                      </div>
                    </div>
                  </div>
              </mq-layout>
              <mq-layout :mq="['sm']" >
                <div class="scrollmenu " v-if="ProdList.mobileDisplay ==='slider' " :mq="['sm']">
                  <ProdCard v-for="Product in ProdList.items" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
                </div>
              </mq-layout>
              <!-- End Mobile Display -->
      </div>
      </b-skeleton-wrapper>

  </div>
</template>

<script>

import Flickity from 'vue-flickity';
import ProdCard from '../items/ProdCard.vue';
import ProdListLoader from '../widgets/PordListLoader.vue';
import ProdGridBox from '../items/ProdGridBox.vue';
export default {
    name:'ProdList',
    props:['ProdList'],
    components:{
        ProdCard,
        ProdGridBox,
        ProdListLoader,
        Flickity,
        
    },
      data(){

  return {
        ProdListLoading:false,
        FilterArr:this.ProdList.items.slice(0,4),
        flickityOptions: {
          initialIndex: 3,
          pageDots: false,
          wrapAround: true,
          imagesLoaded: true,
  
          // any options from Flickity can be used
        },
     }

  },
  watch:{
    ProdList(newValue){
       
        if(newValue.items.length > 0){
            this.ProdListLoading=false;
        }
    },
  },
  mounted(){
  
  }

}
</script>

<style scoped>
.carousel-cell{
 padding-left: 0 !important;
 padding-right: 0 !important;
 margin:0 2px;
}

.flickity-viewport{
      height: 380px !important;
}

</style>