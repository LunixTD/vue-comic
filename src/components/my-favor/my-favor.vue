<template>
  <transition name="slide" mode="in-out">
    <div class="my-favor">
      我的收藏
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .slide-enter-active
    transition: all .5s ease
  .slide-leave-active
    transition: all .2s linear
  .slide-enter, .slide-leave-to
    transform: translateX(100%)
    opacity: 0

  .my-favor
    background-color: lightgrey
</style>
