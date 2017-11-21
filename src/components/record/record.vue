<template>
  <transition name="slide">
    <div class="record">
      最近浏览
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .record
    background-color: lightcoral
    height: calc(100vh - 46px)
    z-index: 9
    &.slide-enter-active
      will-change: 'transform'
      transition: transform .5s ease
    &.slide-leave-active
      will-change: 'transform'
      transition: transform .25s linear
    &.slide-enter, &.slide-leave-active
      transform: translate3d(100%,0,0)
</style>
