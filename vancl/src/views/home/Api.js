import request from "Api"
export default{
    reqSwipe(){
        return request({
            method:'post',
            data:{

            },
            url:'/goodslist'
        })
    }
}