const { Router } = require('express');  //引入框架
const router = Router();  //启动路由

const request = require('../mysql');  //引入数据库方法
const { encrypt, decode } = require('./token');  //引入操作token的方法
// const token = 'admins';

//登录验证
router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const sql = `SELECT * FROM user WHERE username='${username}' and password='${password}'`;
    const data = await request(sql);  //操作数据库
    let token;
    let info = {};
    if (data.length) {
      token = encrypt(password);  //生成token
      info = {
        code: 200,
        state: true,
        token,  //将token传给前端
        meg: "登陆成功",
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: "登陆失败"
      }
    }
    res.send(info)
    // console.log(data);
  } catch (error) {
    let info = {
      code: error,
      state: false,
      meg: "查询失败"
    }
    res.send(info)
  }
})

//token验证
router.post('/verify', (req, res) => {
  const { token } = req.body;
  let state = decode(token);  //验证token，有效返回true,无效返回false
  let info;
  if (state) {
    info = {
      code: 200,
      state,
      meg: '验证成功'
    }
  } else {
    info = {
      code: 300,
      state,
      meg: '验证失败'
    }
  }
  res.send(info)
})

module.exports = router;