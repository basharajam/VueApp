<template>
  <div class="home" style="background-color: #f5f5f5ec !important ;">

        <carouselWidget></carouselWidget>
        <!-- <homeList></homeList> -->
        <CategorySlide></CategorySlide>
        <ProdBoxList></ProdBoxList>

        <!-- Mobile  -->
        <ProdsByTax6 v-if="$mq === 'sm'"></ProdsByTax6> 
        <RecentList v-if="$mq === 'sm'" ></RecentList>
        <prodsByTax0 v-if="$mq === 'sm'"></prodsByTax0>
        <ProdByTax v-if="$mq === 'sm'"></ProdByTax>
        <ProdsByTax8 v-if="$mq === 'sm'"></ProdsByTax8>
        <!--Whatsapp Distru Banner -->
        <div class="container-fluid HomeBanner "  v-if="$mq === 'sm'">
          <a href="https://wa.me/8617757971070/">
            <img class="d-block w-100" src="@/assets/banners/6.jpeg" alt="Third slide">
          </a>
        </div>
        <!-- Whatsapp Distru Banner End -->
        <MostPopularList v-if="$mq === 'sm'"></MostPopularList>
        <ProdsByTax5 v-if="$mq === 'sm'"></ProdsByTax5>
        <ProdsByTax1 v-if="$mq === 'sm'"></ProdsByTax1>
        <ProdsByTax2 v-if="$mq === 'sm'"></ProdsByTax2>
        <ProdsByTax3 v-if="$mq === 'sm'" ></ProdsByTax3>
        <ProdsByTax4 v-if="$mq === 'sm'" ></ProdsByTax4>
        <ProdsByTax7 v-if="$mq === 'sm'"></ProdsByTax7>
        <ProdByBoxList v-if="$mq === 'sm'" ></ProdByBoxList> 
        <OffersList v-if="$mq === 'sm'"></OffersList>
        <!-- End Mobile -->

        <!-- Birth Distru Banner -->
          <div class="container-fluid HomeBanner "  v-if="$mq === 'md' || $mq === 'lg'">
            <a href="https://alyaman.com/product-category/%d9%85%d9%88%d8%a7%d9%84%d9%8a%d8%af/">
              <img class="d-block w-100" src="@/assets/banners/4.jpeg" width="1280" height="475" alt="Third slide">
            </a>
          </div>
        <!-- Birth Distru Banner End -->
        <ProdsByTax2 v-if="$mq === 'md' || $mq === 'lg'"></ProdsByTax2>
        <!--  Box Distru Banner -->
          <div class="container-fluid HomeBanner col-xl-12"  v-if="$mq === 'md' || $mq === 'lg'">
            <a href="https://alyaman.com/product-category/%d8%b9%d9%84%d8%a8-%d8%aa%d9%88%d8%b2%d9%8a%d8%b9%d8%a7%d8%aa/">
              <img class="d-block w-100" src="@/assets/banners/1.jpeg" width="1280" height="475" alt="Third slide">
            </a>
          </div>
        <!-- Box Distru Banner End -->
        <ProdsByTax7  v-if="$mq === 'md' || $mq === 'lg'"></ProdsByTax7>
        <ProdsByTax6  v-if="$mq === 'md' || $mq === 'lg'"></ProdsByTax6>  
        <RecentList  v-if="$mq === 'md' || $mq === 'lg'"></RecentList>
        <prodsByTax0  v-if="$mq === 'md' || $mq === 'lg'"></prodsByTax0>
        <!--Whatsapp Distru Banner -->
        <div class="container-fluid HomeBanner "  v-if="$mq === 'md' || $mq === 'lg'">
          <a href="https://wa.me/8617757971070/">
            <img class="d-block w-100" src="@/assets/banners/6.jpeg" width="1280" height="475" alt="Third slide">
          </a>
        </div>
        <!-- Whatsapp Distru Banner End -->
        <MostPopularList  v-if="$mq === 'md' || $mq === 'lg'"></MostPopularList>
        <ProdsByTax5  v-if="$mq === 'md' || $mq === 'lg'"></ProdsByTax5>
        <!--  Saudi Day Banner -->
          <div class="container-fluid HomeBanner col-xl-12"  v-if="$mq === 'md' || $mq === 'lg'">
            <a href="https://alyaman.com/product-category/%d8%a7%d9%84%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a/">
              <img class="d-block w-100" src="@/assets/banners/2.jpeg" width="1280" height="475" alt="Third slide">
            </a>
          </div>
        <!-- Saudi Day Banner End -->
        <ProdByTax  v-if="$mq === 'md' || $mq === 'lg'"></ProdByTax>
        <ProdsByTax8  v-if="$mq === 'md' || $mq === 'lg'"></ProdsByTax8>
        <!-- <Banner></Banner> -->
        <ProdsByTax3  v-if="$mq === 'md' || $mq === 'lg'"></ProdsByTax3>
        <ProdsByTax4  v-if="$mq === 'md' || $mq === 'lg'"></ProdsByTax4>
        <ProdsByTax1  v-if="$mq === 'md' || $mq === 'lg'"></ProdsByTax1>
        <ProdByBoxList  v-if="$mq === 'md' || $mq === 'lg'"></ProdByBoxList> 
        <OffersList  v-if="$mq === 'md' || $mq === 'lg'"></OffersList>
        <!-- <BestSell></BestSell>  -->
        <!-- <ProdsByTax5></ProdsByTax5>  -->

        <!--Wedding Distru Banner -->
          <div class="container-fluid HomeBanner "  v-if="$mq === 'md' || $mq === 'lg'">
            <a href="https://www.alyaman.com/product-category/%d8%a3%d8%b9%d8%b1%d8%a7%d8%b3/">
              <img class="d-block w-100" src="@/assets/banners/5.jpeg" width="1280" height="475" alt="Third slide">
            </a>
          </div>
        <!-- Wedding Distru Banner End -->
        <homeList v-if="$mq === 'md' || $mq === 'lg'" />
        





  
  </div>
