<template>
    <div class="" >
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a :href="ProdByTax5.link" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right">{{ ProdByTax5.title }} </h3>
      </div>

      <b-skeleton-wrapper :loading="ProdByTax5Loading">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>
        <div class="ProdList container-fluid">
        <div class="ProdList">


              <Flickity  v-if="$mq === 'md' || $mq === 'lg' && ProdByTax5.items.length != 0"  class="offersListScroll d-none d-sm-block" ref="flickity" :options="flickityOptions">
                  <ProdCard  class="carousel-cell" v-for="Product in ProdByTax5.items" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
              </Flickity>
              <div class="scrollmenu " v-if="$mq === 'sm'">
                  <ProdCard v-for="Product in ProdByTax5.items" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
              </div>

        </div>
          
        </div>

      </b-skeleton-wrapper>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Flickity from 'vue-flickity';
import ProdCard from '../../items/ProdCard.vue';
import ProdListLoader from '../../widgets/PordListLoader.vue';
// import ProdGridBox from '../items/ProdGridBox.vue';

export default {

  name:'ProdsByTax5',
  components:{
    ProdCard,
    Flickity,
    ProdListLoader,
    
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
        },
        ProdByTax5Loading:true

      }
  },
  watch:{
      ProdByTax5(newValue){
          if(newValue.items.length > 0){
              this.ProdByTax5Loading=false;
          }
      },
    }

}
</script>

<style scoped>
.carousel-cell{
  padding-left: 2px !important;
  padding-right: 2px !important;
}

</style>