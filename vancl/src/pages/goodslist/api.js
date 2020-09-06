import request from '@/tool/axios'  //引入axios请求

export default {

    //请求单条数据
    reqGoods(id){
        return request({
            method:'get',
            url:'/goodslist/'+id
        })
    }
}