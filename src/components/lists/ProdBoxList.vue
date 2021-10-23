<template>

    <div class="container-fluid ProdBoxList" >
        <mq-layout :mq="['md','lg']" >
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
                <div class="ProdsBox col-sm-3" v-for="Box in LandingLayout.ProdInBox" v-bind:key="Box.title">
                    <div class="" style="box-shadow: #88888836 0px 1px 12px 4px">
                        <h3 class="ProdBoxTitle ">{{ $t(Box.name) }}</h3>
                        <div class="ProdBoxItems">
                            <div class="ProdBoxOne col-sm-6" v-for="Prod in Box.items" v-bind:key="Prod.id">
                                <router-link :to="{ name:'ProdOne',params:{ ProdName:Prod.name , ProdByCat:Prod.Category.name } }">
                                    <!-- <img :src="Prod.images[0].src" :alt="Prod.name" width="500" height="500" > -->
                                    <vue-load-image>
                                        <img slot="image"  class="pic-1"  :src="Prod.images[0].src" :alt="Prod.name" width="500" height="500" >
                                        <img slot="preloader" src="@/assets/loader.png" />
                                        <img slot="error" src="@/assets/loader.png" />
                                    </vue-load-image>
                                </router-link>
                                <router-link :to="{ name:'ProdOne',params:{ ProdName:Prod.name , ProdByCat:Prod.Category.name } }">
                                    <p>{{Prod.name}}</p>
                                </router-link>
                            </div>
                            <router-link class='ProdBoxBtn' :to="{ name:'ProdByTag', params:{ProdByTag:Box.title}}" >{{$t('ShowMore')}}</router-link>
                            <!-- <a href="Box.link" class="ProdBoxBtn"></a> -->
                        </div>
                    </div>
                </div>
            </b-skeleton-wrapper>
           </mq-layout>
        </div>
</template>

<script>

import {mapGetters} from 'vuex';
import VueLoadImage from 'vue-load-image'
export default {

    name:'ProdBoxList',
    computed:{
        ...mapGetters(['LandingLayout']),

        
    },
    data(){
        return{
            ProdInBox2Loading:true
        }
    },
    watch:{
        LandingLayout(newValue){
            if(newValue.ProdInBox.length > 0){
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