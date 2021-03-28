<template>
  <div id="BackendConnectionPage">
    <h1>BackendConnection</h1>
    <el-input
      v-model="be_url"
      placeholder="url"
      @input="input_listener()"
    ></el-input>
    <el-input
      v-model="be_username"
      placeholder="username"
      @input="input_listener()"
    ></el-input>
    <el-input
      v-model="be_password"
      placeholder="password"
      show-password
      @input="input_listener()"
    ></el-input>
    <el-button @click="btn_connect()">连接</el-button>
    <el-button @click="btn_clear()">清空</el-button>
    <el-button @click="btn_test()">测试</el-button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  /**  mounted: function () {
    this.be_username = localStorage.getItem("be_username");
    this.be_password = localStorage.getItem("be_password");
    this.be_url = localStorage.getItem("be_url");
  },**/
  data() {
    return {
      be_url: localStorage.getItem("be_url"),
      be_username: localStorage.getItem("be_password"),
      be_password: localStorage.getItem("be_password"),
    };
  },
  methods: {
    btn_connect: function () {
      localStorage.setItem("be_username", this.be_username);
      localStorage.setItem("be_password", this.be_password);
      localStorage.setItem("be_url", this.be_url);
    },
    btn_clear: function () {
      this.be_username = "";
      this.be_password = "";
      this.be_url = "";
      localStorage.setItem("be_username", "");
      localStorage.setItem("be_password", "");
      localStorage.setItem("be_url", "");
    },
    btn_test: function () {
      var self = this;
      var api_url = this.be_url;
      if (!api_url.endsWith("/")) {
        api_url += "/";
      }
      api_url += "api/";
      console.log(api_url);
      axios
        .get(api_url, {
          params: {},
        })
        .then(function (res) {
          if (res.status == 200) {
            self.$message({
              showClose: true,
              message: "连接成功",
              type: "success",
            });
          } else {
            self.$message({
              showClose: true,
              message: "连接失败,代码: " + Response.status,
              type: "error",
            });
          }
          console.log(res.data);
        })
        .catch(function (error) {
          self.$message({
              showClose: true,
              message: "连接失败,错误: " + error,
              type: "error",
            });
        });
    },
    input_listener: function (value) {
      // do nothing
    },
  },
};
</script>

<style>
</style>