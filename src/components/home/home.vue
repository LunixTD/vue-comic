<template>
  <transition name="back">
    <div class="home">
      <div class="slider-wrapper">
        <slider>
          <div v-for="item in recommendList" class="slider-item">
            <a><img :src="item.imgSrc" alt=""></a>
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
            imgSrc: './static/banner/3.png'
          },
          {
            imgSrc: './static/banner/4.png'
          }
        ]
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
      transition: transform .2s linear
    &.back-leave-active
      will-change: 'transform'
      transition: transform .5s ease
    &.back-enter, &.back-leave-active
      transform: translate3d(-80%,0,0)
    
</style>
