<template>
  <div class="ProdOne">
      <h5>الرئيسية / التصنيف / تصنيف / اسم المنتج   </h5>

      <div class="d-flex">
          <div class="col-sm-5">
            <ImgScrollerProd />
          </div>
          <div class="col-sm-4">
            <div class="ProdInf">
              <h3 class="ProdTitle">
                توزيعات قناني 14سم*3.6سم
              </h3>
            </div>
            <div class="starRate">
               <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='true' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
            </div>
            <p>المنتج أو المنتوج هو لفظة عامة تشمل كل ما يصنع أو ينتج بغرض البيع والتسويق والتصدير للأفراد  الصناعية</p>
            <div class="Price">
              <div class="SalePrice">
                1.5 <span>ر.س</span>
              </div>
              <div class="regPrice">
                <del>
                  2.5 <span>ر.س</span>
                </del>
                
              </div>
            </div>
            <div class="Qty">
              <input type="text" class="form-control">
              <p>الد الادنى للطلب 1000 قطعة</p>
            </div>

          </div>
      </div>
  </div>
</template>

<script>

import ImgScrollerProd from '../components/widgets/ImgScrollerProd.vue';
import StarRating from 'vue-star-rating'

export default {

components:{
  ImgScrollerProd,
  StarRating
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

.SalePrice{
      font-weight: bolder;
      font-size: 26px;
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


</style>