<template>
  <div class="ProdOne container-fluid">
      <h5 style="text-align:start">الرئيسية / التصنيف / تصنيف / اسم المنتج   </h5>

        <div class="row">
            <!-- Prod Inf  -->
            <div class="col-sm-6"> 
             <ImgScrollerProd v-bind:gallery='ProdOne.gallery' />
            </div>
            <div class="col-sm-6" style="text-align: start;">
              <div class="ProdInf">
                <h3 class="ProdTitle">
                  {{ProdOne.name}}
                </h3>
              </div>
              <div class="starRate">
                <star-rating  :rating="parseInt(ProdOne.avg_rate)" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
              </div>
              <p>المنتج أو المنتوج هو لفظة عامة تشمل كل ما يصنع أو ينتج بغرض البيع والتسويق والتصدير للأفراد  الصناعية</p>
              <div class="Price" v-if="ProdOne.onSale">
                <div class="SalePrice">
                  {{ ProdOne.sale_price }} <span>ر.س</span>
                </div>
                <div class="regPrice">
                  <del>
                    {{ ProdOne.regular_price }} <span>ر.س</span>
                  </del>
                  
                </div>
              </div>
              <div class="price" v-else >
                <div class="SalePrice">
                  {{ parseFloat(ProdOne.regular_price).toFixed(3) }} <span>ر.س</span>
                </div>
              </div>
              
              <div class="Qty d-flex">
                <input type="number" class="form-control col-sm-3" value="60">
                <b-link v-b-modal.modal-lg variant="primary">إضافة الى السلة</b-link>
                <p>الحد الادنى للطلب 60 قطعة</p>
              </div>

            </div>
            <!-- Prod Inf End  -->
        </div>

        <!-- Cart Modal -->
        <b-modal id="modal-lg" size="lg" hide-footer hide-header>
          <b-row>
            <b-col cols="12" sm="5" class="pb-4" >
              <vue-load-image >
                <img slot="image"  class="pic-1 img-fluid mx-auto" v-if="ProdOne.gallery" :src="ProdOne.gallery[0].url" :alt="ProdOne.name" >
                <img slot="preloader" class="img-fluid mx-auto" src="@/assets/loader.png"  />
                <img slot="error" class="img-fluid mx-auto" src="@/assets/loader.png" />
              </vue-load-image>
            </b-col>
            <b-col cols="12" sm='7' class="text-right p-1">
             <h5 class="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus suscipit, </h5>
              <div class="PropsList d-flex flex-column">
                <div v-for="(Prop,index) in DistruProps" v-bind:key="index" class="d-flex flex-column Prop my-2">
                  <p class="text-center m-0">Test</p>
                  <div class="d-flex flex-wrap">
                    <div v-for="(prop,index1) in Prop" v-bind:key="index1" class="PropItem m-1">
                      <input type="radio">
                      <label class="p-1 m-1 w-100" ><span>{{prop}}</span></label>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>

        </b-modal>
        <!-- Cart Modal End -->
        <b-row>
          <b-col cols="12" sm="12" >
            <OneNav v-if="$mq === 'md' || $mq === 'lg'" v-bind:Prod="ProdOne" ></OneNav>
            <OneCollapse v-if="$mq === 'sm'" v-bind:Prod="ProdOne" ></OneCollapse>
          </b-col>
        </b-row>
  </div>
</template>

<script>

import ImgScrollerProd from '../components/widgets/ImgScrollerProd.vue';
import StarRating from 'vue-star-rating'
import VueLoadImage from 'vue-load-image'
import OneCollapse from '../components/widgets/ProdOne/OneCollapse.vue';
import OneNav from '../components/widgets/ProdOne/OneNav.vue';
import {mapActions,mapGetters} from 'vuex'


export default {

      components:{
        ImgScrollerProd,
        VueLoadImage,
        StarRating,
        OneCollapse,
        OneNav
      },
      computed:{
        ...mapGetters(['ProdOne'])
      },
      data(){

        return {
          displayImg:false,
          DistruProps:[],
        }
      },

  methods:{

    ...mapActions(['getProdOne']),
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onRateSubmit(){

    },
    DistruProp(){

        var arr=['A','B','C','D','E','F','G','H','I','J','K'];
        var arr1=['Golden','Silver'];
        var arr2=['Small','Large'];
        var mainArr=[];

        mainArr.push(arr)
        mainArr.push(arr1)
        mainArr.push(arr2)

        //generate Combos
        // function combos(list, n = 0, result = [], current = []){
        //   if (n === list.length) result.push(current)
        //   else list[n].forEach(item => combos(list, n+1, result, [...current, item]))
      
        //   return result
        // }
        // return combos(mainArr);
        return mainArr;
    }

  },
  watch:{
    ProdOne(newValue){
      if(newValue){

        this.displayImg=true;
        console.log(this.displayImg)
      }

    }
  },
  mounted(){

    var ProdName=this.$route.params.ProdName;
    this.getProdOne(ProdName);
    this.DistruProps=this.DistruProp();

  }

}
</script>

<style scoped>

.starRate{
  margin: 20px 0;
}

/* .Price{
      font-weight: bolder;
      font-size: 26px;
      color: #fe6a00;
} */

.ProdOne{
  background: white;
  margin-top: 10px;
}

.SalePrice{
      font-weight: bolder;
      font-size: 32px;
      color: #fe6a00;
}

.regPrice{
  color: #9f9f9f
}

.regPriceWithSale::before{
    content: '';
    width: 100%;
    position: absolute;
    right: 0;
    top: calc( 50% - 1.5px );
    border-bottom: 3px solid rgba(255,0,0,0.8);
}

.tab-pane{
  margin: 16px;
}

.Qty{
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    margin: 12px 0;
}

.Qty p {

  margin: 0 8px;
  font-size: 10px;
  font-weight: bold;

}

.Qty a{
    border: 1px #fe6a00 solid;
    padding: 8px;
    margin: 8px;
    border-radius: 24px;
    text-decoration: none;
}
.Qty input[type=number]::-webkit-inner-spin-button, 
.Qty input[type=number]::-webkit-outer-spin-button {  

   opacity: 1;

}

.vue-star-rating .sr-only{
  left:unset !important;
}

.ProdMetaList{
  padding: 0;
}
.RateOneImg{
  margin: 0 16px;
}

.RateProgress{
  width: 100%;
}

.RateProgress .progress-br{

  margin: 6px 0;
}

.RateForm{
  margin: 16px 0;
}

.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
    display: none;
}

.when-opened , .when-closed{
  position: absolute;
  left: 10px;
}

.PropItem input{
  display: none;
}
.PropItem label{
  background: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid lightgrey;
  transition: all 0.3s ease;
}


@media only screen and (min-width:320px) and (max-width: 767px) {

.Qty{
  flex-direction: column !important;
      margin-bottom: 20px;
}

}

</style>