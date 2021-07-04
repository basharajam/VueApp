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
    ...mapActions(['getCategories','getProdByTax','getProdByTax0','getProdByTax1','getProdByTax2','getProdByTax3','getProdByTax4','getProdByTax5','getProdByTax6','getProdByTax7','getRecentProd','getProdOffers','getProdMostPopular','getProdBestSell','getProdByBox','getProdDecRope','getProdDecTag','getProdDecSticker','getProdDecIns']),

    hideSpinner(){
      return this.spinner = false;
    }
  },
data: function() {
    return {
      spinner:true
    };
  },
  mounted(){

    //State Actions 


 

      //get ProdDecRope
      this.getProdDecRope();

      //get prodDecSticker
      this.getProdDecSticker();

      //get getProdDecIns
      this.getProdDecIns();

      //get getProdDecTag
      this.getProdDecTag();





      // get Categories 
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

       //get Products By Tax 7
       this.getProdByTax7();

      //Disable Spinner
      setTimeout(() => {
         this.spinner=false
      }, 25500);



  }

}
</script>

<style>


@font-face{
    font-family:"font";
    src:url("./assets/fonts/font.ttf");
 }


body{
 font-family: 'font';
 text-align: right;
  background-color: #f5f5f5ec;
  /* background-image: url('./assets/patt.png');
  background-repeat: repeat;
  background-blend-mode: hue; */

}


.Section{

  padding: 8px 0;

}

.TitleList{  
    /* padding: 12px 0; */
    padding-top: 6px;
    padding-bottom:10px ;
    margin: 4px 0;
    margin-top: 0;
    background-color: white;
    padding-right:4px ;
    padding-left: 4px;
    min-height: 100% impr !important;
    
}

.TitleList h3 {

  font-size:18px ;
  padding-top: 6px;
  color: black !important
}

.TitleList

.SearchSection{
position: relative;
    bottom: 10px;
}

.scrollmenu {

  overflow: auto;
  white-space: nowrap;
}

.ProdList{
  margin-bottom: 6px;
  
}

.scrollmenu .ProdCard {
  display: inline-block;
  text-align: center;
  padding-top:4px;
  padding-right: 4px;
  padding-left: 4px;
  text-decoration: none;
}

.scrollmenu {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
          width:100%;
}

.carousel-item{
    transition: -webkit-transform .6s ease;
    transition: transform .6s ease;
    transition: transform .6s ease,-webkit-transform .6s ease;
} 



.carousel-control-next-icon, .carousel-control-prev-icon{
      background-color: #fd6906;
}

.scrollmenu::-webkit-scrollbar {
  display: none;
}
/* .product-grid .product-image img[data-v-3afc3ba6] {
    max-height: 500px;
} */

 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: #fe6a00;
 }

.ShowMoreBtn{

    padding: 3px;
    border:1px #fe6a00 solid;
    border-radius: 5px;
    margin-top: 4px;

    
}

.ShowMoreBtn a {
 color:#fe6a00 ;
}


.card-grid .card-image .discount-lab{
  width: 45px;
  height: 45px;

}

.discount-lab{
    color: #fd6906;
    position: absolute;
    top: 16px;
    left: 14px;
    width: 45px;
    height: 45px;
    max-width: 45px;
    text-align: center;
    max-height: 45px;
    border: 1px #fd6906 solid;
    padding: 12px 0;
    border-radius: 999px;
}


.HomeBanner{
    margin-top: 12px;
    margin-bottom: 12px;
}





@media only screen and (min-width:320px) and (max-width:320px){


/* .Cat-Slide-item{

  margin: 6px 26px !important;

} */
.SearchSection{
  max-width: 115px;
  bottom: 0px !important;
}

.Product-content a{
      width: 126px;
   
    padding: 0px;
}

.LinksLists {
  flex-direction: column !important;
}

  .SearchResult{
    width: 100% !important;
    left: 0 !important;
    margin: 10px 0px  !important;
    padding: 5px !important; 
  }
  .HeaderIcons {
  display: none !important;
  }


.al_footer-item{
    margin: 2% 0.4% !important;
}

.discount-lab{
      color: #fd6906;
    position: absolute;
    top: 16px;
    left: 14px;
    width:45px;
    height: 45px;
    max-width: 45px;
    text-align: center;
    max-height: 45px;
    border: 1px #fd6906 solid;
    padding: 12px 0;
    border-radius: 999px;
}

.product-content .add-to-cart{
  width: 92px !important;
  font-size: 8px !important;
}

}

