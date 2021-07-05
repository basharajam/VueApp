<template>
  <div class="alheader">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
        <a class="navbar-brand "  href="https://alyaman.com">
          <img  src="icon.png" alt="" >
        </a>
        
          <div class="SearchSection">
            <i v-if="search" class="fas fa-search SearchIcon"></i>
            <input class="form-control mr-sm-2 SearchInput" v-on:input="SearchRequest" v-on:focus="hideIcon()" v-model="SearchInput" type="search" placeholder="          Search"  aria-label="Search">
          </div>
          <div class="HeaderIcons d-none d-sm-inline-block col-sm-2 pull-left">
            <a href="#"><i class="fas fa-user"></i></a>
            <a href="#"> <i class="fal fa-shopping-cart"></i></a>
            <a href="#"> <i style="color:black" class="fa fa-globe" ></i></a>
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
    <div class="CatNavLinks scrollmenu" style="overflow-y: hidden !important">
        <a href="https://alyaman.com/shop/"> الكل </a>
        <a v-for="Category in Categories" v-bind:key="Category.id" :href="'https://alyaman.com/product-category/'+Category.slug" > {{ Category.name }} </a>
  </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import _ from 'lodash'
import axios from 'axios';


export default {
    name:'alheader',
    computed:{
      ...mapGetters(['Categories'])
    },
    data(){

      return{

        SearchInput:"",
        SearchRes:false,
        innerSpinner:true,
        search:true,
        NotFoundErr:false,
        SearchResArr:[]
      }

    },
    methods:{
         SearchRequest: _.debounce(function(){
           
           var value=this.SearchInput;
          this.SearchResArr=[];
           if(value != ''){

             //hide Search Icon
             this.search = false
             //Display Search Result List 
             this.SearchRes=true
             this.innerSpinner=true
             this.NotFoundErr=false;

             //Do Request 
            //  "https://alyaman.com/wp-json/wc/v3/products/?search="+value
             axios.get("https://alyaman.com/wp-json/wc/v3/products/?search="+value+"&per_page=4").then((response) =>{

              console.log(response)
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
                console.log(response)
                
              }
               console.log(response.data)

             })
             


             return 'done';

           }
           else{

             //Display Search Icon
             this.search = true
             //Hide Search Result List
             this.SearchRes=false
           }
         },1000)
         ,
         hideIcon(){
           this.search = false
         }
    }
    



}
</script>

<style lang="css" scoped>

  .CatNavLinks{
    padding: 10px 0;
    font-size: 14px;
    background: white;
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
    padding: 16% 0px;
  }

  .HeaderIcons a{
    margin: 0px 12px;
    color: black;
    font-size: 26px;
  }
  .HeaderIcons a:hover{
    color: #fe6a00;
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

  .SearchResult .media{
    margin:12px  0;
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

