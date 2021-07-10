<template>
    <div class="container-fluid ProdBoxList d-none d-sm-block">
            <!-- SaudiDayTopper -->
            <div class="ProdsBox col-sm-3">
                <h3 class="ProdBoxTitle ">احبال زينة اليوم الوطني</h3>
                <div class="ProdBoxItems">
                    <div class="ProdBoxOne col-sm-6" v-for="Prod in ProdDecRope" v-bind:key="Prod.id">
                        <a :href="Prod.permalink">
                            <img :src="Prod.images[0].src" alt="">
                        </a>
                        <a :href="Prod.permalink">
                            <p>{{Prod.name}}</p>
                        </a>
                    </div>
                </div>
            </div>


            <div class="ProdsBox col-sm-3">
                <h3 class="ProdBoxTitle ">تغريسات اليوم الوطني</h3>
                <div class="ProdBoxItems">
                    <div class="ProdBoxOne col-sm-6" v-for="Prod in ProdDecIns" v-bind:key="Prod.id">
                        <a :href="Prod.permalink">
                            <img :src="Prod.images[0].src" alt="">
                        </a>
                        <a :href="Prod.permalink">
                            <p>{{Prod.name}}</p>
                        </a>
                    </div>
                </div>
            </div>

            <div class="ProdsBox col-sm-3">
                <h3 class="ProdBoxTitle ">ستيكرات اليوم الوطني</h3>
                <div class="ProdBoxItems">
                    <div class="ProdBoxOne col-sm-6" v-for="Prod in ProdDecSticker" v-bind:key="Prod.id">
                        <a :href="Prod.permalink">
                            <img :src="Prod.images[0].src" alt="">
                        </a>
                        <a :href="Prod.permalink">
                            <p>{{Prod.name}}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="ProdsBox col-sm-3">
                <h3 class="ProdBoxTitle ">تاغات اليوم الوطني</h3>
                <div class="ProdBoxItems">
                    <div class="ProdBoxOne col-sm-6" v-for="Prod in ProdDecTag" v-bind:key="Prod.id">
                        <a :href="Prod.permalink">
                            <img :src="Prod.images[0].src" alt="">
                        </a>
                        <a :href="Prod.permalink">
                            <p>{{Prod.name}}</p>
                        </a>
                    </div>
                </div>
            </div>

        </div>

</template>

<script>

import {mapGetters} from 'vuex'

export default {

    name:'ProdBoxList',
    computed:{
        ...mapGetters(['ProdDecRope','ProdDecSticker','ProdDecIns','ProdDecTag'])
    }


}
</script>

<style scoped>

.ProdBoxList{
  margin: 16px 0;
}

.ProdsBox , .ProdBoxOne{
    display: inline-block;
}

.ProdBoxTitle {
    text-align: center;
    background-color: white;
    margin: 0;
    padding: 0;
}

.ProdBoxItems{
    background: white;
    padding: 6px;
}

.ProdBoxOne a{
    color: black !important;
}

.ProdBoxOne a img{
    width: 80%;
    height: auto;
    margin: 6px;
}

.ProdBoxOne a p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 75ch;
    color: black !important;
}

.ProdBoxOne{
    padding: 6px 0;
    text-align: center;
}

</style>