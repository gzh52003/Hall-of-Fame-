const { Router } = require('express');  //引入框架
const router = Router();  //启动路由

const request = require('../mysql');  //引入数据库方法
const token = 'admins';

//登录验证
router.post('/', async (req, res) => {
  try {

    const { username, password } = req.body;
    const sql = `SELECT * FROM user WHERE username='${username}' and password='${password}'`;
    const data = await request(sql);
    let info = {};
    if (data.length) {
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
router.post('/' + token, async (req, res) => {
  try {
    const { username, password } = req.body;
    const sql = `SELECT * FROM user WHERE username='${username}' and password='${password}'`;
    const data = await request(sql);
    let info = {};
    if (data.length) {
      info = {
        code: 200,
        state: true,
        meg: "登陆成功",
        data
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

//退出登录
router.post('/loginOut', async (req, res) => {
  try {
    const { Token } = req.body;
    // const sql = `SELECT * FROM user WHERE username='${username}' and password='${password}'`;
    // const data = await request(sql);
    let data = Token == token ? true : false;
    let info = {};
    if (data) {
      info = {
        code: 200,
        state: true,
        meg: "退出成功",
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: "退出失败"
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

module.exports = router;