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
        margin:10px 34px;
        display: inline-block;
}

.Cat-Slide-item a {
        display: flex;
    align-items: center;
    flex-direction: column;
    color: #808080 !important;
}

.Cat-Slide-item-img{
    max-width: 115px;
    height: auto;
}

.Cat-Slide-item a span {
    white-space: nowrap;
    text-align: center;
}


</style>