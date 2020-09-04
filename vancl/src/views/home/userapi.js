import request from '@/tool/axios';

export default {

    //请求用户名
    reqUser(){
        return request({
            method:'get',   //请求方式
            url:'/goods'    //请求地址
        })
    }
}