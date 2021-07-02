<template>
    <div >
        <div class="overlay"></div>
        <img src="spinner.png" class="spinner"> 
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.overlay{

    width: 100%;
    height: 100%;
    background: white;
    position: fixed;
    z-index: 998;
}

.spinner {
  width: 5%;
  text-align: center;
  position: fixed ;
  top: 50%;
  left: 50%;
  bottom: 50%;
  right: 50%;
  z-index: 999;
  -webkit-animation:spin 4s linear infinite;
  -moz-animation:spin 4s linear infinite;
  animation:spin 4s linear infinite;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }


</style>