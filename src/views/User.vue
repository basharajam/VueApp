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
                    v-model="form.firstname"
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
                    v-model="form.lastname"
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
                    v-model="form.displayName"
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
                  id="input-group-mail"
                >
                  <b-form-input
                    id="input-mail"
                    v-model="form.phone"
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
                    v-model="form.mail"
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
export default {

    components:{
      UserLinks
    },
    data() {
      return {
        form: {
          FirstNameI: '',
          LastNameI: '',
          AddressI:'',
          Address2I:'',
          CityI:'',
          countryI:''
        },
      }
    },
    methods:{
      UpdateUser(){
        console.log('its Working')
        console.log(this.form)

      }
    }
}
</script>

<style>

</style>