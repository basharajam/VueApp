<template>
  <div class="">

      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
            <a href="https://alyaman.com/%d8%b9%d8%b1%d9%88%d8%b6/" class="pull-left">عرض المزيد</a>
        </div>
          <h3 class="text-right" >عروض خاصة</h3>
      </div>

      <div class="ProdList container-fluid">

        <Flickity v-if="ProdOffers.length != 0" class="offersListScroll d-none d-sm-block" ref="flickity" :options="flickityOptions">
            <ProdCard  class="carousel-cell" v-for="Product in ProdOffers" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
        </Flickity>
        
      </div>
  </div>
</template>

<script>

import ProdCard from '../items/ProdCard.vue';
import {mapGetters} from 'vuex';
import Flickity from 'vue-flickity';
export default {
    name:'OffersList',
    components:{
        ProdCard,
        Flickity
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
    },
    mounted(){


        //Activate Flicktly
        setTimeout(() => {
          this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            this.$refs.flickity.rerender()
          })
          console.log('offers slider done')
        }, 50000);
    },

    computed:{
      ...mapGetters(['ProdOffers'])
    }

}
</script>

<style>

</style>