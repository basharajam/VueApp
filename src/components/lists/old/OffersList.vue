<template>
  <div class="">

      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
            <a :href="ProdOffers.link" class="pull-left">عرض المزيد</a>
        </div>
          <h3 class="text-right" >{{ProdOffers.title}}</h3>
      </div>
      <b-skeleton-wrapper :loading="OffersListLoading">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>
        <div class="ProdList container-fluid">

          
          <Flickity v-if="ProdOffers.length != 0" class="offersListScroll d-sm-block d-none " ref="flickity" :options="flickityOptions">
              <ProdCard  class="carousel-cell" v-for="Product in ProdOffers.items" v-bind:key="Product.id" v-bind:Product="Product" ></ProdCard>
          </Flickity>
          <div class="scrollmenu d-sm-none d-block">
              <ProdCard v-for="Product in ProdOffers.items" v-bind:key="Product.id" v-bind:Product="Product" class="col-sm-3"></ProdCard>
          </div>
          
        </div>
      </b-skeleton-wrapper>

  </div>
</template>

<script>

import ProdCard from '../../items/ProdCard.vue';
import ProdListLoader from '../../widgets/PordListLoader.vue';
import {mapGetters} from 'vuex';
import Flickity from 'vue-flickity';
export default {
    name:'OffersList',
    components:{
        ProdCard,
        Flickity,
        ProdListLoader
    },
    data(){

        return {
        flickityOptions: {
          initialIndex: 3,
          pageDots: false,
          wrapAround: true
          
          // any options from Flickity can be used
        },
        OffersListLoading:true
      }
    },
    mounted(){
    },

    computed:{
      ...mapGetters(['ProdOffers'])
    },
    watch:{
      ProdOffers(newValue){
          if(newValue.items.length > 0){
              this.OffersListLoading=false;
          }
      },
    },

}
</script>

<style scoped>

.carousel-cell{

 padding-left: 0 !important;
 padding-right: 0 !important;
 margin:0 2px;

}

</style>