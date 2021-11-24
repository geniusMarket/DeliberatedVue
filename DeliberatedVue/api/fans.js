import request from "../utils/request"

export function fans(method, data, loading) {
    return request("fans", method, data, loading)
}