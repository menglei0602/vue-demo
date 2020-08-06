<template>
  <div>
    <div>
      <button @click="changeEvent(event)">改变事件类型</button>
    </div>
    <div>
      <button v-on:[event].once="doThat(event, $event)">用{{event}}点击，看控制台</button>
    </div>
    <div>
      <input type="text"  v-test1 v-test2 v-model="a" id="a" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      event: 'click',
      a: 1
    }
  },
  methods: {
    doThat (msg, event) {
      console.log(msg, event)
    },
    changeEvent (event) {
      this.event = event === 'dblclick' ? 'click' : 'dblclick'
    }
  },
  directives: {
    test1: {
      bind: function (el) {
        // 聚焦元素
        el.innerHTML = 'test1'
      },
      componentUpdated (el) {
        console.log(el, 'test1')
      }
    },
    test2: {
      bind: function (el) {
        // 聚焦元素
        // el.innerHTML = 'test2';
      },
      componentUpdated (el) {
        console.log(el, 'test2')
      }
    }
  }
}
</script>

<style scoped>
</style>
