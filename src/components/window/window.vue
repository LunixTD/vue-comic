<template>
  <div class="window" ref="window" :class="zoom">
    <div class="mask" v-show="windowZoom"  @click="recover"></div>
    <My-Header></My-Header>
    <router-view class="router"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MyHeader from 'components/header/header'
  import {mapGetters, mapMutations} from 'vuex'
  import {prefixStyle} from 'common/js/dom'

  const transform = prefixStyle('transform')
  const sacleRate = 0.2 / screen.width
  const translateRate = 80 / screen.width

  export default {
    data() {
      return {
        zoom: '',
        distance: 0,
        posX: 0,
        scale: 0,
        translateX: 0
      }
    },
    mounted() {
      this.$refs.window.addEventListener('touchstart', (ev) => {
        let touch = ev.touches[0]
        this.posX = touch.pageX
        if (this.posX <= 10) {
          this.$refs.window.addEventListener('touchmove', (ev) => {
            let touch = ev.touches[0]
            let pageX = touch.pageX
            this.distance = this.posX - pageX
            this.posX = pageX
            // console.log(this.distance)
            if (this.distance < 0) {
              this.scale += sacleRate * -this.distance
              this.translateX += translateRate * -this.distance
              let scale = 1 - this.scale
              console.log(scale + '-' + this.translateX)
              this.$refs.window.style[transform] = `scale(${scale}) translate3d(${this.translateX}%,0,0)`
            }
          })
        }
      })
    },
    computed: {
      ...mapGetters([
        'windowZoom'
      ])
    },
    methods: {
      click(val) {
        this.setWindowZoom(!val)
      },
      recover() {
        this.setWindowZoom(false)
      },
      addWC() {
        this.$refs.window.style.willChange = 'transform'
      },
      removeWC() {
        setTimeout(() => {
          this.$refs.window.style.willChange = 'auto'
        }, 500)
      },
      ...mapMutations({
        setWindowZoom: 'SET_WINDOW_ZOOM'
      })
    },
    watch: {
      windowZoom(newVal) {
        if (!newVal) {
          this.removeWC()
          this.zoom = ''
        } else {
          this.addWC()
          this.zoom = 'zoom'
        }
      }
    },
    components: {
      MyHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/config.styl'
  @import '~common/stylus/mixin.styl'

  .window
    position: absolute
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    background-color: $color-background
    color: $color-text
    box-shadow: -6px 7px 13px 4px #333
    transform-origin: left center
    z-index: 10
    transition: transform .5s ease
    &.zoom
      transform: translate3d(80%,0,0) scale(0.8)
    .mask
      position: absolute
      width: 100%
      height: 100%
      top: 0
      left: 0
      z-index: 10
    .router
      position: absolute
      width: 100%
      height: calc(100vh - 46px)
      top: 46px
      overflow: hidden
</style>
