<template>
  <div class="Footer ">
      <div class="mobileFooter d-block d-sm-none">
          <div class="al_footer-item">
              <a href="https://alyaman.com/" class="flex  justify-center">
                  <i class="fa fa-home" ></i>
                  <span>الرئيسية</span>
              </a>
          </div>
          <div class="al_footer-item">
              <a href="https://alyaman.com/wishlist/" class="flex  justify-center">
                  <i class="fa fa-heart" ></i>
                  <span>المفضلة</span>
              </a>
          </div>
          <div class="al_footer-item al_footer-item-cart">
              <a href="https://alyaman.com/cart/" class="flex  justify-center">
                  <i class="fal fa-shopping-cart" ></i>
                  <span>السلة</span>
              </a>
          </div>
          <div class="al_footer-item">
              <a href="https://alyaman.com/%d8%a7%d9%84%d8%aa%d8%a8%d9%84%d9%8a%d8%ba-%d8%b9%d9%86-%d9%85%d8%b4%d9%83%d9%84%d8%a9/" class="flex  justify-center">
                  <i class="fa fa-phone-alt" ></i>
                  <span>تواصل معنا</span>
              </a>
          </div>
          <div class="al_footer-item">
              <a href="https://alyaman.com/my-account/" class="flex  justify-center">
                  <i class="fa fa-user" ></i>
                  <span>حسابي</span>
              </a>
          </div>
      </div>

      <div class="MainFooter" >
          <div class="FooterHeading">
              <div class="FooterHeadingContent">
                <h3>كن معنا</h3>
                <div class="SocialLinks">
                    <a href="https://www.facebook.com/alyaman.b2b"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/alyaman_online/?igshid=1p9gkpkdv2z86"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCQ6ywr7-jUKRCm7eEcR1zpQ"><i class="fab fa-youtube" style="    padding: 17px 14px;"></i></a>
                </div>
              </div>
          </div>
      
            <div class="LinksLists container">
                    <div class="LinkList col-sm-3 col-12">
                    <h3>أبحث في</h3>
                    <a href="https://alyaman.com/">الصفحة الرئيسية</a>
                    <a href="https://alyaman.com/%d8%b1%d8%a7%d8%a6%d8%ac%d8%a9/">رائجة</a>
                    <a href="https://alyaman.com/%d8%b9%d8%b1%d9%88%d8%b6/"> عروض خاصة</a>
                    <a href="https://alyaman.com/shop/">كل الاصناف</a>
                    <a href="https://alyaman.com/%d9%82%d8%b1%d9%8a%d8%a8%d8%a7%d9%8b-%d9%81%d9%8a-%d8%a7%d9%84%d8%a3%d8%b3%d9%88%d8%a7%d9%82/">قريبا في اليمان</a>
                </div>
                <div class="LinkList col-sm-3 col-12">
                    <h3>أتصل بنا</h3>
                    <a href="#">support@alyaman.com</a>
                    <a href="https://wa.me/8617757971070">tel: +86 17757971070</a>
                </div>
                <div class="LinkList col-sm-3 col-12">
                    <h3>خدمة العملاء</h3>
                    <a href="https://alyaman.com/privacy-policy/">سياسات الخصوصية</a>
                    <a href="https://alyaman.com/%d8%a7%d9%84%d8%b4%d8%ad%d9%86-%d9%88%d8%a7%d9%84%d8%aa%d8%b3%d9%84%d9%8a%d9%85/">الشحن والتسليم</a>
                    <a href="https://alyaman.com/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%aa%d9%82%d8%af%d9%8a%d9%85-%d8%b7%d9%84%d8%a8-%d8%b4%d8%b1%d8%a7%d8%a1/">كيفية الشراء</a>
                    <a href="https://alyaman.com/my-account/edit-account/">حسابي</a>
                    <a href="https://alyaman.com/my-account/orders/">طلباتك</a>
                    <a href="https://alyaman.com/%d8%a7%d9%84%d8%aa%d8%a8%d9%84%d9%8a%d8%ba-%d8%b9%d9%86-%d9%85%d8%b4%d9%83%d9%84%d8%a9/">التبليغ عن مشكلة</a>
                    <a href="https://alyaman.com/about-us-arabic/">حول</a>
                </div>
                    <div class="LinkList col-sm-3 col-12" >
                    <h3>أنضم الينا</h3>
                    <a href="http://vendor.alyaman.com/login">البيع على اليمان</a>
                </div>
            </div>

            <div class="CopyRightsFooter">
                <p>جميع الحقوق محفوظة 1996-2021©Alyaman.com</p>
            </div>
              
          
      </div>
  </div>
</template>
<script>
export default {

}
</script>

<style  scoped>



.MainFooter{
    background-color: #2f2f2f;
}


.FooterHeadingContent h3{
    font-size: 90px;
    margin-top: 46px;
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
    color: white;
    font-size: 3.25rem;
}

.LinkList a {
    color: white;
    font-size: 26px;
    padding: 10px 0;
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
    text-align: center;
    font-weight: 100;
    font-size: 30px;

}

.SocialLinks a {
    margin: 0 10px;
    color: white;
    min-width: 2.5em;
    border-radius: 999px ;
    line-height: 2.19em;
}

.SocialLinks a i {
    border: 1px #ffffff80 solid;
    border-radius: 60px;
    box-shadow: 0px 0px 2px #888;
    padding: 0.5em 0.6em;
}

.CopyRightsFooter{

    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    color: white;
    border-top: 5px #6e6e6e solid;
    margin: 0 123px;
    padding: 35px 0;
    font-size: 26px;
    margin-top: 26px;
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
    overflow: hidden;
    margin: 2% 3.7%;

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