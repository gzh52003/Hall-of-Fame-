/* 入口文件的渲染结构 */
/* 用编程式导航做单页面 */
<template>
  <div id="app">

    <!-- 组件渲染位置 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    
    };
  },
  methods: {
   
  },
  components: {},
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
