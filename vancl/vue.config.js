module.exports={
  devServer:{
    port:8090,  //端口号，如果被占用会自动提升
    host:"localhost", //主机名，127.0.0.1
    https:false,  //协议
    open:true   //启动服务时打开浏览器
  },
  lintOnSave:false, //关闭格式检查
  productionSourceMap:false   //打包时不会生成.map文件，加快打包速度
}