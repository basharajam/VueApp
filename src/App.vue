<template>
  <div id="app">

    <Header />
    <router-view />
    <Footer  />

  </div>
</template>

<script>

import Header from './components/layouts/header.vue';
import Footer from './components/layouts/footer.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods:{
    ...mapActions(['getCategories','getProdByTax','getProdByTax0','getProdByTax1','getProdByTax2','getProdByTax3','getProdByTax4','getRecentProd','getProdOffers','getProdBestSell','getProdByBox','getProdDecRope','getProdDecTag','getProdDecSticker','getProdDecIns']),
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

        //get Products By Tax 1
       this.getProdByTax1();

        //get Products By Tax 2
       this.getProdByTax2();

       //get Products By Tax 3
       this.getProdByTax3();

       //get Products By Tax 4
       this.getProdByTax4();



  }

}
</script>

<style>


.TitleList{
   margin: 75px 0 12px 0px;
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

@media only screen and (min-width: 768px) {

  .HomeListLogo{

    max-width: 65px!important;

  }
  .scrollmenu {
    overflow: hidden;
    white-space: break-spaces;
    float: right;
}
.navbar-light .navbar-brand {
    margin-left: 640px;
}


.Cart-Slide-item {
      margin: 0 50px;

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
    max-width: 165px;
    position: relative;
    bottom: 10px;
  }



}

</style>
