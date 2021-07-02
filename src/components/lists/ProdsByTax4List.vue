<template>
    <div class="" >
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/product-tag/ksa_topper_group/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right">تغريسات العيد الوطني السعودي</h3>
      </div>
       <div class="ProdList container-fluid">
        <Flickity  v-if="ProdByTax4.length != 0"  class="offersListScroll d-none d-sm-block" ref="flickity" :options="flickityOptions">
            <ProdCard  class="carousel-cell" v-for="Product in ProdByTax4" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </Flickity>
        <div class="container-fluid">
          <div class="row d-sm-none">
              <ProdGridBox v-for="Product in FilterArr" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem"></ProdGridBox>                
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Flickity from 'vue-flickity';
import ProdCard from '../items/ProdCard.vue';
import ProdGridBox from '../items/ProdGridBox.vue';

export default {

  name:'ProdsByTax3',
  components:{
    ProdCard,
    ProdGridBox,
    Flickity
  },
  computed:{
    ...mapGetters(['ProdByTax4']),
    FilterArr:function () {
          return this.ProdByTax4.slice(0,4)
    }
  },
    data(){

        return {
        flickityOptions: {
          initialIndex: 3,
          pageDots: false,
          wrapAround: true
          
          // any options from Flickity can be used
        }
      }
    }


}
</script>

<style>


</style>