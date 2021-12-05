<template>
  <b-container fluid>

    <b-row class="my-3">
      <b-col>
        <b-card>
          <div class="d-flex justify-content-between">
            <div class="">

            </div>
            <div class="">
              <b-form>
                <b-col>

                </b-col>
                <b-col>
                  <b-form class="row" >
                    <b-col sm="6">
                      <b-form-group
                        id="sort-by-input-group"
                        label="الترتيب بحسب"
                        label-for="sort-by-input"
                        label-cols-sm="6"
                      >
                        <b-select id="sort-by-input"  :options="this.sortByOptions" @change="ChangeCondition()" v-model="searchform.condition" ></b-select>
                      </b-form-group>
                    </b-col>
                    <b-col sm="6" >
                      <b-form-group
                        id="limit-input-group"
                        label="عرض"
                        label-for="limit-input"
                        label-cols-sm="6">
                          <b-select id="limit-input" :options="this.limitOptions" @change="ChangeLimit()" v-model="searchform.limit" ></b-select>
                      </b-form-group>
                    </b-col>
                  </b-form>
                </b-col>
              </b-form>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="3" >
        <b-card class="my-2">
          <b-row class="justify-content-between align-items-center">
            <h5>السعر ({{ this.$cookies.get('wmc_current_currency') }})</h5>  
            <b-button v-b-toggle="'price-collapse'" variant="link" >d</b-button>
          </b-row>
       
            <b-collapse id="price-collapse" :visible="true">
              <b-form class="row px-2" @submit.prevent="UpdatePrice()" > 
                <b-col sm="4" class="p-1" >
                  <b-form-input v-model="searchform.minprice" type="number" step="0.01" ></b-form-input>
                </b-col>
                <b-col sm="4" class="p-1">
                  <b-form-input v-model="searchform.maxprice" type="number" step="0.01" ></b-form-input>
                </b-col>
                <b-col sm="1" class="p-1" >
                  <b-button type="submit" variant="outline-primary rounded-form ">Go</b-button>
                </b-col>
              </b-form>
            </b-collapse>
         
        </b-card>
        <b-card class="my-2">
          <b-row class="justify-content-between align-items-center">
            <h5>التقييم</h5>
            <b-button v-b-toggle="'rate-collapse'" variant="link" >d</b-button>
          </b-row>
          <b-collapse id="rate-collapse" :visible="true">
            <b-form @submit.prevent="UpdateRate()" class="row align-items-center">
              <b-col sm="9" class="p-1" >
                <b-form-input type="range" v-model="searchform.rate" min="0" max="5" step="0.1"></b-form-input>
              </b-col>
              <b-col sm="3" class="p-1" >
                <b-button  type="submit" variant="outline-primary rounded-form ">Go</b-button>
              </b-col>
              {{searchform.rate}}
            </b-form>
          </b-collapse>
        </b-card>
        <b-card class="my-2">
          <b-row class="justify-content-between align-items-center">
            <h5>التصنيفات</h5>  
            <b-button v-b-toggle="'category-collapse'" variant="link" >d</b-button>
          </b-row>
          <b-row>
            <b-collapse id="category-collapse" :visible="true">
              <TreeList
                class="item"
                :item="Categories"
                @make-folder="makeFolder"
                @add-item="addItem"
              ></TreeList>
            </b-collapse>
          </b-row>
        </b-card>
        <b-card class="my-2" >
          <b-row class="justify-content-between align-items-center">
            <h5>تجميعات مميزة</h5>  
            <b-button v-b-toggle="'tags-collapse'" variant="link" >d</b-button>
          </b-row>
          <b-row>
            <b-collapse id="tags-collapse" :visible="true">
                <div class="">
                  <p v-for="(tag,index) in this.Tags " v-bind:key="index"><router-link :to="{name:'ProdByTag' , params:{ProdByTag:tag.name}}">{{ tag.name }}</router-link></p>
              </div>
            </b-collapse>
          </b-row>
        </b-card>
      </b-col>

      <b-col sm="9">
        <b-row  >
          <ProdCard v-for="Product in items" v-bind:key="Product.id" v-bind:Product="Product" class="col-sm-3 col-6 p-1" ></ProdCard>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import {mapGetters} from 'vuex';
import axios from 'axios';

import TreeList from '../components/widgets/TreeList.vue';
import ProdCard from '../components/items/ProdCard.vue';

export default {

  computed:{
    ...mapGetters(['Categories','Tags'])
  },
  components:{
    TreeList,
    ProdCard
  },
  watch:{
    '$route.params.term':function(){
      this.DoSearch()
    }
  },
  methods:{

    makeFolder: function(item) {
        this.$set(item, "children", []);
        this.addItem(item);
    },
    addItem: function(item) {
        item.children.push({
          name: "new stuff"
        });
    },
    UpdatePrice:function(){
      this.DoSearch()
    },
    UpdateRate:function(){
      this.DoSearch()
    },
    ChangeCondition:function(){
      this.DoSearch()
    },
    ChangeLimit:function(){
      this.DoSearch()
    },
    DoSearch:function(){

      this.$Progress.start()

      var searchTerm=this.$route.params.term;
      var curr=this.$cookies.get('wmc_current_currency');
      var ship=this.$cookies.get('shipCountry');
      var url=process.env.VUE_APP_DEVBASEURL+'/Search/'+searchTerm+'/'+this.searchform.sort+'/'+this.searchform.limit+'/'+this.searchform.minprice+'/'+this.searchform.maxprice+'/'+this.searchform.condition+'/'+this.searchform.rate+'/'+curr+'/'+ship;
      axios.get(url).then((resp)=>{

        if(resp.data.status){

          this.items=resp.data.items;
          this.$Progress.finish()

          console.log(this.items)

        }

      });
    }
  },
  data(){
    return {
      searchform:{
        minprice:0.1,
        maxprice:1999,
        rate:5,
        limit:50,
        sort:'DESC',
        condition:'New',
      },
      sortByOptions: 
        { 
        Recommendations:"Recommendations" ,
        New:"New",
        PriceHighToLow:'Price High To Low' ,
        PriceLowToHigh:'Price Low To High',
        HasSale:'Has Sale'
      },
      limitOptions:
      {
        20:"20 بالصفحة",
        50:"50 بالصفحة",
        100:"100 بالصفحة"
      },
      items:[]
    }

  },


  mounted(){

    this.DoSearch()

  }

}
</script>

<style>

</style>