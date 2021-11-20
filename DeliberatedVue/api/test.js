import request from "../utils/request"

export function test(method, data, loading) {
  return request("readCode", method, data, loading)
}
//获取源码
export function readCode(method, data, loading) {
  return request("readCode", method, data, loading)
}
//添加注释
export function addAnnotation(method, data, loading) {
  return request("addAnnotation", method, data, loading)
}
//获取注释
export function selectAnnotation(method, data, loading) {
  return request("selectAnnotation", method, data, loading)
}



