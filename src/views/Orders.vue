<template>
    <b-container>
        <b-row class="my-3">
            <b-col sm="3" >
                <UserLinks></UserLinks>
            </b-col>
            <b-col sm="9" >
                <b-card >
                 <b-tabs pills v-model="OrderTabs" @input="changeTab(OrderTabs)"  >
                    <b-tab title="الكل" active>
                        <spinner v-if="!this.displayOrderAll" class="m-3"></spinner>
                        <v-client-table v-if="this.displayOrderAll" :data="AllOrderArr" :columns="tbcolumn" >
                         <span slot="order_detail" slot-scope="{row}" >
                            <b-button v-b-modal.modal-order-details @click="updateOrderModal(row)" >details</b-button>
                         </span>
                        </v-client-table>
                    </b-tab>
                    <b-tab title="المكتملة" >
                     <spinner v-if="!this.displayOrderCompleted" class="m-3"></spinner>
                     <v-client-table v-if="this.displayOrderCompleted" :data="CompletedOrdersArr" :columns="tbcolumn">
                      <span slot="order_detail" slot-scope="{row}" >
                        <b-button v-b-modal.modal-order-details @click="updateOrderModal(row)" >details</b-button>
                      </span>
                     </v-client-table>
                    </b-tab>
                    <b-tab title="بالأنتظار" >
                     <spinner v-if="!this.displayOrderOnHold" class="m-3"></spinner>
                     <v-client-table v-if="this.displayOrderOnHold" :data="OnHoldOrderArr" :columns="tbcolumn" >
                      <span slot="order_detail" slot-scope="{row}" >
                        <b-button v-b-modal.modal-order-details @click="updateOrderModal(row)" >details</b-button>
                      </span>
                     </v-client-table>
                    </b-tab>
                    <b-tab title="ملغية">
                     <spinner v-if="!this.displayOrderCancelld" ></spinner>
                     <v-client-table v-if="this.displayOrderCancelld" :data="CancelldOrderArr" :columns="tbcolumn" >
                      <span slot="order_detail" slot-scope="{row}" >
                        <b-button v-b-modal.modal-order-details @click="updateOrderModal(row)" >details</b-button>
                      </span>
                     </v-client-table>
                    </b-tab>
                    <b-tab title="قيد التحضير">
                     <spinner v-if="!this.displayOrderProcessing" ></spinner>
                     <v-client-table v-if="this.displayOrderProcessing" :data="ProcessingOrderArr" :columns="tbcolumn">
                      <span slot="order_detail" slot-scope="{row}" >
                        <b-button v-b-modal.modal-order-details @click="updateOrderModal(row)" >details</b-button>
                      </span>
                     </v-client-table>
                    </b-tab>
                    <b-tab title="معلّقة">
                     <spinner v-if="!this.displayOrderPending" ></spinner>
                     <v-client-table v-if="this.displayOrderPending" :data="PendingOrderArr" :columns="tbcolumn" >
                      <span slot="order_detail" slot-scope="{row}" >
                        <b-button v-b-modal.modal-order-details @click="updateOrderModal(row)" >details</b-button>
                      </span>
                     </v-client-table>
                    </b-tab>
                    <b-tab title="فاشلة">
                     <spinner v-if="!this.displayOrderFaild" ></spinner>
                     <v-client-table v-if="this.displayOrderFaild" :data="FaildOrderArr" :columns="tbcolumn">
                      <span slot="order_detail" slot-scope="{row}" >
                       <b-button v-b-modal.modal-order-details @click="updateOrderModal(row)" >details</b-button>
                      </span>
                     </v-client-table>
                    </b-tab>
                 </b-tabs>

                 <b-modal id="modal-order-details" hide-header hide-footer >
                    <div class="p-3">
                        <p>تم تقديم الطلب #18389 في أغسطس 22, 2021 وهو الآن بحالة ملغي.</p>
                        <b-row>
                         <!-- <h4>تفاصيل الطلب</h4> -->
                         <b-col sm="12">
                           <b-table :items="this.OrderItemsArr" :fields="this.OrderItemsFields" responsive small >
                 
                           </b-table>
                           <b-table :items="this.OrderInvoiceDetail" :fields="this.OrderInvoiceDetailFields" responsive small stacked label-align="left"></b-table>
                         </b-col>
                        </b-row>
                    </div>
                 </b-modal>
                </b-card>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>

