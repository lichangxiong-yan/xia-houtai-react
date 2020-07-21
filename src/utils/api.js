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

// 获取商品列表
export function getGoodList(params) {
  return axios({
    url: '/jd/getHotGoodList',
    method: 'GET',
    params
  })
}

// 添加商品
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

// 获取所有品类
export function fetchCates(params) {
  return axios({
    url: '/jd/getAllCates',
    method: 'GET',
    params
  })
}

// 获取商品详情
export function fetchGoodDetail(params) {
  return axios({
    url: '/jd/getGoodDetail',
    method: 'GET',
    params
  })
}
