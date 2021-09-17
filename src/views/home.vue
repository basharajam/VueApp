<template>
  <div class="home" style="background-color: #f5f5f5ec !important ;">

        <carouselWidget></carouselWidget>
        <!-- <homeList></homeList> -->
        <CategorySlide></CategorySlide>
        <mq-layout :mq="['md','lg']" >
          <ProdBoxList ></ProdBoxList>
        </mq-layout>
        

        <!--  start mobile  -->
        <mq-layout :mq="['sm']" >
          <b-skeleton-wrapper :loading="landingLoading" >
            <template #loading>
              <b-container fluid>
                <landingLoader></landingLoader>
              </b-container>
            </template>
            <div v-for="item in LandingLayout.mobile" v-bind:key="item.title">
              <banner v-bind:item="item" v-if="item.type === 'banner' && item.mobileDisplay !== 'hide'" ></banner>
              <ProdList v-bind:ProdList="item" v-if="item.type === 'ProdList' && item.mobileDisplay !== 'hide'" ></ProdList>
            </div>
        </b-skeleton-wrapper>
        </mq-layout>
        <!-- End Mobile -->


      <mq-layout :mq="['md','lg']" >
        <b-skeleton-wrapper :loading="landingLoading" >
          <template #loading>
            <b-container fluid>
              <landingLoader></landingLoader>
            </b-container>
          </template>
          <div v-for="item in LandingLayout.desktop" v-bind:key="item.title">
            <banner v-bind:item="item" v-if="item.type === 'banner' && item.Display !== 'hide'" ></banner>
            <ProdList v-bind:ProdList="item" v-if="item.type === 'ProdList' && item.Display !== 'hide'" ></ProdList>
          </div>
        </b-skeleton-wrapper>
      </mq-layout>
      <mq-layout :mq="['md','lg']">
        <homeList  />
      </mq-layout>

        





  
  </div>
</template>

<script>

import { mapGetters,mapActions } from 'vuex';

import ProdList from '../components/lists/ProdList.vue';
import banner from '../components/widgets/Banner.vue';

import CategorySlide from '../components/widgets/Category.vue';
import ProdBoxList from '../components/lists/ProdBoxList.vue';
import carouselWidget from '../components/widgets/Carousel.vue';

import homeList from '../components/lists/HomeList.vue';
import Banner from '../components/widgets/Banner.vue';

import landingLoader from '../components/widgets/landingLoader.vue';


export default {
    name:'home',
    components:{
      carouselWidget,
      homeList,
      CategorySlide,
      ProdBoxList,
      ProdList,
      banner,
      Banner,
      landingLoader

        
      // CatGridList,
      // Banner
    },
    computed:{
      ...mapGetters(['LandingLayout'])
    },
    methods:{
      ...mapActions(['getLanding'])
    },
    data(){
      return {
        landingLoading:true
      }
    },
    watch:{
        LandingLayout(newValue){
            console.log(newValue)
            if(newValue.desktop.length > 0){
                this.landingLoading=false;
            }
        },
    },
    mounted(){
        this.getLanding();
    }
}
</script>

<style>

</style>
