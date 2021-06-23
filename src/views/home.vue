<template>
  <div class="home">
      
        <carouselWidget></carouselWidget>
        <homeList></homeList>
        <div class="container-fluid">
          <CategorySlide></CategorySlide>
        </div>
        <div class="divide"></div>
        <div class="container-fluid">
          <OffersList></OffersList>
          <RecentList></RecentList>
          <ProdByTax></ProdByTax>
        </div>
          <div class="container">
            <prodsByTax0></prodsByTax0>
          </div>
          <div class="container-fluid">
           
           <BestSell></BestSell>
          </div>
          <div class="container">
            <ProdsByTax1></ProdsByTax1>
            <ProdsByTax2></ProdsByTax2>
          </div>
          <div class="container-fluid">
            <Banner></Banner>
          </div>
          <div class="container">
            <ProdsByTax3></ProdsByTax3>
            <ProdsByTax4></ProdsByTax4>
          </div>
             
        <!-- <div class="container">
           <CatGridList class="d-block d-sm-none" ></CatGridList>
        </div> -->
        <div class="contaner-fluid">
          
          <ProdByBoxList></ProdByBoxList>
        </div>

  
  </div>
</template>

<script>

import carouselWidget from '../components/widgets/Carousel.vue';
import homeList from '../components/lists/HomeList.vue';
import OffersList from '../components/lists/OffersList.vue';
import RecentList from '../components/lists/RecentList.vue';
import ProdByBoxList from '../components/lists/ProdByBoxList.vue';
import ProdByTax from '../components/lists/ProdByTax.vue';
import prodsByTax0 from '../components/lists/ProdsByTax0List.vue';
import BestSell from '../components/lists/BestSellList.vue';
import ProdsByTax1 from '../components/lists/ProdsByTax1List.vue';
import ProdsByTax2 from '../components/lists/ProdsByTax2List.vue';
import ProdsByTax3 from '../components/lists/ProdsByTax3List.vue';
import ProdsByTax4 from '../components/lists/ProdsByTax4List.vue';
import CategorySlide from '../components/widgets/Category.vue';
// import CatGridList from '../components/lists/CatGridList.vue';
import Banner from '../components/widgets/Banner.vue';

export default {
    name:'home',
    components:{
      carouselWidget,
      homeList,
      OffersList,
      RecentList,
      ProdByTax,
      prodsByTax0,
      BestSell,
      ProdsByTax1,
      ProdsByTax2,
      ProdsByTax3,
      ProdsByTax4,
      ProdByBoxList,
      CategorySlide,
      // CatGridList,
      Banner
      

    }
}
</script>

<style>

</style>