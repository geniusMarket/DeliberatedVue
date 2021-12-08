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
    return request("addQuestion", method, data)
}

export function selectQuestion(method, data, loading) {
    return request("selectQuestion", method, data)
}

export function addAnswer(method, data, loading) {
    return request("addAnswer", method, data)
}

export function selectAnswer(method, data, loading) {
    return request("selectAnswer", method, data)
}

export function articleLikes(method, data, loading) {
    return request("articleLikes", method, data)
}
export function readCode(method, data, loading) {
    return request("readCode", method, data)
}

export function addHistory(method, data, loading) {
    return request("addHistory", method, data)
}

export function selectArticles(method, data, loading) {
    return request("selectArticles", method, data)
}

export function articleReplyLikes(method, data, loading) {
    return request("articleReplyLikes", method, data)
}

export function delQuestion(method, data, loading) {
    return request("delQuestion", method, data)
}

export function delArticleReply(method, data, loading) {
    return request("delArticleReply", method, data)
}

export function getScore(method, data, loading) {
    return request("getScore", method, data)
}

export function addScore(method, data, loading) {
    return request("addScore", method, data)
}

export function locationCode(method, data, loading) {
    return request("locationCode", method, data)
}

export function getQuestionIsAccept(method, data, loading) {
    return request("getQuestionIsAccept", method, data)
}

export function acceptAnswer(method, data, loading) {
    return request("acceptAnswer", method, data)
}
export function delArticle(method, data, loading) {
    return request("delArticle", method, data, loading)
}