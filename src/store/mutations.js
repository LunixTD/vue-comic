import * as types from './mutation-type'

const mutation = {
  [types.SET_WINDOW_ZOOM](state, bool) {
    state.windowZoom = bool
  },
  [types.SET_WINDOW_CONTENT](state, string) {
    state.windowContent = string
  }
}

export default mutation
