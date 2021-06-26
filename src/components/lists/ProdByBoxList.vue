<template>
  <div class="container-fluid ">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="#" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >منتجات يمكنك طلب 5 كرتون منها او اقل</h3>
      </div>

      <div class="ProdList container-fluid">

        <div class="scrollmenu">
            <ProdGridBox v-for="Product in ProdByBox" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3" ></ProdGridBox>
          </div>
      </div>
  </div>
</template>

<script>
import ProdGridBox from '../items/ProdGridBox.vue';
// import ProdBox from '../items/ProdBox.vue';
import { mapGetters } from 'vuex';

export default {
    name:'ProdByBox',
    components:{
    ProdGridBox
    },
    computed:{

      ...mapGetters(['ProdByBox'])

    }

}
</script>



<style lang="css" scoped>


@media only screen and (min-width: 768px) {

  .scrollmenu {
      white-space: break-spaces;
  }

}


</style>