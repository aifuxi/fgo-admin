import axios from "axios";
import type { CommonResponse } from "../api/common";
import PubSub from "pubsub-js";
import { TOPIC_API_ERROR } from "../constants/eventTopic";

const request = axios.create({
  baseURL: "/",
});

// 请求拦截器
request.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    console.log(">> response", response);

    if (response.status === 200) {
      const resp = response.data as CommonResponse<unknown>;

      // 检查响应状态码是否为 200，且业务状态码是否为 0
      if (resp.code !== 0) {
        PubSub.publish(TOPIC_API_ERROR, resp.message);
        return Promise.reject(resp.message);
      }

      return response;
    }

    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// 导出请求实例
export default request;
