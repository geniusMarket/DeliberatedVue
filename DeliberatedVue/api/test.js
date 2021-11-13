import request from "../utils/request"

export function test(method, data, loading) {
  return request("show", method, data, loading)
}