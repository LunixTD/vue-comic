<template>
  <div class="window" ref="window" :class="zoom">
    <div class="mask" v-show="windowZoom"  @click="recover"></div>
    <My-Header></My-Header>
    <div class="container">
      <keep-alive>
        <router-view class="router"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MyHeader from 'components/header/header'
  import {mapGetters, mapMutations} from 'vuex'
  // import {getCategory} from 'api/category'
  // import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        zoom: '',
        category: {}
      }
    },
    created() {
      this._getCategory()
    },
    computed: {
      ...mapGetters([
        'windowZoom'
      ])
    },
    methods: {
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
      _getCategory() {
        // getCategory(1)
        // .then((res) => {
        //   if (res.errNo === ERR_OK) {
        //     this.category = res.data
        //     console.log(res.data)
        //   }
        // })
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
  @import '~common/stylus/config'
  @import '~common/stylus/mixin'

  .window
    position: absolute
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    background-image: url(/static/other/6.png)
    color: $color-text
    box-shadow: -6px 7px 13px 4px #24292e
    transform-origin: left center
    z-index: 10
    transition: transform .5s ease
    &.zoom
      transform: translate3d(80%,0,0) scale(0.8)
    .mask
      mask(10)
    .container
      position: absolute
      width: 100%
      height: calc(100vh - 46px)
      top: 46px
      overflow: hidden
    .router
      position: absolute
      width: 100%
      height: 100%
      top: 0
</style>
