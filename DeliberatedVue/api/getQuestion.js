import request from "../utils/request"

export function getQuestion(method, data, loading) {
    return request("myQuestion", method, data, loading)
}