<template>
   <div class="carouselWidget">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <!-- <li data-target="#carouselExampleIndicators" data-slide-to="0" class="test active"></li> -->
            <!-- <li class="test" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li class="test" data-target="#carouselExampleIndicators" data-slide-to="2"></li> -->
            <!-- <li class="test" data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li class="test" data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li class="test" data-target="#carouselExampleIndicators" data-slide-to="5"></li> -->
        </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <a href="https://wa.me/8615557979977/">
              <img class="d-block w-100" src="@/assets/Slider/slideNew.jpg"  alt="First slide" height="375"  v-if="$mq === 'md' || $mq === 'lg'"/>
              <img class="d-block w-100" src="@/assets/Slider/slideNew.jpg"  alt="First slide" v-if="$mq === 'sm'"/>
            </a>
        </div>
        <!-- <div class="carousel-item">
            <a href="https://alyaman.com/product-category/%d8%a7%d9%84%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a/">
              <img class="d-sblock w-100" src="@/assets/Slider/slid1.gif" alt="First slide" />
            </a>
        </div>
    <div class="carousel-item">
        <a href="https://alyaman.com/product-category/%d8%aa%d8%ae%d8%b1%d8%ac/">
        <img class="d-block w-100" src="@/assets/Slider/slid2.gif" alt="First slide" />
        </a>
    </div> -->
    <!-- <div class="carousel-item">
            <a href="https://alyaman.com/product-category/%d9%85%d9%88%d8%a7%d9%84%d9%8a%d8%af/">
            <img class="d-block w-100" src="@/assets/Slider/slid3.gif" alt="First slide" />
            </a>
    </div>
    <div class="carousel-item">
        <a href="https://alyaman.com/product-category/%d8%a3%d8%b9%d9%8a%d8%a7%d8%af-%d9%85%d9%8a%d9%84%d8%a7%d8%af/">
         <img class="d-block w-100" src="@/assets/Slider/slid4.gif" alt="First slide" />
        </a>
    </div>
    <div class="carousel-item">
        <a href="https://alyaman.com/product-category/%d8%b9%d9%84%d8%a8-%d8%aa%d9%88%d8%b2%d9%8a%d8%b9%d8%a7%d8%aa/">
         <img class="d-block w-100" src="@/assets/Slider/slid5.gif" alt="First slide" />
        </a>
    </div> -->
    </div>
    </div>
   </div>
</template>

<script>
export default {
 name:'CarouselWidget'
}
</script>

<style scoped>
ol.carousel-indicators {
    margin-bottom: 0rem !important;
}


</style>