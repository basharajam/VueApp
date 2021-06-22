<template>
  <div class="Footer ">
      <div class="mobileFooter d-block d-sm-none">
          <div class="al_footer-item">
              <a href="#" class="flex  justify-center">
                  <i class="fa fa-home" ></i>
                  <span>الرئيسية</span>
              </a>
          </div>
          <div class="al_footer-item">
              <a href="#" class="flex  justify-center">
                  <i class="fa fa-heart" ></i>
                  <span>المفضلة</span>
              </a>
          </div>
          <div class="al_footer-item al_footer-item-cart">
              <a href="#" class="flex  justify-center">
                  <i class="fa fa-shopping-cart" ></i>
                  <span>السلة</span>
              </a>
          </div>
          <div class="al_footer-item">
              <a href="#" class="flex  justify-center">
                  <i class="fa fa-phone-alt" ></i>
                  <span>تواصل معنا</span>
              </a>
          </div>
          <div class="al_footer-item">
              <a href="#" class="flex  justify-center">
                  <i class="fa fa-user" ></i>
                  <span>حسابي</span>
              </a>
          </div>
      </div>
  </div>
</template>
<script>
export default {

}
</script>

<style  scoped>

.mobileFooter{

    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 54px;
    padding: 0 12px;
    background-color: #FFF;
    z-index: 999;
    box-shadow: 0 1px 3px 0;
    box-sizing: border-box;

}


.al_footer-item {
    flex: 1;
    padding: 0px;
    width: min-content;
    overflow: hidden;
    margin: 10px 13px;
    float: right;
    
}

.al_footer-item i:hover {
    /* font-size: 22px;
    display: block;
    margin: 0 4px;
    */
    color: #fe6a00; 
}

.al_footer-item a {
    display: flex;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    text-decoration: none;
    color: #3a3e4a;
}

.al_footer-item span {
white-space: nowrap;
}






/* .al_footer-item-cart{
    /* padding-bottom: 15px !important;
    padding-bottom: 15px !important;
    background: red;
    border-radius: 50%;
    position: relative;
    bottom: 20px; */
/* } */ 

</style>