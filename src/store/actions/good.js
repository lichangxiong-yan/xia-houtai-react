import {
  fetchCates,
  getGoodList,
  fetchGoodDetail
} from '@/utils/api'

import {
  GET_CATES,
  GET_GOOD_LIST,
  GET_GOOD_DETAIL,
  CHANGE_DETAIL
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

// 商品列表
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

export function getGoodDetail(params) {
  return function(dispatch) {
    fetchGoodDetail(params).then(res=>{
      dispatch({
        type: GET_GOOD_DETAIL,
        payload: res
      })
    })
  }
}

export function changeDetail(payload) {
  return {
    type: CHANGE_DETAIL,
    payload
  }
}
