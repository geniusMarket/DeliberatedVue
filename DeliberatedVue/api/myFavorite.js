import request from "../utils/request"

export function myFavorite(method, data, loading) {
    return request("myFavorite", method, data, loading)
}