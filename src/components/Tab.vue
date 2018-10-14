<template>
  <div class="footer">
    <router-link to="/">
     <i class="iconfont icon-shouye"></i>
       <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
       <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang"></i>
       <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia-xue"></i>
       <span>添加</span>
    </router-link>
  </div>
</template>

<style scoped lang="less">
  .footer{
    position: fixed;
    left:0;
    bottom:0;
    width: 100%;
    height: 50px;
    display: flex;
    background: #fff;
    border-top: 1px solid #ddd;
    a{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      color: #333;
    }
    a:hover{
      color:red;
    }
  }
</style>
