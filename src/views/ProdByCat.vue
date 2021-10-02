<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2 d-sm-block d-none">
                <div class="CatListHeader">
                    <p>تصنيفات مميزة</p>
                </div>
                <TreeList
                    class="item"
                    :item="Categories.Categories"
                    @make-folder="makeFolder"
                    @add-item="addItem"
                ></TreeList>
            </div>
            <div class="col-sm-10">


                <b-container  >
                    <b-row class="SubCat">
                        <b-col cols="3" class="CatItem d-flex justify-content-center" v-for="Category in Categories.Categories"  v-bind:key="Category.id">
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
import TreeList from '../components/widgets/TreeList.vue';


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
      TreeList
    },
    methods:{
        ...mapActions(['getProdByCat','getLanding']),
        makeFolder: function(item) {
            this.$set(item, "children", []);
            this.addItem(item);
          },
        addItem: function(item) {
            item.children.push({
              name: "new stuff"
            });
          }
    },
    mounted(){

        this.getLanding();
        this.getProdByCat();

    },
    data(){
      return {
        ProdByCatLoading:true,
      }
    },
    watch:{
        ProdByCatLayout(newValue){
            console.log(newValue)
            if(newValue.desktop.length > 0){
                this.ProdByCatLoading=false;
            }
        },
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