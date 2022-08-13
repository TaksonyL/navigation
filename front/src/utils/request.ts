import axios from 'axios';

axios.defaults.timeout = 60*1000;
// axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.baseURL = "/api";

// 响应拦截器
axios.interceptors.response.use(response => {
  console.log('响应 ===>', response)

  if(response.status === 200) {
    // 正确响应
    if(response.data?.code === 200) {
      return response.data
    }
   
  }

  return Promise.reject(response)
}, error => {
  console.log('响应错误 ===>', error)
  return Promise.reject(error)
})

export default axios