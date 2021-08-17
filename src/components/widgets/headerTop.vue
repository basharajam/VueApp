<template>
    <div class="headerTop" >
        <!-- <div class="headerTopLinks d-flex" v-if="$mq === 'md' || $mq === 'lg' ">
        <a href="https://alyaman.com/my-account/edit-account/"> إنشاء حساب </a>
        <div class="headerTopDivider"></div>
        <a href="https://wa.me/8617757971070">خدمة العملاء</a>
        <div class="headerTopDivider"></div>
        <a href="https://alyaman.com/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%aa%d9%82%d8%af%d9%8a%d9%85-%d8%b7%d9%84%d8%a8-%d8%b4%d8%b1%d8%a7%d8%a1/"> كيفية الشراء </a>
        <div class="headerTopDivider"></div>
        <a href="https://www.alyaman.com/remember/"> سياسات الخصوصية </a>
        </div> -->
            
            <div class="headerDrp d-flex align-items-center " v-if="$mq === 'sm'">
                        <b-dropdown id="dropdown-1"  variant="none" class="ShipBtn" no-flip no-caret>
                            <template #button-content>
                                <div class="d-flex align-items-center">
                                    <div class="stack" style="color: white; flex-direction:row;align-items: flex-end; margin-left: 10px;display: flex;">
                                        <span style="font-size: 12px;margin: 0 6px;"> الشحن إلى :</span>
                                        <span style="font-weight: bold;font-size: 12px"> {{SelectedCountryText}}</span>
                                    </div>
                                    <div style="color: white;width: 0px;height: 0px;border-left: 6px solid transparent;border-right: 6px solid transparent;border-top: 6px solid"></div>
                                </div>
                            </template>
                        <b-dropdown-form @submit.prevent="UpdateCurSubmit()" >
                            <b-form-group label="العملة" >
                                <b-form-select v-model="CurrInput" size="sm" :options="CurOptions"></b-form-select>
                            </b-form-group>

                            <b-form-group label="الشحن الى" >
                                <b-form-select v-model="CountryInput" size="sm" :options="CountryOptions"></b-form-select>
                            </b-form-group>
                            <b-form-group>
                                <b-button type="submit" block pill variant="outline-warning">حفظ</b-button>
                            </b-form-group>
                        </b-dropdown-form>
                        </b-dropdown>
                
            </div>
    </div>  
</template>

<script>
export default {
data(){

        var CountryVal= this.$cookies.get('shipCountry');
        var CurrVal = this.$cookies.get('Curr');
        // console.log(CountryVal)
        // console.log(CurrVal);

        if(CountryVal && CurrVal){

          var CurrVal0=CurrVal;
          var CountryVal0=CountryVal;
          var CountryValText;
          switch(CountryVal) {
            case "SA":
               CountryValText='السعودية'
                break;
            case "OM":
               CountryValText='سلطنة عمان'
                break;
            case "YE":
               CountryValText='اليمن'
                break;
            case "LB":
               CountryValText='لبنان'
                break;
            case "IQ":
               CountryValText='العراق'
                break;
            case "AE":
               CountryValText='الامارات'
                break;
            case "PS":
               CountryValText='فلسطين'
                break;
            default:
               CountryValText='السعودية'
          }

          

        }
        else{
           CurrVal0='SAR';
           CountryVal0='SA';
           CountryValText='السعودية';
        }

      return{

        SearchInput:"",
        SearchRes:false,
        innerSpinner:true,
        search:true,
        NotFoundErr:false,
        SearchResArr:[],
        elementVisible: false,
        CountryInput:CountryVal0,
        CountryVal0:CountryVal0,
        CurrInput:CurrVal0,
        SelectedCountryText:CountryValText,
        CountryOptions:{
            SA:"السعودية",
            OM:"سلطنة عمان",
            YE:"اليمن",
            LB:"لبنان",
            IQ:"العراق",
            AE:"الامارات",
            PS:"فلسطين"
        },
        CurOptions:{
            CNY:"اليوان الصيني",
            SAR:"الريال السعودي",
            AED:"الدرهم الاماراتي",
            OMR:"الريال العماني",
            USD:"الدولار الاميركي"
        }
      }

    },
    methods:{

         UpdateCurSubmit(){

           console.log('Clicked')
           
           //Do Request To Get New Data ---later
           //this.getProdByTax();
           
            //Display Spinner 

           //Hide Spinner 

           //Save New Cookie With values 
           this.$cookies.set('shipCountry',this.CountryInput);
           this.$cookies.set('Curr',this.CurrInput);

            // Refresh The Page
            window.location.reload()
            //this.$forceUpdate();
         },
        //  SetLang(){
        //    window.location.reload()
        //  }
    }
}
</script>

<style scoped>
.headerTop div div button{
      margin: 0;
  }
.headerTop{
    background: #2f2f2f;
}

.headerTopLinks a{
    color: #f0f0f0;
    font-size: 12px;
    margin: 6px;
    font-weight: 600;
}


.headerTopDivider{
    background: #999999;
    width: 1px;
    margin: 8px 0;
}
</style>