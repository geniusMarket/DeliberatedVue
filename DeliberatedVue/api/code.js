import request from "../utils/request"

export function readCode(method, data, loading) {
    return request("readCode", method, data, loading)
}