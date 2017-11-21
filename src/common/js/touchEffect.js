import router from 'router/index'
import {addClass, removeClass, getData} from 'common/js/dom'

import 'common/stylus/anime.styl'

export function touchEffect(el, callback) {
  let tab = el.children
  for (let i = 0; i < tab.length; i++) {
    let item = tab[i]
    let target = {}
    let animeStatus = false
    item.addEventListener('touchstart', function(ev) {
      target = ev.currentTarget
      animeAct(target, 'start')
      setTimeout(function() {
        animeStatus = true
      }, 100)
    })
    item.addEventListener('touchend', function(ev) {
      callback()
      if (!animeStatus) {
        setTimeout(function() {
          router.push(getData(item, 'router'))
          animeAct(target)
          animeStatus = false
        }, 100)
        return
      }
      router.push(getData(item, 'router'))
      animeAct(target)
      animeStatus = false
    })
  }
}

function animeAct(target, status) {
  if (status === 'start') {
    removeClass(target, 'touchEnd')
    addClass(target, 'touchStart')
    return
  }
  removeClass(target, 'touchStart')
  addClass(target, 'touchEnd')
}
