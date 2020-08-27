/* 注册页接口 */

const { Router } = require('express');  //引入框架
const router = Router();  //启动路由

const request = require('../mysql');  //引入数据库方法

//查询用户名是否存在
router.get('/:username', async (req, res) => {
  let info;
  const { username } = req.params;
  try {
    const sql = `SELECT * FROM user WHERE username = '${username}'`;
    let data = await request(sql);
    if (data.length) {
      info = {
        code: 200,
        state: true,
        meg: '查询成功',
        data
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: '查询失败'
      }
    }
  } catch (error) {
    info = {
      code: error,
      state: false,
      meg: '查询失效'
    }
  }
  res.send(info);
})

module.exports = router;