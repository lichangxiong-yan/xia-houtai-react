import {
  TODO_ADD,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_CLEAR
} from '../actionTypes'

let initState = {
  msg: 'hello todo',
  list: [
    {id:1, task: '学习'},
    {id:2, task: '学习'}
  ]
}

export default function reducer(state=initState, action) {
  // state只读的
  let newState = JSON.parse(JSON.stringify(state))
  // let newState = Object.assign({}, state)
  // let newState = {...state}
  switch (action.type) {
    case TODO_ADD:
      newState.list.push(action.payload)
      return newState
    case TODO_UPDATE:
      return state
    case TODO_DELETE:
      // let newState1 = JSON.parse(JSON.stringify(state))
      newState.list.map((ele,idx,arr)=>{
        if(ele.id === action.payload) {
          arr.splice(idx, 1)
        }
        return false
      })
      return newState
    case TODO_CLEAR:
      return {...newState, ...{list:[]}}
    default:
      return state
  }
}
