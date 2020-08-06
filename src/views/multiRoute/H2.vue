 <template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'I am H2 page,Welcome to H2'
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>
<style lang="less" scoped>
div {
  background-color: #ccc;
}
</style>
