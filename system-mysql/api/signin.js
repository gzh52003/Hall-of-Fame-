/* 注册页接口 */

const { Router } = require('express');  //引入框架
const router = Router();  //启动路由

const request = require('../mysql');  //引入数据库方法

//查询用户名是否存在
// router.get('/:id',(req,res)=>{
//     res.send('这是请求的数据');
// })
// //添加用户 用body
// router.post('/',(req,res)=>{  //req：接受前端数据
//   let {name} = req.body;  //1、接收前端body数据
//   res.send(name);
// })
// //删除用户  用/:id，动态路由
// router.delete('/:id',(req,res)=>{  //req：接受前端数据
//  const p = req.params;    //2、接受前端动态路由
//  res.send({
//    code:200,
//    text:'请求成功',
//    p
//  })
// })

// //修改数据
// router.put('/',(req,res)=>{  //req：接受前端数据
//   const p = req.query;    //接受路由后边?a=12&b=d
//  res.send({
//   code:200,
//   text:'请求成功',
//   p
//  });
// })


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