<template>
    <div class="Cat-Slide-item">
              <a href="#" class="flex  justify-center">
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
}

.Cat-Slide-item a {
        display: flex;
    align-items: center;
    flex-direction: column;
}

.Cat-Slide-item-img{
    max-width: 115px;
    height: auto;
}


</style>