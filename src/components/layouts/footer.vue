<template>
  <div class="Footer " style="background-color: #f5f5f5ec !important ;">
      <div class="mobileFooter d-flex d-sm-none">
          <div class="al_footer-item">
              <a href="https://alyaman.com/" class="flex  justify-center">
                  <i class="far fa-home" ></i>
                  <span>الرئيسية</span>
              </a>
          </div>
          <div class="al_footer-item">
              <a href="https://alyaman.com/wishlist/" class="flex  justify-center">
                  <i class="far fa-heart" ></i>
                  <span>المفضلة</span>
              </a>
          </div>
          <div class="al_footer-item al_footer-item-cart">
              <a href="https://alyaman.com/cart/" class="flex  justify-center">
                  <i class="fal fa-shopping-cart" ></i>
                  <span class="CartCount" v-if="this.$cookies.get('gift_cart_counter') !=null && this.$cookies.get('gift_cart_counter') > 0" ><span v-if="this.$cookies.get('gift_cart_counter') !=null && this.$cookies.get('gift_cart_counter') > 0" >{{ this.$cookies.get('gift_cart_counter') }}</span></span>
                  <span class="CartCount" v-else >0</span>
                  <span>السلة</span>
              </a>
          </div>
          <div class="al_footer-item">
              <a href="https://wa.me/8615557979977" class="flex  justify-center">
                  <i class=" fab fa-whatsapp" ></i>
                  <div v-show="elementVisible" class="PopupSoc">للمزيد من التفاصيل</div>
                  <span >واتساب</span>
              </a>
          </div>
          <div class="al_footer-item">
              <a href="https://alyaman.com/my-account/" class="flex  justify-center">
                  <i class="far fa-user" ></i>
                  <span>حسابي</span>
              </a>
          </div>
      </div>

      <div class="MainFooter" >
          <div class="FooterHeading">
              <div class="FooterHeadingContent">
                <h3>كن معنا</h3>
                <div class="SocialLinks">
                    <div class="SocialLinkI">
                        <a href="https://www.facebook.com/alyaman.b2b" aria-label="Facebook"><span class="fab fa-facebook-f SocialLinkSpan"></span></a>
                    </div>
                    <div class="SocialLinkI">
                     <a href="https://www.instagram.com/alyaman_online/?igshid=1p9gkpkdv2z86" aria-label="Instagram"><span class="fab fa-instagram SocialLinkSpan"></span></a>
                    </div>
                    <div class="SocialLinkI">
                        <a href="https://www.youtube.com/channel/UC0bq-kmZcBP3df0UJ0IQDmQ" aria-label="Youtube" ><span class="fab fa-youtube SocialLinkSpan" style=""></span></a>
                    </div>
                </div>
              </div>
          </div>
      
            <div class="">
                <div class="LinksLists">
                    <div class="LinkList col-sm-3 col-12">
                    <h3>أبحث في</h3>
                    <a href="https://alyaman.com/">الصفحة الرئيسية</a>
                    <a href="https://alyaman.com/shop/">كل الاصناف</a>
                    <a href="https://alyaman.com/%d8%b1%d8%a7%d8%a6%d8%ac%d8%a9/">رائجة</a>
                    <a href="https://alyaman.com/%d8%b9%d8%b1%d9%88%d8%b6/"> عروض خاصة</a>
                    <a href="https://alyaman.com/%d9%82%d8%b1%d9%8a%d8%a8%d8%a7%d9%8b-%d9%81%d9%8a-%d8%a7%d9%84%d8%a3%d8%b3%d9%88%d8%a7%d9%82/">قريبا في اليمان</a>
                </div>
                <div class="LinkList col-sm-3 col-12">
                    <h3>أتصل بنا</h3>
                    <a href="mailto:support@alyaman.com">support@alyaman.com</a>
                    <a href="https://wa.me/8615557979977">tel: +86 15557979977</a>
                    <!-- <a href="https://alyaman.com/%d8%a7%d9%84%d8%aa%d8%a8%d9%84%d9%8a%d8%ba-%d8%b9%d9%86-%d9%85%d8%b4%d9%83%d9%84%d8%a9/">التبليغ عن مشكلة</a> -->
                </div>
                <div class="LinkList col-sm-3 col-12">
                    <h3>خدمة العملاء</h3>
                    <a href="https://alyaman.com/about-us-arabic/">حول</a>
                    <a href="https://alyaman.com/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%aa%d9%82%d8%af%d9%8a%d9%85-%d8%b7%d9%84%d8%a8-%d8%b4%d8%b1%d8%a7%d8%a1/">كيفية الشراء</a>
                    <a href="https://www.alyaman.com/%d8%a7%d9%84%d8%b4%d8%ad%d9%86-%d9%88%d8%a7%d9%84%d8%aa%d8%b3%d9%84%d9%8a%d9%85-2/">الشحن والتسليم</a>
                    <a href="https://alyaman.com/my-account/edit-account/">حسابي</a>
                    <a href="https://alyaman.com/my-account/orders/">طلباتك</a>
                    <a href="https://www.alyaman.com/remember/">الشروط والأحكام</a>
                    <a href="https://alyaman.com/privacy-policy/">سياسات الخصوصية</a>
                </div>
                <div class="LinkList col-sm-3 col-12" >
                    <h3>اللغات</h3>
                    <a href="#">العربية</a>
                    <div>
                    </div>
                </div>
            </div>

            <div class="CopyRightsFooter">
                <p>جميع الحقوق محفوظة 1996-2021©Alyaman.com</p>
                <div class="PayMethods" style="text-align: center; width: 100%">
                 <img height="40" src="https://shoplineimg.com/assets/footer/card_visa.png"/>
                 <img height="22" src="http:///www.credit-card-logos.com/images/mastercard_credit-card-logos/mastercard_logo_1.gif"  width="37" border="0"/>
                 <img height="40" src="https://shoplineimg.com/assets/footer/card_paypal.png"/>
                </div>
            </div>

                </div>
              
          
      </div>
  </div>
