<template>
        <div class="container-fluid">
            <div class="col-sm-12 mx-auto py-3 d-flex flex-column">
                <div class="RateLogo d-flex my-5 justify-content-center">
                    <img src="@/assets/icon.png" class="img-fluid" alt="logo">
                </div>
                <div class="RateList d-flex my-2">

                <b-carousel
                id="carousel-1"
                :interval="9000"
                controls
                indicators
                style="color:#999;"
                v-if="displayRates"
                >
                    <!-- Text slides with image -->
                    <b-carousel-slide  v-for="item in this.rateArr" v-bind:key="item.id">
                        <div class="img-box"><img src="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" alt=""></div>
                        <p class="testimonial">{{ item.desc }}</p>
                        <p class="overview"><b>{{ item.comp_name }}</b></p>
                        <star-rating style="display: flex;flex-direction: column;"  :rating="parseFloat(item.value)" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true'></star-rating>
                    </b-carousel-slide>
                </b-carousel>
                </div>

                <div class="RateForm my-2 col-sm-6 mx-auto">

                    <b-form @submit="SaveRate()">
                        <b-form-group>
                            <div class="d-flex">
                              <vue-feedback-reaction v-model="form.RateValI" :labels="labelArr"  />
                            </div>
                        </b-form-group>
                        <b-form-group>
                            <b-form-input
                                id="CompNameInput"
                                type="text"
                                placeholder="أسم الشركة"
                                class="rounded-form"
                                v-model.lazy="form.CompNameI"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-form-textarea
                                id="CompDescInput"
                                type="text"
                                placeholder="شرح"
                                class="rounded-form"
                                v-model.lazy="form.CompDescI"
                                rows="4"
                                max-rows="6"
                            ></b-form-textarea>
                        </b-form-group>
                        <b-form-group>
                            <b-button variant="submit" @click="SaveRate()" class="SaveRateBtn" >حفظ</b-button>
                        </b-form-group>
                    </b-form>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
import { VueFeedbackReaction } from 'vue-feedback-reaction';
import StarRating from 'vue-star-rating'


export default {
    components: {
      VueFeedbackReaction,
      StarRating
    },
    data(){

        return {
            form:{
                CompNameI:'',
                CompDescI:'',
                RateValI: '',
            },
            displayRates:false,
            labelArr:['good','good1','good2','good3','good4'],
            rateArr:[]
        }

    },
    watch:{
        rateArr:function(newValue){
            if(newValue.length > 0){
                this.displayRates=true;
                console.log(newValue)
            }

        }
    },

    methods:{

        SaveRate:function(){

            console.log(this.form)

            var url='http://127.0.0.1:8000/api/SaveRate';
            axios.post(url,this.form).then(function(resp){
                console.log(resp.data)
            })
        }
    },
    mounted(){
      let $vm = this;
      var url='http://127.0.0.1:8000/api/getRate';
      axios.get(url).then(function(resp){
        //console.log(resp.data)
        $vm.rateArr=resp.data
      })


    }
 


}
</script>

<style scoped>
.carousel {
	width: 650px;
	margin: 0 auto;
	padding-bottom: 50px;
}
.carousel .carousel-item {
	color: #999;
	font-size: 14px;
	text-align: center;
	overflow: hidden;
	min-height: 420px;
}
.carousel .carousel-item a {
	color: #eb7245;
}
.carousel .img-box {
	width: 145px;
	height: 145px;
	margin: 0 auto;
	border-radius: 50%;
}
.carousel .img-box img {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
.carousel .testimonial {	
	padding: 30px 0 10px;
    color:#999;
}
.carousel .overview {	
	text-align: center;
	padding-bottom: 5px;
}
.carousel .overview b {
	color: #333;
	font-size: 15px;
	text-transform: uppercase;
	display: block;	
	padding-bottom: 5px;
}
.carousel .star-rating i {
	font-size: 18px;
	color: #ffdc12;
}
.carousel-control-prev, .carousel-control-next {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: #999;
	text-shadow: none;
	top: 4px;
}
.carousel-control-prev i, .carousel-control-next i {
	font-size: 20px;
	margin-right: 2px;
}
.carousel-control-prev {
	left: auto;
	right: 40px;
}
.carousel-control-next i {
	margin-right: -2px;
}
.carousel .carousel-indicators {
	bottom: 15px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 11px;
	height: 11px;
	margin: 1px 5px;
	border-radius: 50%;
}
.carousel-indicators li {	
	background: #e2e2e2;
	border: none;
}
.carousel-indicators li.active {		
	background: #888;		
}

.fa.fa-star,.fa.fa-star-o,.fa.fa-star-half-o{
    color:#f45e1f !important;
}


.SaveRateBtn{
    border-radius: 25px;
    background:white;
    border-color:#f45e1f;
    color:#f45e1f;
}







</style>