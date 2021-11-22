<template>
    <b-container>
        <b-row>
            <b-col sm="10" >
                <b-card class="my-4" >
                <b-tabs pills v-model="OrderTabs" @input="changeTab(OrderTabs)"  >
                    <b-tab title="الكل" active>
                        <spinner v-if="!this.displayOrderAll" class="m-3"></spinner>
                        <v-client-table v-if="this.displayOrderAll" :data="AllOrderArr" :columns="tbcolumn" />
                    </b-tab>
                    <b-tab title="المكتملة" >
                        <spinner v-if="!this.displayOrderCompleted" class="m-3"></spinner>
                        <v-client-table v-if="this.displayOrderCompleted" :data="CompletedOrdersArr" :columns="tbcolumn" />
                    </b-tab>
                    <b-tab title="بالأنتظار" >
                        <spinner v-if="!this.displayOrderOnHold" class="m-3"></spinner>
                        <v-client-table v-if="this.displayOrderOnHold" :data="OnHoldOrderArr" :columns="tbcolumn" />
                    </b-tab>
                    <b-tab title="ملغية">
                        <spinner v-if="!this.displayOrderCancelld" ></spinner>
                        <v-client-table v-if="this.displayOrderCancelld" :data="CancelldOrderArr" :columns="tbcolumn" />
                    </b-tab>
                </b-tabs>
                </b-card>
            </b-col>
            <b-col sm="2" >

            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import axios from 'axios';


import spinner from '../components/widgets/spinner.vue';

export default {

    components:{
        spinner,
        
    },
    data(){

        return{
            OrderTabs:0,
            AllOrderArr:[],
            CompletedOrdersArr:[],
            OnHoldOrderArr:[],
            CancelldOrderArr:[],
            displayOrderAll:false,
            displayOrderCompleted:false,
            displayOrderCancelld:false,
            displayOrderOnHold:false,
            tbcolumn:['ID','post_author','post_title','total']
        }

    },
    methods:{
        getOrders(Ordstatus){
            
            var url=process.env.VUE_APP_DEVBASEURL + '/GetOrder/'+Ordstatus;
            var self = this;
            axios.get(url).then(resp=>{

              if(resp.data.status){

                switch (Ordstatus) {

                    case 'all':
                    //
                    self.AllOrderArr=resp.data.items
                    self.displayOrderAll=true
                        break

                    case 'completed':
                     //
                     self.CompletedOrdersArr=resp.data.items
                     self.displayOrderCompleted=true
                        break;

                    case 'onHold':
                     //
                     self.OnHoldOrderArr=resp.data.items
                     self.displayOrderOnHold=true
                        break;

                    case 'cancelld':
                     //
                     self.CancelldOrderArr=resp.data.items
                     self.displayOrderCancelld=true
                        break;
                }

                console.log(Ordstatus)
                console.log(resp.data)

              }

            })

        },
        changeTab(){

            if(this.OrderTabs === 0){

                console.log('All Orders')
                if(this.AllOrderArr.length === 0){
                    //enable spinner
                    this.displayOrderAll=false;

                    this.getOrders('all')
                }

            }
            else if(this.OrderTabs === 1){

                console.log('Completed Orders')
                if(this.CompletedOrdersArr.length === 0){

                    this.displayOrderCompleted=false;

                    this.getOrders('completed')
                }
                
            }
            else if(this.OrderTabs === 2){

                console.log('On-Hold Orders')
                if(this.OnHoldOrderArr.length === 0){

                    this.displayOrderOnHold=false;

                    this.getOrders('onHold')
                }

            }
            else if(this.OrderTabs === 3){

                console.log('Cancelld Orders')
                if(this.CancelldOrderArr.length === 0){

                    this.displayOrderCancelld=false;

                    this.getOrders('cancelld')
                }

            }

        }

    },
    mounted(){

        //get Default (All) Orders
        this.getOrders('all')

        //Disable spinner
        this.displayOrderAll=false;

    }



}
</script>

<style scoped>

</style>