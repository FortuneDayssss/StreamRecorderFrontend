<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="stream_video_id" label="stream_video_id" width="180"></el-table-column>
      <el-table-column prop="file_name" label="file_name" width="180"></el-table-column>
      <el-table-column prop="full_path" label="full_path" width="180"></el-table-column>
      <el-table-column prop="fs_exist" label="fs_exist" width="180"></el-table-column>
      <el-table-column prop="discard" label="discard" width="180"></el-table-column>
      <el-table-column prop="start_time" label="start_time"> </el-table-column>
      <el-table-column prop="operations" label="operations">
        <template slot-scope="scope">
　　　　　　<el-button type="text" @click="fix_track(scope.row.id)">转码</el-button>
　　　　 </template>
      </el-table-column>      
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
        .get(this.be_url + "/api/VideoChunk")
        .then(function (res) {
          for (var i = 0; i < res.data.length; i++) {
            self.tableData.push({
              id: res.data[i]['id'],
              stream_video_id: res.data[i]['stream_video_id'],
              file_name: res.data[i]['file_name'],
              full_path: res.data[i]['full_path'],
              fs_exist: res.data[i]['fs_exist'].toString(),
              discard: res.data[i]['discard'].toString(),
              start_time: res.data[i]['start_time'],
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
    fix_track (chunk_id) {
        let self = this;
        axios
        .get(this.be_url + "/addtask", {params: {
            'task_name': 'fix_track',
            'video_chunk_id': chunk_id
        }})
        .then(function (res) {
            self.$message({
            showClose: true,
            message: res.data,
          });
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