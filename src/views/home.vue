<template>
  <div class="home">
      
        <carouselWidget></carouselWidget>
        <!-- <homeList></homeList> -->
        <CategorySlide></CategorySlide>
        <ProdBoxList></ProdBoxList>

        <!-- Birth Distru Banner -->
          <div class="container HomeBanner d-none d-sm-block">
            <a href="https://alyaman.com/product-category/%d9%85%d9%88%d8%a7%d9%84%d9%8a%d8%af/">
              <img class="d-block w-100" src="@/assets/banners/4.jpeg" alt="Third slide">
            </a>
          </div>
        <!-- Birth Distru Banner End -->
        <ProdsByTax2></ProdsByTax2>
        <OffersList></OffersList>
        <!--  Box Distru Banner -->
          <div class="container HomeBanner d-none d-sm-block">
            <a href="https://alyaman.com/product-category/%d8%b9%d9%84%d8%a8-%d8%aa%d9%88%d8%b2%d9%8a%d8%b9%d8%a7%d8%aa/">
              <img class="d-block w-100" src="@/assets/banners/1.jpeg" alt="Third slide">
            </a>
          </div>
        <!-- Box Distru Banner End -->
        <ProdsByTax7></ProdsByTax7>
        <ProdsByTax6></ProdsByTax6>  
        <RecentList></RecentList>
        <prodsByTax0></prodsByTax0>
        <!--  Saudi Day Banner -->
          <div class="container HomeBanner d-none d-sm-block">
            <a href="https://alyaman.com/product-category/%d8%a7%d9%84%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a/">
              <img class="d-block w-100" src="@/assets/banners/2.jpeg" alt="Third slide">
            </a>
          </div>
        <!-- Saudi Day Banner End -->
        <ProdByTax></ProdByTax>
        <MostPopularList></MostPopularList>
        <ProdsByTax1></ProdsByTax1>
        <!-- <Banner></Banner> -->
        <ProdsByTax3></ProdsByTax3>
        <ProdsByTax4></ProdsByTax4>
        <ProdByBoxList></ProdByBoxList> 
        <!-- <BestSell></BestSell>  -->
        <!-- <ProdsByTax5></ProdsByTax5>  -->
 


  
  </div>
</template>

<script>

// import homeList from '../components/lists/HomeList.vue';
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
// import CatGridList from '../components/lists/CatGridList.vue';
// import ProdsByTax5 from '../components/lists/ProdsByTax5List.vue';
// import BestSell from '../components/lists/BestSellList.vue';
// import Banner from '../components/widgets/Banner.vue';

export default {
    name:'home',
    components:{
      carouselWidget,
      // homeList,
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
      // ProdsByTax5,
      ProdByBoxList,
      // CatGridList,
      // Banner
      

    }
}
</script>

<style>

</style>