// import React from 'react';
import axios from 'axios';
import { message } from 'antd';

let httpType = ['get', 'post'];
let http = {};

axios.create({
    timeout: 10,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

//开始请求设置，发起拦截处理
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(
    response => {

        if (response.status === 200) {
            return response.data
        }

        message.error('请求出错，请稍后再试');

    },
    error => {
        return Promise.reject(error)
    }
);

httpType.forEach((item, index) => {
    http[item] = (api, data = {}) => {
        let params

        if (item.toUpperCase() === "GET") {
            params = {
                data
            }
        } else {
            params = data
        }

        return new Promise((resolve, reject) => {
            axios[item](api, params).then((res) => {
                resolve(res)
            })
        })
    }
});

export default http;