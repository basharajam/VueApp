<template>

    
    <b-container fluid> 
        
        <b-row class="AllCat">
            <b-col cols="3" class="CatItem d-flex justify-content-center" v-for="Category in Categories"  v-bind:key="Category.id">
                <CatSlideItem v-bind:Category='Category' ></CatSlideItem>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="12">
                <!--  start mobile  -->
                <b-skeleton-wrapper :loading="AllCatLoading" v-if="$mq === 'sm'">
                <template #loading>
                    <b-container fluid>
                    <landingLoader></landingLoader>
                    </b-container>
                </template>
                <div v-for="item in Categories.mobile" v-bind:key="item.title">
                    <banner v-bind:item="item" v-if="item.type === 'banner' && item.mobileDisplay !== 'hide'" ></banner>
                    <ProdList v-bind:ProdList="item" v-if="item.type === 'ProdList' && item.mobileDisplay !== 'hide'" ></ProdList>
                </div>
            </b-skeleton-wrapper>
                <!-- End Mobile -->



            <b-skeleton-wrapper :loading="AllCatLoading" v-if="$mq === 'md' || $mq === 'lg'">
                <template #loading>
                <b-container fluid>
                    <landingLoader></landingLoader>
                </b-container>
                </template>
                <div v-for="item in Categories.desktop" v-bind:key="item.title">
                <banner v-bind:item="item" v-if="item.type === 'banner' && item.Display !== 'hide'" ></banner>
                <ProdList v-bind:ProdList="item" v-if="item.type === 'ProdList' && item.Display !== 'hide'" ></ProdList>
                </div>
            </b-skeleton-wrapper>


            </b-col>
        </b-row>

    </b-container>

</template>



<script>

import { mapGetters } from 'vuex';
import CatSlideItem from '../components/items/CatSlideItem.vue'
import banner from '../components/widgets/Banner.vue';
import landingLoader from '../components/widgets/landingLoader.vue';
import ProdList from '../components/lists/ProdList.vue';

export default{

    computed:{
        ...mapGetters(['Categories']),
    },
    components:{
        CatSlideItem,
        ProdList,
        banner,
        landingLoader 
    },
    data(){
      return {
        AllCatLoading:true,
      }
    },
    watch:{
        Categories(newValue){
            if(newValue.desktop.length > 0){
                this.AllCatLoading=false;
            }
        },
    },
    mounted(){

        // //Only Mobile Devices Condition
        if(this.$mq === 'md' || this.$mq === 'lg'){
            this.$router.push({'name':'Home'}) 
        }

    },
}

</script>



<style scoped>


.AllCat{
    margin: 8px 0;
    background: white;
    border-radius: 8px;
}

.CatItem{

    text-align: center;
    margin:8px 0;
}


</style>