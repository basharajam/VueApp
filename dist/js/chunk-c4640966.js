(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4640966"],{"3a54":function(t,e,a){"use strict";a("b690")},"55b9":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Cat-Slide-item"},[a("router-link",{staticClass:"flex justify-center",attrs:{to:{name:"ProdByCat"}}},[a("img",{staticClass:"Cat-Slide-item-img",attrs:{src:t.Category.image.src,alt:""}}),a("span",[t._v(t._s(t.Category.name))])])],1)},i=[],r={name:"CatSideItem",props:["Category"]},s=r,o=(a("3a54"),a("2877")),l=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=l.exports},b690:function(t,e,a){},b9f0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("b-row",{staticClass:"AllCat"},t._l(t.Categories.Categories,(function(t){return a("b-col",{key:t.id,staticClass:"CatItem d-flex justify-content-center",attrs:{cols:"3"}},[a("CatSlideItem",{attrs:{Category:t}})],1)})),1),a("b-row",[a("b-col",{attrs:{sm:"12"}},["sm"===t.$mq?a("b-skeleton-wrapper",{attrs:{loading:t.AllCatLoading},scopedSlots:t._u([{key:"loading",fn:function(){return[a("b-container",{attrs:{fluid:""}},[a("landingLoader")],1)]},proxy:!0}],null,!1,1765802212)},t._l(t.Categories.mobile,(function(e){return a("div",{key:e.title},["banner"===e.type&&"hide"!==e.mobileDisplay?a("banner",{attrs:{item:e}}):t._e(),"ProdList"===e.type&&"hide"!==e.mobileDisplay?a("ProdList",{attrs:{ProdList:e}}):t._e()],1)})),0):t._e(),"md"===t.$mq||"lg"===t.$mq?a("b-skeleton-wrapper",{attrs:{loading:t.AllCatLoading},scopedSlots:t._u([{key:"loading",fn:function(){return[a("b-container",{attrs:{fluid:""}},[a("landingLoader")],1)]},proxy:!0}],null,!1,1765802212)},t._l(t.Categories.desktop,(function(e){return a("div",{key:e.title},["banner"===e.type&&"hide"!==e.Display?a("banner",{attrs:{item:e}}):t._e(),"ProdList"===e.type&&"hide"!==e.Display?a("ProdList",{attrs:{ProdList:e}}):t._e()],1)})),0):t._e()],1)],1)],1)},i=[],r=a("5530"),s=a("2f62"),o=a("55b9"),l=a("3e9a"),c=a("41f6"),d=a("5e59"),u={computed:Object(r["a"])({},Object(s["c"])(["Categories"])),components:{CatSlideItem:o["a"],ProdList:d["a"],banner:l["a"],landingLoader:c["a"]},data:function(){return{AllCatLoading:!0}},watch:{Categories:function(t){t.desktop.length>0&&(this.AllCatLoading=!1)}},mounted:function(){"md"!==this.$mq&&"lg"!==this.$mq||this.$router.push({name:"Home"})}},f=u,m=(a("c100"),a("2877")),p=Object(m["a"])(f,n,i,!1,null,"82da686e",null);e["default"]=p.exports},bf17:function(t,e,a){},c100:function(t,e,a){"use strict";a("bf17")}}]);
//# sourceMappingURL=chunk-c4640966.js.map