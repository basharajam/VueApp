<template>
    <b-container>
        <b-row class="my-3">
          <b-col cols="12" sm="3" >
            <UserLinks></UserLinks>
          </b-col>
          <b-col cols='12' sm="9" >
              <b-card>

                <!-- billing Form -->
                <h4>الفواتير</h4>
                <b-form> 
                    <b-row>
                        <b-col cols="12" sm="6">
                            <b-form-group
                            id="billing-group-firstname"
                            >
                            <b-form-input
                                id="billing-firstname"
                                v-model="form.FirstNameI"
                                placeholder="Enter your billing & shipping firstname"
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
                                v-model="form.LastNameI"
                                placeholder="Enter your billing & shipping  lastname"
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
                                v-model="form.BillingAddressI"
                                placeholder="Enter your billing & shipping  address"
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
                                v-model="form.BillingAddress2I"
                                placeholder="Enter your billing & shipping  address2"
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
                            class="rounded-form"
                        ></b-select>
                        </b-form-group>
                        </b-col>
                        <b-col cols="12" sm="4" >
                        <b-form-group
                        id="billing-group-address2"
                        >
                            <b-form-input
                                id="billing-address2"
                                
                                placeholder="Enter your billing & shipping  address2"
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
                            v-model="form.MailI"
                            placeholder="Enter your billing & shipping  mail"
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
                              v-model="form.PhoneI"
                              placeholder="Enter your billing & shipping  phone"
                              class="rounded-form"
                              required
                          ></b-form-input>
                        </b-form-group>
                     </b-col>
                    </b-row>
                    <b-row>
                     <b-col>
                      <b-button variant="outline-primary"  >تحديث</b-button>
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
export default {

    components:{
        UserLinks
    },
    data(){

     return{
         
        form:{
         FirstNameI:'x',
         LastNameI:'lasname',
         BillingAddressI:'billing address 1',
         BillingAddress2I:'billing address 2',
         MailI:"blaxk@blaxk.cc",
         PhoneI:'1234567890'



        }
     } 
     


    }


}
</script>

<style>

</style>