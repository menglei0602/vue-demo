
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    text: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    tag () {
      switch (this.type) {
        case 'success':
          return 1
        case 'danger':
          return 2
        case 'warning':
          return 3
        default:
          return 1
      }
    }
  },
  //   1.render渲染函数写法
  //   render(h) {
  //     return h("a", {
  //       class: {
  //         btn: true,
  //         "btn-success": this.type === "success",
  //         "btn-danger": this.type === "danger",
  //         "btn-warning": this.type === "warning"
  //       },
  //       domProps: {
  //         innerText: this.text + " render"
  //       },
  //       on: {
  //         click: this.handleClick
  //       }
  //     });
  //   },
  // 2. jsx写法
  render () {
    return (
      <div
        class={{
          btn: true,
          'btn-success': this.type === 'success',
          'btn-danger': this.type === 'danger',
          'btn-warning': this.type === 'warning'
        }}
        onClick={this.handleClick}
      >
        {this.text + ' jsx'}
      </div>
    )
  },
  methods: {
    handleClick () {
      console.log('-----------------------')
      console.log('do something')
    }
  }
}
</script>

<style scoped>
</style>
