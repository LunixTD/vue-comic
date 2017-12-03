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
