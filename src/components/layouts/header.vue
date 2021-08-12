<template>
  <div class="alheader">
        <div class="headerTop" >
          <div class="headerTopLinks d-flex" v-if="$mq === 'md' || $mq === 'lg' ">
            <a href="#"> تسجيل حساب </a>
            <a href="#"> كيفية الشراء </a>
            <a href="#"> شروط الخصوصية </a>
            <a href="#"> من نحن </a>
          </div>
                
                <div class="headerDrp d-flex align-items-center " v-if="$mq === 'sm'">
                          <b-dropdown id="dropdown-1"  variant="none" class="ShipBtn" no-flip no-caret>
                                <template #button-content>
                                    <div class="d-flex align-items-center">
                                      <div class="stack" style="color: white; flex-direction:row;align-items: flex-end; margin-left: 10px;display: flex;">
                                          <span style="font-size: 12px;margin: 0 6px;"> الشحن إلى :</span>
                                          <span style="font-weight: bold;font-size: 12px"> {{SelectedCountryText}}</span>
                                      </div>
                                      <div style="color: white;width: 0px;height: 0px;border-left: 6px solid transparent;border-right: 6px solid transparent;border-top: 6px solid"></div>
                                    </div>
                                </template>
                            <b-dropdown-form @submit.prevent="UpdateCurSubmit()" >
                                <b-form-group label="العملة" >
                                    <b-form-select v-model="CurrInput" size="sm" :options="CurOptions"></b-form-select>
                                </b-form-group>

                                <b-form-group label="الشحن الى" >
                                    <b-form-select v-model="CountryInput" size="sm" :options="CountryOptions"></b-form-select>
                                </b-form-group>
                                <b-form-group>
                                  <b-button type="submit" block pill variant="outline-warning">حفظ</b-button>
                                </b-form-group>
                            </b-dropdown-form>
                          </b-dropdown>
                    <!-- <a style="color:white" @click="SetLang()" >اللغة</a> -->
              </div>
        </div>
    <nav class="navbar fixed-top navbar-expand-lg sticky-top "  style="    border-bottom: 1px #d1d1d1d1 solid;">
        <a class="navbar-brand "  href="https://alyaman.com" aria-label="Al-yaman">
          <img  src="icon.png" alt="" >
        </a>
        
          <div class="SearchSection col-sm-4 col-7">
            <!-- <i v-if="search" class="fas fa-search SearchIcon"></i> -->
            <input class="form-control mr-sm-2 SearchInput" v-on:input="SearchRequest" v-on:focus="hideIcon()" v-on:focusout='search=true' v-model="SearchInput" type="search" placeholder="          بحث"  aria-label="Search">
          </div>
          <div class="headerDrp col-sm-2 " v-if="$mq === 'md' || $mq === 'lg' ">
                    <b-dropdown id="dropdown-1"  variant="none" class="m-2 ShipBtn " no-flip no-caret>
                          <template #button-content>
                              <div class="d-flex align-items-center">
                                <country-flag country='sa' size='normal' v-if="CountryVal0 ==='SA'"/>
                                <country-flag country='ye' size='normal' v-if="CountryVal0 ==='YE'"/>
                                <country-flag country='om' size='normal' v-if="CountryVal0 ==='OM'"/>
                                <country-flag country='lb' size='normal' v-if="CountryVal0 ==='LB'"/>
                                <country-flag country='iq' size='normal' v-if="CountryVal0 ==='IQ'"/>
                                <country-flag country='ae' size='normal' v-if="CountryVal0 ==='AE'"/>
                                <country-flag country='ps' size='normal' v-if="CountryVal0 ==='PS'"/> 
                                <div class="stack" style="flex-direction: column;align-items: flex-end; margin-left: 10px;display: flex;">
                                    <span>الشحن إلى</span>
                                    <span style="font-weight: bold;font-size: 20px;"> {{SelectedCountryText}}</span>
                                </div>
                                <div style="width: 0px;height: 0px;border-left: 6px solid transparent;border-right: 6px solid transparent;border-top: 6px solid"></div>
                              </div>
                          </template>
                      <b-dropdown-form @submit.prevent="UpdateCurSubmit()" >
                          <b-form-group label="العملة" >
                              <b-form-select v-model="CurrInput" size="sm" :options="CurOptions"></b-form-select>
                          </b-form-group>

                          <b-form-group label="الشحن الى" >
                              <b-form-select v-model="CountryInput" size="sm" :options="CountryOptions"></b-form-select>
                          </b-form-group>
                          <b-form-group>
                            <b-button type="submit" block pill variant="outline-warning" style="background-color: unset !important">حفظ</b-button>
                          </b-form-group>
                      </b-dropdown-form>
                    </b-dropdown>
              <!-- <a >اللغة  
                  <span>
                    <b-dropdown id="dropdown-2" text=" العربية" variant="link" class="m-2 ShipBtn ">
 
                    </b-dropdown>
                </span>
              </a> -->
          </div>
          <div class="HeaderIcons d-none d-sm-inline-flex" style="position: absolute;left: 0;">
            <!-- <div class="HeaderDivider"></div> -->
            <a href="https://alyaman.com/my-account/" aria-label="حسابي"><i class="fal fa-user"></i></a>
            <div class="HeaderDivider"></div>
            <a href="https://alyaman.com/cart/" aria-label="سلة التسوق"> <i class="fal fa-shopping-cart"> </i> <span class="CartCount" v-if="this.$cookies.get('gift_cart_counter') !=null && this.$cookies.get('gift_cart_counter') > 0" ><span v-if="this.$cookies.get('gift_cart_counter') !=null && this.$cookies.get('gift_cart_counter') > 0" >{{ this.$cookies.get('gift_cart_counter') }}</span></span> </a>
            <!-- <a href="#"> <i style="color:black" class="fa fa-globe" ></i></a> -->
          </div>

    </nav>
                <div class="SearchResult" v-if="SearchRes">
                  <div v-if="innerSpinner" class="innerSpinner">
                    <img src="spinner.png" class="innerSpinner0"> 
                  </div>
                  <div class="media" v-for="Prod in SearchResArr" v-bind:key="Prod.id">
                    <div class="media-body">
                      <a  :href="Prod.permalink" target="_blank" >
                        <h5 class="mt-0 SearchResTitle">{{  Prod.name }}</h5>
                      </a>
                      
                    </div>
                  </div>
                  <div v-if="NotFoundErr" class="NotFoundSearch text-center">
                      <span >عذرا المنتج غير موجود حاليا</span>
                  </div> 
                    <!-- <div class="ShowMoreResBtn">
                      <button >عرض المزيد</button>
                    </div> -->
            </div>
    <div class="CatNavLinks scrollmenu d-flex" style="overflow-y: hidden !important">
        <a href="https://alyaman.com/shop/"> الكل </a>
        <a v-for="Category in Categories" v-bind:key="Category.id" :href="'https://alyaman.com/product-category/'+Category.slug" > {{ Category.name }} </a>
  </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import CountryFlag from 'vue-country-flag'