/*   Query Media */




/*Desktop */
@media only screen and  (min-width: 1366px ) and (max-width:1440px){

  .navbar-brand{
      margin-left: 600px;
  }
  .spinner{
    width:8%!important;
    right: 45% !important;
  }

}

@media  only screen and (min-width:1024px) and (max-width:1024px) {

  .spinner{
    width:8%!important;
    right: 45% !important;
  }
  .navbar-brand{
    margin-left: 148px;
  }
  .HeaderIcons a {
    margin: 0px 10px !important;
  }

  .navbar-light .navbar-brand{
      margin-left: 30%;
  }
  .SearchSection{
        position: relative;
    bottom: 8px;
  }
  .HeaderIcons {
        display: flex!important;
  }
  .discount-lab{
        color: #fd6906;
    position: absolute;
    top: 16px;
    left: 14px;
    width: 45px;
    height: 45px;
    max-width: 45px;
    text-align: center;
    max-height: 45px;
    border: 1px #fd6906 solid;
    padding: 12px 0;
    border-radius: 999px;
  } 
}

/* End Desktop */




/* Start Tablet */

@media only screen and  (min-width:768px) and (max-width: 768px){
  .spinner{
    width:8%!important;
  }
  .LinksLists{
    max-width: 100%!important;
  }
  .FooterHeadingContent h3{
    font-size: 60px !important;
    text-align: center;
  }
  .LinkList {
    margin: 0 0 !important;
    padding: 0 32px;
  }
  .LinkList h3 {
    font-size: 2rem !important;
  }
  .LinkList a {
    font-size: 14px !important;
    padding: 5px 0 !important;
  }

  .HeaderIcons {
        display: flex !important;
        justify-content: center;
        margin:6px !important;
  }
  .SearchInput{
        /* bottom: 6px !important; */
        position: relative !important;

  }


  .product-content .add-to-cart {
    font-size: 12px;
  }

  .discount-lab{
    color: #fd6906;
    position: absolute;
    top: 16px;
    left: 14px;
    width: 45px;
    height: 45px;
    max-width: 45px;
    text-align: center;
    max-height: 45px;
    border: 1px #fd6906 solid;
    padding: 12px 0;
    border-radius: 999px;
  }

.product-content .add-to-cart{

    font-size: 8px !important;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 40px;
    width: 96px !important;
    border-radius: 50px;
    padding: 4px !important;
    margin: 14px auto !important;

}

} 


@media only screen and (min-width: 780px) and (max-width:780px) {

  .HomeListLogo{

    max-width: 65px!important;

  }
  .scrollmenu {
    overflow: hidden;
    white-space: break-spaces;
    margin-bottom: 50px;
}
.SearchInput{
  position: relative;
    bottom: 6px;
}


.Cart-Slide-item {
      margin: 0 50px;

}

.GridItem{
      margin: 23px 0 !important;
}

.navbar-light .navbar-brand{
  margin-left: 53%;
}

}

/* End Tablet */


