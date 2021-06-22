<template>

        <div class="ProdCard">
        <div class="card-grid">
             <div class="card-image">
                <a href="#" class="image">
                    <img class="pic-1" src="https://alyaman.com/wp-content/uploads/2021/04/IMG_9564-600x600-1.jpg">
                </a>
            </div>
            <div class="card-content">
                <h3 class="title"><a href="#">xxxxxxxxx</a></h3>
                <!-- <a class="add-to-cart" href="#">add to cart</a> -->
            </div>
         </div>
        </div>
</template>

<script>
export default {


props:['Product']


}
</script>

<style lang="css" scoped>

.ProdOne{
    float: left;
    margin: 16px;

}

.card-grid{
  
    text-align: center;
    border-radius: 15px;
    border: 1px solid #e7e7e7;
    overflow: hidden;
    transition: all 0.4s ease-out;
}
.card-grid:hover{ 
    
    box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
 }
.card-grid .card-image{ position: relative; }
.card-grid .card-image a.image{ display: block; }
.card-grid .card-image img{
    width: 100%;
    height: auto;
}
.card-grid .card-discount-label{
    color: #fff;
    background: #fe6a00;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 5px;
    position: absolute;
    top: 12px;
    left: 12px;
}
.card-grid .card-links{
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
.card-grid:hover .card-links{
    opacity: 1;
    top: 50%;
}
.card-grid .card-links li{
    display: inline-block;
    margin: 0 2px;
}
.card-grid .card-links li a{
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
.card-grid .card-links li a:hover{
    color: #fff;
    background: #fe6a00;
    box-shadow: 0px 3px 20px 5px rgb(0 0 0 / 10%);
}
.card-grid .card-links li a:before,
.card-grid .card-links li a:after{
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
.card-grid .card-links li a:after{
    content: '';
    height: 10px;
    width: 10px;
    padding: 0;
    transform: translateX(-50%) rotate(45deg);
    top: -18px;
    z-index: -1;
}
.card-grid .card-links li a:hover:before,
.card-grid .card-links li a:hover:after{
    display: block;
}
.card-grid .card-content{
    padding: 12px 12px 15px;
    position: relative;
}
.card-grid .rating{
    padding: 0;
    margin: 15px 0 0px;
    list-style: none;
}
.card-grid .rating li{
    color: #fe6a00;
    font-size: 14px;
}
.card-grid .rating .far{ color: #808080; }
.card-grid .title{
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 15px;
}
.card-grid .title a{
    color: #2c2c2c;
    transition: all 0.3s ease 0s;
}
.card-grid .title a:hover{ color: #fe6a00; }
.card-grid .price{
    color: #fe6a00;
    font-size: 17px;
    font-weight: 600;
    display: block;
    transition: all 0.4s ease-in-out;
}
.card-grid .price span{
    color: #999;
    font-weight: 500;
  
}
.card-grid:hover 
/* .price{ opacity: 0; } */
.card-grid .add-to-cart{
    color: #fff;
    background-color: #fe6a00;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 40px;
    width: 140px;
    height: 40px;
    border-radius: 50px;
    opacity: 0;
    transform: translateX(-50%);
    position: absolute;
    bottom: 50px;
    left: 50%;
    transition: all .4s ease-out;
}
.card-grid .add-to-cart:hover{ background-color: #2f2f2f; }
.card-grid:hover .add-to-cart{
    opacity: 1;
    bottom: 8px;
}

.rating li {
    display: inline-block;
}
@media screen and (max-width:1200px){
    .card-grid{ margin: 0 0 30px; }
}


</style>
