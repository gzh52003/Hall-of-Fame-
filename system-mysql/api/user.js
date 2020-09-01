/* 用户页接口 */

const { Router } = require('express');  //引入框架
const router = Router();  //启动路由

const request = require('../mysql');  //引入数据库方法

//查询所有
router.get('/', async (req, res) => {
  try {
    const sql = `select * from user`;
    let data = await request(sql);
    let info = {};
    if (data) {
      info = {
        code: 200,
        state: true,
        meg: "查询成功",
        data,
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: "查询失败"
      }
    }
    res.send(info);
    console.log('监听到请求')
  } catch (error) {
    let info = {
      code: error,
      state: false,
      meg: "查询失败"
    }
    res.send(info)
  }
})

//查询单条，data没有password,id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `select username,gender,age from user where id='${id}'`;
    let data = await request(sql);
    let info = {};
    if (data.length) {
      info = {
        code: 200,
        state: true,
        meg: "查询成功",
        data,
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: "查询失败"
      }
    }
    res.send(info);
  } catch (error) {
    let info = {
      code: error,
      state: false,
      meg: "查询失败"
    }
    res.send(info)
  }
})

//添加用户
//username必传
router.post('/', async (req, res) => {
  try {
    const { username, gender = (''), age = (null), password } = req.body;
    const sql = `insert into user (username,gender,age,password) values ('${username}','${gender}',${age},'${password}')`;
    const data = await request(sql);
    let info = {};
    if (data) {
      info = {
        code: 200,
        state: true,
        meg: "添加成功"
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: "添加失败"
      }
    }
    res.send(info)
    console.log(data);
  } catch (error) {
    let info = {
      code: error,
      state: false,
      meg: "查询失败"
    }
    res.send(info)
  }
})

//删除用户
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `delete from user where id=${id}`;
    const data = await request(sql);
    let info = {};
    if (data.affectedRows) {
      info = {
        code: 200,
        state: true,
        meg: '删除成功'
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: '数据不存在'
      }
    }
    res.send(info);
    console.log('删除', data.affectedRows, data)
  } catch (error) {
    const info = {
      code: error,
      state: false,
      meg: '查询失败'
    }
    res.send(info)
  }
})

//修改用户
router.put('/', async (req, res) => {
  try {
    const { id, gender, age } = req.body
    const sql = `UPDATE user SET gender='${gender}',age = ${age} WHERE id = ${id}`
    const data = await request(sql);
    let info = {};
    if (data.changedRows) {
      info = {
        code: 200,
        state: true,
        meg: '修改成功'
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: '无修改'
      }
    }
    res.send(info);
    console.log('删除', data.affectedRows, data)
  } catch (error) {
    const info = {
      code: error,
      state: false,
      meg: '查询失败'
    }
    res.send(info)
  }
})

module.exports = router;