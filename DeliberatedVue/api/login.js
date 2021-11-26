import request from "../utils/request"

export function login(method, data, loading) {
    return request("login", method, data, loading)
}