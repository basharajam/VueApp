(function(t){function a(a){for(var s,o,c=a[0],n=a[1],i=a[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);l&&l(a);while(f.length)f.shift()();return d.push.apply(d,i||[]),e()}function e(){for(var t,a=0;a<d.length;a++){for(var e=d[a],s=!0,c=1;c<e.length;c++){var n=e[c];0!==r[n]&&(s=!1)}s&&(d.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},r={app:0},d=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=a,c=c.slice();for(var i=0;i<c.length;i++)a(c[i]);var l=n;d.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"05a9":function(t,a,e){"use strict";e("bafc")},"0ed7":function(t,a,e){t.exports=e.p+"img/slid6.jpeg"},"1d85":function(t,a,e){"use strict";e("ec9e")},"1dfd":function(t,a,e){},"2ca0":function(t,a,e){t.exports=e.p+"img/0.jpeg"},"2e14":function(t,a,e){},"31e8":function(t,a,e){"use strict";e("2e14")},"3a54":function(t,a,e){"use strict";e("b690")},4524:function(t,a,e){"use strict";e("a524")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t.spinner?e("Spinner"):t._e(),e("Header"),e("router-view"),e("Footer")],1)},d=[],o=e("5530"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"alheader"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[t._m(0),e("div",{staticClass:"SearchSection"},[t.search?e("i",{staticClass:"fas fa-search SearchIcon"}):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.SearchInput,expression:"SearchInput"}],staticClass:"form-control mr-sm-2 SearchInput",attrs:{type:"search",placeholder:"          Search","aria-label":"Search"},domProps:{value:t.SearchInput},on:{input:[function(a){a.target.composing||(t.SearchInput=a.target.value)},t.SearchRequest],focus:function(a){return t.hideIcon()}}})]),t._m(1),t._m(2)]),t.SearchRes?e("div",{staticClass:"SearchResult"},[t.innerSpinner?e("div",{staticClass:"innerSpinner"},[e("img",{staticClass:"innerSpinner0",attrs:{src:"spinner.png"}})]):t._e(),t._l(t.SearchResArr,(function(a){return e("div",{key:a.id,staticClass:"media"},[e("a",{staticClass:"SearchResImg",attrs:{href:a.permalink,target:"_blank"}},[e("img",{staticClass:"mr-3 img-thumbnail img-fluid",attrs:{src:a.images[0].src,alt:"Generic placeholder image"}})]),e("div",{staticClass:"media-body"},[e("a",{attrs:{href:a.permalink,target:"_blank"}},[e("h5",{staticClass:"mt-0 SearchResTitle"},[t._v(t._s(a.name))])])])])}))],2):t._e(),e("div",{staticClass:"CatNavLinks scrollmenu"},[e("a",{attrs:{href:"https://alyaman.com/shop/"}},[t._v(" الكل ")]),t._l(t.Categories,(function(a){return e("a",{key:a.id,attrs:{href:"https://alyaman.com/product-category/"+a.slug}},[t._v(" "+t._s(a.name)+" ")])}))],2)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"navbar-brand ",attrs:{href:"https://alyaman.com"}},[e("img",{staticStyle:{"max-width":"175px"},attrs:{src:"icon.png",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"d-inline-block d-sm-none",staticStyle:{margin:"0 12px","font-size":"24px"},attrs:{href:"#"}},[e("i",{staticClass:"fa fa-globe"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"HeaderIcons d-none d-sm-inline-block col-sm-2 pull-left"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-user"})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fal fa-shopping-cart"})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-globe"})])])}],i=(e("ac1f"),e("841c"),e("2f62")),l=e("2ef0"),u=e.n(l),f=e("bc3a"),m=e.n(f),p={name:"alheader",computed:Object(o["a"])({},Object(i["c"])(["Categories"])),data:function(){return{SearchInput:"",SearchRes:!1,innerSpinner:!0,search:!0,SearchResArr:[]}},methods:{SearchRequest:u.a.debounce((function(){var t=this,a=this.SearchInput;if(this.SearchResArr=[],""!=a)return this.search=!1,this.SearchRes=!0,this.innerSpinner=!0,m.a.get("https://alyaman.com/wp-json/wc/v3/products/?search="+a+"&per_page=4").then((function(a){console.log(a),200!=a.status?console.log("baddddddddd"):(t.innerSpinner=!1,t.SearchResArr=a.data,console.log(a)),console.log(a.data)})),"done";this.search=!0,this.SearchRes=!1}),1e3),hideIcon:function(){this.search=!1}}},h=p,P=(e("63b5"),e("2877")),v=Object(P["a"])(h,c,n,!1,null,"de53f2dc",null),g=v.exports,y=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Footer "},[e("div",{staticClass:"mobileFooter d-block d-sm-none"},[e("div",{staticClass:"al_footer-item"},[e("a",{staticClass:"flex  justify-center",attrs:{href:"https://alyaman.com/"}},[e("i",{staticClass:"fa fa-home"}),e("span",[t._v("الرئيسية")])])]),e("div",{staticClass:"al_footer-item"},[e("a",{staticClass:"flex  justify-center",attrs:{href:"https://alyaman.com/wishlist/"}},[e("i",{staticClass:"fa fa-heart"}),e("span",[t._v("المفضلة")])])]),e("div",{staticClass:"al_footer-item al_footer-item-cart"},[e("a",{staticClass:"flex  justify-center",attrs:{href:"https://alyaman.com/cart/"}},[e("i",{staticClass:"fal fa-shopping-cart"}),e("span",[t._v("السلة")])])]),e("div",{staticClass:"al_footer-item"},[e("a",{staticClass:"flex  justify-center",attrs:{href:"https://alyaman.com/%d8%a7%d9%84%d8%aa%d8%a8%d9%84%d9%8a%d8%ba-%d8%b9%d9%86-%d9%85%d8%b4%d9%83%d9%84%d8%a9/"}},[e("i",{staticClass:"fa fa-phone-alt"}),e("span",[t._v("تواصل معنا")])])]),e("div",{staticClass:"al_footer-item"},[e("a",{staticClass:"flex  justify-center",attrs:{href:"https://alyaman.com/my-account/"}},[e("i",{staticClass:"fa fa-user"}),e("span",[t._v("حسابي")])])])]),e("div",{staticClass:"MainFooter"},[e("div",{staticClass:"FooterHeading"},[e("div",{staticClass:"FooterHeadingContent"},[e("h3",[t._v("كن معنا")]),e("div",{staticClass:"SocialLinks"},[e("a",{attrs:{href:"https://www.facebook.com/alyaman.b2b"}},[e("i",{staticClass:"fab fa-facebook-f"})]),e("a",{attrs:{href:"https://www.instagram.com/alyaman_online/?igshid=1p9gkpkdv2z86"}},[e("i",{staticClass:"fab fa-instagram"})]),e("a",{attrs:{href:"https://www.youtube.com/channel/UCQ6ywr7-jUKRCm7eEcR1zpQ"}},[e("i",{staticClass:"fab fa-youtube",staticStyle:{padding:"17px 14px"}})])])])]),e("div",{staticClass:"LinksLists container"},[e("div",{staticClass:"LinkList col-sm-3 col-12"},[e("h3",[t._v("أبحث في")]),e("a",{attrs:{href:"https://alyaman.com/"}},[t._v("الصفحة الرئيسية")]),e("a",{attrs:{href:"https://alyaman.com/%d8%b1%d8%a7%d8%a6%d8%ac%d8%a9/"}},[t._v("رائجة")]),e("a",{attrs:{href:"https://alyaman.com/%d8%b9%d8%b1%d9%88%d8%b6/"}},[t._v(" عروض خاصة")]),e("a",{attrs:{href:"https://alyaman.com/shop/"}},[t._v("كل الاصناف")]),e("a",{attrs:{href:"https://alyaman.com/%d9%82%d8%b1%d9%8a%d8%a8%d8%a7%d9%8b-%d9%81%d9%8a-%d8%a7%d9%84%d8%a3%d8%b3%d9%88%d8%a7%d9%82/"}},[t._v("قريبا في اليمان")])]),e("div",{staticClass:"LinkList col-sm-3 col-12"},[e("h3",[t._v("أتصل بنا")]),e("a",{attrs:{href:"#"}},[t._v("support@alyaman.com")]),e("a",{attrs:{href:"https://wa.me/8617757971070"}},[t._v("tel: +86 17757971070")])]),e("div",{staticClass:"LinkList col-sm-3 col-12"},[e("h3",[t._v("خدمة العملاء")]),e("a",{attrs:{href:"https://alyaman.com/privacy-policy/"}},[t._v("سياسات الخصوصية")]),e("a",{attrs:{href:"https://alyaman.com/%d8%a7%d9%84%d8%b4%d8%ad%d9%86-%d9%88%d8%a7%d9%84%d8%aa%d8%b3%d9%84%d9%8a%d9%85/"}},[t._v("الشحن والتسليم")]),e("a",{attrs:{href:"https://alyaman.com/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%aa%d9%82%d8%af%d9%8a%d9%85-%d8%b7%d9%84%d8%a8-%d8%b4%d8%b1%d8%a7%d8%a1/"}},[t._v("كيفية الشراء")]),e("a",{attrs:{href:"https://alyaman.com/my-account/edit-account/"}},[t._v("حسابي")]),e("a",{attrs:{href:"https://alyaman.com/my-account/orders/"}},[t._v("طلباتك")]),e("a",{attrs:{href:"https://alyaman.com/%d8%a7%d9%84%d8%aa%d8%a8%d9%84%d9%8a%d8%ba-%d8%b9%d9%86-%d9%85%d8%b4%d9%83%d9%84%d8%a9/"}},[t._v("التبليغ عن مشكلة")]),e("a",{attrs:{href:"https://alyaman.com/about-us-arabic/"}},[t._v("حول")])]),e("div",{staticClass:"LinkList col-sm-3 col-12"},[e("h3",[t._v("أنضم الينا")]),e("a",{attrs:{href:"http://vendor.alyaman.com/login"}},[t._v("البيع على اليمان")])])]),e("div",{staticClass:"CopyRightsFooter"},[e("p",[t._v("جميع الحقوق محفوظة 1996-2021©Alyaman.com")])])])])}],C={},x=C,B=(e("4524"),Object(P["a"])(x,y,_,!1,null,"048f4f50",null)),b=B.exports,T=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"overlay"}),e("img",{staticClass:"spinner",attrs:{src:"spinner.png"}})])}],w={},S=w,O=(e("1d85"),Object(P["a"])(S,T,j,!1,null,"2606a23b",null)),k=O.exports,D={name:"App",components:{Header:g,Footer:b,Spinner:k},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["getCategories","getProdByTax","getProdByTax0","getProdByTax1","getProdByTax2","getProdByTax3","getProdByTax4","getProdByTax5","getProdByTax6","getProdByTax7","getRecentProd","getProdOffers","getProdMostPopular","getProdBestSell","getProdByBox","getProdDecRope","getProdDecTag","getProdDecSticker","getProdDecIns"])),{},{hideSpinner:function(){return this.spinner=!1}}),data:function(){return{spinner:!1}},mounted:function(){var t=this;this.getProdDecRope(),this.getProdDecSticker(),this.getProdDecIns(),this.getProdDecTag(),this.getCategories(),this.getRecentProd(),this.getProdOffers(),this.getProdByTax(),this.getProdByTax0(),this.getProdByBox(),this.getProdBestSell(),this.getProdMostPopular(),this.getProdByTax1(),this.getProdByTax2(),this.getProdByTax3(),this.getProdByTax4(),this.getProdByTax5(),this.getProdByTax6(),this.getProdByTax7(),setTimeout((function(){t.spinner=!1}),25500)}},L=D,E=(e("034f"),Object(P["a"])(L,r,d,!1,null,null,null)),$=E.exports,R=e("8c4f"),I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("carouselWidget"),e("CategorySlide"),e("OffersList"),e("ProdsByTax6"),e("RecentList"),e("prodsByTax0"),e("ProdByTax"),e("MostPopularList"),e("ProdsByTax1"),e("ProdsByTax2"),e("ProdsByTax3"),e("ProdsByTax4"),e("ProdsByTax7"),e("ProdByBoxList")],1)},M=[],G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("div",{},[e("div",{staticClass:"category-carousel"},t._l(t.Categories,(function(t){return e("CatSlideItem",{key:t.id,staticClass:"carousel-cell col-2",attrs:{Category:t}})})),1)]),t._m(0),t._m(1)])},A=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"carousel slide BannersSlide",attrs:{id:"carouselBannerControls","data-ride":"carousel"}},[s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"carousel-item active"},[s("a",{attrs:{href:"https://alyaman.com/product-category/%d8%a7%d9%84%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a/"}},[s("img",{staticClass:"d-block w-100",attrs:{src:e("d0ec"),alt:"First slide"}})])]),s("div",{staticClass:"carousel-item"},[s("a",{attrs:{href:"https://alyaman.com/product-category/%d9%85%d9%88%d8%a7%d9%84%d9%8a%d8%af/"}},[s("img",{staticClass:"d-block w-100",attrs:{src:e("2ca0"),alt:"Second slide"}})])]),s("div",{staticClass:"carousel-item"},[s("a",{attrs:{href:"https://alyaman.com/product-category/%d8%a3%d8%b9%d9%8a%d8%a7%d8%af-%d9%85%d9%8a%d9%84%d8%a7%d8%af/"}},[s("img",{staticClass:"d-block w-100",attrs:{src:e("9ee2"),alt:"Third slide"}})])]),s("div",{staticClass:"carousel-item"},[s("a",{attrs:{href:"https://alyaman.com/product-tag/baby_box_group/"}},[s("img",{staticClass:"d-block w-100",attrs:{src:e("c307"),alt:"Third slide"}})])])]),s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselBannerControls",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])]),s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselBannerControls",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList",staticStyle:{padding:"6px"}},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{staticClass:"pull-left",attrs:{href:"https://alyaman.com/%d8%b9%d8%b1%d9%88%d8%b6/"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("عروض خاصة")])])}],F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Cat-Slide-item"},[e("a",{staticClass:"flex  justify-center",attrs:{href:"https://alyaman.com/product-category/"+t.Category.slug}},[e("img",{staticClass:"Cat-Slide-item-img",attrs:{src:t.Category.image.src,alt:""}}),e("span",[t._v(t._s(t.Category.name))])])])},H=[],q={name:"CatSideItem",props:["Category"]},W=q,z=(e("3a54"),Object(P["a"])(W,F,H,!1,null,null,null)),N=z.exports,J={name:"CategorySilde",components:{CatSlideItem:N},computed:Object(o["a"])({},Object(i["c"])(["Categories"]))},Q=J,U=(e("ecf5"),Object(P["a"])(Q,G,A,!1,null,null,null)),K=U.exports,V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("div",{staticClass:"ProdList"},[e("div",{staticClass:"scrollmenu"},t._l(t.ProdOffers,(function(t){return e("ProdCard",{key:t.id,attrs:{Product:t}})})),1)])])},X=[],Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ProdCard col-sm-3 col-5"},[e("div",{staticClass:"product-grid"},[e("div",{staticClass:"product-image"},[e("a",{staticClass:"image",attrs:{href:t.Product.permalink}},[e("img",{staticClass:"pic-1",attrs:{src:t.Product.images[0].src}})]),t.Product.sale_price?e("span",{staticClass:"product-discount-label"},[t._v("% "+t._s(t.discountPrice(t.Product)))]):t._e(),e("ul",{staticClass:"product-links"})]),e("div",{staticClass:"product-data"},[e("h3",{staticClass:"title"},[e("a",{attrs:{href:t.Product.permalink}},[t._v(t._s(t.Product.name))])]),e("div",{staticClass:"price"},[e("span",[t._v("ر.س")]),t._v(" "+t._s(parseFloat(t.Product.regular_price).toFixed(2)))]),e("div",{staticClass:"descrition"},[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam rem culpa alias quidem atque et ")])]),e("div",{staticClass:"product-content"},[e("a",{staticClass:"add-to-cart",attrs:{href:t.Product.permalink,target:"_blank"}},[t._v("عرض تفاصيل المنتج")])])])])},Z=[],tt=(e("b680"),{props:["Product"],methods:{discountPrice:function(t){var a=t.regular_price-t.sale_price,e=a/t.regular_price,s=100*e;return parseFloat(s).toFixed(0)}}}),at=tt,et=(e("ef15"),Object(P["a"])(at,Y,Z,!1,null,"0d89d5e3",null)),st=et.exports,rt={name:"OffersList",components:{ProdCard:st},computed:Object(o["a"])({},Object(i["c"])(["ProdOffers"]))},dt=rt,ot=Object(P["a"])(dt,V,X,!1,null,null,null),ct=ot.exports,nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t._m(0),e("div",{staticClass:"ProdList "},[e("div",{staticClass:"scrollmenu d-sm-none d-none"},t._l(t.ProdByTax6,(function(t){return e("ProdCard",{key:t.id,attrs:{Product:t}})})),1),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.ProdByTax6,(function(t){return e("ProdGridBox",{key:t.id,staticClass:"col-4 col-sm-3 GridItem",attrs:{Product:t}})})),1)])])])},it=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList",staticStyle:{"margin-bottom":"4px"}},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{attrs:{href:"https://alyaman.com/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%AA%D9%88%D8%B2%D9%8A%D8%B9%D8%A7%D8%AA-%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%83%D9%8A%D8%A9/?product-page=2"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("توزيعات بلاستيك")])])}],lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ProdCard"},[e("div",{staticClass:"card-grid"},[e("div",{staticClass:"card-image"},[e("a",{staticClass:"image",attrs:{href:t.Product.permalink}},[e("img",{staticClass:"pic-1",attrs:{src:t.Product.images[0].src}})]),t.Product.sale_price?e("span",{staticClass:"card-discount-label"},[t._v("% "+t._s(t.discountPrice(t.Product)))]):t._e()]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"price"},[e("span",[t._v("ر.س")]),t._v(" "+t._s(parseFloat(t.Product.price).toFixed(2)))])])])])},ut=[],ft={props:["Product"],methods:{discountPrice:function(t){var a=t.regular_price-t.sale_price,e=a/t.regular_price,s=100*e;return parseFloat(s).toFixed(0)}}},mt=ft,pt=(e("05a9"),Object(P["a"])(mt,lt,ut,!1,null,"3ec3c301",null)),ht=pt.exports,Pt={name:"prodsByTax6",components:{ProdCard:st,ProdGridBox:ht},computed:Object(o["a"])({},Object(i["c"])(["ProdByTax6"]))},vt=Pt,gt=Object(P["a"])(vt,nt,it,!1,null,null,null),yt=gt.exports,_t=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"carouselWidget"},[s("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[s("ol",{staticClass:"carousel-indicators"}),s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"carousel-item active"},[s("a",{attrs:{href:"https://alyaman.com/%d8%b9%d8%b1%d9%88%d8%b6/"}},[s("img",{staticClass:"d-block w-100",attrs:{src:e("0ed7"),alt:"First slide"}})])])])])])}],xt={name:"CarouselWidget"},Bt=xt,bt=(e("31e8"),Object(P["a"])(Bt,_t,Ct,!1,null,"3ac51677",null)),Tt=bt.exports,jt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t._m(0),e("div",{staticClass:"ProdList"},[e("div",{staticClass:"scrollmenu"},t._l(t.RecentProd,(function(t){return e("ProdCard",{key:t.id,attrs:{Product:t}})})),1)])])},wt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList"},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{staticClass:"pull-left",attrs:{href:"https://alyaman.com/product-category/%d8%a7%d9%84%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a/"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("وصلنا حديثا")])])}],St={name:"RecentList",components:{ProdCard:st},computed:Object(o["a"])({},Object(i["c"])(["RecentProd"]))},Ot=St,kt=Object(P["a"])(Ot,jt,wt,!1,null,null,null),Dt=kt.exports,Lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t._m(0),e("div",{staticClass:"ProdList container-fluid"},[e("div",{staticClass:"scrollmenu"},t._l(t.ProdByBox,(function(t){return e("ProdGridBox",{key:t.id,staticClass:"col-5 col-sm-3",attrs:{Product:t}})})),1)])])},Et=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList"},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{staticClass:"pull-left",attrs:{href:"https://alyaman.com/product-tag/moq_5_group/"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("منتجات يمكنك طلب 5 كرتون منها او اقل")])])}],$t={name:"ProdByBox",components:{ProdGridBox:ht},computed:Object(o["a"])({},Object(i["c"])(["ProdByBox"]))},Rt=$t,It=(e("bdca"),Object(P["a"])(Rt,Lt,Et,!1,null,"997d01cc",null)),Mt=It.exports,Gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t._m(0),e("div",{staticClass:"ProdList"},[e("div",{staticClass:"scrollmenu"},t._l(t.ProdMostPopular,(function(t){return e("ProdCard",{key:t.id,attrs:{Product:t}})})),1)])])},At=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList"},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{staticClass:"pull-left",attrs:{href:"https://alyaman.com/%d8%b1%d8%a7%d8%a6%d8%ac%d8%a9/"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("الاكثر رواجا")])])}],Ft={components:{ProdCard:st},computed:Object(o["a"])({},Object(i["c"])(["ProdMostPopular"]))},Ht=Ft,qt=Object(P["a"])(Ht,Gt,At,!1,null,null,null),Wt=qt.exports,zt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t._m(0),e("div",{staticClass:"ProdList"},[e("div",{staticClass:"scrollmenu d-sm-block d-none"},t._l(t.ProdByTax,(function(t){return e("ProdCard",{key:t.id,attrs:{Product:t}})})),1),e("div",{staticClass:"d-sm-none d-block"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.ProdByTax,(function(t){return e("ProdGridBox",{key:t.id,staticClass:"col-6 col-sm-3 GridItem",attrs:{Product:t}})})),1)])])])])},Nt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList"},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{staticClass:"pull-left",attrs:{href:"https://alyaman.com/product-category/%d8%a7%d9%84%d8%b9%d9%8a%d8%af-%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a/"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("العيد الوطني السعودي")])])}],Jt={name:"prodsByTax",components:{ProdCard:st,ProdGridBox:ht},computed:Object(o["a"])({},Object(i["c"])(["ProdByTax"]))},Qt=Jt,Ut=Object(P["a"])(Qt,zt,Nt,!1,null,null,null),Kt=Ut.exports,Vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t._m(0),e("div",{staticClass:"ProdList "},[e("div",{staticClass:"scrollmenu d-sm-none d-none"},t._l(t.ProdByTax0,(function(t){return e("ProdCard",{key:t.id,attrs:{Product:t}})})),1),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.ProdByTax0,(function(t){return e("ProdGridBox",{key:t.id,staticClass:"col-4 col-sm-3 GridItem",attrs:{Product:t}})})),1)])])])},Xt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList"},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{staticClass:"pull-left",attrs:{href:"https://alyaman.com/%d9%85%d8%ac%d9%85%d9%88%d8%b9%d8%a9-%d8%aa%d9%88%d8%b2%d9%8a%d8%b9%d8%a7%d8%aa-%d8%b2%d8%ac%d8%a7%d8%ac%d9%8a%d8%a9-%d8%a3%d8%b9%d8%b1%d8%a7%d8%b3/"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("توزيعات زجاجية")])])}],Yt={name:"prodsByTax0",components:{ProdCard:st,ProdGridBox:ht},computed:Object(o["a"])({},Object(i["c"])(["ProdByTax0"]))},Zt=Yt,ta=Object(P["a"])(Zt,Vt,Xt,!1,null,null,null),aa=ta.exports,ea=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t._m(0),e("div",{staticClass:"ProdList "},[e("div",{staticClass:"scrollmenu d-sm-none d-none"},t._l(t.ProdByTax1,(function(t){return e("ProdCard",{key:t.id,attrs:{Product:t}})})),1),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.ProdByTax1,(function(t){return e("ProdGridBox",{key:t.id,staticClass:"col-6 col-sm-3 GridItem",attrs:{Product:t}})})),1)])])])},sa=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList"},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{staticClass:"pull-left",attrs:{href:"https://alyaman.com/product-category/%d9%85%d9%88%d8%a7%d9%84%d9%8a%d8%af/"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("زينة منوعة")])])}],ra={name:"ProdsByTax1",components:{ProdCard:st,ProdGridBox:ht},computed:Object(o["a"])({},Object(i["c"])(["ProdByTax1"]))},da=ra,oa=Object(P["a"])(da,ea,sa,!1,null,null,null),ca=oa.exports,na=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t._m(0),e("div",{staticClass:"ProdList "},[e("div",{staticClass:"scrollmenu d-sm-none d-none"},t._l(t.ProdByTax2,(function(t){return e("ProdCard",{key:t.id,attrs:{Product:t}})})),1),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.ProdByTax2,(function(t){return e("ProdGridBox",{key:t.id,staticClass:"col-6 col-sm-3 GridItem",attrs:{Product:t}})})),1)])])])},ia=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList"},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{staticClass:"pull-left",attrs:{href:"https://alyaman.com/product-category/%d8%a3%d8%b9%d9%8a%d8%a7%d8%af-%d9%85%d9%8a%d9%84%d8%a7%d8%af/"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("توزيعات عيد ميلاد")])])}],la={name:"ProdsByTax2",components:{ProdCard:st,ProdGridBox:ht},computed:Object(o["a"])({},Object(i["c"])(["ProdByTax2"]))},ua=la,fa=(e("7b22"),Object(P["a"])(ua,na,ia,!1,null,null,null)),ma=fa.exports,pa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t._m(0),e("div",{staticClass:"ProdList "},[e("div",{staticClass:"scrollmenu d-sm-none d-none"},t._l(t.ProdByTax3,(function(t){return e("ProdCard",{key:t.id,attrs:{Product:t}})})),1),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.ProdByTax3,(function(t){return e("ProdGridBox",{key:t.id,staticClass:"col-6 col-sm-3 GridItem",attrs:{Product:t}})})),1)])])])},ha=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList"},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{staticClass:"pull-left",attrs:{href:"https://alyaman.com/product-tag/ksa_tag_group/"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("تاغات العيد الوطني السعودي")])])}],Pa={name:"ProdsByTax3",components:{ProdCard:st,ProdGridBox:ht},computed:Object(o["a"])({},Object(i["c"])(["ProdByTax3"]))},va=Pa,ga=Object(P["a"])(va,pa,ha,!1,null,null,null),ya=ga.exports,_a=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t._m(0),e("div",{staticClass:"ProdList "},[e("div",{staticClass:"scrollmenu d-sm-none d-none"},t._l(t.ProdByTax4,(function(t){return e("ProdCard",{key:t.id,attrs:{Product:t}})})),1),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.ProdByTax4,(function(t){return e("ProdGridBox",{key:t.id,staticClass:"col-6 col-sm-3 GridItem",attrs:{Product:t}})})),1)])])])},Ca=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList"},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{staticClass:"pull-left",attrs:{href:"https://alyaman.com/product-tag/ksa_topper_group/"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("تغريسات العيد الوطني السعودي")])])}],xa={name:"ProdsByTax3",components:{ProdCard:st,ProdGridBox:ht},computed:Object(o["a"])({},Object(i["c"])(["ProdByTax4"]))},Ba=xa,ba=Object(P["a"])(Ba,_a,Ca,!1,null,null,null),Ta=ba.exports,ja=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t._m(0),e("div",{staticClass:"ProdList "},[e("div",{staticClass:"scrollmenu d-sm-none d-none"},t._l(t.ProdByTax7,(function(t){return e("ProdCard",{key:t.id,attrs:{Product:t}})})),1),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.ProdByTax7,(function(t){return e("ProdGridBox",{key:t.id,staticClass:"col-4 col-sm-3 GridItem",attrs:{Product:t}})})),1)])])])},wa=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TitleList",staticStyle:{"margin-bottom":"4px"}},[e("div",{staticClass:"float-left ShowMoreBtn"},[e("a",{attrs:{href:"https://alyaman.com/product-tag/baby_box_group/"}},[t._v("عرض المزيد")])]),e("h3",{staticClass:"text-right"},[t._v("توزيعات علب كرتون")])])}],Sa={name:"prodsByTax7",components:{ProdCard:st,ProdGridBox:ht},computed:Object(o["a"])({},Object(i["c"])(["ProdByTax7"]))},Oa=Sa,ka=Object(P["a"])(Oa,ja,wa,!1,null,null,null),Da=ka.exports,La={name:"home",components:{carouselWidget:Tt,CategorySlide:K,OffersList:ct,ProdsByTax6:yt,RecentList:Dt,MostPopularList:Wt,ProdByTax:Kt,prodsByTax0:aa,ProdsByTax1:ca,ProdsByTax2:ma,ProdsByTax3:ya,ProdsByTax4:Ta,ProdsByTax7:Da,ProdByBoxList:Mt}},Ea=La,$a=Object(P["a"])(Ea,I,M,!1,null,null,null),Ra=$a.exports,Ia=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Ma=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("h4",[t._v("Test Page Working")])])}],Ga={name:"test"},Aa=Ga,Fa=Object(P["a"])(Aa,Ia,Ma,!1,null,null,null),Ha=Fa.exports;s["a"].use(R["a"]);var qa=[{path:"/",name:"Home",component:Ra},{path:"/about",name:"About",component:Ha}],Wa=new R["a"]({routes:qa}),za=Wa,Na={RecentProd:[],ProdOffers:[],ProdBestSell:[],ProdMostPopular:[],ProdByTax:[],ProdByTax0:[],ProdByTax1:[],ProdByTax2:[],ProdByTax3:[],ProdByTax4:[],ProdByTax5:[],ProdByTax6:[],ProdByTax7:[],ProdByBox:[],ProdDecRope:[],ProdDecSticker:[],ProdDecIns:[],ProdDecTag:[]},Ja={ProdOffers:function(t){return t.ProdOffers},RecentProd:function(t){return t.RecentProd},ProdByTax:function(t){return t.ProdByTax},ProdByTax0:function(t){return t.ProdByTax0},ProdBestSell:function(t){return t.ProdBestSell},ProdMostPopular:function(t){return t.ProdMostPopular},ProdByTax1:function(t){return t.ProdByTax1},ProdByTax2:function(t){return t.ProdByTax2},ProdByTax3:function(t){return t.ProdByTax3},ProdByTax4:function(t){return t.ProdByTax4},ProdByTax5:function(t){return t.ProdByTax5},ProdByTax6:function(t){return t.ProdByTax6},ProdByTax7:function(t){return t.ProdByTax7},ProdByBox:function(t){return t.ProdByBox},ProdDecRope:function(t){return t.ProdDecRope},ProdDecSticker:function(t){return t.ProdDecSticker},ProdDecIns:function(t){return t.ProdDecIns},ProdDecTag:function(t){return t.ProdDecTag}},Qa={getRecentProd:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?featured = true&per_page=8";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("RecentProd",t.data)}))},getProdByTax:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=714&per_page=4";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdByTax",t.data)}))},getProdByTax0:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=717&per_page=9";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdByTax0",t.data)}))},getProdOffers:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=715&per_page=8";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdOffers",t.data)}))},getProdBestSell:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=672&per_page=8";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdBestSell",t.data)}))},getProdMostPopular:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=718&per_page=8";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdMostPopular",t.data)}))},getProdByTax1:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=719&per_page=4";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdByTax1",t.data)}))},getProdByTax2:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=695&per_page=4";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdByTax2",t.data)}))},getProdByTax3:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=707&per_page=4";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdByTax3",t.data)}))},getProdByTax4:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=705&per_page=4";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdByTax4",t.data)}))},getProdByTax5:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=705&per_page=4";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdByTax5",t.data)}))},getProdByTax6:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=716&per_page=9";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdByTax6",t.data)}))},getProdByTax7:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=720&per_page=9";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdByTax7",t.data)}))},getProdByBox:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=696&per_page=8";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddddddddddddd"):a("ProdByBox",t.data)}))},getProdDecRope:function(t){var a=t.commit,e=" https://alyaman.com/wp-json/wc/v3/products?tag=703&per_page=8";m.a.get(e).then((function(t){200!=t.status?console.log("baddddd"):a("ProdDecRope",t.data)}))},getProdDecSticker:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=704per_page=8";m.a.get(e).then((function(t){200!=t.status?console.log("baddddd"):a("ProdDecSticker",t.data)}))},getProdDecIns:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=705per_page=8";m.a.get(e).then((function(t){200!=t.status?console.log("baddddd"):a("ProdDecIns",t.data)}))},getProdDecTag:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products?tag=707per_page=8";m.a.get(e).then((function(t){200!=t.status?console.log("baddddd"):a("ProdDecTag",t.data)}))}},Ua={ProdByBox:function(t,a){return t.ProdByBox=a},ProdDecRope:function(t,a){return t.ProdDecRope=a},ProdDecSticker:function(t,a){return t.ProdDecSticker=a},ProdDecIns:function(t,a){return t.ProdDecIns=a},ProdDecTag:function(t,a){return t.ProdDecTag=a},ProdOffers:function(t,a){return t.ProdOffers=a},ProdMostPopular:function(t,a){return t.ProdMostPopular=a},RecentProd:function(t,a){return t.RecentProd=a},ProdByTax:function(t,a){return t.ProdByTax=a},ProdByTax0:function(t,a){return t.ProdByTax0=a},ProdBestSell:function(t,a){return t.ProdBestSell=a},ProdByTax1:function(t,a){return t.ProdByTax1=a},ProdByTax2:function(t,a){return t.ProdByTax2=a},ProdByTax3:function(t,a){return t.ProdByTax3=a},ProdByTax4:function(t,a){return t.ProdByTax4=a},ProdByTax5:function(t,a){return t.ProdByTax5=a},ProdByTax6:function(t,a){return t.ProdByTax6=a},ProdByTax7:function(t,a){return t.ProdByTax7=a}},Ka={state:Na,getters:Ja,actions:Qa,mutations:Ua},Va={Categories:[]},Xa={Categories:function(t){return t.Categories}},Ya={getCategories:function(t){var a=t.commit,e="https://alyaman.com/wp-json/wc/v3/products/categories?per_page=12";m.a.get(e).then((function(t){200!=t.status?console.log("Badddddddddd"):a("Categories",t.data)}))}},Za={Categories:function(t,a){return t.Categories=a}},te={state:Va,getters:Xa,actions:Ya,mutations:Za};s["a"].use(i["a"]);var ae=new i["a"].Store({modules:{Products:Ka,Categories:te}}),ee="ck_4a0c08cd61f3efbd00e151f0b28eb55eaf638851",se="cs_1c54b351f8a30b348270ffb2e2f2e2a9afef717f",re="Basic ".concat(window.btoa("".concat(ee,":").concat(se)));m.a.defaults.headers.common["Authorization"]=re,s["a"].config.productionTip=!1,new s["a"]({router:za,store:ae,render:function(t){return t($)}}).$mount("#app")},"63b5":function(t,a,e){"use strict";e("1dfd")},"7b22":function(t,a,e){"use strict";e("de1c")},"85ec":function(t,a,e){},"8dcc":function(t,a,e){},"8f91":function(t,a,e){},"9ee2":function(t,a,e){t.exports=e.p+"img/2.jpeg"},a524:function(t,a,e){},b690:function(t,a,e){},bafc:function(t,a,e){},bdca:function(t,a,e){"use strict";e("e490")},c307:function(t,a,e){t.exports=e.p+"img/3.jpeg"},d0ec:function(t,a,e){t.exports=e.p+"img/1.jpeg"},de1c:function(t,a,e){},e490:function(t,a,e){},ec9e:function(t,a,e){},ecf5:function(t,a,e){"use strict";e("8dcc")},ef15:function(t,a,e){"use strict";e("8f91")}});
//# sourceMappingURL=app.js.map