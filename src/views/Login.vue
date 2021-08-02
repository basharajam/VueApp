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
                        <b-row class='fullNameInputs'>
                            <b-col cols="12" sm="6"  >
                                <b-form-group
                                    id="input-group-1"
                                    label="الأسم الأول"
                                    label-for="firstNameI"
                                >
                                    <b-form-input
                                    id="firstNameI"
                                    type="text"
                                    placeholder="الأسم الأول"
                                    class="rounded-form"
                                    v-model="$v.form.firstName.$model"
                                    :state="validateState('firstName')"
                                    
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" sm="6">
                                <b-form-group
                                    id="lastNameI"
                                    label="الأسم الأخير"
                                    label-for="lastNameI"
                                >
                                    <b-form-input
                                    id="lastNameI"
                                    type="text"
                                    placeholder="الأسم الأخير"
                                    class="rounded-form"
                                    v-model="$v.form.lastName.$model"
                                    :state="validateState('lastName')"
                                    
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
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
                        <b-form-group
                            id="emailInput"
                            label=" كرر كلمة السر "
                            label-for="password2I"
                        >
                            <b-form-input
                            id="password2I"
                            type="password"
                            placeholder="كرر كلمة السر"
                            class="rounded-form"
                            v-model="$v.form.password2I.$model"
                            :state="validateState('password2I')"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group>
                                <div class="d-flex" style="align-items: baseline">
                                    <input type="checkbox" name="terms" id="terms">
                                    <p>   اوافق على شروط الخصوصية    </p>
                                </div>
            
                        </b-form-group>

                        </b-form>
                    </b-col>
                </b-row>

            </div>
    
        </b-container>

    </div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
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
          firstName: {
            required,
            minLength: minLength(3)
          },
          lastName: {
            required,
            minLength: minLength(3)
          },
          password:{
            required,
            minLength:minLength(8)
          },
        password2I:{
            required,
            minLength:minLength(8),
            sameAsPassword: sameAs('password')
          },
        userMail:{
            required,
            email
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
    padding: 10%;
}

@media only screen and (min-width: 320px) and (max-width:625px) {

.LoginWrapper{

    padding: 16px 0;
}

}

</style>