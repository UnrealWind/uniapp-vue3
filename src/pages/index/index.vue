<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title ml-2">{{ title }}</text>
      <text class="title ml-2">{{ user.userInfo.userName}}</text>
    </view>
    <div>
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
  </view>
</template>

<script setup>
  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()
  const title = ref('test1111')

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




</style>
