<template>
  
  <div class="CartMain">
      <div class="CartOverlay">

      </div>
    <div class="Cart">

        <h3 class="text-center">السلة</h3>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


.Cart{
    background: #ffffff;
    z-index: 997;
    position: fixed;
    left: -36%;
    width: 36%;
    height: 100%;
}

.Cart h3 {
    margin-top: 8px;
}

.CartOverlay{
    width: 80%;
    height: 100%;
    background: #00000059;
    position: fixed;
    z-index: 997;
    display: none;
}


</style>