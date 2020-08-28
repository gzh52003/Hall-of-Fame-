/* token的加密与解密 */

const jwt = require('jsonwebtoken');  //引入token加密框架

const keys = 'h5200306';  //密钥

//加密方法：生成token
//data为要加密的数据
function encrypt(data) {
  let token = jwt.sign({ data }, keys);
  return token
}

//解密方法：验证token有效性
//token为要解密的数据
function decode(token) {
  let state;  //状态值，true或false
  try {
    const p = jwt.verify(token, keys);
    state = true;
  } catch (error) {
    state=false;
  }
  return state
}

//导出方法
module.exports={
  encrypt,
  decode
}