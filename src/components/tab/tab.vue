<template>
  <div class="tab-container" ref="tabContainer" :class="zoom">
    <div class="tab">
      <div class="user-block">
        <div class="face">
          <img src="./avatar.jpg" alt="">
        </div>
        <div class="user">
          <div class="user-info">
            <img src="./male.svg" class="img" width="15">
            <span class="u-name">土豆</span>
          </div>
          <div class="user-point">
            <span>积分:</span>
            <span class="point">1000</span>
          </div>
          <div class="user-act">
            <button class="act-btn">已签到</button>
          </div>
        </div>
      </div>
      <div class="nav-list">
        <ul ref="nav" @click="restitution">
          <!-- <li data-router="home">
            <img src="./home.svg">
            <span class="text">首页</span>
          </li>
          <li data-router="myFavor">
            <img src="./favor.svg">
            <span class="text">我的收藏</span>
          </li>
          <li data-router="record">
            <img src="./history.svg">
            <span class="text">最近阅读</span>
          </li>
          <li data-router="search">
            <img src="./search.svg">
            <span class="text">搜索</span>
          </li> -->
          <router-link to="home" tag="li">
            <img src="./home.svg">
            <span class="text">首页</span>
          </router-link>
          <router-link to="myFaovr" tag="li">
            <img src="./favor.svg">
            <span class="text">我的收藏</span>
          </router-link>
          <router-link to="record" tag="li">
            <img src="./history.svg">
            <span class="text">最近阅读</span>
          </router-link>
          <router-link to="search" tag="li">
            <img src="./search.svg">
            <span class="text">搜索</span>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {addClass, toggleClass} from 'common/js/dom'
  // import {touchEffect} from 'common/js/touchEffect'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        zoom: ''
      }
    },
    mounted() {
      // touchEffect(this.$refs.nav, () => {
      //   this.setWindowZoom(false)
      // })
    },
    computed: {
      ...mapGetters([
        'windowZoom'
      ])
    },
    methods: {
      click(e) {
        let target = e.currentTarget
        addClass(target, 'touchStart')
        setTimeout(function() {
          toggleClass(target, 'touchStart', 'touchEnd')
        }, 100)
      },
      restitution(e) {
        let target = e.target
        if (target.nodeName.toLowerCase() === 'li') {
          this.setWindowZoom(false)
        }
        console.dir(target)
        // this.setWindowZoom(false)
      },
      addWC() {
        this.$refs.tabContainer.style.willChange = 'transform, opacity'
      },
      removeWC() {
        setTimeout(() => {
          this.$refs.tabContainer.style.willChange = 'auto'
        }, 500)
      },
      ...mapMutations({
        setWindowZoom: 'SET_WINDOW_ZOOM'
      })
    },
    watch: {
      windowZoom(newVal) {
        if (newVal) {
          this.addWC()
          this.zoom = 'zoom'
        } else {
          this.removeWC()
          this.zoom = ''
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  @import "~common/stylus/config.styl"
  @import "~common/stylus/anime.styl"

  .tab-container
    position: absolute
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    background-image: url(6.png)
    transform-origin: center
    color: #fff
    z-index: 1
    opacity: 0
    transform: translate3d(-10%,0,0) scale(1.5)
    transition: transform .5s ease, opacity .5s ease
    &.zoom
      transform: translate3d(0%,0,0) scale(1)
      opacity: 1
    .tab
      box-sizing: border-box
      width: 80%
      height: 80%
      vetically()
      padding: 15px 0 15px 15px
      .user-block
        display: flex
        flex-direction: row
        border-1px(#fff)
        padding-bottom: 15px
        padding-left: 15px
        .face
          border: 2px solid #fff
          border-radius: 50%
          overflow: hidden
          margin-right: 15px
          & img
            width: 60px
            height: 60px
            vertical-align: top
        .user
          display: flex
          flex-direction: column
          justify-content: space-between
          font-size: $font-size-small
          .user-info
            font-size: $font-size-medium
            img
              vertical-align: middle
          .user-point .point
            color: #efb35f
          .user-act .act-btn
            width: 50px
            border: 1px solid #fff
            border-radius: 3px
            background-color: #fff
            text-align: center
            padding: 2px 4px !important
            font-size: inherit
      .nav-list ul
        user-select: none
        li
          height: 45px
          font-size: $font-size-medium
          line-height: 45px
          padding-left: 10px
          will-change: transform
          img
            width: 28px
            height: 28px
            margin-right: 5px
            vertical-align: middle
</style>
