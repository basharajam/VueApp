<template>
  <div class="">
    <b-card>
      <div class="row justify-content-between">
        <h4>وصف المنتج</h4>
        <b-button variant="link" v-b-toggle.collapse-1>X</b-button>
      </div>
      <div class="row">
        <b-collapse id="collapse-1" class="mt-2" active >
         <div class="text-start">
          <h4>{{Prod.name}} :</h4>
          <p >{{Prod.short_description}}</p>
         </div>
        </b-collapse>
      </div>
    </b-card>

    <b-card>
      <div class="row justify-content-between">
        <h4>معلومات المنتج</h4>
        <b-button variant="link" v-b-toggle.collapse-2>X</b-button>
      </div>
      <div class="row">
        <b-collapse id="collapse-2" class="mt-2" active >
         <div class="text-start">
          <ul class="text-start" style="list-style:none">
              <li>
              <b>رقم المنتج:</b>
              dd-w23as2e
              </li>
              <li>
              <b>القياس:</b>
              45
              </li>
              <li>
              <b>الوزن:</b>
              6 mg
              </li>
              <li>
              <b>السماكة</b>
              4 mm
              </li>
          </ul>
         </div>
        </b-collapse>
      </div>
    </b-card>
  
    <b-card>
      <div class="row justify-content-between">
        <h4>التقييمات</h4>
        <b-button variant="link" v-b-toggle.collapse-3>X</b-button>
      </div>
      <div class="row">
        <b-collapse id="collapse-3" class="mt-2" >
         <div class="text-start">
          <ProdRating></ProdRating>
         </div>
        </b-collapse>
      </div>
    </b-card>


  </div>
</template>

<script>


import ProdRating from '../ProdOne/ProdRating.vue';
export default {

  props:['Prod'],
  components:{
    ProdRating
  },

}
</script>

<style>

</style>