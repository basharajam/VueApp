<template>
  
  <div>
      <div class="TitleList">
        <h3 class="text-center" >الأكثر مبيعا</h3>
      </div>

      <div class="ProdList">

        <div class="scrollmenu">
            <ProdCard></ProdCard>
            <ProdCard></ProdCard>
            <ProdCard></ProdCard>
            <ProdCard></ProdCard>
            <ProdCard></ProdCard>
            <ProdCard></ProdCard>
            <ProdCard></ProdCard>
            <ProdCard></ProdCard>
            
          </div>
      </div>
  
  
  </div>



  
</template>

<script>

import ProdCard from '../items/ProdCard.vue';

export default {

  components:{
    ProdCard
  }

}
</script>

<style>




</style>