<template>
    <div class="container-fluid">
        <div class="row">
            <SidePage></SidePage>
            <div class="col-sm-9">
                <b-container  >
                    <b-row>
                        <div class="ProdList container">
                            <mq-layout :mq="['md','lg']" >
                                <b-row>
                                    <b-col sm="3" class="px-1"  v-for="Product in ProdByTagLayout.tag.items" v-bind:key="Product.id" >
                                        <ProdCard class="ProdByCatItem" v-bind:Product="Product"></ProdCard>
                                    </b-col>
                                </b-row>
                            </mq-layout>
                        </div>
                    </b-row>
                </b-container>

                <!--  start mobile  -->
                <b-skeleton-wrapper :loading="ProdByTagLoading" v-if="$mq === 'sm'">
                    <template #loading>
                        <b-container fluid>
                        <landingLoader></landingLoader>
                        </b-container>
                    </template>
                    <div v-for="item in ProdByTagLayout.mobile" v-bind:key="item.title">
                        <banner v-bind:item="item" v-if="item.type === 'banner' && item.mobileDisplay !== 'hide'" ></banner>
                        <ProdList v-bind:ProdList="item" v-if="item.type === 'ProdList' && item.mobileDisplay !== 'hide'" ></ProdList>
                    </div>
                 </b-skeleton-wrapper>
                <!-- End Mobile -->



                <b-skeleton-wrapper :loading="ProdByTagLoading" v-if="$mq === 'md' || $mq === 'lg'">
                    <template #loading>
                    <b-container fluid>
                        <landingLoader></landingLoader>
                    </b-container>
                    </template>
                    <div v-for="item in ProdByTagLayout.desktop" v-bind:key="item.title">
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
import ProdCard from '../components/items/ProdCard.vue';
import SidePage from '../components/widgets/SidePage.vue';

export default {  

    name:'ProdByTag',
    computed:{
        ...mapGetters(['Categories','ProdByTagLayout']),
    },
    components:{
      ProdList,
      ProdCard,
      banner,
      landingLoader,
      SidePage
    },
    methods:{
        ...mapActions(['getProdByTag']),
    },
    mounted(){

        var ProdByTag=this.$route.params.ProdByTag
        var obj={
         tag:ProdByTag,
         breakpoint:this.$mq
        };
        //this.getLanding(obj);
        this.getProdByTag(obj);

    },
    data(){
      return {
        ProdByTagLoading:true,
      }
    },
    watch:{
        ProdByTagLayout(newValue){
            if(newValue.desktop.length > 0){
                this.ProdByTagLoading=false;
            }
            console.log('ist')
        },
        "$route.params.ProdByTag"(){
            return this.getProdByTag(this.$route.params.ProdByTag)
        }
    }
}

</script>


<style scope>

</style>