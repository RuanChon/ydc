<template>
    <div>
        <div class="ydc-tabPanel">
          <div>
            <ul>
              <li v-for="(data,index) in datas" :key="index" :class="index==cur?'hit':''" @click="cur=index">{{data.title}}</li>
            </ul>
          </div>
          <!-- page -->
          <div class="ydc-panes">
            <div class="ydc-pane" v-for="(data,index) in datas" :key="index" :style="{display: index==cur?'block':'none'}">
                <ol class="ydc-pane-list">
                  <li v-for="(son,index) in data.data" :key="index">
                    <a href="page.html" target="_blank">{{son.title}} <i v-if="son.isnew">new</i> </a>
                    <span>{{son.time}}</span>
                  </li>
                </ol>

                <Pagnation />
            </div>
          </div>
          
        </div>
    </div>
</template>


<script>
import Pagnation from "@/components/pagnation";

export default {
    name:'tebpanel',
    components: { Pagnation },
    data() {
      return {
        cur:0,
        datas:[
          {title:'公告栏', data:[
            {id:1, title:'关于封禁违规账号的通知（4月13日-4月20日）', isnew:true, time:'2017-04-18 10:00:00'},
            {id:2, title:'点讯号MCN颁发月度特色奖项：决定就是你了！', isnew:true, time:'2017-04-07 10:00:00'},
            {id:3, title:'一点车点讯号平台重磅推出原创态度势力榜', isnew:false, time:'2017-03-17 10:00:00'},
            {id:4, title:'一点车点讯号平台针对低质量违规内容加强打击力度的公告', isnew:false, time:'2017-04-17 10:00:00'},
          ]},
          {title:'一点车资讯', data:[
            {id:1, title:'一点车点讯号平台清理违规内容', isnew:true, time:'2017-04-18 10:00:00'},
            {id:2, title:'资讯重拳整顿违规内容，持续维护内容生态健康发展', isnew:false, time:'2017-04-07 10:00:00'},
            {id:3, title:'手机验证功能已上线，为增强帐号安全性', isnew:true, time:'2017-01-17 10:00:00'},
            {id:4, title:'公司类型账号提现日期更改的通知', isnew:false, time:'2017-04-27 10:00:00'},
          ]},
        ]
      }
    },
}
</script>


<style lang="css" scoped>
.ydc-tabPanel ul {
    height: 44px;
    border-bottom: 1px solid #d0d0d0;
    background: #eaeaea;
    line-height: 44px;
}

.ydc-tabPanel ul li {
    float: left;
    margin: 0 2px 0 0;
    font-size: 14px;
    height: 44px;
    line-height: 45px;
    width: 111px;
    text-align: center;
    cursor: pointer;
    background: -moz-linear-gradient(top, #eee, #ddd);
}

.ydc-tabPanel .hit {
    border-bottom: 2px solid #ff5f5f;
    cursor: pointer;
    color: #ffffff;
    background: #ff5f5f;
    background: -moz-linear-gradient(top, #e1e1e1, #fff);
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
}

.ydc-pane {
    background-color: #fff;
    display: none;
    padding: 20px 0;
}

.ydc-pane p {
    padding: 15px 15px 0 10px;
}

.ydc-pane h4 {
    padding: 15px 15px 0 10px;
    font-size: 14px;
    font-weight: bold;
}

.ydc-pane-list li a {
    display: block;
    font-size: 14px;
    color: #333;
    float: left;
}

.ydc-pane-list li {
    height: 45px;
    line-height: 45px;
    padding: 0 20px;
}

.ydc-pane-list li:hover {
    background: #e6e6e6;
}

.ydc-pane-list li a:hover {
    color: #ff6565;
}

.ydc-pane-list li a i {
    color: #ff0000;
    font-style: oblique;
}

.ydc-pane-list li span {
    float: right;
    color: #999;
}
</style>