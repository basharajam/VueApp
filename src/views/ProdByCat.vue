<template>
    <div class="container-fluid">
        <div class="row">
            <SidePage></SidePage>
            <div class="col-sm-9">
                <b-container  >
                    <b-row class="SubCat">
                        <b-col cols="3" class="CatItem d-flex justify-content-center" v-for="Category in Categories"  v-bind:key="Category.id">
                            <CatSlideItem v-bind:Category='Category'></CatSlideItem>
                        </b-col>
                    </b-row>

                    <b-row>
                        <div class="ProdList container">
                            <mq-layout :mq="['md','lg']" >
                                <b-row>
                                    <b-col sm="3" class="px-1"  v-for="Product in ProdByCatLayout.category.items" v-bind:key="Product.id" >
                                        <ProdCard class="ProdByCatItem" v-bind:Product="Product"></ProdCard>
                                    </b-col>
                                </b-row>
                            </mq-layout>
                        </div>
                    </b-row>
                </b-container>

                
            
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
import CatSlideItem from '../components/items/CatSlideItem.vue'
import ProdCard from '../components/items/ProdCard.vue';
import SidePage from '../components/widgets/SidePage.vue';

export default {

    name:'ProdByCat',
    computed:{
        ...mapGetters(['Categories','ProdByCatLayout']),
    },
    components:{
      ProdList,
      ProdCard,
      banner,
      landingLoader,
      CatSlideItem,
      SidePage
    },
    methods:{
        ...mapActions(['getProdByCat']),

    },
    mounted(){

        var ProdByCat=this.$route.params.ProdByCat
        this.getProdByCat(ProdByCat);

    },
    data(){
      return {
        ProdByCatLoading:true,
      }
    },
    watch:{
        ProdByCatLayout(newValue){
            if(newValue.desktop.length > 0){
                this.ProdByCatLoading=false;
            }
        },
        "$route.params.ProdByCat"(){
            return this.getProdByCat(this.$route.params.ProdByCat)
        }
    }
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


.ProdByCatItem{
    margin: 4px 0;
}

.SubCat{
    margin: 8px 0;
    background: white;
    border-radius: 8px;
}

</style>