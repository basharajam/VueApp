<template>
    <div >
        <div class="overlay"></div>
        <!-- <img src="spinner.png" class="spinner">  -->
        <div class="flip-container">
            <div class="flipper" style="z-index:999 position: relative; z-index: 999; bottom: 60px;">
                <div class="front" style="z-index:999">
                 
                    <img src="spinner.png" class="rotateimg180"> 
                </div>
                <div class="back" style="z-index:999">
                   
                    <img src="spinner.png" > 
                </div>
                <div class="clear" style="z-index:999"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.overlay{

    width: 100%;
    height: 100%;
    background: white;
    position: fixed;
    z-index: 997;
}

.flip-container {
	-webkit-perspective: 1000;
	width: 100%;
    z-index: 999;
    position: fixed;
    top: 42%;
    left: 50%;
    bottom: 50%;
    right: 0%;
}

.flipper {
	transition: 0.6s;
	-webkit-transform-style: preserve-3d;
	position: relative;
	height: 200px;
}
.front,
.back {
	width: 100%;
	height: 200px;
	position: absolute;
	left: 0;
	top: 0;
	-webkit-backface-visibility: hidden;
	color: #fff;
	text-shadow: 1px 1px #000;
	font-size: 2em;
	line-height: 200px;
	text-align: center;
}

.back {
	-webkit-transform: rotateY(180deg);

}

.front {
	z-index: 2;
	
}

.flip-container p {
	margin: 10px 0;
	text-align: center;
}
.flip-container .flipper {
	animation: flipY 3s infinite;
}

.rotateimg180 {
  -webkit-transform:rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

@keyframes flipX{
    from {
        -webkit-transform: rotateX(180deg);
    }
    
    to {
        -webkit-transform: rotateX(-180deg);
    }
    
}
@keyframes flipY{
    from {
        -webkit-transform: rotateY(180deg);
    }
    
    to {
        -webkit-transform: rotateY(-180deg);
    }
    
}

@media screen and (min-width:320px) and (max-width:425px) {
.front img,
.back img {
    width: 25% !important ;
}
}


</style>