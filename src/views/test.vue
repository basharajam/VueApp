<template>
  <div class="">

    <b-card class="m-5" >
      <b-col sm="6" style="background-image:url('rib.jpeg');height:900px;background-repeat: no-repeat;" >

      </b-col>
      <!-- <img src="rib.jpeg" alt="" width="750" height="750"> -->

     
      <div v-for="item in list" v-bind:key="item.id">
        <DDR v-model="item.transform" :value="item.transform" >
          <img src="spinner.png" :width="item.transform.width" :height="item.transform.height"  />
      
        </DDR>
      </div>
    </b-card>

  </div>
</template>

<script>
import DDR from 'yoyoo-ddr'
import 'yoyoo-ddr/dist/yoyoo-ddr.css'

export default {

  name:'test',
  components:{
    DDR
  },
  data() {
    return {
      list: [
        { id: 1, active: false, transform: { x: 100, y: 100, width: 100, height: 100, rotation: 0 } },
        { id: 2, active: false, transform: { x: 200, y: 100, width: 100, height: 100, rotation: 0 } },
        { id: 3, active: false, transform: { x: 300, y: 100, width: 100, height: 100, rotation: 0 } },
        { id: 4, active: false, transform: { x: 400, y: 100, width: 100, height: 100, rotation: 0 } },
      ],
    }
  },
  methods:{


  }


}
</script>

<style>

</style>

