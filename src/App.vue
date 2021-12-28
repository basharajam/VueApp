<template>
  <div id="app">
 
    <!-- <Spinner v-if="spinner" /> -->
    <Cart v-if="this.displayLayouts.includes($route.name)" />
    <headerTop v-if="this.displayLayouts.includes($route.name)"/>
    <navbar v-if="this.displayLayouts.includes($route.name)"/>
    <Header  v-if="this.displayLayouts.includes($route.name)" />
    <router-view />
    <vue-progress-bar></vue-progress-bar>
    <Footer   v-if="this.displayLayouts.includes($route.name)" />

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CryptoJS from 'crypto-js'

import headerTop from './components/widgets/headerTop.vue';
import navbar from './components/widgets/navbar.vue';
import Header from './components/layouts/header.vue';
import Footer from './components/layouts/footer.vue';
import Cart from './components/layouts/cart.vue';
// import Spinner from './components/layouts/spinner.vue';


export default {
  name: 'App',
  components: {
    Header,
    navbar,
    Footer,
    Cart,
    headerTop,

    // Spinner
  },
  methods:{
    ...mapActions(['getTerms','getConfig','LoginWithCookie','AddToCartCookie']),
  },
data: function() {
    return {
      spinner:true,
      displayLayouts:['Home','ProdByCat','ProdByTag','ProdOne','AllCat','SubCat','User','About','Checkout','Orders','Search','Shipment','Billing']
    };
  },
  mounted(){


    //init
    this.getTerms();
    this.getConfig();
    if(this.$cookies.get('token')){
      this.LoginWithCookie({Token:this.$cookies.get('token')});
    }

    //set Default shipment Country
    var CountryVal= this.$cookies.get('shipCountry');
    if(!CountryVal){
      this.$cookies.set('shipCountry','SA');
    }

    //Set Default curr 
    var CurrVal = this.$cookies.get('wmc_current_currency');
    if(!CurrVal){
      this.$cookies.set('wmc_current_currency','SAR');
    }

    //Check Cart In Cookie And Fill 
    var vcart = this.$cookies.get('vcart');

    if(vcart){

      console.log('has cart in cookie')

      const key = process.env.VUE_APP_ENCKEY // 
      const dcrypted = CryptoJS.AES.decrypt(vcart,key).toString(CryptoJS.enc.Utf8);
      this.AddToCartCookie(JSON.parse(dcrypted))
      // console.log(JSON.parse(dcrypted))


    }


  },

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
background-color: #f5f5f5ec !important ;
}


.Section{

  padding: 8px 0;

}


.text-start{
    text-align: start;
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
  color: black !important;
  font-weight: normal !important;
}

.TitleList{
    min-height: 54px !important;
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
  margin-bottom: 6px;
  
}


