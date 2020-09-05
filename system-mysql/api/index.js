const { Router, urlencoded, json } = require('express');  //引入框架
const router = Router();  //启动路由
const cors = require('../tool/cors');

const user = require('./user');
const goods = require('./goods');
const login = require('./login');
const signin = require('./signin');
const goodsList = require('./goodsList')

router.use(urlencoded(), json());  //格式化请求数据
router.use(cors); //处理跨域

router.use('/user', user);      //用户路由
router.use('/goods', goods);    //商品路由
router.use('/login', login);    //登录路由
router.use('/signin', signin);   //注册路由
router.use('/goodslist', goodsList)

module.exports = router;  //导出路由