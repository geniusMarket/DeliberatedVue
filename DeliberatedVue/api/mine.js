import request from "../utils/request"

export function dealFans(method, data, loading) {
    return request("dealFans", method, data, loading)
}

export function dealFavorite(method, data, loading) {
    return request("dealFavorite", method, data, loading)
}
export function fans(method, data, loading) {
    return request("fans", method, data, loading)
}
export function myFavorite(method, data, loading) {
    return request("myFavorite", method, data, loading)
}
export function getHistory(method, data, loading) {
    return request("myHistory", method, data, loading)
}
export function getQuestion(method, data, loading) {
    return request("myQuestion", method, data, loading)
}
export function getArticle(method, data, loading) {
    return request("myArticle", method, data, loading)
}