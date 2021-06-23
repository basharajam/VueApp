<template>
  <div class="alheader">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      

        <a class="navbar-brand "  href="https://alyaman.com">
          <img  src="icon.png" alt="" style="max-width: 175px;">
        </a>
        
          <div class="SearchSection">
            <i class="fas fa-search SearchIcon"></i>
            <input class="form-control mr-sm-2 SearchInput" type="search" placeholder="          Search"  aria-label="Search">
          </div>

            <div class="HeaderIcons d-none d-sm-inline-block col-sm-2 pull-left">
              <a href="#"><i class="fas fa-user"></i></a>
              <a href="#"> <i class="fas fa-shopping-cart"></i></a>
              <a href="#"> <i class="fa fa-globe" ></i></a>
            </div>
      
      

    </nav>
    <div class="CatNavLinks scrollmenu">
        <a href="https://alyaman.com/shop/"> الكل </a>
        <a v-for="Category in Categories" v-bind:key="Category.id" :href="'https://alyaman.com/product-category/'+Category.slug" > {{ Category.name }} </a>
  </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name:'alheader',
    computed:{
      ...mapGetters(['Categories'])
    }
    



}
</script>

<style lang="css" scoped>

  .CatNavLinks{
      margin: 15px 0;
      font-size: 20px;
  }
  .CatNavLinks::-webkit-scrollbar {
      display: none;
  }
  .CatNavLinks a {
      padding: 4px;
      margin: 0 6px;
      color: black;
  }
  .CatNavLinks a:hover {
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

</style>

