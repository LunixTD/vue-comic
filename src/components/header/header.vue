<template>
  <div class="header">
    <div class="block-l" @click="back">
      <img class="back" src="./back.svg" alt="">
    </div>
    <span class="title" @click="openTab">{{windowContent}}</span>
    <div class="block-r"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import router from 'router/index'

  export default {
    data() {
      return {
        title: '标题'
      }
    },
    computed: {
      ...mapGetters([
        'windowContent'
      ])
    },
    methods: {
      back() {
        router.push('home')
      },
      openTab() {
        this.setWindowZoom(true)
      },
      ...mapMutations({
        setWindowZoom: 'SET_WINDOW_ZOOM'
      })
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
    .block-l
      position: absolute
      width: 40px
      height: 46px
      .back
        height: 20px
        vertical-align: middle
</style>
