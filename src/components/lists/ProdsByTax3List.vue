<template>
    <div class="" >
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://www.alyaman.com/product-tag/ksa_badge_group/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right">{{ ProdByTax3.title }}</h3>
      </div>
      <b-skeleton-wrapper :loading="ProdByTax3Loading">
      <template #loading>
        <ProdListLoader></ProdListLoader>
      </template>
        <div class="ProdList ">
          <div class="scrollmenu "  v-if="$mq === 'md' || $mq === 'lg'">
              <ProdCard v-for="Product in ProdByTax3.items" v-bind:key="Product.id" v-bind:Product="Product" class="col-4 col-sm-2"></ProdCard>
          </div>
          <div v-if="$mq === 'sm'" >
            <div class="container-fluid">
              <div class="row ">
                  <ProdCard v-for="Product in ProdByTax3.items" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 GridItem"></ProdCard>                
              </div>
            </div>
          </div>
        </div>


       <!-- <div class="ProdList">
        <Flickity v-if="ProdByTax3.length != 0" class="offersListScroll d-none d-sm-block" ref="flickity" :options="flickityOptions">
            <ProdCard  class="carousel-cell" v-for="Product in ProdByTax3" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </Flickity>
        <div class="container-fluid">
          <div class="row d-sm-none">
              <ProdCard v-for="Product in FilterArr" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem hide hideAddToCart"></ProdCard>                
          </div>
        </div>
      </div> -->

      </b-skeleton-wrapper>


  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import Flickity from 'vue-flickity';
// import ProdGridBox from '../items/ProdGridBox.vue';
import ProdCard from '../items/ProdCard.vue';
import ProdListLoader from '../widgets/PordListLoader.vue';

export default {

  name:'ProdsByTax3',
  components:{
    ProdCard,
    // ProdGridBox,
    // Flickity,
    ProdListLoader
  },
  computed:{
    ...mapGetters(['ProdByTax3']),
    FilterArr:function () {
          return this.ProdByTax3.items.slice(0,4)
    }
  },
  data(){

        return {
        flickityOptions: {
          initialIndex: 3,
          pageDots: false,
          wrapAround: true,
          imagesLoaded: true,          
          // any options from Flickity can be used
        },
        ProdByTax3Loading:true
      }
    },
    watch:{
          ProdByTax3(newValue){
              if(newValue.items.length > 0){
                  this.ProdByTax3Loading=false;
              }
          },
      }

}
</script>

<style scoped>
.carousel-cell{

 padding-left: 0 !important;
 padding-right: 0 !important;
 margin:0 2px;

}

</style>