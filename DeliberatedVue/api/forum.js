import request from "../utils/request"

export function getArticle(method, data, loading) {
    return request("getArticle", method, data, loading)
}

export function readCode(method, data, loading) {
    return request("readCode", method, data, loading)
}

export function addHistory(method, data, loading) {
    return request("addHistory", method, data, loading)
}

export function selectArticles(method, data, loading) {
    return request("selectArticles", method, data, loading)
}