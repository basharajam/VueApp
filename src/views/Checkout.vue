<template>
  <div class="#">
      <h4>Checkout</h4>
      <div ref="paypal"></div>
    </div>
</template>

<script>

import axios from "axios";
import {mapGetters} from 'vuex';


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
    }
  },
  
  mounted(){
    const script = document.createElement("script");
    const ClientID = "AUj0VOyJiAxCbJhWXXcvMzBa-Itr7ifKCJd6cQRBzDOP6mUPAjCKRjSCL7eh-7di5T4GBDx-feTLS5cm";
    script.src = `https://www.paypal.com/sdk/js?client-id=${ClientID}`;
    script.addEventListener("load", () => { this.setLoaded() });
    document.body.appendChild(script);
  }

}

</script>

<style>

</style>