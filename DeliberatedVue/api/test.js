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

//点赞注释
export function annotationLikes(method, data, loading) {
  return request("annotationLikes", method, data, loading)
}

//删除注释delAnnotation
export function delAnnotation(method, data, loading) {
  return request("delAnnotation", method, data, loading)
}


//添加回复
export function addAnnotationReply(method, data, loading) {
  return request("addAnnotationReply", method, data, loading)
}

//获取回复
export function selectAnnotationReply(method, data, loading) {
  return request("selectAnnotationReply", method, data, loading)
}

// 删除回复
export function delAnnotationReply(method, data, loading) {
  return request("delAnnotationReply", method, data, loading)
}