<template>
  <b-container>
    <b-row class="my-3">
      <b-col cols='12' sm="6" >  
        <b-card>
          <b-form>
            <b-row>
              <b-col cols="12" sm='6'>
                <b-form-group
                  id="input-group-firstname"
                >
                  <b-form-input
                    id="input-firstname"
                    v-model="form.firstname"
                    placeholder="أدخل أسمك الأول"
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
          </b-form>
        </b-card>
      </b-col>

      <b-col cols="12" sm="6" >
        <b-card>
          <b-form >


          </b-form>
        </b-card>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
    data() {
      return {
        form: {
          firstname: '',
          lastname: '',
        },
      }
    },
}
</script>

<style>

</style>