<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title ml-2">Cummins Products</text>
      <text class="title ml-2">{{ user.userInfo.userName}}</text>
    </view>

      <swiper class="swiper-box" @change="change">
        <swiper-item v-for="(item ,index) in info" :key="index">
          <view class="swiper-item">
            {{item.content}}
          </view>
        </swiper-item>
      </swiper>

  </view>
</template>

<script setup>
  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()
  const title = ref('test1111')
  let current = ref(0)


  const dotsStyles= ref({
    backgroundColor: 'rgba(255, 90, 95,0.3)',
    border: '1px rgba(0, 0, 0, .3) solid',
    color: '#fff',
    selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
    selectedBorder: '1px rgba(0, 0, 0, .9) solid'
  })
  const info = ref( [{
    colorClass: 'uni-bg-red',
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    content: '内容 A'
  },
    {
      colorClass: 'uni-bg-green',
      url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
      content: '内容 B'
    },
    {
      colorClass: 'uni-bg-blue',
      url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
      content: '内容 C'
    }
  ])

  function change(e){
    current.value = e.detail.current;
  }

  // 设置用户信息
  const data = { userName: 'test3' }
  user.setUserInfo(data)

</script>


<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;

    .title {
      font-size: 36rpx;
      color: #8f8f94;
    }
  }
}

.swiper-box {
  height: 200px;
  width: 100%;
}

.swiper-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #ccc;
}



</style>
