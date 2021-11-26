import request from "../utils/request"

export function selectArticle(method, data, loading) {
    return request("selectArticles", method, data, loading)
}

export function addArticle(method, data, loading) {
    return request("addArticle", method, data, loading)
}

export function getArticle(method, data, loading) {
    return request("getArticle", method, data, loading)
}

export function addArticleReply(method, data, loading) {
    return request("addArticleReply", method, data, loading)
}

export function articleReplies(method, data, loading) {
    return request("articleReplies", method, data, loading)
}

export function addQuestion(method, data, loading) {
    return request("addQuestion", method, data, loading)
}

export function selectQuestion(method, data, loading) {
    return request("selectQuestion", method, data, loading)
}

export function addAnswer(method, data, loading) {
    return request("addAnswer", method, data, loading)
}

export function selectAnswer(method, data, loading) {
    return request("selectAnswer", method, data, loading)
}

export function articleLikes(method, data, loading) {
    return request("articleLikes", method, data, loading)
}