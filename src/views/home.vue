<template>
  <div class="home">
      
        <carouselWidget></carouselWidget>
        <homeList></homeList>
        <CategorySlide></CategorySlide>
        <OffersList></OffersList>
        <ProdsByTax6></ProdsByTax6>  
        <RecentList></RecentList>
        <prodsByTax0></prodsByTax0>
        <ProdByTax></ProdByTax>
        <MostPopularList></MostPopularList>
        <ProdsByTax1></ProdsByTax1>
        <ProdsByTax2></ProdsByTax2>
        <!-- <Banner></Banner> -->
        <ProdsByTax3></ProdsByTax3>
        <ProdsByTax4></ProdsByTax4>
        <ProdByBoxList></ProdByBoxList>
        <!-- <BestSell></BestSell>  -->
        <!-- <ProdsByTax5></ProdsByTax5>  -->
 


  
  </div>
</template>

<script>

import homeList from '../components/lists/HomeList.vue';
import CategorySlide from '../components/widgets/Category.vue';
import OffersList from '../components/lists/OffersList.vue';
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
// import ProdsByTax5 from '../components/lists/ProdsByTax5List.vue';
// import BestSell from '../components/lists/BestSellList.vue';
// import CatGridList from '../components/lists/CatGridList.vue';
// import Banner from '../components/widgets/Banner.vue';

export default {
    name:'home',
    components:{
      carouselWidget,
      homeList,
      CategorySlide,
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
      // ProdsByTax5,
      ProdByBoxList,
      // CatGridList,
      // Banner
      

    }
}
</script>

<style>

</style>