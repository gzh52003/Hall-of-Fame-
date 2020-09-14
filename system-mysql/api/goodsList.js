const { Router } = require('express');  //引入框架
const router = Router();  //启动路由
const request = require('../mysql');  //引入数据库方法


//查询多条商品
router.post('/', async (req, res) => {
  const { num } = req.body;
  
  let sql;
  if (num) {
    sql = `select * from goodslist limit ${num}`;
  } else {
    sql = `select * from goodslist`;
  }
  console.log(sql)
  try {
    let data = await request(sql);
    let info = {};
    if (data) {
      info = {
        code: 200,
        state: true,
        meg: "查询成功",
        data
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

//根据id查询商品
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `select * from goodslist WHERE id=${id}`;
    const data = await request(sql);
    let info = {};
    if (data.length) {
      info = {
        code: 200,
        state: true,
        data,
        meg: "查询成功"
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: "查询失败"
      }
    }
    res.send(info)
  } catch (error) {
    let info = {
      code: error,
      state: false,
      meg: "查询失败"
    }
    res.send(info)
  }
})

//商品排序desc\asc
router.get('/', async (req, res) => {
  try {
    const {id} = req.query;
    //res.send(id);
    const sql = `select * from goodslist WHERE price>1 order by oldPrice ${id};`;
    const data = await request(sql);
    let info = {};
    if (data) {
      info = {
        code: 200,
        state: true,
        data,
        meg: "查询成功"
      }
    } else {
      info = {
        code: 300,
        state: false,
        meg: "查询失败"
      }
    }
    res.send(info)
  } catch (error) {
    let info = {
      code: error,
      state: false,
      meg: "查询失败"
    }
    res.send(info)
  }
})

//删除商品
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `delete from goods where id=${id}`;
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

module.exports = router;