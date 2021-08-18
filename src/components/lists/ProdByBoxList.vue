<template>
  <div class="">
      <div class="TitleList">
        <div class="float-left ShowMoreBtn" >
          <a href="https://alyaman.com/product-tag/moq_5_group/" class="pull-left">عرض المزيد</a>
        </div>
        <h3 class="text-right" >{{ ProdByBox.title }}</h3>
      </div>

      <b-skeleton-wrapper :loading="ProdByBoxLoading">
        <template #loading>
          <ProdListLoader></ProdListLoader>
        </template>
        <div class="ProdList container-fluid">

          <div class="scrollmenu">
              <ProdCard v-for="Product in ProdByBox.items" v-bind:key="Product.id" v-bind:Product="Product" class="col-6 col-sm-3 GridItem "></ProdCard>                
            </div>
        </div>

      </b-skeleton-wrapper>

  </div>
</template>

<script>
import ProdListLoader from '../widgets/PordListLoader.vue';
// import ProdBox from '../items/ProdBox.vue';
import ProdCard from '../items/ProdCard.vue';
import { mapGetters } from 'vuex';

export default {
    name:'ProdByBox',
    components:{
    ProdCard,
    ProdListLoader
    },
    computed:{

      ...mapGetters(['ProdByBox'])

    },
    data(){

      return {
        ProdByBoxLoading:true
      }

    },
    watch:{
      ProdByBox(newValue){
          if(newValue.items.length > 0){
              this.ProdByBoxLoading=false;
          }
      },
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