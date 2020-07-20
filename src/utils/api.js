import axios from './axios'

export function getCnodeList(params) {
  return axios({
    url: '/topics',
    method: 'GET',
    params
  })
}

export function login(data) {
  return axios({
    url: '/jd/user/login',
    method: 'POST',
    data
  })
}

export function getGoodList(params) {
  return axios({
    url: '/jd/getHotGoodList',
    method: 'GET',
    params
  })
}

export function addGood(data) {
  return axios({
    url: '/jd/addGood',
    method: 'POST',
    data
  })
}

export function delGood(params) {
  return axios({
    url: '/jd/delGood',
    method: 'GET',
    params
  })
}
