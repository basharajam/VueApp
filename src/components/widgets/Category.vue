<template>
  <div >


    <div class="category-carousel" >
      <CatSlideItem v-for="Category in Categories" v-bind:key='Category.id' v-bind:Category='Category' class="carousel-cell"></CatSlideItem>
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



</style>