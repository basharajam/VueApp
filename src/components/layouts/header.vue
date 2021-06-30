<template>
  <div class="alheader">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      

        <a class="navbar-brand "  href="https://alyaman.com">
          <img  src="icon.png" alt="" style="max-width: 175px;">
        </a>
        
          <div class="SearchSection">
            <i v-if="search" class="fas fa-search SearchIcon"></i>
            <input class="form-control mr-sm-2 SearchInput" v-on:input="SearchRequest" v-on:focus="hideIcon()" v-model="SearchInput" type="search" placeholder="          Search"  aria-label="Search">
          </div>

          <a href="#" class="d-inline-block d-sm-none" style="margin: 0 12px;font-size: 24px;"> <i class="fa fa-globe" ></i></a>

            <div class="HeaderIcons d-none d-sm-inline-block col-sm-2 pull-left">
              <a href="#"><i class="fas fa-user"></i></a>
              <a href="#"> <i class="fal fa-shopping-cart"></i></a>
              <a href="#"> <i class="fa fa-globe" ></i></a>
            </div>
    </nav>
                <div class="SearchResult" v-if="SearchRes">
                  <div class="media" v-for="Prod in SearchResArr" v-bind:key="Prod.id">
                    <a :href="Prod.url" target="_blank">
                     <img class="mr-3" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a57728259%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a57728259%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image">
                    </a>
                    <div class="media-body">
                      <a  :href="Prod.url" target="_blank" >
                        <h5 class="mt-0">{{  Prod.title }}</h5>

                      </a>
                      
                    </div>
                  </div>
                  <!-- <div class="media">
                    <img class="mr-3" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a57728259%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a57728259%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image">
                    <div class="media-body">
                      <h5 class="mt-0">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div class="media">
                    <img class="mr-3" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a57728259%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a57728259%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image">
                    <div class="media-body">
                      <h5 class="mt-0">Media heading</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                  </div> -->
                    <!-- <div class="ShowMoreResBtn">
                      <button >عرض المزيد</button>
                    </div> -->
            </div>
    <div class="CatNavLinks scrollmenu">
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
        search:true,
        SearchResArr:[]
      }

    },
    methods:{
         SearchRequest: _.debounce(function(){
           
           var value=this.SearchInput;

           if(value != ''){

             //hide Search Icon
             this.search = false
             //Display Search Result List 
             this.SearchRes=true

             //Do Request 
             axios.get('https://alyaman.com/wp-json/wp/v2/search/?term="'+value+'"&subtype=product').then((response) =>{

              console.log(response)
              if(response.status != 200){
                  
                  console.log('baddddddddd')


              }
              else{

                //fetch Data in Search Result List 
                this.SearchResArr=response.data
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
         },2000)
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
    .SearchInput:focus + .SearchIcon{
      display: none;
  }
  .SearchIcon{
    position: relative;
    right: 25px;
    top: 32px;
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

</style>

