<template>
    <b-card>
        <router-link class="btn  btn-block" :to="{name:'User'}" v-bind:class="{ 'btn-primary' : Checklink('User') , 'btn-block': !Checklink('User') }" >  معلومات الحساب </router-link>
        <router-link class="btn  btn-block" :to="{name:'Orders'}" v-bind:class="{ 'btn-primary' : Checklink('Orders') , 'btn-block': !Checklink('Orders') }"  > طلباتي </router-link>
        <router-link class="btn  btn-block" :to="{name:'Shipment'}" v-bind:class="{ 'btn-primary' : Checklink('Shipment') , 'btn-block': !Checklink('Shipment') }"  >  الشحن </router-link>
        <router-link class="btn  btn-block" :to="{name:'Billing'}" v-bind:class="{ 'btn-primary' : Checklink('Billing') , 'btn-block': !Checklink('Billing') }" > الفواتير </router-link>
    </b-card>
</template>

<script>
export default {
   methods:{
       Checklink:function(name){

           if(this.$route.name === name){

            return true;
           }else{
               return false
           }
       }

   }
}
</script>

<style>

</style>