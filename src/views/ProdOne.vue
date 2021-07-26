<template>
  <div class="ProdOne">
      <h5>الرئيسية / التصنيف / تصنيف / اسم المنتج   </h5>

      <div class="col-sm-10">
        <div class="d-flex ">
            <!-- Prod Inf  -->
            <div class="col-sm-6">
              <ImgScrollerProd />
            </div>
            <div class="col-sm-6">
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
              <div class="Qty d-flex">
                <button class="btn btn-link">إضافة الى السلة</button>
                <input type="text" class="form-control col-sm-3">
                <p>الحد الادنى للطلب 1000 قطعة</p>
              </div>

            </div>
            <!-- Prod Inf End  -->
        </div>
        <!-- prod Nav Tabs -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">وصف المنتج </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">معلومات عن المنتج</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">التقييمات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="QA-tab" data-toggle="tab" href="#QA" role="tab" aria-controls="contact" aria-selected="false">اسئلة العميل والاجوبة</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h4>:توزيعات قناني 14سم*3.6سم</h4>
            <p>المنتج أو المنتوج هو لفظة عامة تشمل كل ما يصنع أو ينتج بغرض البيع والتسويق والتصدير للأفراد الصناعية
              المنتج أو المنتوج هو لفظة عامة تشمل كل ما يصنع أو ينتج بغرض البيع والتسويق والتصدير للأفراد الصناعية
              المنتج أو المنتوج هو لفظة عامة تشمل كل ما يصنع أو ينتج بغرض البيع والتسويق والتصدير للأفراد الصناعية
            </p>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <ul class="ProdMetaList" style="list-style:none">
              <li>
                <b>رقم المنتج:</b>
                dd-w23as2e
              </li>
              <li>
                <b>القياس:</b>
                45
              </li>
              <li>
                <b>الوزن:</b>
                6 mg
              </li>
              <li>
                <b>السماكة</b>
                4 mm
              </li>
            </ul>
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">helllllllllllo3</div>
          <div class="tab-pane fade" id="QA" role="tabpanel" aria-labelledby="QA-tab">helllllllllllo4</div>
        </div>
        <!-- Prod nav Tabs End -->

      </div>
      <div class="col-sm-2">

      </div>
  </div>
</template>

<script>

import ImgScrollerProd from '../components/widgets/ImgScrollerProd.vue';
import StarRating from 'vue-star-rating'

export default {

components:{
  ImgScrollerProd,
  StarRating,
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