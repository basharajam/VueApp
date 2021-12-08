<template>
  <b-container>
    <b-row class="my-3">
      <b-col cols="12" sm="3" >
        <UserLinks></UserLinks>
      </b-col>
      <b-col cols='12' sm="9" >  
        <b-card>
          <b-form @submit.prevent="UpdateUser()">
            <b-row>
              <b-col cols="12" sm='6'>
                <b-form-group
                  id="input-group-firstname"
                >
                  <b-form-input
                    id="input-firstname"
                    v-model="form.FirstNameI"
                    :state="validateState('FirstNameI')"
                    placeholder="Enter your firstname"
                    class="rounded-form"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" sm="6" >
                <b-form-group
                  id="input-group-lastname"
                >
                  <b-form-input
                    id="input-lastname"
                    v-model="form.LastNameI"
                    :state="validateState('LastNameI')"
                    placeholder="Enter your last name"
                    class="rounded-form"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12"  sm="12" >
                <b-form-group
                  id="input-group-display-name"
                >
                  <b-form-input
                    id="input-display-name"
                    v-model="form.DisplayNameI"
                    :state="validateState('DisplayNameI')"
                    placeholder="Enter your display name"
                    class="rounded-form"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" sm="12" >
                <b-form-group
                  id="input-group-phone"
                >
                  <b-form-input
                    id="input-phone"
                    v-model="form.PhoneI"
                    :state="validateState('PhoneI')"
                    placeholder="Enter your Phone"
                    class="rounded-form"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12"  sm="12" >
                <b-form-group
                  id="input-group-mail"
                >
                  <b-form-input
                    id="input-mail"
                    v-model="form.MailI"
                    :state="validateState('MailI')"
                    type="email"
                    placeholder="Enter your mail"
                    class="rounded-form"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-button type="submit"  variant="outline-primary" >Save</b-button>
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
import {mapGetters} from 'vuex';
import { required } from 'vuelidate/lib/validators'

export default {

  components:{
    UserLinks
  },
  data() {
    return {
      form: {
        FirstNameI: '',
        LastNameI: '',
        DisplayNameI:'',
        MailI:'',
        PhoneI:'',
      },
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
      DisplayNameI:{
      required
      },
      MailI:{
      required
      },
      PhoneI:{
      required
      },
    }
  },
  methods:{
    UpdateUser(){
      console.log('its Working')
      console.log(this.form)
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
  },
  computed:{
    ...mapGetters(['User'])
  },
  mounted(){

    this.form.FirstNameI=this.User.first_name;
    this.form.LastNameI=this.User.last_name;
    this.form.DisplayNameI=this.User.display_name;
    this.form.MailI=this.User.email;
    this.form.PhoneI="";

  }
}
</script>

<style>

</style>