</template>

<script>

import CategorySlide from '../components/widgets/Category.vue';
import OffersList from '../components/lists/OffersList.vue';
import ProdBoxList from '../components/lists/ProdBoxList.vue';
import ProdsByTax6 from '../components/lists/ProdsByTax6List.vue';
import carouselWidget from '../components/widgets/Carousel.vue';
import RecentList from '../components/lists/RecentList.vue';
import ProdByBoxList from '../components/lists/ProdByBoxList.vue';
import MostPopularList from '../components/lists/MostPopularList.vue';
import ProdByTax from '../components/lists/ProdByTax.vue';
import prodsByTax0 from '../components/lists/ProdsByTax0List.vue';
import ProdsByTax1 from '../components/lists/ProdsByTax1List.vue';
import ProdsByTax2 from '../components/lists/ProdsByTax2List.vue';
import ProdsByTax3 from '../components/lists/ProdsByTax3List.vue';
import ProdsByTax4 from '../components/lists/ProdsByTax4List.vue';
import ProdsByTax7 from '../components/lists/ProdsByTax7List.vue';
import ProdsByTax5 from '../components/lists/ProdsByTax5List.vue';
import ProdsByTax8 from '../components/lists/ProdsByTax8List.vue';
import homeList from '../components/lists/HomeList.vue';
// import CatGridList from '../components/lists/CatGridList.vue';
// import BestSell from '../components/lists/BestSellList.vue';
// import Banner from '../components/widgets/Banner.vue';

export default {
    name:'home',
    components:{
      carouselWidget,
      homeList,
      CategorySlide,
      ProdBoxList,
      OffersList,
      ProdsByTax6,
      RecentList,
      MostPopularList,
      ProdByTax,
      prodsByTax0,
      // BestSell,
      ProdsByTax1,
      ProdsByTax2,
      ProdsByTax3,
      ProdsByTax4,
      ProdsByTax7,
      ProdsByTax8,
      ProdsByTax5,
      ProdByBoxList,

      // CatGridList,
      // Banner
      

    }
}
</script>

<style>

</style>
