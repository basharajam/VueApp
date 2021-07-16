<template>
    <div class="" >
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://www.alyaman.com/product-category/%d8%a3%d8%b9%d8%b1%d8%a7%d8%b3/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right">اعراس </h3>
      </div>
      <div class="ProdList container-fluid">

       <div class="ProdList">
        <Flickity  v-if="ProdByTax5.length != 0"  class="offersListScroll d-none d-sm-block" ref="flickity" :options="flickityOptions">
            <ProdCard  class="carousel-cell" v-for="Product in ProdByTax5" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </Flickity>
        <div class="scrollmenu d-sm-none">
            <ProdCard v-for="Product in ProdByTax5" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
          </div>
      </div>
        
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Flickity from 'vue-flickity';
import ProdCard from '../items/ProdCard.vue';
// import ProdGridBox from '../items/ProdGridBox.vue';

export default {

  name:'ProdsByTax5',
  components:{
    ProdCard,
    Flickity
    // ProdGridBox
  },
  computed:{
    ...mapGetters(['ProdByTax5'])
  },
  data(){

      return {
        flickityOptions: {
          initialIndex: 3,
          pageDots: false,
          wrapAround: true,
          imagesLoaded: true,
  
          // any options from Flickity can be used
        }
      }
  }

}
</script>

<style>


</style>