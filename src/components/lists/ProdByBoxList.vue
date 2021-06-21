<template>
  <div>
      <div class="TitleList">
        <h3 class="text-center" >منتجات يمكنك طلب 5 كرتون منها او اقل</h3>
      </div>

      <div class="ProdList">

        <div class="scrollmenu">
            <ProdBox v-for="Product in ProdByBox" v-bind:key="Product.id" v-bind:Product="Product" ></ProdBox>
            <!-- <ProdBox></ProdBox>
            <ProdBox></ProdBox>
            <ProdBox></ProdBox>
            <ProdBox></ProdBox> -->
          </div>
      </div>
  </div>
</template>

<script>

import ProdBox from '../items/ProdBox.vue';
import { mapGetters } from 'vuex';

export default {
    name:'ProdByBox',
    components:{
    ProdBox
    },
    computed:{

      ...mapGetters(['ProdByBox'])

    }

}
</script>



<style lang="css" scoped>

.scrollmenu {
    white-space: break-spaces;
}

</style>