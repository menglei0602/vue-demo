<template>
  <div>
    <div class="root-left">
      <div>
        <router-link to="/ui">ui</router-link>
      </div>
      <div>
        <router-link to="/vue">vue demo</router-link>
      </div>
    </div>
    <router-view class="root-right"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>