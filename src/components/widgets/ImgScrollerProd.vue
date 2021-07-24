<template>
  <div class="">

        <div id="custCarousel" class="carousel slide carousel-fade" data-ride="carousel" align="center"  data-interval="false" >
                <!-- Thumbnails -->
            <ol class="ProdThumbs carousel-indicators col-sm-3 " >
                <li class=" active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#custCarousel"> <img src="https://i.picsum.photos/id/449/100/100.jpg?hmac=RDAmExfBxWp028XbWOtSJOj858jDpALVjjXGOg1FtSM" class="img-fluid"> </a> </li>
                <li class=""> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src="https://i.picsum.photos/id/449/100/100.jpg?hmac=RDAmExfBxWp028XbWOtSJOj858jDpALVjjXGOg1FtSM" class="img-fluid"> </a> </li>
                <li class=""> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src="https://i.picsum.photos/id/449/100/100.jpg?hmac=RDAmExfBxWp028XbWOtSJOj858jDpALVjjXGOg1FtSM" class="img-fluid"> </a> </li>
                <li class=""> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src="https://i.picsum.photos/id/449/100/100.jpg?hmac=RDAmExfBxWp028XbWOtSJOj858jDpALVjjXGOg1FtSM" class="img-fluid"> </a> </li>
            </ol>
            <!-- slides -->
            <div class="carousel-inner col-sm-9" >
                <div class="carousel-item active"> <img src="https://i.picsum.photos/id/28/400/300.jpg?hmac=EcWNPwRvO1rYo2_EgMZwqvVBux5MEc_-ZyrL7NcOR0g" alt="Hills"> </div>
                <div class="carousel-item"> <img src="https://i.picsum.photos/id/28/400/300.jpg?hmac=EcWNPwRvO1rYo2_EgMZwqvVBux5MEc_-ZyrL7NcOR0g" alt="Hills"> </div>
                <div class="carousel-item"> <img src="https://i.picsum.photos/id/28/400/300.jpg?hmac=EcWNPwRvO1rYo2_EgMZwqvVBux5MEc_-ZyrL7NcOR0g" alt="Hills"> </div>
                <div class="carousel-item"> <img src="https://i.picsum.photos/id/1/400/300.jpg?hmac=IEz4gAs8hxV4d9YLVH7Eha48-M-MmGD1Cc2l-V92rPc" alt="Hills"> </div>
            </div> 
            <!-- Left right -->
                <!-- <a class="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span class="carousel-control-prev-icon"></span> </a> <a class="carousel-control-next" href="#custCarousel" data-slide="next"> <span class="carousel-control-next-icon"></span> </a> -->
            
        </div>
  </div>

</template>

<script>
export default {
 name:'ImgScrollProd',
 data () {
    return {

    }
  }
}
</script>

<style scoped>

#custCarousel{
    display: flex;
    max-height: 400px;
}
#custCarousel .carousel-indicators {
    position: static;
}

#custCarousel .carousel-indicators>li {
    width: 100px;
    height: unset !important;
}

#custCarousel .carousel-indicators li img {
    display: block;
    opacity: 0.5
}

#custCarousel .carousel-indicators li.active img {
    opacity: 1
}

#custCarousel .carousel-indicators li:hover img {
    opacity: 0.75
}

.ProdThumbs{
    display: flex;
    justify-content: space-between;
    flex-direction:column;
    overflow: scroll;
    overflow-x: hidden;
    margin-right: 0;
    margin-left: 0;

}



</style>