<template>
    <div >
      <div class="TitleList">
        <h3 class="text-right">تاغات العيد الوطني السعودي</h3>
      </div>
      <div class="ProdList">

        <div class="scrollmenu">

          <ProdCard v-for="Product in ProdDecTag" v-bind:key="Product.id" v-bind:Product='Product'></ProdCard>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProdCard from '../items/ProdCard.vue';

export default {

  name:'ProdsByTax3',
  components:{
    ProdCard
  },
  computed:{
    ...mapGetters(['ProdDecTag'])
  }

}
</script>

<style>


</style>