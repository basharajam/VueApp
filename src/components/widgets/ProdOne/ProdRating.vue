<template>
    <div class="row">
        <div class="col-sm-6">
        <div class="d-flex flex-column">
            <div class="d-flex">
            <div class="rating-content">
                <p class="product-rating"> 
                <p class="product-stars">
                <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
                </p> 
                <p class="based-on">
                    بناء على 12 تقييمات
                </p>
            </div>
            <div class="RateProgress">
                <div class="progress-br" style="width: 100%;">
                <b-progress class="" value="9" max="10"></b-progress>
                <span>5</span>
                </div>
                <div class="progress-br" style="width: 100%;">
                <b-progress class="" value="8" max="10"></b-progress>
                <span>4</span>
                </div>
                <div class="progress-br" style="width: 100%;">
                <b-progress class="" value="2" max="10"></b-progress>
                <span>3</span>
                </div>
                <div class="progress-br" style="width: 100%;">
                <b-progress class="" value="1" max="10"></b-progress>
                <span>2</span>
                </div>
                <div class="progress-br" style="width: 100%;">
                <b-progress class="" value="0" max="10"></b-progress>
                <span>1</span>
                </div>
            </div>
            </div>
            <div class="RateForm">
            <b-form @submit.stop.prevent="onRateSubmit">
                <b-form-group id="name-live-feedback" label-for="name-live-feedback">
                <b-form-input
                    id="name-live-feedback"
                    name="name-live-feedback"
                    v-model="$v.form.name.$model"
                    :state="validateState('name')"
                    aria-describedby="name-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback
                    id="name-live-feedback"
                >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group>
                    <star-rating :rating="5" :increment='0.01' :read-only="false" :star-size="24" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
                </b-form-group>
                
                <b-form-group id="desc-live-feedback" label-for="desc-live-feedback" >
                <b-form-textarea
                    id="textarea"
                    placeholder="Enter something..."
                    rows="6"
                    max-rows="6"
                    :state="validateState('desc')"
                    v-model="$v.form.desc.$model"
                    aria-describedby="desc-live-feedback"
                ></b-form-textarea>
                <b-form-invalid-feedback
                    id="desc-live-feedback"
                >This is a required field and must be at least 8 characters.</b-form-invalid-feedback>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
            </div>
        </div>
        </div>
        <div class="col-sm-6">
        <ul class="list-unstyled" style="padding: 0;">
            <b-media tag="li">
            <template #aside>
                <b-img blank blank-color="#abc" width="64" class="RateOneImg" alt="placeholder"></b-img>
            </template>
            <h5 class="mt-0 mb-1">Carol R. Spearman</h5>
            <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
            <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, 
            </p>
            </b-media>

            <b-media tag="li" class="my-4">
            <template #aside>
            <b-img blank blank-color="#cba" width="64" class="RateOneImg"  alt="placeholder"></b-img>
            </template>

            <h5 class="mt-0 mb-1">Michael Y. Lowman</h5>
            <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
            <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            </p>
            </b-media>
            <b-media tag="li" class="my-4">
            <template #aside>
            <b-img blank blank-color="#cba" width="64" class="RateOneImg"  alt="placeholder"></b-img>
            </template>

            <h5 class="mt-0 mb-1">Michael Y. Lowman</h5>
            <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
            <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            </p>
            </b-media>

            <b-media tag="li">
            <template #aside>
                <b-img blank blank-color="#bac" width="64" class="RateOneImg"  alt="placeholder"></b-img>
            </template>

            <h5 class="mt-0 mb-1">Thomas C. Miller</h5>
            <star-rating   :rating="4" :increment='0.01' :read-only="true" :star-size="18" :show-rating='false' v-bind:rtl='true' active-color='#fe6a00' :glow='1' :animate='true' ></star-rating>
            <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, 
            </p>
            </b-media>
        </ul>
        </div>
    </div>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'
import StarRating from 'vue-star-rating'
export default {


    components:{
        StarRating
    },
    data(){
        return  {
          form: {
            name: null,
            food: null,
            desc:null
          },
          DistruProps:[],
        }
    },
    validations: {
        form: {
          rate: {
            required
          },
          name: {
            required,
            minLength: minLength(3)
          },
          desc:{
            required,
            minLength:minLength(8)
          }
        }
    },
    methods:{
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        onRateSubmit(){
        },
    }

}
</script>

<style scoped>

.RateProgress{
    flex:1
}

</style>