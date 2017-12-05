<template>
  <transition name="back">
    <div class="home">
      <div v-if="bannerList.length" class="slider-wrapper">
        <slider ref="slider">
          <div v-for="item in bannerList" class="slider-item">
            <a><img :src="item.imgSrc" @load="loadImg" alt=""></a>
          </div>
        </slider>
      </div>
      <div class="recommend-wrapper">
        <div class="category-container">
          <div class="category-title">
            <div class="title-l">
              最新汉化
            </div>
            <div class="title-r">
              更多
            </div>
          </div>
          <div class="border"></div>
          <div class="content">
            <div class="box" v-for="i in 5">
              <div class="cover">
                <img src="http://pic01.ishuhui.com/cartoon/book/thumb/3/rP2thPkxTa6Eph1qp9sS5B3J.jpg" alt="">
              </div>
              <span class="name">啦啦啦</span>
              <span class="chapter">第23话</span>
              <span class="title">标题标题</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  // import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'

  export default {
    data() {
      return {
        bannerList: [
          {
            imgSrc: './static/banner/1.jpg'
          },
          {
            imgSrc: './static/banner/2.jpg'
          },
          {
            imgSrc: './static/banner/3.jpg'
          },
          {
            imgSrc: './static/banner/4.jpg'
          },
          {
            imgSrc: './static/banner/5.jpg'
          }
        ],
        recommendList: []
      }
    },
    methods: {
      loadImg() {
        if (!this.imgLoaded) {
          this.$refs.slider.refresh()
          this.imgLoaded = true
        }
      }
    },
    components: {
      // Scroll,
      Slider
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/config'
  @import '~common/stylus/mixin'

  .home
    background-color: $color-background-gap
    // height: calc(100vh - 46px)
    z-index: 1
    &.back-enter-active
      will-change: 'transform'
      transition: transform .3s ease
    &.back-leave-active
      will-change: 'transform'
      transition: transform .5s ease
    &.back-enter, &.back-leave-active
      transform: translate3d(-80%,0,0)
    .slider-wrapper
      margin-bottom: 15px
    .recommend-wrapper
      // background-color: $color-background
      .category-container
        padding: 10px 15px
        text-align: center
        .category-title
          overflow: hidden
          font-size: $font-size-small
          color: #333
          .title-l
            float: left
            font-size: $font-size-medium
          .title-r
            float: right
        .border
          display: inline-block
          width: 100%
          height: 2px
          background: linear-gradient(90deg, #333 30%, rgba(255,255,255,0) 100%)
        .content
          padding: 10px 0
          .box
            width: 30%
            .cover
              width: 100%
              border-radius: 2px
              overflow: hidden
              img
                width: 100%
            // .name
            // .chapter
            // .title
</style>
