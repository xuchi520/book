<template>
  <div id="app">
    <!--路由动画-->
    <transition name="fadeIn">
      <keep-alive>
        <!--需要缓存的-->
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <!--不需要缓存的-->
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './components/Tab'

  export default {
    name: "App",
    components: {
      Tab
    }
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    touch-action: none;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    -webkit-appearance: none;
  }

  .content {
    padding-top: 41px;
    padding-bottom: 50px;
    overflow: scroll;
    height: 100%;
    box-sizing: border-box;
  }
  /*路由动画*/
  .fadeIn-enter {
    opacity: 0;
  }
  .fadeIn-enter-active {
    transition: all 0.3s linear;
  }
  .fadeIn-leave-active {
    transition: all 0.3s linear;
    opacity: 0;
  }
</style>
