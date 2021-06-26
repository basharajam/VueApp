<template>
  <div id="app">

    <Spinner v-if="spinner" />
    <Header />
    <router-view />
    <Footer  />

  </div>
</template>

<script>

import Header from './components/layouts/header.vue';
import Footer from './components/layouts/footer.vue';
import Spinner from './components/layouts/spinner.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Spinner
  },
  methods:{
    ...mapActions(['getCategories','getProdByTax','getProdByTax0','getProdByTax1','getProdByTax2','getProdByTax3','getProdByTax4','getProdByTax5','getProdByTax6','getRecentProd','getProdOffers','getProdMostPopular','getProdBestSell','getProdByBox','getProdDecRope','getProdDecTag','getProdDecSticker','getProdDecIns']),

    hideSpinner(){
      return this.spinner = false;
    }
  },
data: function() {
    return {
      spinner:false
    };
  },
  mounted(){

    //State Actions 


 

      // //get ProdDecRope
      // this.getProdDecRope();

      // //get prodDecSticker
      // this.getProdDecSticker();

      // //get getProdDecIns
      // this.getProdDecIns();

      // //get getProdDecTag
      // this.getProdDecTag();





      //get Categories 
      this.getCategories();

      //get getRecentProd
      this.getRecentProd();

      //get Offers Prods
      this.getProdOffers();


      //get Products By Tax
      this.getProdByTax();

      //get Products By Tax
      this.getProdByTax0();

       //get ProdsByBox
       this.getProdByBox();

       //get Products Best Sell
       this.getProdBestSell();

        //get Product Most Popular
       this.getProdMostPopular();

        //get Products By Tax 1
       this.getProdByTax1();

        //get Products By Tax 2
       this.getProdByTax2();

       //get Products By Tax 3
       this.getProdByTax3();

       //get Products By Tax 4
       this.getProdByTax4();

       //get Products By Tax 5
       this.getProdByTax5();

      //get Products By Tax 6
       this.getProdByTax6();

      //Disable Spinner
      setTimeout(() => {
         this.spinner=false
      }, 25500);



  }

}
</script>

<style>


body{

  background-color: #ecececec;

}

.Section{

  padding: 8px 0;

}

.TitleList{  
    /* padding: 12px 0; */
    padding-top: 6px;
    padding-bottom:2px ;
    margin: 6px 0;
    margin-top: 0;
    background-color: white;
    padding-right:4px ;
    padding-left: 4px;
    min-height: 100% impr !important;
}

.SearchSection{
position: relative;
    bottom: 10px;
}

.scrollmenu {

  overflow: auto;
  white-space: nowrap;
}

.ProdList{
  margin-bottom: 34px;
  
}

.scrollmenu .ProdCard {
  display: inline-block;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

.scrollmenu {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
          width:100%;
}

.scrollmenu::-webkit-scrollbar {
  display: none;
}
.product-grid .product-image img[data-v-3afc3ba6] {
    max-height: 500px;
}

 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: #fe6a00;
 }

.ShowMoreBtn{

    padding: 6px;
    border:1px #fe6a00 solid;
    border-radius: 5px;
    
}

.ShowMoreBtn a {
 color:#fe6a00 ;
}


@media only screen and (min-width: 768px) {

  .HomeListLogo{

    max-width: 65px!important;

  }
  .scrollmenu {
    overflow: hidden;
    white-space: break-spaces;
    float: right;
    margin-bottom: 50px;
}
.navbar-light .navbar-brand {
    margin-left: 640px;
}


.Cart-Slide-item {
      margin: 0 50px;

}

.GridItem{
      margin: 23px 0 !important;
}

}

@media only screen and (max-width: 425px) {

  .navbar-brand img {
        max-width: 124px !important;
  }

  .HomeListLogo{

        max-width: 40px !important;
  }
  .product-grid .product-image img {
    height: 297px !important;
}
  .CatNavLinks{
    overflow-y: scroll;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
  }
  .SearchSection{
    max-width: 210px;
    position: relative;
    bottom: 10px;
  }

  .homeListItem .content{

    font-size: 10px;

  }

  .card-discount-label{
      font-size: 12px !important;
  }


.product-grid .product-image:hover + .product-data {

    
    transform: translateY(-115%) !important;
    /* color:white !important; */

}

.Cat-Slide-item-img {
    max-width: 80px !important;
        margin: 0 10px !important;
}

.mobileBanner{

min-height: 300px !important;

}

.spinner{

  right: 42% !important;

}

.GridItem{
    padding-right: 5px;
    padding-left: 5px;
}


}

</style>
