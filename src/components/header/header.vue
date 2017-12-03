<template>
  <div class="header">
    <div class="header-wrapper" ref="headerWrapper">
      <div class="block-l">
        <div v-show="!windowInfo.avatarBtn" class="back" @click="back">
          <img class="back" src="./back.svg" alt="返回">
        </div>
        <div v-show="windowInfo.avatarBtn" class="avatar-con" @click="openTab">
          <img class="more" src="./more.png" alt="更多">
          <img class="avatar" src="./avatar.jpg" alt="头像"></img>
        </div>
      </div>
      <span class="title">{{windowInfo.title}}</span>
      <div class="block-r"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import {pageInfo} from 'common/js/config'
  import router from 'router/index'
  import {addClass, removeClass} from 'common/js/dom'

  export default {
    data() {
      return {
        pageStatus: true,
        count: 0
      }
    },
    mounted() {
      this.$refs.headerWrapper.addEventListener('animationend', () => {
        removeClass(this.$refs.headerWrapper, 'fade')
      })
    },
    computed: {
      ...mapGetters([
        'windowInfo'
      ])
    },
    methods: {
      back() {
        router.push('home')
        this.setWindowInfo(pageInfo.home)
      },
      openTab() {
        this.setWindowZoom(true)
      },
      ...mapMutations({
        setWindowZoom: 'SET_WINDOW_ZOOM',
        setWindowInfo: 'SET_WINDOW_INFO'
      })
    },
    watch: {
      windowInfo() {
        addClass(this.$refs.headerWrapper, 'fade')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/config.styl'

  .header
    position: relative
    height: 46px
    line-height: 46px
    text-align: center
    background-color: $color-background-header
    color: $color-text-header
    .header-wrapper
      &.fade
        animation: fade .3s ease
        transition: opacity .3s ease
      @keyframes fade
        0%
          opacity: 0
        60%
          opacity: 0
        100%
          opacity: 1
      .block-l
        position: absolute
        height: 46px
        .avatar-con
          padding: 0 5px
          .avatar
            display: inline-block
            width: 30px
            height: 30px
            border: 1px solid #e3e3e3
            border-radius: 50%
            background-color: #fff
            vertical-align: middle
          .more
            display: inline-block
            width: 8px
            vertical-align: middle
        .back
          height: 20px
          width: 40px
          vertical-align: middle
</style>
