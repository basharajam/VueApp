<template>
    <div class="" >
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://www.alyaman.com/product-tag/ksa_badge_group/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right">بروش اليوم الوطني السعودي</h3>
      </div>
       <div class="ProdList">
        <Flickity v-if="ProdByTax3.length != 0" class="offersListScroll d-none d-sm-block" ref="flickity" :options="flickityOptions">
            <ProdCard  class="carousel-cell" v-for="Product in ProdByTax3" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </Flickity>
        <div class="container-fluid">
          <div class="row d-sm-none">
              <ProdCard v-for="Product in FilterArr" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem hide hideAddToCart"></ProdCard>                
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

  name:'ProdsByTax3',
  components:{
    ProdCard,
    // ProdGridBox,
    Flickity
  },
  computed:{
    ...mapGetters(['ProdByTax3']),
    FilterArr:function () {
          return this.ProdByTax3.slice(0,4)
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
        }
      }
    }

}
</script>

<style scoped>
.carousel-cell{

 padding-left: 0 !important;
 padding-right: 0 !important;
 margin:0 8px;

}

</style>