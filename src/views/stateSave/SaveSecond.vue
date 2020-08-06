<template>
  <div>
    <router-link :to="url">SaveSecond:{{secondData.id}}-{{secondData.title}}</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'SaveSecond',
  data () {
    return {
      secondData: {},
      id: 0,
      url: ''
    }
  },
  mounted () {
    this.init()
  },
  activated () {
    this.init()
  },
  methods: {
    init () {
      let params = {
        id: 2
      }
      this.id = params.id
      this.axios
        .get('/api/index.json', {
          params: params
        })
        .then(res => {
          // console.log(res);
          this.secondData = res.data[this.id]
          this.url = '/state-save/second/detail?id=' + this.id
        })
    }
  }
}
</script>

<style scoped>
</style>
