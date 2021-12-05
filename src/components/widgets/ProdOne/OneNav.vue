<template>
  <b-tabs content-class="mt-3" class="my-5" fill>
    <b-tab title="وصف المنتج" active>
        <div class="text-start">
         <h4>{{Prod.name}} :</h4>
         <p >{{Prod.short_description}}</p>
        </div>
    </b-tab>
    <b-tab title="معلومات عن المنتج">
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
    </b-tab>
    <b-tab title="التقييمات">
        <ProdRating></ProdRating>
    </b-tab>
    <b-tab title="أسئلة وأجوبة">

    </b-tab>
  </b-tabs>
</template>

<script>

import ProdRating from '../ProdOne/ProdRating.vue';

export default {

    props:['Prod'],
    components:{
        ProdRating
    },
    mounted(){
        console.log(this.Prod)
    },


}
</script>

<style scoped>


</style>