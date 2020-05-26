<template>
  <div>
    <!-- head YDC begin -->
    <header class="ydc-header">
      <div class="ydc-entered">
        <div class="ydc-header-content ydc-flex">
          <div class="ydc-column">
            <a href="index.html" class="ydc-column-ydc-logo">
              <img src="../assets/images/icon/ydc-logo.png" title about alt />
            </a>
          </div>
          <div class="ydc-column">
            <div class="ydc-column-user">
              <div class="ydc-user-photo">
                <!--<a href="javascript:;">-->
                <!--<img src="../assets/images/icon/photo.png" title="" about="" alt="">-->
                <!--</a>-->
              </div>
              <div class="ydc-user-info">
                <div class="ydc-user-info-name">
                  <!--<a href="javascript:;">一点车</a>-->
                </div>
                <div class="ydc-user-info-func ydc-flex">
                  <!--<span class="ydc-tag">新手期</span>-->
                  <!--<span class="ydc-mal"><i class="ydc-icon ydc-icon-mail fl"></i><em>12</em></span>-->
                  <a href="javascript:;">退出</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- head YDC end -->

    <!-- content YDC begin -->
    <section>
      <div class="ydc-content-slide ydc-body">
        <div class="ydc-page-content">
          <div class="ydc-reg-title">
            <ul class="clearfix">
              <li
                v-for="(step,index) in steps"
                :key="index"
                :class="['ydc-reg-step', index<=cur?'active':'']"
              >
                <em></em>
                <h3>{{step}}</h3>
              </li>
            </ul>
          </div>

          <div class="ydc-reg-form clearfix">
            <!-- 第一步 -->
            <form action v-if="cur==0">
              <div class="ydc-reg-form-group clearfix">
                <label>邮箱账号:</label>
                <div class="ydc-reg-form-input">
                  <input
                    type="text"
                    id="loginEmail"
                    name="username"
                    class="ydc-form-control"
                    autocomplete="off"
                    placeholder="账号通行证/邮箱"
                  />
                </div>
                <div class="ydc-reg-form-text">
                  <p>
                    请填写账号邮箱，作为登录帐号。
                    <br />没有账号邮箱？
                    <a href="javascript:;" @click="cur++">立即注册>></a>
                  </p>
                </div>
              </div>
              <div class="ydc-reg-form-group clearfix">
                <label>密码:</label>
                <div class="ydc-reg-form-input">
                  <input
                    type="password"
                    id="psd"
                    name="username"
                    class="ydc-form-control"
                    autocomplete="off"
                    placeholder="密码"
                  />
                </div>
                <div class="ydc-reg-form-text">
                  <p>
                    <a href="javascript:;">忘记密码？</a>
                  </p>
                </div>
              </div>
              <div class="ydc-reg-form-group">
                <div class="ydc-reg-form-button">
                  <a class="btn" type="submit" href="go-reg-username.html">登录</a>
                </div>
              </div>
            </form>

            <!-- 第二步 -->
            <form action v-if="cur==1">
              <div class="ydc-reg-form-class">
                <div class="ydc-reg-text-center">
                  <div class="ydc-text-center-item" v-for="(type,index) in types" :key="index">
                    <div class="ydc-text-item-list">
                      <div class="ydc-text-item-list-title">
                        <div class="ydc-text-ab">
                          <label :class="['rdobox', account==index?'checked':'']" @click="account=index">
                            <span :class="[account==index?'checked-image':'check-image']"></span>
                            <span class="radiobox-content"></span>
                          </label>
                        </div>
                        <div class="ydc-text-item-list-mt1">
                          <img :src="type.icon" alt />
                        </div>
                      </div>
                      <div class="ydc-text-item-list-text">
                        <h2>{{type.title}}</h2>
                        <p>{{type.desc}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="ydc-reg-form-group">
                <div class="ydc-reg-form-button clearfix">
                  <a class="btn" @click="next_2()">下一步</a>
                </div>
              </div>
            </form>

            <!-- 第三步 -->
            <form :action="server+'/api/reg'" v-if="cur==2" ref='form3' method="post" enctype="multipart/form-data">
              <input type="hidden" name="type" v-model="account">
              <div class="ydc-reg-form-class ydc-reg-form-reg">
                <div class="ydc-reg-form-group clearfix">
                  <label>帐号名称:</label>
                  <div class="ydc-reg-form-input">
                    <input
                      type="text"
                      id="loginEmail"
                      name="display_name"
                      class="ydc-form-control"
                      autocomplete="off"
                      placeholder
                      style="width:200px;"
                      value="rccc"
                    />
                    <div class="ydc-reg-form-text">
                      <p>请输入2至14字的帐号名称</p>
                    </div>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>帐号密码:</label>
                  <div class="ydc-reg-form-input">
                    <input
                      type="password"
                      id="loginEmail"
                      name="password"
                      class="ydc-form-control"
                      autocomplete="off"
                      placeholder
                      style="width:200px;"
                      value="123"
                    />
                    <div class="ydc-reg-form-text">
                      <p>请输入账号密码啊啊啊啊啊啊啊</p>
                    </div>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>帐号简介:</label>
                  <div class="ydc-reg-form-input">
                    <input
                      type="text"
                      id="psd"
                      name="slogan"
                      class="ydc-form-control"
                      autocomplete="off"
                      placeholder
                      value="这是简介"
                    />
                    <div class="ydc-reg-form-text">
                      <p>请输入2至14字的帐号简介</p>
                    </div>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>帐号分类:</label>
                  <div class="ydc-reg-form-input">
                    <select name="catalog">
                      <option v-for="(cl,index) in catalogs" :key="index">{{cl}}</option>
                    </select>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>帐号图标:</label>
                  <div class="ydc-reg-form-input">
                    <input type="file" id name="icon" class autocomplete="off" placeholder />
                    <div class="ydc-reg-form-text">
                      <p>选取至少160*160尺寸的图片。请勿上传二维码或其他推广性质图片作为图标。</p>
                    </div>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>帐号描述:</label>
                  <div class="ydc-reg-form-input ydc-reg-form-input-width">
                    <textarea name="desctiption">这是帐号描述</textarea>
                    <div class="ydc-reg-form-text">
                      <p>请输入2至14字的帐号名称</p>
                    </div>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>已有内容渠道及链接:</label>
                  <div class="ydc-reg-form-input ydc-reg-form-input-width">
                    <textarea name="other_channels">这是已有内容渠道及链接</textarea>
                    <div class="ydc-reg-form-text">
                      <p>例如已发布文章的网站地址、博客地址、微信号等，方便我们作为审核参考。</p>
                    </div>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>已有内容渠道截图:</label>
                  <div class="ydc-reg-form-input">
                    <input
                      type="file"
                      id="file"
                      name="username"
                      class
                      autocomplete="off"
                      placeholder
                    />
                    <div class="ydc-reg-form-text">
                      <p>截图中必须包含个人账号名或昵称等信息,支持.jpg.png格式，大小不超过5M。</p>
                    </div>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>姓名:</label>
                  <div class="ydc-reg-form-input">
                    <input
                      type="text"
                      id="user1"
                      name="name"
                      value="ryan"
                      class="ydc-form-control"
                      autocomplete="off"
                      placeholder
                    />
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>身份证号:</label>
                  <div class="ydc-reg-form-input clearfix">
                    <input
                      type="text"
                      id="user2"
                      name="identify_number"
                      value="422398"
                      class="ydc-form-control"
                      autocomplete="off"
                      placeholder
                    />
                    <div class="ydc-reg-form-text">
                      <p>帐号信息填写需真实有效，如发现虚假以及非个人真实信息导致帐号收益无法提取，责任由帐号个人承担</p>
                    </div>
                    <div class="ydc-warning-default fl" style="height:auto; font-size:12px;">
                      <p>
                        提交本页信息后，使用当前账号登录客户端3.0版本
                        <br />点击「我的」-「实名认证」进行实名认证。
                      </p>
                    </div>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>所在城市:</label>
                  <div class="ydc-reg-form-input">
                    <select v-model="pv_cur" name="province">
                      <option v-for="(pvce,index) in province" :key="index" :value="pvce.ID">{{pvce.name}}</option>
                    </select>
                    <select v-if="citys" v-model="cy_cur" name="city">
                      <option v-for="(city,index) in  citys" :key="index" :value="city.ID">{{city.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>联系手机:</label>
                  <div class="ydc-reg-form-input">
                    <input
                      type="text"
                      id="user4"
                      name="username"
                      class="ydc-form-control"
                      autocomplete="off"
                      placeholder
                    />
                    <div class="ydc-reg-form-text">
                      <p>请输入手机号并验证</p>
                    </div>
                  </div>
                  <div class="ydc-reg-yzm">
                    <button>获取验证码</button>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>邮箱:</label>
                  <div class="ydc-reg-form-input">
                    <input
                      type="text"
                      id="user5"
                      name="email"
                      value="724@qq.com"
                      class="ydc-form-control"
                      autocomplete="off"
                      placeholder
                    />
                  </div>
                  <div class="ydc-reg-form-text">
                    <p>请使用自己日常使用邮箱便于接受相关信息</p>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>QQ/微信号:</label>
                  <div class="ydc-reg-form-input">
                    <input
                      type="text"
                      id="user6"
                      name="qq_wx"
                      value="72408"
                      class="ydc-form-control"
                      autocomplete="off"
                      placeholder
                    />
                  </div>
                  <div class="ydc-reg-form-text">
                    <p>请输入常用QQ/微信号方便联系沟通</p>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label>推荐人:</label>
                  <div class="ydc-reg-form-input">
                    <input
                      type="text"
                      id="user7"
                      name="recommend_code"
                      class="ydc-form-control"
                      autocomplete="off"
                      placeholder
                    />
                  </div>
                  <div class="ydc-reg-form-text">
                    <p>选填，若有网易员工推荐您入驻，请填写相应推荐码。</p>
                  </div>
                </div>
                <div class="ydc-reg-form-group clearfix">
                  <label></label>
                  <div class="ydc-reg-form-input ydc-reg-form-input-agreement">
                    <label>
                      <input type="checkbox" value="yes" id="agreement" checked /> 我已经阅读并同意
                      <a href="agreement.html" target="_blank">《车讯号媒体开放平台注册协议》</a>。
                    </label>
                  </div>
                </div>
              </div>
              <div class="ydc-reg-form-group">
                <div class="ydc-reg-form-button" style="margin-left:255px;">
                  <a class="btn btn-border fl" href="#" @click="cur--">上一步</a>
                  <a class="btn fl" href="#" @click="submit_from()">提交申请</a>
                </div>
              </div>
            </form>
          </div>

          <div class="ydc-right-banner" style="margin-top:80px;">
            <div class="slideshow-container">
              <a href="https://xihazahuopu.taobao.com/" target="_blank" class="mySlides fade">
                <img src="../assets/images/ad/ad1.jpg" style="width:100%" />
              </a>
              <a href="https://weibo.com/525135676" target="_blank" class="mySlides fade">
                <img src="../assets/images/ad/ad2.jpg" style="width:100%" />
              </a>
              <a href="http://www.a-ui.cn/" target="_blank" class="mySlides fade">
                <img src="../assets/images/ad/ad3.jpg" style="width:100%" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="ydc-footer">
        <div>
          <p>©2018 一点车版权所有About 公司简介 联系方法 招聘信息 客户服务 隐私政策 广告服务 网站地图 意见反馈 不良信息举报</p>
        </div>
      </div>
    </section>
    <!-- content YDC end -->
  </div>
</template>

<script>
import mt1 from '../assets/images/icon/mt1.png'
import mt2 from '../assets/images/icon/mt2.png'
import mt3 from '../assets/images/icon/mt3.png'
import mt4 from '../assets/images/icon/mt4.png'
import {server} from '@/config'
import {fetch_form} from '@/lib/fetch'

export default {
  data() {
    return {
      steps: ["登录邮箱账号", "选择帐号类别", "填写媒体信息"],
      cur: 0,
      account:-1,
      types:[
        {icon:mt1, title:'媒体', desc:'适合报纸、杂志、电视台、网站等以内容生产为主，有国家新闻出版广电总局认可资质的媒体机构申请。'},
        {icon:mt2, title:'自媒体', desc:'适合垂直领域专家、意见领袖、评论家等个人创作者或以内容生产为主的自媒体公司/机构申请。'},
        {icon:mt3, title:'组织机构', desc:'适合党政机关、事业单位和各类公共场馆、公益机构、学校/培训机构、民间组织等申请。'},
        {icon:mt4, title:'企业', desc:'适合企业、公司及其分支机构、旗下品牌等申请，品牌宣传，主要用于商业品牌推广等申请。'},
      ],
      catalogs:[],
      province:[],
      citys:[],
      pv_cur:0,
      cy_cur:1,
      server
    }
  },
  async created() {

    // catalog
    {
      let res = await fetch(server+'/api/acc_catalog');
      this.catalogs = await res.json();
    }
    
    // 省份
    {
      let res = await fetch(server+'/api/get_province');
      this.province = await res.json();
      this.pv_cur = this.province[0].ID;
    }

    // 城市
    {
      let res = await fetch(server+`/api/get_city/${this.province[0].ID}`);
      this.citys = await res.json();
    }
  },
  methods: {
    next_2(){
      if(this.account == '-1'){
        alert('请选择账户类型');
      }else{
        this.cur++
      }
    },

    async submit_from(){
      let json=await fetch_form(this.$refs['form3']);
      alert('注册成功');
    }

  },
  watch: {
    async pv_cur(){
      let res = await fetch(server+`/api/get_city/${this.pv_cur}`);
      this.citys = await res.json();
      this.cy_cur = this.citys[0].ID;
    }
  },

};
</script>