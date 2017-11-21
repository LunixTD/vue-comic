<template>
  <transition name="back">
    <div class="home">
      首页
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {}
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