import _ from 'lodash'
import axios from 'axios';


export default {
    name:'alheader',
    computed:{
      ...mapGetters(['Categories']),
      ...mapActions(['getProdByTax']),
    },
    components:{
      CountryFlag
    },
    data(){

        var CountryVal= this.$cookies.get('shipCountry');
        var CurrVal = this.$cookies.get('Curr');
        // console.log(CountryVal)
        // console.log(CurrVal);

        if(CountryVal && CurrVal){

          var CurrVal0=CurrVal;
          var CountryVal0=CountryVal;
          var CountryValText;
          switch(CountryVal) {
            case "SA":
               CountryValText='السعودية'
                break;
            case "OM":
               CountryValText='سلطنة عمان'
                break;
            case "YE":
               CountryValText='اليمن'
                break;
            case "LB":
               CountryValText='لبنان'
                break;
            case "IQ":
               CountryValText='العراق'
                break;
            case "AE":
               CountryValText='الامارات'
                break;
            case "PS":
               CountryValText='فلسطين'
                break;
            default:
               CountryValText='السعودية'
          }

          

        }
        else{
           CurrVal0='SAR';
           CountryVal0='SA';
           CountryValText='السعودية';
        }

      return{

        SearchInput:"",
        SearchRes:false,
        innerSpinner:true,
        search:true,
        NotFoundErr:false,
        SearchResArr:[],
        elementVisible: false,
        CountryInput:CountryVal0,
        CountryVal0:CountryVal0,
        CurrInput:CurrVal0,
        SelectedCountryText:CountryValText,
        CountryOptions:{
            SA:"السعودية",
            OM:"سلطنة عمان",
            YE:"اليمن",
            LB:"لبنان",
            IQ:"العراق",
            AE:"الامارات",
            PS:"فلسطين"
        },
        CurOptions:{
            CNY:"اليوان الصيني",
            SAR:"الريال السعودي",
            AED:"الدرهم الاماراتي",
            OMR:"الريال العماني",
            USD:"الدولار الاميركي"
        }
      }

    },
    methods:{
         SearchRequest: _.debounce(function(){
           
           this.hideIcon();

           var value=this.SearchInput;
           var valLength = value.length;
          this.SearchResArr=[];
           if(value != '' && valLength > 2){

             //hide Search Icon
             this.search = false
             //Display Search Result List 
             this.SearchRes=true
             this.innerSpinner=true
             this.NotFoundErr=false;

             //Do Request 
            //  "https://alyaman.com/wp-json/wc/v3/products/?search="+value
             axios.get("https://alyaman.com/wp-json/wc/v3/products/?search="+value+"&per_page=4").then((response) =>{

              if(response.status != 200){
                  console.log('baddddddddd')
              }
              else{
                //hide Inner Spinner
                this.innerSpinner=false
                //fetch Data in Search Result List 
                this.SearchResArr=response.data
                if(this.SearchResArr.length === 0){
                  this.NotFoundErr=true;
                }
                else{
                  this.NotFoundErr=false;
                }
              }
             })
             return 'done';

           }
           else{

             //Display Search Icon
             //  this.search = true
             //Hide Search Result List
             this.SearchRes=false
           }
         },1000)
         ,
         hideIcon(){
           this.search = false
         },
         UpdateCurSubmit(){

           console.log('Clicked')
           
           //Do Request To Get New Data ---later
           //this.getProdByTax();
           
            //Display Spinner 

           //Hide Spinner 

           //Save New Cookie With values 
           this.$cookies.set('shipCountry',this.CountryInput);
           this.$cookies.set('Curr',this.CurrInput);

            // Refresh The Page
            window.location.reload()
            //this.$forceUpdate();
         },
        //  SetLang(){
        //    window.location.reload()
        //  }
    }
    

}
</script>

