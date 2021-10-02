<template>
    <div class="Cat-Slide-item">
              <a :href="'https://alyaman.com/product-category/'+Category.slug" class="flex  justify-center">
                  <img :src="Category.image.src" class="Cat-Slide-item-img" alt="">
                  <span>{{Category.name}}</span>
              </a>
    </div>
</template>

<script>
export default {

    name:'CatSideItem',
    props:['Category']

}
</script>

<style>

.Cat-Slide-item{
        bottom: 0 !important;
        display: inline-block;
        margin: 2px 2px;
}

.Cat-Slide-item a {
        display: flex;
    align-items: center;
    flex-direction: column;
    color: #808080 !important;
    font-size: 10px;
}

.Cat-Slide-item-img{
    max-width: 45px;
    height: auto;

}

.Cat-Slide-item a span {
    white-space: nowrap;
    text-align: center;
}


</style>