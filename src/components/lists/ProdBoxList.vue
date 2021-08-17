<template>

    <div class="container-fluid ProdBoxList" v-if="$mq === 'md' || $mq === 'lg'">

            <b-skeleton-wrapper :loading="ProdInBox2Loading" >
                <template #loading>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-sm-3">
                        <b-skeleton class="mx-auto my-2" width="100%"></b-skeleton>
                        <div class="row">
                            <div class="col-sm-6  my-2">
                                <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6  my-2">
                                <b-skeleton-img no-aspect height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6   my-2">
                                <b-skeleton-img no-aspect height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6 my-2">
                                <b-skeleton-img no-aspect height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        
                        <b-skeleton class="mx-auto my-2" width="100%"></b-skeleton>
                        <div class="row">
                            <div class="col-sm-6  my-2">
                                <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6  my-2">
                                <b-skeleton-img no-aspect height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6   my-2">
                                <b-skeleton-img no-aspect height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6 my-2">
                                <b-skeleton-img no-aspect height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        
                        <b-skeleton class="mx-auto my-2" width="100%"></b-skeleton>
                        <div class="row">
                            <div class="col-sm-6  my-2">
                                <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6  my-2">
                                <b-skeleton-img no-aspect  height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6   my-2">
                                <b-skeleton-img no-aspect height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6 my-2">
                                <b-skeleton-img no-aspect height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-sm-3">
                        
                        <b-skeleton class="mx-auto my-2" width="100%"></b-skeleton>
                        <div class="row">
                            <div class="col-sm-6  my-2">
                                <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6  my-2">
                                <b-skeleton-img no-aspect height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6   my-2">
                                <b-skeleton-img no-aspect height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                            <div class="col-sm-6 my-2">
                                <b-skeleton-img no-aspect height="150px" ></b-skeleton-img>
                                <b-skeleton class="mx-auto my-1" width="80%"></b-skeleton>
                            </div>
                        </div>
                    </div>
                  </div>
                    
                </div>
                </template>

            <!-- SaudiDayTopper -->
            <div class="ProdsBox col-sm-3">
                <div class="" style="box-shadow: #88888836 0px 1px 12px 4px">
                    <h3 class="ProdBoxTitle ">احبال زينة اليوم الوطني</h3>
                    <div class="ProdBoxItems">
                        <div class="ProdBoxOne col-sm-6" v-for="Prod in ProdInBox2" v-bind:key="Prod.id">
                            <a :href="Prod.permalink">
                                <!-- <img :src="Prod.images[0].src" :alt="Prod.name" width="500" height="500" > -->
                                <vue-load-image>
                                    <img slot="image"  class="pic-1"  :src="Prod.images[0].src" :alt="Prod.name" width="500" height="500" >
                                    <img slot="preloader" src="@/assets/loader.png" />
                                    <img slot="error" src="@/assets/loader.png" />
                                </vue-load-image>
                            </a>
                            <a :href="Prod.permalink">
                                <p>{{Prod.name}}</p>
                            </a>
                        </div>
                        <a href="https://www.alyaman.com/product-tag/ksa_decoration_group/" class="ProdBoxBtn">عرض المزيد</a>
                    </div>
                </div>
            </div>


            <div class="ProdsBox col-sm-3">
                <div class="" style="box-shadow:#88888836  0px 1px 12px 4px">
                    <h3 class="ProdBoxTitle ">تغريسات اليوم الوطني</h3>
                    <div class="ProdBoxItems">
                        <div class="ProdBoxOne col-sm-6" v-for="Prod in ProdInBox0" v-bind:key="Prod.id">
                            <a :href="Prod.permalink">
                                <!-- <img :src="Prod.images[0].src" :alt="Prod.name" width="500" height="500" > -->
                                <vue-load-image>
                                    <img slot="image"  class="pic-1"  :src="Prod.images[0].src" :alt="Prod.name" width="500" height="500" >
                                    <img slot="preloader" src="@/assets/loader.png" />
                                    <img slot="error" src="@/assets/loader.png" />
                                </vue-load-image>
                            </a>
                            <a :href="Prod.permalink">
                                <p>{{Prod.name}}</p>
                            </a>
                        </div>
                        <a href="https://www.alyaman.com/product-tag/ksa_topper_group/" class="ProdBoxBtn">عرض المزيد</a>
                    </div>
                </div>
            </div>

            <div class="ProdsBox col-sm-3">
                <div class="" style="box-shadow: #88888836 0px 1px 12px 4px">
                    <h3 class="ProdBoxTitle ">ستيكرات اليوم الوطني</h3>
                    <div class="ProdBoxItems">
                        <div class="ProdBoxOne col-sm-6" v-for="Prod in ProdInBox" v-bind:key="Prod.id">
                            <a :href="Prod.permalink">
                                <!-- <img :src="Prod.images[0].src" :alt="Prod.name" width="500" height="500" > -->
                                <vue-load-image>
                                    <img slot="image"  class="pic-1"  :src="Prod.images[0].src" :alt="Prod.name" width="500" height="500" >
                                    <img slot="preloader" src="@/assets/loader.png" />
                                    <img slot="error" src="@/assets/loader.png" />
                                </vue-load-image>
                            </a>
                            <a :href="Prod.permalink">
                                <p>{{Prod.name}}</p>
                            </a>
                        </div>
                    <a href="https://www.alyaman.com/product-tag/ksa_sticker_group/" class="ProdBoxBtn">عرض المزيد</a>
                    </div>
                </div>
            </div>
            <div class="ProdsBox col-sm-3">
                <div class="" style="box-shadow:#88888836 0px 1px 12px 4px">
                    <h3 class="ProdBoxTitle ">مزهريات</h3>
                    <div class="ProdBoxItems">
                        <div class="ProdBoxOne col-sm-6" v-for="Prod in ProdInBox1" v-bind:key="Prod.id">
                            <a :href="Prod.permalink">
                                <vue-load-image>
                                    <img slot="image"  class="pic-1"  :src="Prod.images[0].src" :alt="Prod.name" width="500" height="500" >
                                    <img slot="preloader" src="@/assets/loader.png" />
                                    <img slot="error" src="@/assets/loader.png" />
                                </vue-load-image>
                            </a>
                            <a :href="Prod.permalink">
                                <p>{{Prod.name}}</p>
                            </a>
                        </div>
                        <a href="https://www.alyaman.com/product-tag/ksa_tag_group/" class="ProdBoxBtn">عرض المزيد</a>
                    </div>
                </div>
              </div>
            </b-skeleton-wrapper>
        </div>
