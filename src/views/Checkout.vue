<template>
  <div class="#">
      <h4>Checkout</h4>
      <b-container fluid>
        <b-row>
          <b-col sm="8" >
            <div class="overflow-auto cartBody p-3" >
              <div v-for="(item, index) in Cart" v-bind:key="index" class='CartItem d-flex' >
                <img :src="item.item.images[0].src" width="100" height="100"/>
                <div class="flex-grow-1">
                    <div class="CartItemHeading d-flex justify-content-between">
                        <p>{{ item.item.name }}</p>
                        <button @click="RemoveItem(item.item.id)" class="align-self-start" >X</button>
                    </div>
                    <div class="CartItemBody d-flex justify-content-between">
                        <div class="" v-if="item.item.on_sale" ></div>
                        <p>{{ item.item.regular_price * item.qty }}</p>
                        <div class="d-flex align-self-start qtyCounter">
                            <button class="align-self-start" @click="increaseQty(item.item.id)">+</button>
                            <span>{{ item.qty }}</span>
                            <button class="align-self-start" @click="reduceQty(item.item.id)" >-</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
          </b-col>
          <b-col sm="4">
            <div class="CheckoutInfForm bg-white p-4">
              <b-form class="mx-2">
                <b-row class='fullNameInputs'>
                    <b-col cols="12" sm="6" >
                        <b-form-group
                            id="input-group-1"
                            label-for="firstNameI"
                        >
                          <b-form-input
                              id="firstNameI"
                              type="text"
                              placeholder="الأسم الأول"
                              class="rounded-form"
                          ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" sm="6">
                        <b-form-group
                            id="lastNameI"
                            label-for="lastNameI"
                        >
                            <b-form-input
                            id="lastNameI"
                            type="text"
                            placeholder="الأسم الأخير"
                            class="rounded-form"

                            
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" sm="12">
                      <b-form-group
                          id="mailI"
                          label-for="mailI"
                      >
                          <b-form-input
                          id="mailI"
                          type="mail"
                          placeholder="الايميل"
                          class="rounded-form"

                          
                          ></b-form-input>
                      </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" sm="12">
                    <b-form-group
                        id="OrderAddressI"
                        label-for="OrderAddressI"
                    >
                        <b-form-input
                        id="OrderAddressI"
                        type="text"
                        placeholder="العنوان"
                        class="rounded-form"

                        
                        ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" sm="12">
                    <b-form-group
                        id="OrderAddress2I"
                        label-for="OrderAddress2I"
                    >
                        <b-form-input
                        id="OrderAddress2I"
                        type="text"
                        placeholder=" 2 العنوان"
                        class="rounded-form"

                        
                        ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" sm="4">
                    <b-form-group>
                      <b-select
                        id="OrderCountryI"
                        class="rounded-form"
                      >

                      </b-select>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" sm="4">
                    <b-form-group
                        id="OrderAddress2I"
                        label-for="OrderAddress2I"
                    >
                      <b-select
                        id="OrderStateI"
                        class="rounded-form"
                      >
                      </b-select>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" sm="4">
                    <b-form-group>
                      <b-form-input
                        id="OrderZipI"
                        class="rounded-form"
                        placeholder="zip"
                      >
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </div>
            <div class="payMethods">
              <b-button block variant="primary" class="my-2 mt-2 py-2" @click="SaveOrderBcs()" >Bank Payment</b-button>
              <p class="text-center" >or</p>
              <div ref="paypal"></div>
            </div>
          </b-col>
        </b-row>
      </b-container>



      
    </div>
</template>

<script>

import axios from "axios";
import {mapGetters , mapActions} from 'vuex';


export default {
  computed:{
    ...mapGetters(['Cart','FullPrice'])
  },
  methods:{
    setLoaded: function() {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: "10",
                },
              }]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log('Done')
            var CountryVal= this.$cookies.get('shipCountry');
            var CurrVal = this.$cookies.get('Curr');

            var bdata = {
              trans_id:order.id,
              Items:this.Cart,
              Curr:CurrVal,
              Ship:CountryVal,
              FullPrice:233564
            }
            // ajax request
            axios.post('http://127.0.0.1:8000/api/SaveOrderPaypal',bdata).then((resp)=>{

              console.log(resp)

            })

          },
          onError: err => {
            console.log(err)
          }
        })
        .render(this.$refs.paypal);
    },
    SaveOrderBcs:function(){
      
        var CountryVal= this.$cookies.get('shipCountry');
        var CurrVal = this.$cookies.get('Curr');
        var bdata = {
          Items:this.Cart,
          Curr:CurrVal,
          Ship:CountryVal,
          FullPrice:233564
        }

        // ajax request
        axios.post('http://127.0.0.1:8000/api/SaveOrderBcs',bdata).then((resp)=>{

          console.log(resp)

        })
    },
    RemoveItem:function(id){

         
      this.RemoveFromCart(id)
          
    },
    increaseQty:function(id){
        this.increaseQtyS(id)
    },
    reduceQty:function(id){
        this.reduceQtyS(id)
    },
    ...mapActions(['RemoveFromCart','increaseQtyS','reduceQtyS'])
  },
  
  mounted(){
    const script = document.createElement("script");
    const ClientID = "AUj0VOyJiAxCbJhWXXcvMzBa-Itr7ifKCJd6cQRBzDOP6mUPAjCKRjSCL7eh-7di5T4GBDx-feTLS5cm";
    script.src = `https://www.paypal.com/sdk/js?client-id=${ClientID}&disable-funding=giropay,sepa,sofort`;
    script.addEventListener("load", () => { this.setLoaded() });
    document.body.appendChild(script);
  }

}

</script>

<style scoped>

.Cart{
    background: #ffffff;
    z-index: 997;
    position: fixed;
    left: -36%;
    width: 36%;
    height: 100%;
}

.Cart h3 {
    margin-top: 8px;
}

.CartOverlay{
    width: 80%;
    height: 100%;
    background: #00000034;
    position: fixed;
    z-index: 997;
    display: none;
}

.displayC .CartOverlay{
    display:block !important;
    backdrop-filter: blur(0.8px);
}

.displayC .Cart{
left:0 !important

}

.CartItem{
border-bottom: 1px rgba(0, 0, 0, 0.096) solid;
padding: 6px;
margin: 0 6px;

}
.CartItemHeading , .CartItemBody{
    text-align: right;
    padding: 6px;
}

.CartItemHeading p {
    font-weight: bold;
}

.CartItemBody p {
    font-size: 12px;
    font-weight: bold;
    margin: auto 6px;
    color: #fa650f;
}

.qtyCounter{
    border: 1px rgba(0, 0, 0, 0.336) solid;
    border-radius: 6px;
}
.qtyCounter button {
    background: none;
    border: none;
    padding: 6px;
}

.qtyCounter span{
    padding: 6px;
    margin: auto;
}

.cartBody{
    height: 85%;
    background: white;
    border-radius: 25px;
}

</style>