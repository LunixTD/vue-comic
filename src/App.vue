<template>
  <div id="app" @touchmove="prevent">
    <tab></tab>
    <window></window>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from 'components/tab/tab'
  import Window from 'components/window/window'

  export default {
    methods: {
      prevent(ev) {
        ev.preventDefault()
      }
    },
    components: {
      Tab,
      Window
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    position: relative
    width: 100vw
    height: 100vh
    overflow: hidden
</style>