<style lang="css" scoped>


  .SearchSection {
    position: relative;
    top:3px;
  }

  .CatNavLinks{
    padding: 10px 0;
    font-size: 14px;
    background: white;
    /* background: #232f3e; */
    min-width: 100%;
    margin-bottom: 0px !important;
  }
  .CatNavLinks::-webkit-scrollbar {
      display: none;
  }
  .CatNavLinks a {
      padding: 4px;
      margin: 0 2px;
      color: #808080;
      /* color: white; */
      font-weight: 600
  }
  .CatNavLinks a:active {
       color: #fe6a00;
       border-bottom: 12px #fe6a00 solid;
  }

  .navbar{
            padding: 10px 5px 8px 5px;
  }
  .bg-light{
    background-color: #fff !important;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 0px;

  }
  .SearchInput{
        border-radius: 25px;
  }
  .SearchInput:focus{
    border-color:#fe6a0036 !important ;
    box-shadow: 0 0 0 0.2rem #fe6a0036;
  }
  .SearchResImg{
    max-width: 40%;
    height: auto;
  }

  .SearchResImg img{
    width: 90%;
    height: auto;
  }
    .SearchInput:focus + .SearchIcon{
      display: none;
  }
  .SearchIcon{
    position: relative;
    right: 25px;
    top: 32px;
  }

  .SearchResTitle{
    font-size: 10px;
    color: #000;
    padding-bottom: 6px;
    border-bottom:1px #f6601a  solid;
  }

  .HeaderIcons a{
    margin: 0px 16px;
    color: #fe6a00;
    /* color: white; */
    font-size: 26px;
  }
  .HeaderIcons a:hover{
    color: black;
    /* color: #fe6a00; */
  }
  .HeaderDivider{
    border-left: 1px solid #d1d3d4;
    height: 42px;
  }

  .SearchResult{
        width: 32%;
    position: absolute;
    left: 100px;
    background: white;
    padding: 16px;
    z-index: 990;
    margin: 20px 0;
    border: 1px rgb(238, 238, 238) solid;
    border-radius: 20px;
    box-shadow: 5px 10px 30px rgb(0 0 0 / 10%);
    transition:all .4s ease 0s
  }

  .SearchResult .media .media-body{
        margin: 0 16px;
  }

  .ShowMoreResBtn{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
  }

  .ShowMoreResBtn button {
        border-radius: 32px;
        padding: 8px;
        background: white;
        border: 1px #fa660d solid;
        color: #fa660d;
  }

  .headerTop{
    background: #2f2f2f;
  }

  /* .stack{
    color: white;
  } */

  .headerTop div div button{
      margin: 0;
  }

.headerTopLinks a{
    color: white;
    font-size: 16px;
    margin: 6px;
    font-weight: 600;
}

  .innerSpinner0 {
    width: 20%;
    text-align: center;
    position: relative;
    padding: 16px;
    top: 50%;
    left: 50%;
    bottom: 50%;
    right: 40%;
    z-index: 999;
    -webkit-animation: spin-data-v-c4c7653a 4s linear infinite;
    animation: spin-data-v-c4c7653a 4s linear infinite;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }



@media only screen  and (max-width:720px){

.HeaderIcons {
  display: none !important;
}
}



</style>

