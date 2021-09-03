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
                <div class="container-fluid HomeBanner d-none d-sm-block col-xl-12">
                    <a href="https://alyaman.com/product-category/%d9%85%d9%88%d8%a7%d9%84%d9%8a%d8%af/">
                        <img class="d-block w-100" src="@/assets/banners/cat.jpeg" >
                    </a>
                </div>
                <ProdByTax1></ProdByTax1>
                <ProdByTax4></ProdByTax4>
                <div class="container-fluid HomeBanner d-none d-sm-block col-xl-12">
                    <a href="https://alyaman.com/product-category/%d9%85%d9%88%d8%a7%d9%84%d9%8a%d8%af/">
                        <img class="d-block w-100" src="@/assets/banners/cat0.jpeg" >
                    </a>
                </div>
                <ProdByTax5></ProdByTax5>
                <ProdByTax6></ProdByTax6>

            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
import ProdByTax1 from '../components/lists/old/ProdsByTax1List.vue';
import ProdByTax4 from '../components/lists/old/ProdsByTax4List.vue';
import ProdByTax5 from '../components/lists/old/ProdsByTax5List.vue';
import ProdByTax6 from '../components/lists/old/ProdsByTax6List.vue';
export default {

    name:'ProdByCat',
    computed:{
        ...mapGetters(['Categories'])
    },
    components:{
        ProdByTax1,
        ProdByTax4,
        ProdByTax5,
        ProdByTax6
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