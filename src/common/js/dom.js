// 判断是否存在某个class
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

// 添加class
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let classArr = el.className.split(' ')
  classArr.push(className)
  el.className = classArr.join(' ')
}

// 删除class
export function removeClass(el, className) {
  if (!hasClass(el, className)) {
    return
  }

  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), '')
}

// 替换class
export function toggleClass(el, classA, classB) {
  if (!classB) {
    if (hasClass(el, classA)) {
      removeClass(el, classA)
      return
    }
    addClass(el, classA)
  } else {
    if (hasClass(el, classA)) {
      el.className = el.className.replace(classA, classB)
      return
    }
    el.className = el.className.replace(classB, classA)
  }
}

// 获取标签data属性值
export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}

// 样式多浏览器兼容
let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

// 事件频率限制
export function debounce(func, wait, immediate) {
  let timeout
  return () => {
    let later = () => {
      timeout = null
      if (!immediate) func.apply(this, arguments)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(this, arguments)
  }
}
