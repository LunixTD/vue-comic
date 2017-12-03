import * as types from './mutation-type'

// 定义限制变动频率的标志变量
let status = {}

const mutation = {
  [types.SET_WINDOW_ZOOM](state, bool) {
    if (!status.zoom) {
      state.windowZoom = bool
      status.zoom = true
      clearTimeout(st)
      let st = setTimeout(() => {
        status.zoom = false
      }, 500)
    }
  },
  [types.SET_WINDOW_INFO](state, info) {
    state.windowInfo = info
  }
}

export default mutation
