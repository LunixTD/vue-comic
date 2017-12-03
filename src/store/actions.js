import * as types from './mutation-type'
import {debounce} from 'common/js/tools'

export const setWindowZoo = function({commit, state}, {bool}) {
  debounce(commit(types.SET_WINDOW_ZOOM, bool), 2000, true)
}
