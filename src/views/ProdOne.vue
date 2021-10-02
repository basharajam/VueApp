<template>
  <div class="ProdOne">
      <h5 style="text-align:start">الرئيسية / التصنيف / تصنيف / اسم المنتج   </h5>

        <div class="row">
            <!-- Prod Inf  -->
            <div class="col-sm-6">
              <ImgScrollerProd v-bind:gallery='ProdOne.images' />
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
                  {{ ProdOne.regular_price }} <span>ر.س</span>
                </div>
              </div>
              <div class="Qty d-flex">
                <input type="number" class="form-control col-sm-3" value="60">
                <b-link >إضافة الى سلة التسوق</b-link>
                <p>الحد الادنى للطلب 60 قطعة</p>
              </div>

            </div>
            <!-- Prod Inf End  -->
        </div>

        <div class="row">
          <div class="col-sm-12" style="text-align: start;" v-if="$mq === 'md' || $mq === 'lg'">
            <b-tabs content-class="mt-3" fill>
              <b-tab title="وصف المنتج" active>
                  <h4>{{ProdOne.name}} :</h4>
                  <p>المنتج أو المنتوج هو لفظة عامة تشمل كل ما يصنع أو ينتج بغرض البيع والتسويق والتصدير للأفراد الصناعية
                    المنتج أو المنتوج هو لفظة عامة تشمل كل ما يصنع أو ينتج بغرض البيع والتسويق والتصدير للأفراد الصناعية
                    المنتج أو المنتوج هو لفظة عامة تشمل كل ما يصنع أو ينتج بغرض البيع والتسويق والتصدير للأفراد الصناعية
                  </p>
              </b-tab>
              <b-tab title="معلومات عن المنتج">
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
              </b-tab>
              <b-tab title="التقييمات">  
                <div class="row">
                  <div class="col-sm-6">
                    <div class="d-flex flex-column">
                      <div class="d-flex">
                        <div class="rating-content">
                          <p class="product-rating"> 
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
                      <div class="RateForm">
                        <b-form @submit.stop.prevent="onRateSubmit">
                          <b-form-group id="name-live-feedback" label-for="name-live-feedback">
                            <b-form-input
                              id="name-live-feedback"
                              name="name-live-feedback"
                              v-model="$v.form.name.$model"
                              :state="validateState('name')"
                              aria-describedby="name-live-feedback"
                            ></b-form-input>

                            <b-form-invalid-feedback
                              id="name-live-feedback"
                            >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
                          </b-form-group>

                          <b-form-group>
                              <star-rating :rating="5" :increment='0.01' :read-only="false" :star-size="24" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
                          </b-form-group>
                          
                          <b-form-group id="desc-live-feedback" label-for="desc-live-feedback" >
                            <b-form-textarea
                              id="textarea"
                              placeholder="Enter something..."
                              rows="6"
                              max-rows="6"
                              :state="validateState('desc')"
                              v-model="$v.form.desc.$model"
                              aria-describedby="desc-live-feedback"
                            ></b-form-textarea>
                            <b-form-invalid-feedback
                              id="desc-live-feedback"
                            >This is a required field and must be at least 8 characters.</b-form-invalid-feedback>
                          </b-form-group>
                          <b-button type="submit" variant="primary">Submit</b-button>
                        </b-form>
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
              </b-tab>
              <b-tab title="  الأسئلة والأجوبة">
                <p>I'm the second tab</p>
              </b-tab>
            </b-tabs>
          </div>
         
        

          <div class="col-12  d-block d-sm-none">
              <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div  v-b-toggle.accordion-1 variant="link">وصف المنتج
                        <span class="when-opened">
                          <i class="fas fa-chevron-up"></i>
                        </span>
                        <span class="when-closed">
                          <i class="fas fa-chevron-down"></i>
                        </span>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <h4>{{ProdOne.name}} :</h4>
                      <p>المنتج أو المنتوج هو لفظة عامة تشمل كل ما يصنع أو ينتج بغرض البيع والتسويق والتصدير للأفراد الصناعية
                        المنتج أو المنتوج هو لفظة عامة تشمل كل ما يصنع أو ينتج بغرض البيع والتسويق والتصدير للأفراد الصناعية
                        المنتج أو المنتوج هو لفظة عامة تشمل كل ما يصنع أو ينتج بغرض البيع والتسويق والتصدير للأفراد الصناعية
                      </p>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div  v-b-toggle.accordion-2 variant="link">معلومات المنتج
                      <span class="when-opened">
                          <i class="fas fa-chevron-up"></i>
                        </span>
                        <span class="when-closed">
                          <i class="fas fa-chevron-down"></i>
                      </span>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
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
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div v-b-toggle.accordion-3 variant="link" >التقييمات 
                           <span class="when-opened">
                              <i class="fas fa-chevron-up"></i>
                            </span>
                            <span class="when-closed">
                              <i class="fas fa-chevron-down"></i>
                            </span>
                    </div>
                  </b-card-header>
                  <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                     <div class="row">
                      <div class="col-sm-6">
                        <div class="d-flex flex-column">
                          <div class="d-flex">
                            <div class="rating-content">
                              <p class="product-rating"> 
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
                          <div class="RateForm">
                            <b-form @submit.stop.prevent="onRateSubmit">
                              <b-form-group id="name-live-feedback" label-for="name-live-feedback">
                                <b-form-input
                                  id="name-live-feedback"
                                  name="name-live-feedback"
                                  v-model="$v.form.name.$model"
                                  :state="validateState('name')"
                                  aria-describedby="name-live-feedback"
                                ></b-form-input>

                                <b-form-invalid-feedback
                                  id="name-live-feedback"
                                >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
                              </b-form-group>

                              <b-form-group>
                                  <star-rating :rating="5" :increment='0.01' :read-only="false" :star-size="24" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
                              </b-form-group>
                              
                              <b-form-group id="desc-live-feedback" label-for="desc-live-feedback" >
                                <b-form-textarea
                                  id="textarea"
                                  placeholder="Enter something..."
                                  rows="6"
                                  max-rows="6"
                                  :state="validateState('desc')"
                                  v-model="$v.form.desc.$model"
                                  aria-describedby="desc-live-feedback"
                                ></b-form-textarea>
                                <b-form-invalid-feedback
                                  id="desc-live-feedback"
                                >This is a required field and must be at least 8 characters.</b-form-invalid-feedback>
                              </b-form-group>
                              <b-button type="submit" variant="primary">Submit</b-button>
                            </b-form>
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
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
          </div>


        </div>
  </div>
</template>

<script>

import ImgScrollerProd from '../components/widgets/ImgScrollerProd.vue';
import StarRating from 'vue-star-rating'
import {mapActions,mapGetters} from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

export default {

      components:{
        ImgScrollerProd,
        StarRating,
      },
      computed:{
        ...mapGetters(['ProdOne'])
      },
      data(){

        return  {
          form: {
            name: null,
            food: null,
            desc:null
          }
        }
      },
      validations: {
        form: {
          rate: {
            required
          },
          name: {
            required,
            minLength: minLength(3)
          },
          desc:{
            required,
            minLength:minLength(8)
          }
        }
  },
  methods:{

    ...mapActions(['getProdOne']),
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onRateSubmit(){

      console.log('Rate Clicked')

    }

  },
  mounted(){

    this.getProdOne(10795);

    console.log(this.ProdOne)

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

@media only screen and (min-width:320px) and (max-width: 767px) {

.Qty{
  flex-direction: column !important;
      margin-bottom: 20px;
}

}

</style>