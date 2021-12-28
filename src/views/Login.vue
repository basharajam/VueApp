<template>

    <div class="LoginWrapper">
        <b-container fluid>    
            <div class="LoginInner">
                <b-row>
                    <b-col cols="12" sm="7" class="d-flex" >
                        <div class="FormImg"></div>

                    </b-col>
                    <b-col  cols='12' sm="5" >
                        <b-row>
                            <b-col sm='12' cols="12" class="my-5" >
                                <div class="mx-2">
                                    <b-button pill variant="primary" block  @click="LoginWithFacebook()"  ><div class="d-flex justify-content-center justify-content-between mx-5"><i class="fab fa-facebook-f"></i>   تسجيل الدخول بفيسبوك </div></b-button>
                                    <b-button pill variant="primary" block  @click="LoginWithGoogle()" ><div class="d-flex justify-content-center justify-content-between mx-5"><i class="fab fa-google"></i>     تسجيل الدخول بغوغل</div></b-button>
                                </div>
                                <div class="">
                                    <p class="text-center m-4" >تسجيل الدخول بأستخدام</p>
                                </div>
                                <b-form class="mx-2" >
                                    <b-form-group
                                        id="emailInput"
                                        label-for="firstNameI"
                                    >
                                        <b-form-input
                                        id="emailInput"
                                        type="text"
                                        placeholder="الإيميل"
                                        class="rounded-form"
                                        v-model="form.userMail"
                                    
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
                                        v-model="form.password"
                                        
                                        ></b-form-input>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-button pill variant="primary" block @click="Login()" >تسجيل الدخول</b-button>
                                    </b-form-group>
                                </b-form>
                            </b-col>                                                    
                        </b-row>
                    </b-col>
                </b-row>

            </div>
    
        </b-container>

    </div>
</template>

<script>
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
        ...mapActions(['LoginWithMail','LoginWithSocialite']),
        Login:function(){

            this.LoginWithMail(this.form)

        },
        LoginWithGoogle:function(){
            const newWindow = openWindow('', 'message')
            newWindow.location.href = this.config.google;
        },
        LoginWithFacebook:function(){
            const newWindow = openWindow('', 'message')
            newWindow.location.href = this.config.facebook;
        },
        onMessage (e) {

            if(e.data.token && e.data.user){
                this.LoginWithSocialite(e.data)

                //redirect To Home
                this.$router.push({ name:'Home' })
            }
        }
    },

    data(){
        return  {
          form: {
            userMail:'',
            password:''
          },
        }
    }
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