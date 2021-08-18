<template>
    <div class="" >
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/product-tag/ksa_topper_group/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right">{{ ProdByTax4.title }}</h3>
      </div>

      <b-skeleton-wrapper :loading="ProdByTax4Loading">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>
         <div class="ProdList">

                <Flickity class="offersListScroll" ref="flickity" :options="flickityOptions" v-if="$mq === 'md' || $mq === 'lg' && ProdByTax4.items.length != 0">
                    <ProdCard  class="carousel-cell" v-for="Product in ProdByTax4.items" v-bind:key="Product.id" v-bind:Product="Product"></ProdCard>
                </Flickity>
                <div v-if="$mq === 'sm' && FilterArr.length > 0  ">
                  <div class="container-fluid">
                    <div class="row">
                        <ProdCard v-for="Product in FilterArr" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem hideAddToCart"></ProdCard>                
                    </div>
                  </div>
                </div>

        </div>
      </b-skeleton-wrapper>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Flickity from 'vue-flickity';
import ProdCard from '../items/ProdCard.vue';
import ProdListLoader from '../widgets/PordListLoader.vue';
// import ProdGridBox from '../items/ProdGridBox.vue';

export default {

  name:'ProdsByTax3',
  components:{
    ProdCard,
    ProdListLoader,
    
    // ProdGridBox,
    Flickity
  },
  computed:{
    ...mapGetters(['ProdByTax4'])
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
        ProdByTax4Loading:true,
        FilterArr:[]
      }
    },
    watch:{
      ProdByTax4(newValue){
          if(newValue.items.length > 0){
              this.ProdByTax4Loading=false;
              this.FilterArr=this.ProdByTax4.items.slice(0,4)
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