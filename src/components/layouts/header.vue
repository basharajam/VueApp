<template>

  
  <div class="alheader">
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
            </div>
    <div class="CatNavLinks scrollmenu d-flex" style="overflow-y: hidden !important">
        <a @mouseover="AllCatClicked()" v-if="$mq === 'md' || $mq === 'lg'" > كل التصنيفات </a>
        <a  v-if="$mq === 'sm'" href="https://www.alyaman.com/shop" > كل التصنيفات </a>
        <router-link :to="{ name:'ProdByCat', params:{ ProdByCat:Category.name } }" v-for="Category in Categories.Categories" v-bind:key="Category.id"> {{ Category.name }} </router-link>
    </div>

    <!-- Category Dropdown  -->
    <div class="CatDrp d-flex flex-row position-absolute" style="z-index:996" v-if="CatDrp" @mouseleave="AllCatClicked()" @mousewheel="AllCatClicked()" >
        <!-- main -->
        <b-card
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            <ul class="list-unstyled DrpCatList">
              <li v-for="Category in Categories.Categories" v-bind:key="Category.id" @mouseover="CatDrpSubActivate(Category)" >
                <router-link :to="{ name:'ProdByCat' }">
                  {{Category.name}}
                </router-link>
              </li>
            </ul>
          </b-card-text>
        </b-card>

        <!-- Sub  -->
        <b-card
          style="max-width: 20rem;"
          class="mb-2"
          
          v-if="CatDrpSub"
        >
          <b-card-text>
            <ul class="list-unstyled DrpCatList">
              <li v-for="CategorySub in CatDrpSubArr" v-bind:key="CategorySub.name" >
                <router-link :to="{ name:'ProdByCat' }" >
                  {{CategorySub.name}}
                </router-link>
              </li>
            </ul>
          </b-card-text>
        </b-card>

    </div>
    <div class="CatDrpOverlay" @mouseover="AllCatClicked()" v-if="CatDrp"></div>
  <!-- Category Dropdown End -->




  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
// import CountryFlag from 'vue-country-flag'
import _ from 'lodash'
import axios from 'axios';


export default {
    name:'alheader',
    computed:{
      ...mapGetters(['Categories']),
      ...mapActions(['getProdByTax']),
    },
    components:{
      // CountryFlag

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
        CatDrp:false,
        CatDrpSub:false,
        CatDrpSubArr:[],
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
           this.$cookies.set('wmc_current_currency',this.CurrInput);
           this.$cookies.set('wmc_current_currency_old',this.CurrInput);


            // Refresh The Page
            window.location.reload()
            //this.$forceUpdate();
         },
        //  SetLang(){
        //    window.location.reload()
        //  }

        AllCatClicked:function(){

          //Toggle DropDown Display
          console.log('All Cat Clicked')
          this.CatDrp = !this.CatDrp;

        },
        CatDrpSubActivate:function(Category){

          //Toggle Sub DropDown Display
          this.CatDrpSub = true;

          //Pass Sub Cats To SubCats Arr 
          this.CatDrpSubArr=Category.sub
          
        }
    }
    

}
</script>

<style lang="css" scoped>


  .SearchSection {
    position: relative;
    top:3px;
  }

  .CatNavLinks{
    padding: 4px 0;
    font-size: 14px;
    background: white;
    min-width: 100%;
    margin-bottom: 0px !important;
  }
  .CatNavLinks::-webkit-scrollbar {
      display: none;
  }
  .CatNavLinks a{
      padding: 4px;
      margin: 0 2px;
      color: #808080;
      /* color: white; */ 
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

  .CatDrpOverlay{
      position: fixed;
      background: #00000066;
      width: 100%;
      height: 100%;
      z-index: 991;
  }
  .DrpCatList li a{
    color: black;

  }
  .DrpCatList li a:hover{
    color: #fa660d;
    text-decoration: none;
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

