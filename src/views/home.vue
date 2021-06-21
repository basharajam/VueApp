<template>
  <div class="home">
      
        <carouselWidget></carouselWidget>
        <homeList></homeList>
        <div class="container-fluid">
          <!-- <BestSell></BestSell> -->
          <prodsByTax0></prodsByTax0>
          <ProdByBoxList></ProdByBoxList>
          <ProdsByTax1></ProdsByTax1>
          <ProdsByTax2></ProdsByTax2>
          <ProdsByTax3></ProdsByTax3>
        </div>

  
  </div>
</template>

<script>

import carouselWidget from '../components/widgets/Carousel.vue';
import homeList from '../components/lists/HomeList.vue';
import ProdByBoxList from '../components/lists/ProdByBoxList.vue';
import prodsByTax0 from '../components/lists/ProdsByTax0List.vue';
import ProdsByTax1 from '../components/lists/ProdsByTax1List.vue';
import ProdsByTax2 from '../components/lists/ProdsByTax2List.vue';
import ProdsByTax3 from '../components/lists/ProdsByTax3List.vue';
// import BestSell from '../components/lists/BestSellList.vue';
export default {
    name:'home',
    components:{
      carouselWidget,
      homeList,
      // BestSell,
      prodsByTax0,
      ProdsByTax1,
      ProdsByTax2,
      ProdsByTax3,
      ProdByBoxList,
      

    }
}
</script>

<style>

</style>