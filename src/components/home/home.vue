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
  
  .back-enter-active
    will-change: 'transform'
    transition: all .2s linear
  .back-leave-active
    will-change: 'transform'
    transition: all 1s ease
  .back-enter, .back-leave-to
    transform: translateX(-80%)
  
  .home
    background-color: lightblue
    height: calc(100vh - 46px)
    z-index: 1
</style>
