<template>
  <div>
    <Render :level="item" v-for="(item,index) in data" :key="index">hello</Render>
    <Button style="font-size:30px;" type="danger" text="test"></Button>
  </div>
</template>

<script>
import Render from './Render.vue'
import Button from './Button.vue'
export default {
  components: {
    Render,
    Button
  },
  data () {
    return {
      data: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style scoped>
</style>
