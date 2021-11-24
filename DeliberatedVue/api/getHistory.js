import request from "../utils/request"

export function getHistory(method, data, loading) {
    return request("myHistory", method, data, loading)
}