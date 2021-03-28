<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="streamer_name" label="streamer_name" width="180"> </el-table-column>
      <el-table-column prop="platform" label="platform"> </el-table-column>
      <el-table-column prop="room_id" label="room_id"> </el-table-column>
      <el-table-column prop="record_enabled" label="record_enabled"> </el-table-column>
      <el-table-column prop="record_running" label="record_running"> </el-table-column>
      <el-table-column prop="record_dir_path" label="record_dir_path"> </el-table-column>
      <el-table-column prop="record_chunk_size_limit" label="record_chunk_size_limit"> </el-table-column>
      <el-table-column prop="upload_bilibili_enabled" label="upload_bilibili_enabled"> </el-table-column>
      <el-table-column prop="upload_bilibili_video_name" label="upload_bilibili_video_name"> </el-table-column>
      <el-table-column prop="upload_bilibili_info" label="upload_bilibili_info"> </el-table-column>
      <el-table-column prop="upload_onedrive_enabled" label="upload_onedrive_enabled"> </el-table-column>
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
        .get(this.be_url + "/api/StreamerTask")
        .then(function (res) {
          for(var i = 0; i < res.data.length; i++){
            self.tableData.push({
              id: res.data[i]['id'],
              streamer_name: res.data[i]['streamer_name'],
              platform: res.data[i]['platform'],
              room_id: res.data[i]['room_id'],
              record_enabled: res.data[i]['record_enabled'].toString(),
              record_running: res.data[i]['record_running'].toString(),
              record_dir_path: res.data[i]['record_dir_path'],
              record_chunk_size_limit: res.data[i]['record_chunk_size_limit'],
              upload_bilibili_enabled: res.data[i]['upload_bilibili_enabled'].toString(),
              upload_bilibili_video_name: res.data[i]['upload_bilibili_video_name'],
              upload_bilibili_info: res.data[i]['upload_bilibili_info'],
              upload_onedrive_enabled: res.data[i]['upload_onedrive_enabled'].toString(),
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