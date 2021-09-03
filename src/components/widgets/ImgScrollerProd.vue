<template>
<div class="">
    <flickity ref="flickity" :options="flickityOptions" class="carousel-main">
        <img src="https://picsum.photos/400/400.jpg" alt="">
        <img src="https://picsum.photos/400/400.jpg" alt="">
        <img src="https://picsum.photos/400/400.jpg" alt="">
        <img src="https://picsum.photos/400/400.jpg" alt="">
    </flickity>
    <flickity ref="flickity2" class="carousel-thumb " :options="flickityOptions2">
        <img src="https://picsum.photos/100/100.jpg" alt="">
        <img src="https://picsum.photos/100/100.jpg" alt="">
        <img src="https://picsum.photos/100/100.jpg" alt="">
        <img src="https://picsum.photos/100/100.jpg" alt="">

    </flickity>

</div>
</template>

<script>
import Flickity from 'vue-flickity';
import 'flickity-as-nav-for'
export default {
    name:'ImgScrollProd',
    
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