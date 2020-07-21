import {
  GET_CATES,
  GET_GOOD_LIST,
  GET_GOOD_DETAIL,
  CHANGE_DETAIL
} from '../actionTypes'

let initState = {
  cateArr: [],
  goodData: {},
  goodDetail: {}
}

export default function goodReducer(state=initState, action) {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case GET_CATES:
      newState.cateArr = action.payload
      return newState
    case GET_GOOD_LIST:
      console.log('收到了', action)
      newState.goodData = action.payload
      return newState
    case GET_GOOD_DETAIL:
      newState.goodDetail = action.payload
      return newState
    case CHANGE_DETAIL:
      // 改变goodDetail
      console.log(action.payload)
      newState.goodDetail[action.payload.key] = action.payload.val
      return newState
    default:
      return state

  }
}
