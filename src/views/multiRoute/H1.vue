 <template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'I am H1 page,Welcome to H1'
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>
<style lang="less" scoped>
div {
  background-color: yellowgreen;
}
</style>
