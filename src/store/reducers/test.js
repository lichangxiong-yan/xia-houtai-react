import { CHANGE_MSG, CNODE_LIST } from '../actionTypes'

let initState = {
  msg: 'hello redux',
  list: [],
  cnodelist: []
}

// action的作用，给reducer一个改变数据的信号
// 你要改变哪个变量？
// 你改的结果是什么？
export default function reducer(state=initState, action) {
  switch (action.type) {
    case CHANGE_MSG:
      console.log('收到了', action)
      // 深复制
      let newState = JSON.parse(JSON.stringify(state))
      newState.msg = action.payload
      // 改变msg
      // state.msg = action.payload
      return newState
    case CNODE_LIST:
      // console.log('cnode------', action)
      return {...state, ...{cnodelist: action.payload}}
    default:
      return state
  }
}
