<template>
  <div>
    <attr/>
    <listeners/>
    <native-bind></native-bind>
  </div>
</template>

<script>
import Attr from './attr/Index.vue'
import Listeners from './listeners/Index.vue'
import NativeBind from './listeners/native-bind/Index.vue'
export default {
  components: {
    Attr,
    Listeners,
    NativeBind
  }
}
</script>

<style scoped>

</style>
