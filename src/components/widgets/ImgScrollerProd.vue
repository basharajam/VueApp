<template>
<div class="">
    <flickity ref="flickity" :options="flickityOptions" class="carousel-main" v-if="gallery.length >0">
        <img :src="img.guid" v-for="img in gallery" v-bind:key="img.ID" alt="">
    </flickity>
    <flickity ref="flickity2" class="carousel-thumb " v-if="gallery.length >0" :options="flickityOptions2">
        <img :src="img.guid" v-for="img in gallery" width="100" height="100" v-bind:key="img.ID" alt="">
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
                asNavFor: '.carousel-main',
                freeScroll: false,
                contain: true,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
           
         }
        }
  },

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