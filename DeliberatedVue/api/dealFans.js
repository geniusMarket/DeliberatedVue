import request from "../utils/request"

export function dealFans(method, data, loading) {
    return request("dealFans", method, data, loading)
}