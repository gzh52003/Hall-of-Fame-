<template>
  <div class="wrap">
     <div class="topTitle" @click="backhome">
       <span id="topBack" class="topBack"></span>
     <span class="curTitle">登录</span>
       <span></span>
     </div>
  <div class="reg-input login1" style=""> <div class="clear" style="margin-top:2em;"> <input type="text" id="UserName" placeholder="点击输入手机号/Email" name="UserName" value=""> </div> <div class="clear" style="margin-top:2em;"> <input type="password" id="Password" placeholder="请输入密码" name="Password"> </div> <div class="user-login" style="border-bottom:0px;"> <input type="hidden" name="url" id="url" value="https://m.vancl.com/User/UserCenterIndex?guid=237be88ad7424fbbbf00c77d89f8bdcd"> <p id="errinfo" style=""> </p> </div>  <input type="hidden" id="hidLoginType" value="1"> </div>
<div class="topTitle">
      <span class="curTitle">登录</span>
     </div>
    <div class="box">
     <span class="sp1" @click="reg">免费注册&emsp;></span>
     <span class="sp2">忘记密码&emsp;></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {

      }
  },

  components:{},

   methods:{
       reg(){
         this.$router.push({path:'/signin'})
       },
       backhome(){
         this.$router.push({path:'/home'})
       }
   }
}
</script>

<style lang='scss' scoped>
.wrap{
    max-width: 640px;
    margin: 0 auto;
    overflow: hidden;
    min-height: 100%;

.topTitle {
    position: relative;
    top: 0;
    max-width: 640px;
    width: 100%;
    height: 45px;
    overflow: hidden;
    background: #b81c22;
    text-align: center;
    line-height: 4rem;
    .curTitle {
    display: inline-block;
    margin: 0 auto;
    font-size: 1em;
    color: #fff;
    width: 34px;
    height: 100%;
    text-align: center;
    line-height: 34px;
    position: absolute;
    top: 0;
    left: 165px;
    line-height: 40px;
    }
    .topBack {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%) rotate(45deg);
    -webkit-transform: translateY(-50%) rotate(45deg);
    width: 1.4rem;
    height: 1.4rem;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    cursor: pointer;
}
}






}
form{
      margin: 0;
    padding: 0;
    line-height: 1.5;
    font-size: 11.25px；
    
    
    
}
.reg-input {
  padding: 2.5em 2em 0 2em;
  font-size: 11.25px;


}
input{
  width: 100%;
  height: 53.5px;
  border: rebeccapurple;
}
.box{
  width: 367px;
  height: 18px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9px;
  font-size: 12.5px;
  color: #4c4c4c;
  
}
</style>
