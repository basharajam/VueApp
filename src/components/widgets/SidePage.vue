<template>
    <div class="col-sm-3  d-sm-block d-none">
        <b-card class="my-2">
            <div class="CatListHeader">
                <p>تصنيفات مميزة</p>
            </div>
            <TreeList
                class="item"
                :item="Categories"
                @make-folder="makeFolder"
                @add-item="addItem"
            ></TreeList>
        </b-card>

        <b-card class="my-2">
            <div class="CatListHeader">
                <p> تجميعات\ مميزة</p>
            </div>
            <div class="">
                <p v-for="(tag,index) in this.Tags " v-bind:key="index"><router-link :to="{name:'ProdByTag' , params:{ProdByTag:tag.name}}">{{ tag.name }}</router-link></p>
            </div>
        </b-card>
    </div>
</template>

<script>
import TreeList from '../widgets/TreeList.vue';
import { mapActions, mapGetters } from 'vuex';

export default {

    components:{
        TreeList
    },
    computed:{
        ...mapGetters(['Categories','Tags']),
    },
    methods:{
        ...mapActions(['getProdByCat']),
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
}
</script>

<style>

</style>