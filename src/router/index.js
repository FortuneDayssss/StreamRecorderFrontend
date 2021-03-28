import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import BackendConnection from '../pages/BackendConnection.vue'
import DBAccess from '../pages/DBAccess.vue'
import StreamerTaskList from '../pages/StreamerTaskList.vue'
import StreamVideoList from '../pages/StreamVideoList.vue'
import VideoChunkList from '../pages/VideoChunkList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          name: "BackendConnection",
          path: "BackendConnection",
          component: BackendConnection
        },
        {
          name: "DBAccess",
          path: "DBAccess",
          component: DBAccess
        },
        {
          name: "StreamerTaskList",
          path: "StreamerTaskList",
          component: StreamerTaskList
        },
        {
          name: "StreamVideoList",
          path: "StreamVideoList",
          component: StreamVideoList
        },
        {
          name: "VideoChunkList",
          path: "VideoChunkList",
          component: VideoChunkList
        },
      ]
    },
  ]
})
