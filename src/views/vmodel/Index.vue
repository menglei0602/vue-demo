<template>
    <div>
        <Vmodel v-model="lovingVue"></Vmodel>
    </div>
</template>

<script>
import Vmodel from '@/views/vmodel/Vmodel.vue'
export default {
  data () {
    return {
      lovingVue: true
    }
  },
  components: {
    Vmodel
  }
}
</script>

<style scoped>

</style>
