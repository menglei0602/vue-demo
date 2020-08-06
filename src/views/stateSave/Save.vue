<template>
  <div>
    <!-- <router-link class="jl" to="/state-save">default</router-link>
    <router-link class="jl" to="/state-save/first">first</router-link>
    <router-link class="jl" to="/state-save/second">second</router-link>-->
    <!-- 左侧导航 -->
    <template v-for="(item,index) in saveArrayBak">
      <a :key="index" class="jl" @click="skip(index)">{{item}}</a>
    </template>

    <!-- 上部tab清除保存 -->
    <template v-for="(item,index) in saveArrayBak">
      <input :key="index+10" type="button" :value="item" @click="reset(index)">
    </template>
    <!-- 缓存第1种方式 -->
    <transition name="fade" mode="out-in">
      <keep-alive :include="saveArray">
        <router-view></router-view>
      </keep-alive>
    </transition>

    <!-- 缓存第2种方式 -->
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      saveArrayBak: ['SaveDefault', 'SaveFirst', 'SaveSecond'],
      saveArray: ['SaveDefault', 'SaveFirst', 'SaveSecond']
    }
  },
  methods: {
    //   跳转
    skip (index) {
      let skipUrl = ''
      switch (index) {
        case 0:
          skipUrl = '/state-save'
          break
        case 1:
          skipUrl = '/state-save/first'
          break
        case 2:
          skipUrl = '/state-save/second'
          break

        default:
          break
      }
      // this.saveArray.push(this.saveArrayBak[index]);
      // this.saveArray = [...new Set(this.saveArray)];
      console.log(this.saveArray)
      this.saveArray = this.common.clone(this.saveArrayBak)
      console.log(this.saveArray)
      this.$router.push({ path: skipUrl })
    },
    //   清除
    reset (index) {
      console.log(index)
      this.saveArray.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.05s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
