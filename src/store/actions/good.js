import {
  fetchCates,
  getGoodList
} from '@/utils/api'

import {
  GET_CATES,
  GET_GOOD_LIST
} from '../actionTypes'

export function getCates(params) {
  return function(dispatch) {
    fetchCates(params).then(res=>{
      dispatch({
        type: GET_CATES,
        payload: res
      })
    })
  }
}

export function getGoods(params) {
  return function(dispatch) {
    getGoodList(params).then(res=>{
      dispatch({
        type: GET_GOOD_LIST,
        payload: res
      })
    })
  }
}
