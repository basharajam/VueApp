<template>
      <div class="container-fluid HomeBanner col-xl-12"  >
         <a :href="item.link" v-if="$mq === 'md' || $mq === 'lg'">
            <img class="d-block w-100" :src="require(`../../assets/banners/${item.value}`)" width="1280" height="475" :alt="item.title">
         </a>
         <a :href="item.link" v-if="$mq === 'sm'">
            <img class="img-fluid" :src="require(`../../assets/banners/${item.value}`)" width="1280" height="475" :alt="item.title">
         </a>
      </div>
</template>

<script>
export default {
        props:['item']
}
</script>

<style>

</style>