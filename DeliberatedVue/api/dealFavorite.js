import request from "../utils/request"

export function dealFavorite(method, data, loading) {
    return request("dealFavorite", method, data, loading)
}