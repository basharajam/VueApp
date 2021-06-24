<template>

        <div class="ProdCard col-sm-3 col-8">
        <div class="product-grid">
             <div class="product-image">
                <a :href="Product.permalink" class="image">
                    <img class="pic-1" :src="Product.images[0].src">
                </a>
                <span v-if="Product.sale_price" class="product-discount-label">% {{ discountPrice(Product)  }}</span>
                <ul class="product-links">
                    <!-- <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                    
                    <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li> -->
                </ul>
            </div>
            <div class="product-data">
                <h3 class="title"><a :href="Product.permalink">{{Product.name}}</a></h3>
                <div class="price"><span>ر.س</span> {{ parseFloat(Product.regular_price).toFixed(2) }}</div>
                <div class="descrition"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam rem culpa alias quidem atque et  </div>
            </div>
            <div class="product-content">
                <!-- <ul class="rating">
                    <span>{{ Product.average_rating }}</span>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="far fa-star"></li>
                    <li class="far fa-star"></li>
                </ul> -->
                <a class="add-to-cart" href="#">اضافة الى السلة</a>
            </div>
         </div>
        </div>
</template>

<script>
export default {


        props:['Product'],
        methods:{
            discountPrice(Product){

                var stp1 = Product.regular_price-Product.sale_price;
                var stp2 = stp1/Product.regular_price;
                var stp3 = stp2 *100;
                return  parseFloat(stp3).toFixed(0);
            }
        }


}
</script>

<style lang="css" scoped>

.ProdOne{
    float: left;
    margin: 16px;

}

.product-grid{
  
    text-align: center;
    border-radius: 15px;
    border: 1px solid #e7e7e7;
    overflow: hidden;
    transition: all 0.4s ease-out;
}
.product-grid:hover{ box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.1); }
.product-grid .product-image{ position: relative; }
.product-grid .product-image a.image{ display: block; }
.product-grid .product-image img{
    width: 100%;
    height: auto;
}
.product-grid .product-discount-label{
    color: #fff;
    background: #fe6a00;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 5px;
    position: absolute;
    top: 12px;
    left: 12px;
}
.product-grid .product-links{
    width: 145px;
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    top: 65%;
    left: 50%;
    transition: all 0.4s ease 0s;
}
.product-grid:hover .product-links{
    opacity: 1;
    top: 50%;
}
.product-grid .product-links li{
    display: inline-block;
    margin: 0 2px;
}
.product-grid .product-links li a{
    color: #2c2c2c;
    background: #fff;
    font-size: 16px;
    line-height: 42px;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    display: block;
    position: relative;
    transition: all 0.4s ease-out 0s;
}
.product-grid .product-links li a:hover{
    color: #fff;
    background: #fe6a00;
    box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.2);
}
.product-grid .product-links li a:before,
.product-grid .product-links li a:after{
    content: attr(data-tip);
    color: #fff;
    background-color: #555;
    font-size: 12px;
    line-height: 18px;
    padding: 5px 10px;
    white-space: nowrap;
    display: none;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: -40px;
    transition: all 0.3s ease 0s;
}
.product-grid .product-links li a:after{
    content: '';
    height: 10px;
    width: 10px;
    padding: 0;
    transform: translateX(-50%) rotate(45deg);
    top: -18px;
    z-index: -1;
}
.product-grid .product-links li a:hover:before,
.product-grid .product-links li a:hover:after{
    display: block;
}
.product-grid .product-content{
    padding: 12px 12px 15px;
    position: relative;
}
.product-grid .rating{
    padding: 0;
    margin: 15px 0 0px;
    list-style: none;
}
.product-grid .rating li{
    color: #fe6a00;
    font-size: 14px;
}
.product-grid .rating .far{ color: #808080; }
.product-grid .title{
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 15px;
    transition: all 0.4s ease-in-out;
}
.product-grid .title a{
    color: #2c2c2c;
    transition: all 0.3s ease 0s;
}
.product-grid .product-data .title a:hover{ color: #fe6a00; }
.product-grid .price{
    color: #fe6a00;
    font-size: 17px;
    font-weight: 600;
    display: block;
    transition: all 0.4s ease-in-out;
}
.product-grid .product-data .price span{
    color: #999;
    font-weight: 500;
  
}
/* .product-grid:hover  */
/* .price{ opacity: 0; } */
.product-content .add-to-cart{
    color: #fff;
    display: block;
    background-color: #fe6a00;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 40px;
    width: 140px;
    border-radius: 50px;
    padding: 6px;
    margin: 14px auto;
    transition: all 0.4s ease-out;
    /* height: 40px; */
    /* bottom: 50px; */
    /* left: 50%; */
    /* opacity: 0; */
    /* transform: translateX(-50%); */
    /* position: absolute; */
}
.product-content .add-to-cart:hover{
    transform: scale(1.1);
     /* background-color: #2f2f2f; */
     
}
/* .product-grid:hover .add-to-cart{
    opacity: 1;
    bottom: 8px;
} */

.product-data{
    background-color: white;
    transition: all 0.4s ease-out;
    padding: 8px 0;
    z-index: 666;
    position: relative;
}

.product-data .descrition {

display: none;
position: absolute;
background-color: white;
transition: all 0.4s ease-out;
}


/*  Dsecription Animation When Hover On Img  */


.product-grid .product-image:hover >a >img {

}

.product-grid .product-image:hover + .product-data .descrition {
display: block;
transition: all 0.4s ease-out;
    /* 
    position: relative; */

}

.product-grid .product-image:hover + .product-data {

    
    transform: translateY(-200%);
    /* color:white !important; */

}







.rating li {
    display: inline-block;
}
@media screen and (max-width:1200px){
    .product-grid{ margin: 0 0 30px; }
}


</style>
