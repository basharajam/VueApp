<template>
  <div class="">
    <!-- <div class="TitleList" style="    padding-top: 20px;">
      <h3 class="text-right" >تسوق حسب الفئة</h3>
    </div> -->

    <div class="" >
      <div class="category-carousel">
       <CatSlideItem v-for="Category in Categories" v-bind:key='Category.id' v-bind:Category='Category' class="carousel-cell col-2"></CatSlideItem>
      </div>
    </div>
    <div class="d-sm-block d-none">
      <div id="carouselBannerControls" class="carousel slide BannersSlide " data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="https://alyaman.com/product-tag/baby_box_group/">
              <img class="d-block w-100" src="@/assets/banners/1.jpeg" alt="Third slide">
            </a>
          </div>
          <div class="carousel-item ">
            <a href="https://alyaman.com/product-category/%d8%a7%d9%84%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a/">
              <img class="d-block w-100" src="@/assets/banners/2.jpeg" alt="First slide">
            </a>
          </div>
          <div class="carousel-item ">
            <a href="https://alyaman.com/product-category/%d8%aa%d8%ae%d8%b1%d8%ac">
              <img class="d-block w-100" src="@/assets/banners/0.jpeg" alt="Second slide">
            </a>
          </div>
          <div class="carousel-item">
            <a href="https://alyaman.com/product-category/%d9%85%d9%88%d8%a7%d9%84%d9%8a%d8%af/">
              <img class="d-block w-100" src="@/assets/banners/3.jpeg" alt="Third slide">
            </a>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselBannerControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselBannerControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>

    </div>

      <div class="BannerSlider scrollmenu d-sm-none d-block">              
          <div class="BannerSlideItem col-10 ">
            <a href="https://alyaman.com/product-tag/baby_box_group/">
              <img  class="mobileBanner " src="@/assets/banners/1.jpeg" alt="">
            </a>
        </div>
        <div class="BannerSlideItem col-10 ">
          <a href="https://alyaman.com/product-category/%d8%a7%d9%84%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a/">
              <img  class="mobileBanner " src="@/assets/banners/2.jpeg" alt="">
          </a>
        </div>
        <div class="BannerSlideItem  col-10 ">
          <a href="https://alyaman.com/product-category/%d8%aa%d8%ae%d8%b1%d8%ac">
              <img  class="mobileBanner " src="@/assets/banners/0.jpeg" alt="">
          </a>
        </div>
        <div class="BannerSlideItem col-10 ">
          <a href="https://alyaman.com/product-category/%d9%85%d9%88%d8%a7%d9%84%d9%8a%d8%af/">
              <img  class="mobileBanner " src="@/assets/banners/3.jpeg" alt="">
          </a>
        </div>
      </div>

    <div class="TitleList" style="padding:6px">
    <div class="float-left ShowMoreBtn" >
        <a href="https://alyaman.com/%d8%b9%d8%b1%d9%88%d8%b6/" class="pull-left">عرض المزيد</a>
    </div>
      <h3 class="text-right" >عروض خاصة</h3>
    </div>
  </div>
  
</template>

<script>

import { mapGetters } from 'vuex';
import CatSlideItem from '../items/CatSlideItem.vue';
// import BannerSliderItem from '../items/BannerSlideItem.vue';

export default {
    name:'CategorySilde',
    components:{
      CatSlideItem,
      // BannerSliderItem
    },
    computed:{
        ...mapGetters(['Categories'])
    }

}

</script>

<style>

.category-carousel{

background-color: white;
padding: 18px 0;

}

.BannerSlider{
  margin: 12px 0;
}
.BannerSlideItem {
  display: inline-block;
  padding: 0;
}
.BannerSlideItem img {

  /* margin: 0 16px;
  width: 100%; */
  /* padding-right: 20px; */
  width: 95%;
  height: auto;
}

.BannersSlide .carousel-inner .carousel-item img {
  padding: 16px;
}


</style>