<template>
    <b-container>
        <b-row class="my-3">
          <b-col cols="12" sm="3" >
            <UserLinks></UserLinks>
          </b-col>
          <b-col cols='12' sm="9" >
              <b-card>

                <!-- Shipment Form -->
                <h4>الفواتير</h4>
                <b-form @submit.stop.prevent="UpdateShipment"> 
                    <b-row>
                        <b-col cols="12" sm="6">
                            <b-form-group
                            id="shipment-group-firstname"
                            >
                            <b-form-input
                                id="shipment-firstname"
                                v-model="$v.form.FirstNameI.$model"
                                :state="validateState('FirstNameI')"
                                placeholder="Enter your shipment & shipping firstname"
                                class="rounded-form"
                                required
                            ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" sm="6">
                            <b-form-group
                            id="shipment-group-firstname"
                            >
                            <b-form-input
                                id="shipment-lastname"
                                v-model="$v.form.LastNameI.$model"
                                :state="validateState('LastNameI')"
                                placeholder="Enter your shipment & shipping  lastname"
                                class="rounded-form"
                                required
                            ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="12" sm="12" >
                            <b-form-group
                            id="shipment-group-address"
                            >
                            <b-form-input
                                id="shipment-address"
                                v-model="$v.form.ShipmentAddressI.$model"
                                :state="validateState('ShipmentAddressI')"
                                placeholder="Enter your shipment & shipping  address"
                                class="rounded-form"
                                required
                            ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                     <b-col cols="12" sm="12" >
                        <b-form-group
                        id="shipment-group-address2"
                        >
                            <b-form-input
                                id="shipment-address2"
                                v-model="$v.form.ShipmentAddress2I.$model"
                                :state="validateState('ShipmentAddress2I')"
                                placeholder="Enter your shipment & shipping  address2"
                                class="rounded-form"
                                required
                            ></b-form-input>
                        </b-form-group>
                     </b-col>
                    </b-row>

                    <b-row>
                     <b-col cols="12" sm="8" >
                        <b-form-group
                        id="shipment-group-address2"
                        >
                          <b-select 
                          v-model="$v.form.ShipmentCountryI.$model"
                          :state="validateState('ShipmentCountryI')"
                          class="form-control rounded-form"
                          :options="CountryOptions"
                          >
                          
                          </b-select>
                        </b-form-group>
                        </b-col>
                        <b-col cols="12" sm="4" >
                        <b-form-group
                        id="shipment-group-address2"
                        >
                            <b-form-input
                                id="shipment-address2"
                                v-model="$v.form.ShipmentZipCodeI.$model"
                                :state="validateState('ShipmentZipCodeI')"
                                placeholder="Enter your shipment zip-code"
                                class="rounded-form"
                                required
                            ></b-form-input>
                        </b-form-group>
                     </b-col>
                    </b-row>

                    <b-row>
                     <b-col cols="12" sm="12" >
                        <b-form-group
                        id="shipment-group-mail"
                        >
                        <b-form-input
                            id="shipment-mail"
                            v-model="$v.form.MailI.$model"
                            :state="validateState('MailI')"
                            placeholder="Enter your shipment & shipping  mail"
                            class="rounded-form"
                            required
                        ></b-form-input>
                        </b-form-group>
                     </b-col>
                    </b-row>

                    <b-row>
                     <b-col cols="12" sm="12" >
                        <b-form-group
                        id="shipment-group-phone"
                        >
                          <b-form-input
                              id="shipment-phone"
                              v-model="$v.form.PhoneI.$model"
                              :state="validateState('PhoneI')"
                              placeholder="Enter your shipment & shipping  phone"
                              class="rounded-form"
                              required
                          ></b-form-input>
                        </b-form-group>
                     </b-col>
                    </b-row>
                    <b-row>
                     <b-col>
                      <b-button variant="outline-primary" type="submit"  >تحديث</b-button>
                     </b-col>
                    </b-row>

                 </b-form>
              </b-card>
          </b-col>
        </b-row>
    </b-container>
</template>

<script>

import UserLinks from '../components/widgets/UserLinks.vue';
import { required } from 'vuelidate/lib/validators'


import { mapGetters, mapActions } from 'vuex';

export default {

    components:{
      UserLinks,  
    },
    computed:{
        ...mapGetters(['User','config'])
    },
    validations: {
        form: {
            FirstNameI: {
            required
            },
            LastNameI: {
            required
            },
            ShipmentAddressI:{
            required
            },
            ShipmentAddress2I:{
            required
            },
            ShipmentCountryI:{
            required
            },
            ShipmentZipCodeI:{
            required
            },
            MailI:{
            required
            },
            PhoneI:{
            required
            }
        }
    },
    watch:{

      User(newValue){

        console.log('Changed')
        console.log(newValue)

      }
    },
    data(){

     return{
         
        form:{
         FirstNameI:'',
         LastNameI:'',
         ShipmentAddressI:'',
         ShipmentAddress2I:'',
         ShipmentCountryI:'',
         ShipmentZipCodeI:'',
         MailI:'',
         PhoneI:'1234567890',
         From:'Shipment'
        },
        CountryObj:{}
     } 

    },
    mounted(){

        //fill form
        this.form.FirstNameI=this.User.shipping_first_name;
        this.form.LastNameI=this.User.shipping_last_name;
        this.form.MailI=this.User.email;
        this.form.ShipmentAddressI=this.User.shipping_address_1;
        this.form.ShipmentAddress2I=this.User.shipping_address_2;
        this.form.ShipmentCountryI=this.$cookies.get('shipCountry');
        // this.form.ShipmentZipCodeI=,

        let CountryObj={};

        var Shipment=this.config.Shipment
        Shipment.forEach(item => {
            CountryObj[item.key]=item.name
        });

        this.CountryOptions=CountryObj;

          
    },
    methods:{

        UpdateShipment:function(){

            console.log('uts working')
            console.log('shipment form',this.form)
            this.UpdateUser(this.form)

        },
        ...mapActions(['UpdateUser']),
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },

    }

}
</script>

<style>

</style>