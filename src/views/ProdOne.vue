<template>
  <div class="ProdOne">
      <h5>الرئيسية / التصنيف / تصنيف / اسم المنتج   </h5>

      <div class="col-sm-12">
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
                <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
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
                <input type="number" class="form-control col-sm-3">
                <p>الحد الادنى للطلب 1000 قطعة</p>
              </div>

            </div>
            <!-- Prod Inf End  -->
        </div>

        <div class="row">
          <div class="col-sm-10">
            <!-- prod Nav Tabs -->
            <ul class="nav nav-tabs" id="myTab" role="tablist" style="padding-right: 0;">
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
                <a class="nav-link" id="QA-tab" data-toggle="tab" href="#QA" role="tab" aria-controls="contact" aria-selected="false"> الأسئلة والاجوبة</a>
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
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

              <div class="row">
                <div class="col-sm-6">
                  <div class="d-flex justify-content-between"><div class="rating-content"><p class="product-rating"> 
                  <p class="product-stars">
                    <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
                  </p> 
                  <p class="based-on">
                    بناء على 12 تقييمات
                  </p>
                </div>
                <div class="RateProgress">
                  <div class="progress-br" style="width: 100%;">
                    <b-progress class="" value="9" max="10"></b-progress>
                    <span>5</span>
                  </div>
                  <div class="progress-br" style="width: 100%;">
                    <b-progress class="" value="8" max="10"></b-progress>
                    <span>4</span>
                  </div>
                  <div class="progress-br" style="width: 100%;">
                    <b-progress class="" value="2" max="10"></b-progress>
                    <span>3</span>
                  </div>
                  <div class="progress-br" style="width: 100%;">
                    <b-progress class="" value="1" max="10"></b-progress>
                    <span>2</span>
                  </div>
                  <div class="progress-br" style="width: 100%;">
                    <b-progress class="" value="0" max="10"></b-progress>
                    <span>1</span>
                  </div>
                </div>
                </div>
                </div>
                <div class="col-sm-6">
                  <ul class="list-unstyled" style="padding: 0;">
                    <b-media tag="li">
                      <template #aside>
                        <b-img blank blank-color="#abc" width="64" class="RateOneImg" alt="placeholder"></b-img>
                      </template>
                      <h5 class="mt-0 mb-1">Carol R. Spearman</h5>
                      <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
                      <p class="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, 
                      </p>
                    </b-media>

                    <b-media tag="li" class="my-4">
                      <template #aside>
                      <b-img blank blank-color="#cba" width="64" class="RateOneImg"  alt="placeholder"></b-img>
                      </template>

                      <h5 class="mt-0 mb-1">Michael Y. Lowman</h5>
                      <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
                      <p class="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                      </p>
                    </b-media>
                    <b-media tag="li" class="my-4">
                      <template #aside>
                      <b-img blank blank-color="#cba" width="64" class="RateOneImg"  alt="placeholder"></b-img>
                      </template>

                      <h5 class="mt-0 mb-1">Michael Y. Lowman</h5>
                      <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
                      <p class="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                      </p>
                    </b-media>

                    <b-media tag="li">
                      <template #aside>
                        <b-img blank blank-color="#bac" width="64" class="RateOneImg"  alt="placeholder"></b-img>
                      </template>

                      <h5 class="mt-0 mb-1">Thomas C. Miller</h5>
                      <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
                      <p class="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in vulputate at, 
                      </p>
                    </b-media>
                  </ul>
                </div>
              </div>

          </div>
          <div class="tab-pane fade" id="QA" role="tabpanel" aria-labelledby="QA-tab">helllllllllllo4</div>
        </div>
        <!-- Prod nav Tabs End -->
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
}

.Qty p {

  margin: 0 8px;

}

.vue-star-rating .sr-only{
  left:unset !important;
}

.ProdMetaList{
  padding: 0;
}
.nav-item a{

  color:#fe6a00;
  font-weight: bold;
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

</style>