/*  Start Large Phone */
@media only screen and (min-width:425px) and (max-width: 425px) {




.grid-discount .card-grid .card-image .card-discount-label{
    padding: 10px 0px !important;
    max-width: 45px !important;
    max-height: 45px !important; 
  }

  .card-grid .card-image .discount-lab{
    max-width: 45px;
    max-height: 45px;
  }
  .GridItem .card-grid .card-image .card-discount-label{

      padding: 10px 0px;

  }
  .discount-lab{
    color: #fd6906;
    position: absolute;
    top: 16px;
    left: 14px;
    width:45px;
    height: 45px;
    max-width: 45px;
    text-align: center;
    max-height: 45px;
    border: 1px #fd6906 solid;
    padding: 12px 0;
    border-radius: 999px;
  }

  /* .Cat-Slide-item{
        margin: 10px 31px;
  } */
  .navbar-brand img {
        max-width: 124px !important;
  }

  .HomeListLogo{

        max-width: 40px !important;
  }
  /* .product-grid .product-image img {
    height: 297px !important;
} */
  .CatNavLinks{
    overflow-y: scroll;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
  }
  .SearchSection{
    max-width: 170px;
    position: relative;
    bottom: 0px !important;
  }

  .homeListItem .content{

    font-size: 10px;

  }

  /* .card-discount-label{
      font-size: 12px !important;
  } */


.product-grid .product-image:hover + .product-data {

    
    transform: translateY(-115%) !important;
    /* color:white !important; */

}

.Cat-Slide-item-img {
    max-width: 42px !important;
        margin: 0 10px !important;
}

/* .mobileBanner{

min-height: 300px !important;

} */

.spinner{

  right: 42% !important;
  top: 45% !important;

}

.GridItem{
    padding-right: 1px;
    padding-left: 1px;
    display: inline-block;
}


.FooterHeadingContent {
      font-size: 50px !important;
    margin-top: 46px !important;
    text-align: center;
}

.SocialLinks a i {
  padding: 0.3em 0.32em !important;
}

.LinkList h3{
  font-size: 2.25rem !important;
}

.LinkList a{
 font-size: 20px !important;
}

.CopyRightsFooter{

    font-size: 13px !important;
    margin: 20px 0 !important; 
    text-align: center;
}
.HeaderIcons {
  display: none !important;
}
.navbar-brand{
  margin-left: 0;
}

} 

@media only screen and (min-width:412px) and (max-width:428px) {

  .spinner{
    width: 15% !important;
  }

  .al_footer-item{

          margin:2% 3.16% !important

  }

  .LinkList{
        margin: 0px 0px !important;
        padding-bottom:65px ;
  }
  .LinksLists {
  flex-direction: column !important;
  }
  .SearchResult{
    width: 100% !important;
    left: 0 !important;
    margin: 0 0px  !important;
    padding: 5px !important; 
  }
  .navbar-brand img{

    max-width: 105px;
  }
  .SearchSection{
    width: 40%;
  }
  

}

/*End large Phone */


/* Medium Phone */
@media only screen and (min-width:392px) and (max-width:406px){


  .al_footer-item{
    margin: 2% 2.655% !important;
  }
  .product-content .add-to-cart{
      font-size: 10px;
      width:118px !important;
      font-size: 8px;
}
  .navbar-brand img{

    max-width: 105px;
  }
  .SearchSection{
    width: 50%;
  }
}

/* End Medium Phone */


/* Start Small Phone */
@media only screen and (min-width:370px) and (max-width: 375px){


  .al_footer-item{

          margin:2% 2.5% !important
  }

  .discount-lab{
    color: #fd6906;
    position: absolute;
    top: 16px;
    left: 14px;
    width: 45px;
    height: 45px;
    max-width: 35%;
    text-align: center;
    max-height: 35%;
    border: 1px #fd6906 solid;
    padding: 12px 0;
    border-radius: 999px;
  }

  .product-content .add-to-cart{
      width:116px !important;
      font-size:10px !important;
  }


  .SearchSection {
    width: 50%;
    position: relative;
    bottom: 0px !important;
  }

}



@media only screen and (min-width: 360px) and (max-width:360px){
  .al_footer-item{
    margin: 2% 2.19% !important;
  }
  .SearchSection {
    max-width: 150px;
    position: relative;
    bottom: 10px;
}
.product-content .add-to-cart{
      font-size: 10px;
      width:112px;
}

}


@media only screen  and (max-width:425px){

.HeaderIcons {
  display: none !important;
}
}



/* End Small phone */

/*Custom Media Q */

@media only screen and  (min-width: 320px) and (max-width:425px){

.GridItem{

  padding-right: 0!important;
  padding-left: 0!important;
  display: inline-block;

}
  .navbar-brand img{

    max-width: 110px;
  }
  .SearchSection{
    width: 50%;
    position: relative;
    bottom: 10px;
  }
  .LinksLists{
    flex-direction: column !important;
  }
  .CopyRightsFooter{
    margin: 0 45px !important;
    font-size: 16px !important;
    margin-bottom: 18px !important;
  }

}


/*End Custom Media Q */


</style>
