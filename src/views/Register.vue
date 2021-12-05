<template>

    <div class="RegisterWrapper">
        <b-container fluid>    
            <div class="RegisterInner">
                <b-row>
                    <b-col cols="12" sm="7" class="d-flex" >
                        <div class="FormImg"></div>

                    </b-col>
                    <b-col  cols='12' sm="5" >
                      <b-row>
                          <b-col sm='12' cols="12" class="my-5" >
                            <div class="mx-2">
                              <b-button pill variant="primary" block  @click="RegisterWithFacebook()"  ><div class="d-flex justify-content-center justify-content-between mx-5"><i class="fab fa-facebook-f"></i>   تسجيل الدخول بفيسبوك </div></b-button>
                              <b-button pill variant="primary" block  @click="RegisterWithGoogle()" ><div class="d-flex justify-content-center justify-content-between mx-5"><i class="fab fa-google"></i>     تسجيل الدخول بغوغل</div></b-button>
                              <div class="text-center m-1"> أو </div>
                              <b-button pill variant="primary" block v-b-toggle.accordion-1> <div class="d-flex justify-content-center justify-content-between mx-5"><i >@</i>  تسجيل الدخول بالإيميل </div></b-button>
                              <b-button pill variant="primary" block v-b-toggle.accordion-2> <div class="d-flex justify-content-center justify-content-between mx-5"><i class="fas fa-phone"></i> تسجيل الدخول برقم الموبايل </div></b-button>
                            </div>
                            <b-collapse accordion='RegAcc' id="accordion-2">
                                <div>
                                 <p class="text-center m-4" >التسجيل بأستخدام رقم الموبايل</p>
                                </div>
                                <b-form class="mx-2">
                                    <b-row>
                                        <b-col cols='12' sm="12">
                                            <b-form-group
                                                id="phoneNumberI"
                                                label-for="phoneNumberI"
                                            >
                                                <b-form-input
                                                    id="phoneNumberI"
                                                    type="text"
                                                    placeholder="رقم الموبايل"
                                                    class="rounded-form"
                                                ></b-form-input>
                                            </b-form-group>
                                            <b-form-group>
                                              <b-button variant="outline-primary" @click="Register()">Register</b-button>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-form>

                            </b-collapse>
                            <b-collapse id="accordion-1"  accordion='RegAcc' visible >
                                <div>
                                 <p class="text-center m-4" >التسجيل بأستخدام الإيميل</p>
                                </div>
                                <b-form class="mx-2" >
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
                                            id="LastNameI"
                                            label-for="LastNameI"
                                        >
                                            <b-form-input
                                            id="LastNameI"
                                            type="text"
                                            placeholder="الأسم الأخير"
                                            class="rounded-form"
                                            v-model.lazy="form.LastNameI"
                                            @blur="$v.form.LastNameI.$touch"
                                            :state="validateState('LastNameI')"
                                            
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
                            </b-collapse>
                          </b-col>
                      </b-row>
                    </b-col>
                </b-row>
            </div>
        </b-container>

    </div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
import axios from 'axios';
import { mapActions , mapGetters } from 'vuex';

export default {
    mounted () {
        window.addEventListener('message', this.onMessage, false)
   
    },
    beforeDestroy () {
        window.removeEventListener('message', this.onMessage)

    },
    computed:{
        ...mapGetters(['config'])
    },
    methods:{
        validateState(name){
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        ...mapActions(['RegisterUser','LoginWithSocialite']),
        Register(){
            this.RegisterUser(this.form)
        },
        RegisterWithGoogle:function(){
            const newWindow = openWindow('', 'message')
            newWindow.location.href = this.config.google;
        },
        RegisterWithFacebook:function(){
            const newWindow = openWindow('', 'message')
            newWindow.location.href = this.config.facebook;
        },
        onMessage(e){
            if(e.data.token && e.data.user){
                this.LoginWithSocialite(e.data)

                //redirect To Home
                this.$router.push({ name:'Home' })
            }
        }

    },
    data(){

        return {
          form: {
            FirstNameI: null,
            LastNameI: null,
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
            LastNameI: {
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
                        
                        return resp.data.success;
                    })
                }
            }

        }
  },
}
function openWindow (url, title, options = {}) {
      if (typeof url === 'object') {
        options = url
        url = ''
      }

      options = { url, title, width: 600, height: 720, ...options }

      const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left
      const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top
      const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width
      const height = window.innerHeight || document.documentElement.clientHeight || window.screen.height

      options.left = ((width / 2) - (options.width / 2)) + dualScreenLeft
      options.top = ((height / 2) - (options.height / 2)) + dualScreenTop

      const optionsStr = Object.keys(options).reduce((acc, key) => {
        acc.push(`${key}=${options[key]}`)
        return acc
      }, []).join(',')

      const newWindow = window.open(url, title, optionsStr)

      if (window.focus) {
        newWindow.focus()
      }

      return newWindow
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