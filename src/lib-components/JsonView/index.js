import JsonView from './jsonView.vue'
export default {
  name: 'JsonView',
  components: {
    JsonView
  },

  render(h) {
    const empty = h('el-empty', {
      props: {
        description: '数据类型校验失败'
      }
    })
    /* 防止乱序 */
    const slots = Object.keys(this.$slots)
      .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      .map(vnode => {
        vnode.context = this._self
        return vnode
      })

    const jsonView = h(JsonView, {
      props: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners
      },
      scopedSlots: this.$scopedSlots,
      attrs: this.$attrs
    }, slots)
    const bool = this.isObjectOrArray(this.$attrs?.data || false)
    return bool ? jsonView : empty
  },

  methods: {
    isObjectOrArray(source) {
      return ['array', 'object'].includes(this.getDataType(source))
    },
    getDataType(data) {
      return data && data._isBigNumber ? 'number' : Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
    }
  }
}
