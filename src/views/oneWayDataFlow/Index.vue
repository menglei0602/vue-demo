<template>
  <div>
    <Sync></Sync>
    <Vmodel></Vmodel>
    <div>
      <SelfVModel v-model="lovingVue"></SelfVModel>
      lovingVue :{{lovingVue}}
    </div>
  </div>
</template>

<script>
import Sync from './sync'
import Vmodel from './v-model'
import SelfVModel from './SelfVModel.vue'
export default {
  components: {
    Sync,
    Vmodel,
    SelfVModel
  },
  data () {
    return {
      lovingVue: false
    }
  }
}
</script>
