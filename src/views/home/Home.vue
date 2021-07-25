<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata} from "network/home";

  export default {
      name: "Home",
      components: {
        NavBar
      },
      data() {
        return {
          // result: null
          banners: [],
          recommends: []
        }
      },
      // 组件创建完毕
      created() {
          // 1.请求多个数据
          // this 箭头函数向上找this,就是这里的this,这个this就是vue对象
          getHomeMultidata().then(res => {
              // console.log(res);
              // this.result = res;
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
          })
      }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>