import axios from 'axios';
import spinner from '../components/widgets/spinner.vue';
import UserLinks from '../components/widgets/UserLinks.vue';

export default {

    components:{
        spinner,
        UserLinks
        
    },
    data(){

        return{
            OrderTabs:0,
            AllOrderArr:[],
            CompletedOrdersArr:[],
            OnHoldOrderArr:[],
            CancelldOrderArr:[],
            ProcessingOrderArr:[],
            PendingOrderArr:[],
            RefundOrderArr:[],
            FaildOrderArr:[],

            OrderItemsArr:[],
            OrderInvoiceDetail:[],
            OrderItemsFields:[
                {
                    key:'order_item_name',
                    label:'Product name'
                }
            ],
            OrderInvoiceDetailFields:[
                {
                    key: 'total',
                    label: 'full',
                    thClass: 'text-left',
                    tdClass: 'table-text-alignX',
                },
                {
                    key: 'shipping_address.address_1',
                    label: 'shipment',
                    thClass: 'text-start',
                    tdClass: 'table-text-alignX',
                },
                {
                    key:'payment.method',
                    label:'payment way',
                    tdClass: 'table-text-alignX'
                }
            ],
            displayOrderAll:false,
            displayOrderCompleted:false,
            displayOrderCancelld:false,
            displayOrderOnHold:false,
            displayOrderProcessing:false,
            displayOrderPending:false,
            displayOrderFaild:false,

            tbcolumn:['ID','post_author','post_title','total','order_detail']
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
                    case 'processing':
                     //
                     self.ProcessingOrderArr=resp.data.items
                     self.displayOrderProcessing=true;
                        break;
                    case 'pending':
                     self.PendingOrderArr=resp.data.items
                     self.displayOrderPending=true;
                        break
                    case 'failed':
                     self.FaildOrderArr=resp.data.items
                     self.displayOrderFaild=true;
                        break
                    
                }
              }

            })

        },
        changeTab(){

            if(this.OrderTabs === 0){

                if(this.AllOrderArr.length === 0){
                    //enable spinner
                    this.displayOrderAll=false;

                    this.getOrders('all')
                }

            }
            else if(this.OrderTabs === 1){

                if(this.CompletedOrdersArr.length === 0){

                    this.displayOrderCompleted=false;

                    this.getOrders('completed')
                }
                
            }
            else if(this.OrderTabs === 2){
                if(this.OnHoldOrderArr.length === 0){

                    this.displayOrderOnHold=false;
                    this.getOrders('onHold')
                }
            }
            else if(this.OrderTabs === 3){

                if(this.CancelldOrderArr.length === 0){

                    this.displayOrderCancelld=false;
                    this.getOrders('cancelld')
                }
            }
            else if(this.OrderTabs === 4){

                this.displayOrderProcessing=false;
                this.getOrders('processing')

            }
            else if(this.OrderTabs === 5){

                this.displayOrderPending=false;
                this.getOrders('pending')

            }
            else if(this.OrderTabs === 6){

                this.displayOrderFaild=false;
                this.getOrders('failed')

            }
        },
        updateOrderModal(order){

            this.OrderInvoiceDetail.push(order)

            this.OrderItemsArr=order.items;
            console.log(order)
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


<style >
.table-text-alignX{
 color:red
}
.table-text-alignX div::before {
    content: attr(data-label);
    text-align:unset !important;
}
.table-text-alignX div{
    text-align: justify;
}
</style>

<style scoped>

</style>