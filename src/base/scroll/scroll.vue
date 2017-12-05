<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => {
          this._initScroll()
        }, 20)
      })
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollY: true,
          probeType: 1,
          HWCompositing: true
        })
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>
