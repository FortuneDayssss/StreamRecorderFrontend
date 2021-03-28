<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="streamer_id" label="streamer_id" width="180"> </el-table-column>
      <el-table-column prop="start_time" label="start_time"> </el-table-column>
      <el-table-column prop="bilibili_status" label="bilibili_status"> </el-table-column>
      <el-table-column prop="onedrive_status" label="onedrive_status"> </el-table-column>
      <el-table-column prop="bilibili_url" label="bilibili_url"> </el-table-column>
      <el-table-column prop="Onedrive_url" label="Onedrive_url"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  mounted: function () {
    this.be_username = localStorage.getItem("be_username");
    this.be_password = localStorage.getItem("be_password");
    this.be_url = localStorage.getItem("be_url");
    this.getStreamVideoList();
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getStreamVideoList() {
      let self = this;
      axios
        .get(this.be_url + "/api/StreamVideo")
        .then(function (res) {
          for (var i = 0; i < res.data.length; i++) {
            self.tableData.push({
              id: res.data[i]['id'],
              streamer_id: res.data[i]['streamer_id'],
              start_time: res.data[i]['start_time'],
              bilibili_status: res.data[i]['bilibili_status'],
              onedrive_status: res.data[i]['onedrive_status'],
              bilibili_url: res.data[i]['bilibili_url'],
              onedrive_url: res.data[i]['onedrive_url'],
            });
          }
        })
        .catch(function (err) {
          self.$message({
            showClose: true,
            message: "连接失败,错误: " + err,
            type: "error",
          });
        });
    },
  },
};
</script>

<style>
</style>