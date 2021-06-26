<template>
  <div class="Section">
    <div class="TitleList">
      <h3 class="text-right" >تسوق حسب الفئة</h3>
    </div>

    <div class="category-carousel " >
      <CatSlideItem v-for="Category in Categories" v-bind:key='Category.id' v-bind:Category='Category' class="carousel-cell col-2"></CatSlideItem>
    </div>


  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import CatSlideItem from '../items/CatSlideItem.vue';

export default {
    name:'CategorySilde',
    components:{
      CatSlideItem
    },
    computed:{
        ...mapGetters(['Categories'])
    }

}






</script>

<style>

.category-carousel{

background-color: white;

}


</style>