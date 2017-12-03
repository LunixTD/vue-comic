<template>
  <transition name="back">
    <div class="home">
      <div v-if="recommendList.length" class="slider-wrapper">
        <slider ref="slider">
          <div v-for="item in recommendList" class="slider-item">
            <a><img :src="item.imgSrc" @load="loadImg" alt=""></a>
          </div>
        </slider>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Slider from 'components/slider/slider'

  export default {
    data() {
      return {
        recommendList: [
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
        ]
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
      Slider
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
  .home
    background-color: lightblue
    height: calc(100vh - 46px)
    z-index: 1
    &.back-enter-active
      will-change: 'transform'
      transition: transform .3s ease
    &.back-leave-active
      will-change: 'transform'
      transition: transform .5s ease
    &.back-enter, &.back-leave-active
      transform: translate3d(-80%,0,0)
    
</style>
