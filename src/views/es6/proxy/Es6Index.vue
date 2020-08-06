<template>
  <div>
    proxy 实现与具体的业务对象解耦
    可以把业务对象实体隐藏，直接返回一个实例代理。

    请查看控制台打印
  </div>
</template>

<script>
export default {
  created () {
    function validator (target, validator) {
      return new Proxy(target, {
        _validator: validator,
        set (target, key, value, proxy) {
          if (target.hasOwnProperty(key)) {
            let va = this._validator[key]
            if (va(value)) {
              return Reflect.set(target, key, value, proxy)
            } else {
              throw Error(`不能设置${key}到${value}`)
            }
          } else {
            throw Error(`${key} 不存在`)
          }
        }
      })
    }
    const personValidators = {
      name (val) {
        return typeof val === 'string'
      },
      age (val) {
        return typeof val === 'number' && val > 18
      }
    }
    class Person {
      constructor (name, age) {
        this.name = name
        this.age = age
        console.log(1)
        return validator(this, personValidators)
      }
    }
    const person = new Person('lilei', 30)
    console.info(person)
    person.name = '48'
    console.info(person)
  }
}
</script>

<style lang="less" scoped>
</style>
