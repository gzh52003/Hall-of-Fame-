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






//添加商品
/* router.post('/', async (req, res) => {
  try {
    const { goodsname, origin, price, sum } = req.body;
    const sql = `insert into goods (goodsname,origin,price,sum) values ('${goodsname}','${origin}',${price},'${sum}')`;
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
 */
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