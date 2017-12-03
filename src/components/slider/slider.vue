<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>

      </slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) in dots" :class="{active: dotIndex === index}"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        loop: true,
        autoPlay: true,
        dots: [],
        currentPageIndex: 0,
        dotIndex: 0,
        interval: 4000
      }
    },
    mounted() {
      setTimeout(() => {
        this._setSliderWidth()
        this._initDots()
        this._initSlider()
        this._play()
      }, 20)
    },
    methods: {
      _setSliderWidth() {
        this.children = this.$refs.sliderGroup.children
        let sliderWidth = screen.width
        let width = 0
        for (let i = this.children.length - 1; i >= 0; i--) {
          this.children[i].style.width = sliderWidth + 'px'
        }
        if (this.loop) {
          width = sliderWidth * (this.children.length + 2)
        } else {
          width = sliderWidth * this.children.length
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: this.loop,
            threshold: 0.1,
            speed: 600
          }
        })
        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          if (this.loop) {
            pageIndex -= 1
          }
          this.currentPageIndex = pageIndex
          this.dotIndex = pageIndex
          if (this.autoPlay) {
            clearTimeout(this.timer)
            this._play()
          }
        })
      },
      _play() {
        let pageIndex = this.currentPageIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 800)
          this.dotIndex = pageIndex - 1
          if (this.dotIndex === this.dots.length) {
            this.dotIndex = 0
          }
        }, this.interval)
      },
      refresh() {
        this.slider && this.slider.refresh()
      }
    },
    destroyed() {
      clearTimeout(this.timer)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/config"

  .slider
    position: relative
    width: 100vw
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        transition: all ease .2s
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>
