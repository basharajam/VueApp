<template>
  <div id="app">

    <!-- <Spinner v-if="spinner" /> -->
    <Cart v-if="['Home','ProdByCat','ProdOne'].includes($route.name)" />
    <headerTop v-if="['Home','ProdByCat','ProdOne'].includes($route.name)"/>
    <navbar v-if="['Home','ProdByCat','ProdOne'].includes($route.name)"/>
    <Header  v-if="['Home','ProdByCat','ProdOne'].includes($route.name)" />
    <router-view />
    <Footer   v-if="['Home','ProdByCat','ProdOne'].includes($route.name)" />

  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
    ...mapActions(['getCategories'])
  },
data: function() {
    return {
      spinner:true,
    };
  },
  mounted(){

    console.log(this.$mq)
    this.getCategories();

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
  /* background-image: url('./assets/patt.png');
  background-repeat: repeat;
  background-blend-mode: hue; */

}

/* .flickity-viewport{
  height: 375px !important;
} */
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
    padding: 4px;
    position: relative;
    bottom: 60px;
    right: 12px;
    font-size: 11px;
    padding-left: 2px;
    padding-right: 2px;
    opacity: .9;
    line-height: 17px;
    letter-spacing: -.5px;
    height: 17px;
    min-width: 17px;
    border-radius: 99px;
    color: #fff;
    text-align: center;
}


.btn-outline-warning{
  color: #9d3c9a  !important ;
  border-color: #9d3c9a  !important;
}
/* .btn-outline-warning:hover{
    color: #000 !important;
    background-color: #fe6a00 !important;
    border-color: #fe6a00 !important;
} */
.btn-outline-warning:not(:disabled):not(.disabled).active, .btn-outline-warning:not(:disabled):not(.disabled):active, .show>.btn-outline-warning.dropdown-toggle{
  background-color: #9d3c9a !important;
  border-color: #9d3c9a  !important;
  color: white !important;
}
.btn-outline-warning:hover {
  background-color: white !important;
  border-color: #9d3c9a  !important;
}

.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgb(157 60 154 / 24%) !important;
}
.rounded-form {
  border-radius: 20px !important;
}

.rounded-form:focus{
  color: #212529;
  background-color: #fff;
  border-color: #ff98006b;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #ff990059;
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

.updCurrSubmit{
background: white;
}

.updCurrSubmit:active{
background: #9d3c9a !important;
color: white !important;

}


/*Desktop */
@media only screen and  (min-width: 1366px ) and (max-width:1440px){

  .navbar-brand{
      /* margin-left: 240px; */
  }
  .spinner{
    width:8%!important;
    right: 45% !important;
  }

  .flickity-viewport {
    height: 400px!important;
  }


}

@media  only screen and (min-width:1024px) and (max-width:1024px) {

  .spinner{
    width:8%!important;
    right: 45% !important;
  }

  .flickity-viewport{
        height: 350px !important;
  }
  .navbar-brand{
    /* margin-left: 148px; */
  }
  .HeaderIcons a {
    margin: 0px 10px !important;
  }

  .navbar-light .navbar-brand{
      /* margin-left: 30%; */
  }
  .SearchSection{
        position: relative;
    bottom: 8px;
  }
  .HeaderIcons {
        display: flex!important;
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
    width: 32px;
    height: 32px;
    max-width: 45px;
    text-align: center;
    max-height: 45px;
    border: 1px #fd6906 solid;
    padding: 2px 0;
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

.SearchSection{
    bottom: 10px;
    position: relative;
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
  /* margin-left: 53%; */
}

}

/* End Tablet */

@media only screen and (min-width:375px) and (max-width: 425px) {

.CartCount{
    background-color: #92278f;
    padding: 4px !important;
    position: fixed !important;
    bottom: 30px !important;
    right: 42% !important;
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
  }
}

/*  Start Large Phone */
@media only screen and (min-width:425px) and (max-width: 425px) {

.CartCount{
      background-color: #92278f;
      padding: 4px !important;
      position: fixed !important;
      bottom: 30px !important;
      right: 45% !important;
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
    color: #fd6906;
    position: absolute;
    top: 16px;
    left: 14px;
    width: 32px;
    height: 32px;
    max-width: 34px;
    text-align: center;
    max-height: 34px;
    border: 1px #fd6906 solid;
    padding: 2px 0;
    border-radius: 999px;
  }

  /* .Cat-Slide-item{
        margin: 10px 31px;
  } */
  .navbar-brand img {
        max-width: 148px !important;
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
    /* width: 170px; */
    position: relative;
    bottom: 8px !important;
  }

  .homeListItem .content{

    font-size: 10px;

  }

  /* .card-discount-label{
      font-size: 12px !important;
  } */


.product-grid .product-image:hover + .product-data {

    
    transform: translateY(translateY(calc(5* -1vw))) !important;
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

          /* margin:2% 3.16% !important */
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
  .SearchSection{
    /* width: 40%; */
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
  .SearchSection{
    /* width: 50%; */
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

          /* margin:2% 2.5% !important */
          margin:2% 0% !important
  }

  .discount-lab{
    color: #fd6906;
    position: absolute;
    top: 16px;
    left: 14px;
    width: 32px;
    height: 32px;
    font-size: 10px;
    max-width: 35%;
    text-align: center;
    max-height: 35%;
    border: 1px #fd6906 solid;
    padding: 8px 0;
    border-radius: 999px;
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
      background-color: #92278f;
      padding: 4px !important;
      position: fixed !important;
      bottom: 30px !important;
      right: 42% !important;  
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
  .SearchSection{
    /* width: 56%; */
    position: relative;
    bottom: 10px;
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
      background-color: #92278f;
      padding: 4px !important;
      position: fixed !important;
      bottom: 30px !important;
      right: 46% !important;  
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
    color: #fd6906;
    position: absolute;
    top: 4px;
    left: 14px;
    width: 45px;
    height: 45px;
    max-width: 40px;
    text-align: center;
    max-height: 40px;
    border: 1px #fd6906 solid;
    padding: 8px 0;
    border-radius: 999px;
}

.product-content .add-to-cart{
  width: 92px !important;
  font-size: 8px !important;
}

.CartCount{
      background-color: #92278f;
      padding: 4px !important;
      position: fixed !important;
      bottom: 32px !important;
      right: 40% !important;
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
}

}


@media only screen and (min-width:1025px){


.SearchSection{

      /* margin-right: 305px; */
      position: relative;
      bottom: 8px !important;

}
.HeaderIcons {
  display: inline-flex!important;
}

}



/*End Custom Media Q */


</style>
