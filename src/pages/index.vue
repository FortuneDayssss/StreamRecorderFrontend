<template>
  <el-container>
    <el-header>
      <h1 class="page-title">Stream Recorder Frontend</h1>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="this.$route.path" router>
          <el-menu-item
            index="/index/BackendConnection"
            @click="mainNavi('/BackendConnection')"
            >BackendConnection</el-menu-item
          >
          <el-menu-item>Dashboard</el-menu-item>
          <el-menu-item index="/index/DBAccess" @click="mainNavi('/DBAccess')"
            >DB Access</el-menu-item
          >
          <el-menu-item>Operation</el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Database</span>
            </template>

            <el-menu-item
              index="/index/StreamerTaskList"
              @click="mainNavi('/StreamerTaskList')"
              >StreamerTask</el-menu-item
            >
            <el-menu-item
              index="/index/StreamVideoList"
              @click="mainNavi('/StreamVideoList')"
              >StreamVideo</el-menu-item
            >
            <el-menu-item
              index="/index/VideoChunkList"
              @click="mainNavi('/VideoChunkList')"
              >VideoChunk</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    mainNavi(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style scoped>
/* .el-header,
.el-footer {
  height: 80px;
  background-color: #fff;
  color: #333;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: 60px;
  position: relative;
}

.el-aside {
  height: 100%;
  background-color: #5b9be4;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  height: 100%;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
} */
</style>