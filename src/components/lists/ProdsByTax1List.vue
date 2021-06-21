<template>
    <div >
      <div class="TitleList">
        <h3 class="text-center">ستيكر العيد الوطني</h3>
      </div>
      <div class="ProdList">

        <div class="scrollmenu">

          <ProdCard v-for="Product in ProdDecSticker" v-bind:key="Product.id" v-bind:Product='Product'></ProdCard>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProdCard from '../items/ProdCard.vue';

export default {

  name:'ProdsByTax1',
  components:{
    ProdCard
  },
  computed:{
    ...mapGetters(['ProdDecSticker'])
  }

}
</script>

<style>


</style>