.ProdBoxTitle {
   
  color: black !important;

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


.discount-lab {
  color: #fd6906;
  position: absolute;
  top: 16px;
  left: 14px;
  width: 32px;
  height: 32px;
  max-width: 45px;
  text-align: center;
  max-height: 45px;
  border: 1px #fd6906 solid;
  padding: 2px 0;
  border-radius: 999px;
}

.HomeBanner{
  margin-top: 6px;
  margin-bottom: 6px;
}




.add-to-cart:active{
  transform: scale(1.1);
}
.add-to-cart{
  transition: 1s ease-in-out;
}

.CartCount{
  background-color: #92278f;
  padding: 4px !important;
  position: fixed !important;
  font-size: 12px !important;
  padding-left: 2px !important;
  padding-right: 2px !important;
  opacity: .9;
  line-height: 17px;
  letter-spacing: -.5px;
  height: 22px !important;
  min-width: 18px !important;
  border-radius: 99px !important;
  color: #fff;
  text-align: center;
  bottom: 60px;
  right: 12px;

}

.sr-only{
  display: none;
}

.modal-body{
  padding: 0 !important;
}
.rounded-form {
  border-radius: 20px !important;
}

span.amount {
  font-weight: normal !important;
  color: #fa6810 !important;
}

.drpSel{
  text-align: start;
}
/*   Query Media */

select.dropSelect:focus{
  border-color: #f7611894;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(250 100 16 / 47%);
}

.nav-link, .nav-link:active .nav-link:hover{
  color:#808080
}

/*Desktop */


@media  only screen and (min-width:1024px) and (max-width:1024px) {

  .HeaderIcons {
    display: flex!important;
  }
}

/* End Desktop */




/* Start Tablet */

@media only screen and  (min-width:768px) and (max-width: 768px){
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
    position: relative !important;
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
}

/* End Tablet */

@media only screen and (min-width:375px) and (max-width: 425px) {

.CartCount{
  bottom: 30px !important;
  right: 42% !important;
  }
}

/*  Start Large Phone */
@media only screen and (min-width:425px) and (max-width: 425px) {

  .CartCount{
    bottom: 30px !important;
    right: 45% !important;
  }



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
    font-size: 12px;
    top: 16px;
    left: 14px;
    width: 32px;
    height: 32px;
    max-width: 34px;
    max-height: 34px;
    padding: 2px 0;
  }

  .navbar-brand img {
    max-width: 148px !important;
  }

  .HomeListLogo{
    max-width: 40px !important;
  }

  .CatNavLinks{
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .homeListItem .content{
    font-size: 10px;
  }


.Cat-Slide-item-img {
  max-width: 42px !important;
  margin: 0 10px !important;
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

  .al_footer-item{
    margin:2% 0 !important
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
    max-width: 156px !important;
  }
}

/*End large Phone */


/* Medium Phone */
@media only screen and (min-width:392px) and (max-width:406px){


  .al_footer-item{
    margin: 2% 2.655% !important;
    margin: 2% 0 !important;
  }
  .product-content .add-to-cart{
    font-size: 10px;
    width:118px !important;
    font-size: 8px;
  } 
  .navbar-brand img{
    max-width: 105px;
  }
  .FooterHeadingContent {
    font-size: 50px !important;
    margin-top: 46px !important;
    text-align: center;
  }

}

/* End Medium Phone */


/* Start Small Phone */
@media only screen and (min-width:370px) and (max-width: 375px){


  .al_footer-item{
    margin:2% 0% !important
  }

  .discount-lab{
    top: 16px;
    left: 14px;
    width: 32px;
    height: 32px;
    font-size: 10px;
    max-width: 35%;
    max-height: 35%;
    padding: 8px 0;

  }
  .product-content .add-to-cart{
    width:116px !important;
    font-size:10px !important;
  }


  .SearchSection {
    /* width: 62% !important; */
    bottom: 10px !important;
  }
  .FooterHeadingContent {
      font-size: 50px !important;
    margin-top: 46px !important;
    text-align: center;
  }

  .navbar-brand img{
    max-width: 120px;
  }

  .CartCount{
  bottom: 30px !important;
  right: 42% !important;  
}


}



@media only screen and (min-width: 360px) and (max-width:360px){
  .al_footer-item{
    /* margin: 2% 2.19% !important; */
    margin: 2% 0% !important; 
  }
  .SearchSection {
    /* max-width: 150px; */
    position: relative;
    bottom: 10px;
}
.product-content .add-to-cart{
      font-size: 10px;
      width:112px;
}
.FooterHeadingContent {
      font-size: 50px !important;
    margin-top: 46px !important;
    text-align: center;
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

.SearchSection {
  padding: 12px 0;
}


.hideAddToCart .product-grid .product-content .add-to-cart{
  display: none !important;
}
  .navbar-brand img{

    max-width: 110px;
  }
  .LinksLists{
    flex-direction: column !important;
  }
  .CopyRightsFooter{
    margin: 10px 45px !important;
    font-size: 12px !important;
    margin-bottom: 18px !important;
  }

}

@media only screen and (min-width:426px) and (max-width: 570px){


.CartCount{
  bottom: 30px !important;
  right: 46% !important;  
}


.LinksLists{

  flex-direction:column !important;

}

.navbar-brand img{
  max-width: 185px;
}

.SearchSection{
  position: relative;
  bottom: 10px !important;
}

}

@media only screen and (min-width:320px) and (max-width:320px){


/* .Cat-Slide-item{

  margin: 6px 26px !important;

} */
.SearchSection{
  /* max-width: 175px; */
  bottom: 10px !important;
}

.Product-content a{
      width: 126px;
   
    padding: 0px;
}

.LinksLists {
  flex-direction: column !important;
}

  .SearchResult{
    width: 92% !important;
    left: 4% !important;
    margin: 10px 0px  !important;
    padding: 5px !important; 
  }
  .HeaderIcons {
  display: none !important;
  }


.al_footer-item{
    /* margin: 2% 0.4% !important; */
    margin: 2% 0 !important;
}

.discount-lab{
    font-size: 15px;
    top: 4px;
    left: 14px;
    width: 45px;
    height: 45px;
    max-width: 40px;
    max-height: 40px;
    padding: 8px 0;

}
.product-content .add-to-cart{
  width: 92px !important;
  font-size: 8px !important;
}

.CartCount{
  bottom: 32px !important;
  right: 40% !important;
}

}
@media only screen and (min-width:1025px){

  .HeaderIcons {
    display: inline-flex!important;
  }

}

/*End Custom Media Q */


</style>
