<template>
<div class="" >
    <flickity ref="flickity" v-if="displayScroll" :options="flickityOptions" class="carousel-main" >
        <img :src="img.url" v-for="img in gallery"  height="500" v-bind:key="img.ID" alt="">
    </flickity>
    <flickity ref="flickity2" v-if="displayScroll"  class="carousel-thumb " :options="flickityOptions2">
        <img :src="img.url" v-for="img in gallery" width="100" height="100" v-bind:key="img.ID" alt="">
    </flickity>
</div>
</template>

<script>
import Flickity from 'vue-flickity';
import 'flickity-as-nav-for'
export default {
    name:'ImgScrollProd',
    props:['gallery'],
    components: {
        Flickity
    },
     data () {
        return {
         flickityOptions: {
            width:100,
            pageDots: false,
            resize: true,
            prevNextButtons: true,
            wrapAround: true,

            // any options from Flickity can be used
         },
         flickityOptions2:{
                height:500,
                asNavFor: '.carousel-main',
                freeScroll: false,
                contain: true,
                prevNextButtons: true,
                pageDots: false,
                wrapAround: false,
           
         },
         displayScroll:false
        }
  },
  watch:{
      gallery(newValue){

        if(newValue){
            this.displayScroll=true
        }
      }
  }

}
</script>

<style scoped>

.carousel-main img{
    width: 100%;
}

.carousel-thumb ,.carousel-main{
 width: 100%;
 margin: 8px;

}

.carousel-thumb img{
    margin: 2px;
}


</style>