<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2 d-sm-block d-none">
                <div class="CatListHeader">
                    <p>تصنيفات مميزة</p>
                </div>
                <div class="CatListBody"> 
                    <ul class="list-unstyled">
                    <li v-for="Category in Categories" v-bind:key="Category.id" >
                        <a :href="'https://alyaman.com/product-category/'+Category.slug" >
                            {{ Category.name }}
                        </a>
                    </li>
                    </ul>
                </div>

            </div>
            <div class="col-sm-10">
                <!--  start mobile  -->
                <b-skeleton-wrapper :loading="ProdByCatLoading" v-if="$mq === 'sm'">
                <template #loading>
                    <b-container fluid>
                    <landingLoader></landingLoader>
                    </b-container>
                </template>
                <div v-for="item in ProdByCatLayout.mobile" v-bind:key="item.title">
                    <banner v-bind:item="item" v-if="item.type === 'banner' && item.mobileDisplay !== 'hide'" ></banner>
                    <ProdList v-bind:ProdList="item" v-if="item.type === 'ProdList' && item.mobileDisplay !== 'hide'" ></ProdList>
                </div>
            </b-skeleton-wrapper>
                <!-- End Mobile -->



            <b-skeleton-wrapper :loading="ProdByCatLoading" v-if="$mq === 'md' || $mq === 'lg'">
                <template #loading>
                <b-container fluid>
                    <landingLoader></landingLoader>
                </b-container>
                </template>
                <div v-for="item in ProdByCatLayout.desktop" v-bind:key="item.title">
                <banner v-bind:item="item" v-if="item.type === 'banner' && item.Display !== 'hide'" ></banner>
                <ProdList v-bind:ProdList="item" v-if="item.type === 'ProdList' && item.Display !== 'hide'" ></ProdList>
                </div>
            </b-skeleton-wrapper>


            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import banner from '../components/widgets/Banner.vue';
import landingLoader from '../components/widgets/landingLoader.vue';
import ProdList from '../components/lists/ProdList.vue';

export default {

    name:'ProdByCat',
    computed:{
        ...mapGetters(['Categories','ProdByCatLayout']),
    },
    components:{
      ProdList,
      banner,
      landingLoader   
    },
    methods:{
        ...mapActions(['getProdByCat','getLanding'])
    },
    mounted(){

        this.getLanding();
        this.getProdByCat();

    },
    data(){
      return {
        ProdByCatLoading:true
      }
    },
    watch:{
        ProdByCatLayout(newValue){
            console.log(newValue)
            if(newValue.desktop.length > 0){
                this.ProdByCatLoading=false;
            }
        },
    },


}
</script>

<style scoped>


.CatListHeader{
    font-size: 20px;
    font-weight: bold;
    margin: 6px;
}

.CatListBody ul li a {
    text-decoration: none;
    color: #646464;     
}


</style>