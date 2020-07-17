import {
  TODO_ADD,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_CLEAR
} from '../actionTypes'

export function addTodo(payload) {
  return {
    type: TODO_ADD,
    payload
  }
}

export function delTodo(payload) {
  return {
    type: TODO_DELETE,
    payload
  }
}

export function editTodo(payload) {
  return {
    type: TODO_UPDATE,
    payload
  }
}

export function clearTodo(payload) {
  return {
    type: TODO_CLEAR,
    payload
  }
}