</template>
<script>
export default {

    data(){

        return {
            elementVisible: false,
    
        }
    },
    created() {
        setTimeout(() => { this.elementVisible = true },6000);
        setTimeout(() => this.elementVisible = false, 15000)
    }
    

}
</script>

<style  scoped>



.MainFooter{
    background-color: #2f2f2f;
}


.FooterHeadingContent h3{
    font-size: 64px;
    text-align: center;
    margin-top: 46px;
    color: white !important;
}

.LinksLists{
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;

}


.LinkList{
    /* margin: 0 75px; */
    display: flex;
    flex-direction: column;
    text-align: center;

}

.LinkList h3 {
    color: white !important;
    font-size: 32px;
}

.LinkList a {
    color: #c9c9c9;
    font-size: 14px;
    padding: 2px  0;
    transition: 0.5s ease-out;
}

.FooterHeading{
    display: flex;
    color: white;
    font-weight: bold;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}

.SocialLinks{
    display: flex;
    text-align: center;
    font-weight: 100;
    font-size: 30px;

}


.SocialLinkI{
    margin: 8px;
}

.SocialLinkI span{
    line-height: 19px;
    width: 60px;
    text-align: center;
    border: 1px #2f2f2f solid;
    padding: 16px 0;
    border-radius: 50%;
    color: white;
    box-shadow: 0 0 2px 0px;
    transition: 1s ease-out;
}

.CopyRightsFooter{

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    color: white;
    border-top: 1px #6e6e6e solid;
    margin: 0 110px;
    padding: 16px 0;
    font-size: 16px;
    margin-top: 26px;
    text-align: center;
}

.PayMethods img{
margin: 6px;
}

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
    background-color: #FFF;
    z-index: 990;
    box-shadow: 0 1px 3px 0;
    box-sizing: border-box;

}


.al_footer-item {
    flex: 1;
    padding: 0px;
    width: min-content;
    float: right;
    
}

.al_footer-item i{
    color:#fe6a00
}
.al_footer-item i:active {
    color:black; 
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

.PopupSoc{
    position: absolute;
    bottom: 63px;
    white-space: nowrap;
    background: white;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,.2);
}

.PopupSoc::after{
    position: absolute;
    z-index: -1;
    content: "";
    right: calc(50% - 10px);
    bottom: -8px;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #ffffff transparent;
    transition-duration: 0.3s;
    transition-property: transform;
    transform: rotate(
180deg
);
}

.SocialLinkI a:active span.SocialLinkSpan {

    box-shadow: 0 0 6px 3px;


} 

.LinkList a:active{

    color:white;
    text-decoration: underline !important ;

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