// 用于学习的test actions模块
// 封装action，是为了代码复用

import { CHANGE_MSG, CNODE_LIST } from '../actionTypes'
import { getCnodeList } from '@/utils/api'

export function changeMsg(payload) {
  // 返回一个action
  return {
    type: CHANGE_MSG,
    payload
  }
}

// 异步行为的解决方案
export function cnode(params) {
  return function(dispatch) {
    getCnodeList(params).then(res=>{
      console.log('res', res)
      // 这是成功的action
      dispatch({
        type: CNODE_LIST,
        payload: res
      })
    }).catch(err=>{
      // 这是失败的action
      dispatch({
        type: CNODE_LIST,
        payload: ''
      })
    })
  }
}

export function login(params) {
  return function(dispatch) {
    setTimeout(()=>{
      localStorage.setItem('token', 123)
    },300)
  }
}
