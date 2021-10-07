<template>

    <div class="RegisterWrapper">
        <b-container fluid>    
            <div class="RegisterInner">
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
                                    label-for="firstNameI"
                                >
                                    <b-form-input
                                        id="firstNameI"
                                        type="text"
                                        placeholder="الأسم الأول"
                                        class="rounded-form"
                                        v-model.lazy="form.FirstNameI"
                                        @blur="$v.form.FirstNameI.$touch"
                                        :state="validateState('FirstNameI')"
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
                                    v-model.lazy="form.lastNameI"
                                    @blur="$v.form.lastNameI.$touch"
                                    :state="validateState('lastNameI')"
                                    
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-form-group
                            id="emailInput"
                            label-for="emailInput"
                        >
                            <b-form-input
                            id="emailInput"
                            type="email"
                            placeholder="الإيميل"
                            class="rounded-form"
                            v-model.lazy="form.MailI"
                            @blur="$v.form.MailI.$touch"
                            :state="validateState('MailI')"
                            ></b-form-input>
                        </b-form-group>
                        
                        <b-form-group
                            id="usernameInput"
                            label-for="usernameInput"
                        >
                            <b-form-input
                            id="usernameInput"
                            type="text"
                            placeholder="أسم المستخدم"
                            class="rounded-form"
                            v-model.lazy="form.UserNameI"
                            @blur="$v.form.UserNameI.$touch"
                            :state="validateState('UserNameI')"
                            ></b-form-input>
                        </b-form-group>
                        
                        <b-form-group
                            id="emailInput"
                            label-for="passwordI"
                        >
                            <b-form-input
                            id="passwordI"
                            type="password"
                            placeholder="كلمة السر"
                            class="rounded-form"
                            v-model.lazy="form.PassI"
                            @blur="$v.form.PassI.$touch"
                            :state="validateState('PassI')"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="emailInput"
                            label-for="password2I"
                        >
                            <b-form-input
                            id="password2I"
                            type="password"
                            placeholder="كرر كلمة السر"
                            class="rounded-form"
                            v-model.lazy="form.Pass2I"
                            @blur="$v.form.Pass2I.$touch"
                            :state="validateState('Pass2I')"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <div class="d-flex" style="align-items: baseline">
                              <input type="checkbox" name="terms" id="terms" v-model.lazy="form.terms">
                              <p>   اوافق على شروط الخصوصية    </p>
                            </div>
                        </b-form-group>
                        <b-form-group>
                            <b-button variant="outline-primary" @click="Register()">Register</b-button>
                        </b-form-group>
                        </b-form>
                    </b-col>
                </b-row>
            </div>
        </b-container>

    </div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
import axios from 'axios';
import { mapActions } from 'vuex';

export default {

    methods:{
        validateState(name){
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        ...mapActions(['RegisterUser']),
        Register(){
            this.RegisterUser(this.form)
        }
    },
    data(){

        return {
          form: {
            FirstNameI: null,
            lastNameI: null,
            MailI:null,
            UserNameI:null,
            PassI:null,
            Pass2I:null,
            terms:null
          }
        }
    },
    validations: {
        form: {
            FirstNameI: {
                required,
                minLength: minLength(3)
            },
            lastNameI: {
                required,
                minLength: minLength(3)
            },
            PassI:{
                required,
                minLength:minLength(8)
            },
            Pass2I:{
                required,
                minLength:minLength(8),
                sameAsPassword: sameAs('PassI')
            },
            MailI:{
                required,
                email,
                //validate Email
                async validateMail(value){
                    return axios.get('http://127.0.0.1:8000/api/validate/mail/'+value).then(function(resp){
                        console.log(resp.data.success)
                        return resp.data.success;
                     })
                }
            },
            UserNameI:{
                required,
                minLength:minLength(8),
                //validate UserName
                async validateUserName(value){
                    return axios.get('http://127.0.0.1:8000/api/validate/username/'+value).then(function(resp){
                        console.log(resp.data.success)
                        return resp.data.success;
                    })
                }
            }

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

.RegisterInner{
    
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 30px 1px #00000052;

}

.RegisterWrapper{
    background: #f4f4f4;
    padding: 4%;
}

@media only screen and (min-width: 320px) and (max-width:625px) {

.RegisterWrapper{

    padding: 16px 0;
}

}

</style>