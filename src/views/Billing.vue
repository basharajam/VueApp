<template>
    <b-container>
        <b-row class="my-3">
            <b-col cols="12" sm="3" >
                <UserLinks></UserLinks>
          </b-col>
          <b-col cols='12' sm="9" >
            <b-card>
                <b-form @submit.stop.prevent="UpdateBilling"> 
                    <b-row>
                        <b-col cols="12" sm="6">
                            <b-form-group
                            id="billing-group-firstname"
                            >
                            <b-form-input
                                id="billing-firstname"
                                v-model="$v.form.FirstNameI.$model"
                                :state="validateState('FirstNameI')"
                                placeholder="Enter your billing firstname"
                                class="rounded-form"
                                required
                            ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" sm="6">
                            <b-form-group
                            id="billing-group-firstname"
                            >
                            <b-form-input
                                id="billing-lastname"
                                v-model="$v.form.LastNameI.$model"
                                :state="validateState('LastNameI')"
                                placeholder="Enter your billing lastname"
                                class="rounded-form"
                                required
                            ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col cols="12" sm="12" >
                            <b-form-group
                            id="billing-group-address"
                            >
                            <b-form-input
                                id="billing-address"
                                v-model="$v.form.BillingAddressI.$model"
                                :state="validateState('BillingAddressI')"
                                placeholder="Enter your billing address"
                                class="rounded-form"
                                required
                            ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-row>
                     <b-col cols="12" sm="12" >
                        <b-form-group
                        id="billing-group-address2"
                        >
                            <b-form-input
                                id="billing-address2"
                                v-model="$v.form.BillingAddress2I.$model"
                                :state="validateState('BillingAddress2I')"
                                placeholder="Enter your billing  address2"
                                class="rounded-form"
                                required
                            ></b-form-input>
                        </b-form-group>
                     </b-col>
                    </b-row>

                    <b-row>
                     <b-col cols="12" sm="8" >
                        <b-form-group
                        id="billing-group-address2"
                        >
                          <b-select 
                          v-model="$v.form.BillingCountryI.$model"
                          :state="validateState('BillingCountryI')"
                          :country="form.BillingCountryI" 
                          class="form-control rounded-form"
                          :options="CountryOptions"
                          >
                          </b-select>
                        </b-form-group>
                        </b-col>
                        <b-col cols="12" sm="4" >
                        <b-form-group
                        id="billing-group-country"
                        >
                            <b-form-input
                                id="billing-zip-code"
                                :state="validateState('BillingZipCodeI')"
                                placeholder="Enter your billing zip code"
                                class="rounded-form"
                                required
                            ></b-form-input>
                        </b-form-group>
                     </b-col>
                    </b-row>

                    <b-row>
                     <b-col cols="12" sm="12" >
                        <b-form-group
                        id="billing-group-mail"
                        >
                        <b-form-input
                            id="billing-mail"
                            v-model="$v.form.MailI.$model"
                            :state="validateState('MailI')"
                            placeholder="Enter your billing mail"
                            class="rounded-form"
                            required
                        ></b-form-input>
                        </b-form-group>
                     </b-col>
                    </b-row>

                    <b-row>
                     <b-col cols="12" sm="12" >
                        <b-form-group
                        id="billing-group-phone"
                        >
                          <b-form-input
                              id="billing-phone"
                              v-model="$v.form.PhoneI.$model"
                              :state="validateState('PhoneI')"
                              placeholder="Enter your billing phone"
                              class="rounded-form"
                              required
                          ></b-form-input>
                        </b-form-group>
                     </b-col>
                    </b-row>
                    <b-row>
                     <b-col>
                      <b-button variant="outline-primary" type="submit">تحديث</b-button>
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
import {mapGetters,mapActions} from 'vuex';


export default {

    components:{
        UserLinks
    },
    data(){
        return {

            form:{
                FirstNameI:'',
                LastNameI:'',
                BillingAddressI:'',
                BillingAddress2I:'',
                BillingZipCodeI:'00696',
                BillingCountryI:'',
                MailI:'',
                PhoneI:'',
                From:'Billing'
            },
            CountryOptions:{}
        }
    },
    validations: {
        form: {
            FirstNameI: {
            required
            },
            LastNameI: {
            required
            },
            BillingAddressI:{
            required
            },
            BillingAddress2I:{
            required
            },
            BillingCountryI:{
            required
            },
            BillingZipCodeI:{
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
    computed:{
        ...mapGetters(['User','config'])
    },
    methods:{
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        ...mapActions(['UpdateUser']),
        UpdateBilling:function(){

            this.UpdateUser(this.form)
            console.log('Updating Bill')
        }
    },
    
    mounted(){

        console.log(this.User)
        
        //fill Billing form
        this.form.FirstNameI=this.User.billing_first_name;
        this.form.LastNameI=this.User.billing_last_name;
        this.form.MailI=this.User.user_email
        this.form.BillingAddressI=this.User.billing_address_1;
        this.form.BillingAddress2I=this.User.billing_address_2;

        let CountryObj={};

        var Shipment=this.config.Shipment
        Shipment.forEach(item => {
            CountryObj[item.key]=item.name
        });

        this.CountryOptions=CountryObj;

    }

}
</script>

<style>

</style>