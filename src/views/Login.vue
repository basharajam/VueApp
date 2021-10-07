<template>

    <div class="LoginWrapper">
        <b-container fluid>    
            <div class="LoginInner">
                <b-row>
                    <b-col cols="12" sm="4" class="d-flex" >
                        <div class="FormImg"></div>

                    </b-col>
                    <b-col  cols='12' sm="8" >
                        <b-form style="  margin: 26px 10px;"  >
                        <b-row>
                            <h3 class="text-center" style="margin-bottom: 30px;">تسجيل حساب </h3>
                        </b-row>
                        <b-form-group
                            id="emailInput"
                            label="الإيميل"
                            label-for="firstNameI"
                        >
                            <b-form-input
                            id="emailInput"
                            type="email"
                            placeholder="الإيميل"
                            class="rounded-form"
                            v-model="$v.form.userMail.$model"
                            :state="validateState('userMail')"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="emailInput"
                            label="كلمة السر"
                            label-for="passwordI"
                        >
                            <b-form-input
                            id="passwordI"
                            type="password"
                            placeholder="كلمة السر"
                            class="rounded-form"
                            v-model="$v.form.password.$model"
                            :state="validateState('password')"
                            ></b-form-input>
                        </b-form-group>

                        </b-form>
                    </b-col>
                </b-row>

            </div>
    
        </b-container>

    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {

    methods:{
        validateState(name) {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
        },
    },
    data(){

        return  {
          form: {
            firstName: null,
            lastName: null,
            userMail:null,
            password:null,
            password2I:null
          }
        }
    },
    validations: {
        form: {
            userMail:{
                required,
                email
            },
            password:{
                required,
                minLength:minLength(8)
            },

        }
  },


}
</script>

<style scoped>

.FormImg{
    height: 100%;
    width: 100%;
    text-align: center;
    padding-top: 100px;
    color: white;
    overflow: hidden;
    background: #c0484800;  /* fallback for old browsers */
    background: linear-gradient(#fd690693, rgba(148, 72, 192, 0.281)), url("../assets/form.jpg");  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(#fd690693, rgba(148, 72, 192, 0.281)), url("../assets/form.jpg"); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: cover;
    background-repeat: no-repeat;
}

.LoginInner{
    
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 30px 1px #00000052;

}

.LoginWrapper{
    background: #f4f4f4;
    padding: 4%;
}

@media only screen and (min-width: 320px) and (max-width:625px) {

.LoginWrapper{

    padding: 16px 0;
}

}

</style>