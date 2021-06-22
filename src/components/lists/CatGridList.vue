<template>
  <div >
      <div class="TitleList">
        <h3 class="text-right" >صندوق حلوى مواليد</h3>
      </div>
            <div class="row">                
                <div class="col-6">
                    <CatGridBox></CatGridBox>
                </div>
                <div class="col-6">
                    <CatGridBox></CatGridBox>
                </div>
                <div class="col-6">
                    <CatGridBox></CatGridBox>
                </div>
            </div>

  </div>
</template>

<script>

import CatGridBox from '../items/CatGridBox.vue';

export default {

    components:{
        CatGridBox
    }

}
</script>

<style>

</style>