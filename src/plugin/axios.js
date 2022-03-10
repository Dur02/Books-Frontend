import axios from "axios";
import qs from 'qs';
import store from '@/store/index'

axios.defaults.withCredentials = false// 允许跨域设置，不然可能因为拿不到cookie而报错

axios.defaults.baseURL = ''   //这里的地址就是刚刚启起来的服务器地址


//请求拦截
axios.interceptors.request.use(
    config => {
        console.log(store.state.authorization)
        if (store.state.authorization !== ""){
            config.headers = {
                'Authorization':store.state.authorization
            }
        }
        return config
    }, error => {
        return Promise.reject(error)
    }
)

// 响应拦截
axios.interceptors.response.use(
    res => {
        /*可在这里根据返回的状态码做一些拦截操作*/
        return res
    }, err => {
        return Promise.reject(err)
        // return Promise.resolve(err)
    }
)

export function login (accountInf) {
    return axios({
        url: `/login`,  //搜索建议,
        data:accountInf,
        method:'post'
    });
}

export function search (key) {
    return axios({
        url: `/search`,
        data:key,
        method:'post'
    });
}

export function books () {
    return axios({
        url: `/books`,
        method:'get'
    });
}

export function borrow (book) {
    return axios({
        url: `/borrow`,
        data:book,
        method:'post'
    });
}

export function giveback (book) {
    return axios({
        url: `/return`,
        data:book,
        method:'post'
    });
}

export function history (id) {
    return axios({
        url: `/history`,
        data:id,
        method:'post'
    });
}

export function getBookByID (id) {
    return axios({
        url: `/getBookByID`,
        data:id,
        method:'post'
    });
}

export function update (book){
    return axios({
        url: `/update`,
        data:book,
        method:'post'
    });
}
export default axios  /*记得导出*/