</template>

<script>

import {mapGetters} from 'vuex';
import VueLoadImage from 'vue-load-image'
export default {

    name:'ProdBoxList',
    computed:{
        ...mapGetters(['ProdInBox','ProdInBox0','ProdInBox1','ProdInBox2'])
    },
    data(){
        return{
            ProdInBox2Loading:true
        }
    },
    watch:{
        ProdInBox2(newValue){
            if(newValue.length > 0){
                this.ProdInBox2Loading=false;
            }
        },
    },
    components:{
        'vue-load-image': VueLoadImage
    }


}
</script>

<style scoped>

.ProdBoxList{
  margin: 16px 0;
}

.ProdsBox{
    padding-left: 15px;
    padding-right: 15px;
}

.ProdsBox , .ProdBoxOne{
    display: inline-block;
}

.ProdBoxTitle {
    text-align: center;
    background-color: white;
    margin: 0;
    font-size: 1.25em;
    padding-top: 10px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

}

.ProdBoxItems{
    background: white;
    padding: 6px;
    border-bottom-left-radius:6px;
    border-bottom-right-radius:6px;
}

.ProdBoxOne a{
    color: black !important;
}

.ProdBoxOne a img{
    width: 80%;
    height: auto;
    margin: 6px;
}

.ProdBoxOne a p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 75ch;
    color: black !important;
}

.ProdBoxOne{
    padding: 6px 0;
    text-align: center;
}

.ProdBoxBtn{
    color: #fe6a00;
    display: block;
    background-color: white;

    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 40px;
    width: 60%;

    transition: all 0.4s;
    text-align: justify;
}

.ProdBoxBtn:active{
        color: black;
}

</style>