import axios from "axios";

const axiosIns = axios.create({
  baseURL: "http://localhost:9091"
})

// response响应拦截器
axiosIns.interceptors.response.use(response => {
  const res = response.data

  if (res.code !== 200) {
    // 非正常返回处理
  }
  return res
}, error => {
  console.log('err' + error)
  return Promise.reject(error)
})

export function httpReq(settings) {
  return new Promise(function(resolve, reject) {
    axiosIns.request(settings).then((response) => {
      resolve(response)
    }).catch((error) => {
      // 将promise错误catch住
      resolve({ code: 0, message: error.message })
    })
  })
}

export function httpPost(url, data = {}) {
  return httpReq({
    method: 'post',
    url,
    data
  })
}