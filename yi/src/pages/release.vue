<template>
  <div>
    <div class="ydc-release-content">
      <Release :tabs="tabs">
        <template slot="amount">
          <div class="ydc-release-amount">
            <span>
              今日发布数量：
              <em>0</em>
              /6
              <a href="standard.html" target="_blank">发文规范</a>
            </span>
          </div>
        </template>

        <template slot="tab1">
          <form :action="server+'/api/publish'" ref="tab1" method="post" enctype="multipart/form-data">
            <input type="hidden" name="token" :value="token">
            <div class="ydc-release-form-group">
              <div class="ydc-warning-default">
                <p>标题字数需在11字到30字之间。</p>
              </div>
              <div class="ydc-release-form-group-input">
                <input
                  type="text"
                  class="ydc-form-control"
                  name="title"
                  placeholder="请输入标题，为了更好的展示效果，建议标题字数在30个汉字以内"
                />
                <div class="ydc-form-group-jl">
                  <span id="messageCount">0</span>
                  /30
                </div>
              </div>
            </div>
            <div class="ydc-release-form-text">
              <textarea name="content" style="width: 100%;">
                请输入内容
						  </textarea>
            </div>
            <div class="ydc-form-city">
              <div class="aui-card-form-i tem">
                <label class="aui-card-form-label">分类:</label>
                <div class="aui-card-form-input">
  
                  <select name="catalogs" v-for="(catalog,index) in catalogs" :key="index" ref="catalog" @change="catalog_change(index)">
                    <option>==请选择==</option>
                    <option v-for="(item,index) in catalog" :key="index" :value="item.ID">{{item.title}}</option>
                  </select>

                </div>
              </div>
              <div class="aui-card-form-item preview aui-news">
                <label class="aui-card-form-label">封面:</label>
                <div class="aui-file-up-img" id="preview_0">
                  <img class id="imghead_0" border="0" src="../assets/images/icon/noimg.gif" />
                </div>
                <div class="aui-file-up-btn clearfix">
                  <div class="idPicFile aui-btn aui-file-new">
                    <input
                      type="file"
                      name="cover"
                      class="file_photo aui-file-new-up"
                      style="margin:0;"
                    />
                    <a>上传图片</a>
                  </div>
                  <div class="aui-remarks">
                    <p>图片尺寸建议：800*400 图片大小不超过1MB</p>
                  </div>
                </div>
              </div>
              <div class="ydc-btn">
                <button type="button" class="btn" @click="tab1()">发布</button>
                <button type="button" class="btn btn-default">保存草稿</button>
              </div>
            </div>
          </form>
        </template>
 

        <template slot="tab2">
          <div class="ydc-release-form-group">
            <div class="ydc-warning-default">
              <p>标题字数需在11字到30字之间。</p>
            </div>
            <div class="ydc-release-form-group-input clearfix">
              <label class="ydc-form-group-label">标题</label>
              <input
                style="width:89.999%"
                type="text"
                class="ydc-form-control"
                title
                placeholder="请输入标题，为了更好的展示效果，建议标题字数在30个汉字以内"
                onkeyup="textLimitCheck(this, 30);"
              />
              <div class="ydc-form-group-jl">
                <span id="messageCount1">0</span>/30
              </div>
            </div>
            <div class="ydc-release-form-group-input ydc-release-form-group-ms clearfix">
              <label class="ydc-form-group-label">描述</label>
              <input
                style="width:89.999%"
                type="text"
                class="ydc-form-control"
                title
                placeholder="请输入描述，统一描述"
                onkeyup
              />
              <div class="ydc-form-group-jl">
                <span id>0</span>/30
              </div>
            </div>
            <div class="aui-card-form-item preview aui-news" style="margin-top:20px;">
              <label class="aui-card-form-label">封面:</label>
              <div class="aui-file-up-img" id="preview_0">
                <img class id="imghead_0" border="0" src="../assets/images/icon/noimg.gif" />
              </div>
              <div class="aui-file-up-btn clearfix">
                <div class="idPicFile aui-btn aui-file-new">
                  <input
                    type="file"
                    name="file"
                    id="1"
                    class="file_photo aui-file-new-up"
                    style="margin:0;"
                  />
                  <a>上传图片</a>
                </div>
                <div class="aui-remarks">
                  <p>图片尺寸建议：800*400 图片大小不超过1MB</p>
                </div>
              </div>
            </div>
            <div class="ydc-btn" style="margin-top:20px;">
              <button class="btn">发布</button>
              <button class="btn btn-default">保存草稿</button>
            </div>
          </div>
        </template>
      </Release>
    </div>
  </div>
</template>


<script>
import Release from "@/components/tabrelease";
import {server} from '@/config'
import {fetch_form} from '@/lib/fetch'

export default {
  name: "release",
  data() {
    return {
      server,
      token:localStorage.token,
      tabs: [
        { title: "文章发布", soltname: "tab1" },
        { title: "图集发布", soltname: "tab2" }
      ],
      catalogs:[]
    };
  },
  async created() {
    let res = await fetch(server+'/api/catalog/0');
    let catalogs = await res.json();

    this.catalogs=[catalogs];
  },
  methods: {
    async catalog_change(index){
      let parentID = this.$refs['catalog'][index].value; 
      this.catalogs = this.catalogs.slice(0, index+1);
      console.log(this.catalogs);

      let res=await fetch(server+'/api/catalog/'+parentID);
      let result=await res.json();

      if(result.length>0){
        this.catalogs.push(result);
      }
    },

    async tab1(){
      let json = await fetch_form(this.$refs['tab1'])

      alert(json.msg);
    },

  },
  components: { Release }
};
</script>


<style lang='css' scoped>
</style>