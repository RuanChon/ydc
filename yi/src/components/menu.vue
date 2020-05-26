<template>
  <div>
    <div class="ydc-menu">
      <ul>
        <li class="ydc-menu-item" v-for="(menu,index) in menus" :key="index">
          <router-link v-if="menu.type=='link'" :to="menu.to">
            <i :class="['ydc-icon', 'fl', menu.icon]"></i>
            {{menu.title}}
          </router-link>

          <div v-if="menu.type=='sub'">
            <span class="ydc-menu-sub-title">
              <i :class="['ydc-icon', 'fl', menu.icon]"></i>
              {{menu.title}}
            </span>
            
            <ul>
              <li v-for="(son,index) in menu.child" :key="index">
                <router-link :to="son.to"> {{son.title}} </router-link>
              </li>
            </ul>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "menued",
  data() {
    return {
      menus: [
        {type: "link", to: { name: "index" }, icon: "ydc-icon-home", title: "首页"},
        {type: "link", to: { name: "release" }, icon: "ydc-icon-find", title: "发布"},
        {type: "sub", icon: "ydc-icon-file", title: "管理", child: [
            { to: { name: "test1" }, title: "内容管理" },
            { to: { name: "test2" }, title: "内容同步" },
            { to: { name: "test3" }, title: "素材中心" }
        ]},
        {type: "sub", icon: "ydc-icon-record", title: "数据", child: [
            { to: { name: "test4" }, title: "订阅数据" },
            { to: { name: "test5" }, title: "内容数据" },
            { to: { name: "test6" }, title: "指数星级" }
        ]},
        {type: "sub", icon: "ydc-icon-set", title: "设置", child: [
            { to: { name: "test7" }, title: "账号信息" },
            { to: { name: "test8" }, title: "账号状态" }
        ]},
        {type: "sub", icon: "ydc-icon-customer", title: "客服", child: [
          { to: { name: "test9" }, title: "在线咨询" }]
        }]
    };
  }
};
</script>


<style lang="css" scoped>
.ydc-menu {
  min-width: 150px;
  min-height: 1300px;
  height: 100%;
  background: #f4f4f4;
  padding: 33px 0 50px;
  color: #333;
  letter-spacing: 1px;
  border-radius: 2px;
}

.ydc-body .menu {
  min-height: 1300px;
  height: 100%;
  background: #f4f4f4;
  border-radius: 8px;
  padding: 33px 0 50px;
  color: #333;
  letter-spacing: 1px;
}

.ydc-menu .ydc-menu-item a {
  display: block;
  width: 100%;
  padding: 10px 0 10px 68px;
  line-height: 20px;
  position: relative;
  font-size: 14px;
}

.ydc-menu .ydc-menu-item a:hover {
  background: #ff6565;
  color: #fff;
}

.ydc-menu .ydc-menu-item .router-link-active {
  background: #ff6565;
  color: #fff;
}

.ydc-menu-sub-title {
  padding: 10px 0 10px 70px;
  color: #999;
  border-top: 1px solid #ddd;
  margin-top: 15px;
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 22px;
  font-size: 14px;
}
</style>