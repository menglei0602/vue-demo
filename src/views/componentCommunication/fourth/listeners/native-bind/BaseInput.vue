<template>
  <div>
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['label', 'value']
}
</script>

<style lang="less" scoped>
</style>
