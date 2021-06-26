<template>
  <div class="">
    <div class="TitleList" style="    padding-top: 20px;">
      <h3 class="text-right" >تسوق حسب الفئة</h3>
    </div>

    <div class="category-carousel container-fluid " >
      <div class="row">
       <CatSlideItem v-for="Category in Categories" v-bind:key='Category.id' v-bind:Category='Category' class="carousel-cell col-2"></CatSlideItem>
      </div>
    </div>

    <div class="TitleList" style="padding:6px">
    <div class="float-left ShowMoreBtn" >
        <a href="https://alyaman.com/%d8%b9%d8%b1%d9%88%d8%b6/" class="pull-left">عرض المزيد</a>
    </div>
      <h3 class="text-right" >عروض خاصة</h3>
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