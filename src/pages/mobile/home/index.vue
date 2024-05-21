<template>
  <view class="content">
      <swiper class="swiper-box" autoplay="true" interval="3000" @change="change">
        <swiper-item v-for="(item ,index) in info" :key="index" @click="goFilter">
          <view class="swiper-item">
            <img class="w-full h-full" :src="item.url" />
          </view>
        </swiper-item>
      </swiper>
      <h2 class="w-full p-2 fix-margin title-container">
        <span class="ml-3 font-bold title">适用于各种场景的动力系统</span>
        <span class="more">更多应用场景 ></span>
      </h2>
      <div class="device">
        <img mode="widthFix" src="../../../static/img/jump1.png" />
        <img mode="widthFix" src="../../../static/img/jump2.png" />
        <img mode="widthFix" src="../../../static/img/jump3.png" />
        <img mode="widthFix" src="../../../static/img/jump4.png" />
      </div>
      <h2 class="w-full p-2 title-container">
        <span class="ml-3 font-bold title">推荐产品</span>
        <span class="more">更多产品 ></span>
      </h2>
      <div class="product">
        <div class="prod-item">
          <img mode="widthFix" src="../../../static/img/product.png" />
          <div class="prod-info">
            <div class="info">
              <div>L9 (STAGE V) </div>
              <div>2024</div>
            </div>
          </div>
        </div>
        <div class="prod-item">
          <img mode="widthFix" src="../../../static/img/product.png" />
          <div class="prod-info">
            <div class="info">
              <div>L9 (STAGE V) </div>
              <div>2024</div>
            </div>
          </div>
        </div>
        <div class="prod-item">
          <img mode="widthFix" src="../../../static/img/product.png" />
          <div class="prod-info">
            <div class="info">
              <div>L9 (STAGE V) </div>
              <div>2024</div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-btn">
        <div class="btn-large">帮我推荐</div>
        <div class="btn-mid">留言咨询</div>
        <div class="btn-mid">电话咨询</div>
      </div>
  </view>
</template>

<script setup scoped>
  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()

  let current = ref(0)

  const info = ref( [{
      url: '../../../static/img/swiper1.png',
      content: '内容 1'
    },
    {
      url: '../../../static/img/swiper2.png',
      content: '内容 2'
    }
  ])

  function goFilter(){
    uni.navigateTo({
      url:'pages/filter/index'
    })
  }

  function change(e){
    current.value = e.detail.current;
  }

  onMounted(() => {

  });

</script>


<style lang="scss">
.content {
  background: rgba(239, 239, 239, 0.6);

  .fix-margin {
    margin-top: 10px;
  }
  .swiper-box {
    height: 240px;
    width: 100%;
  }

  .swiper-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ccc;
    height: 100%;
  }

  .title-container {
    height: 20px;
    line-height: 20px;
  }
  .title {
    font-size: 0.9rem;
  }

  .more {
    float: right;
    margin-right: 25px;
    margin-top: 3px;
    color: #de1111;
    font-size: 0.8rem;
  }

  .device {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    image,img {
      width: 45%;
      margin-bottom: 10px;
      margin-top: 5px;
      border-radius: 8px;
      overflow: hidden;
    }
  }

  .product {
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    image,img {
      width: 100%;
    }
    .prod-item {
      width: 28%;
      position: relative;
      margin-left: 4%;
      background: #ffffff;
      height: 160px;
      border-radius: 5px;
      overflow: hidden;
    }
    .prod-info{
      width: 100%;
      height: 70%;
      position: absolute;
      bottom: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
      color: #ffffff;
      font-size: 13px;
      .info {
        position: absolute;
        bottom: 5px;
        width: 100%;
        text-align: center;
      }
    }
  }

  .footer-btn {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 20px;
    .btn-large{
      width: 93%;
      margin: 0 auto;
      text-align: center;
      height: 45px;
      background: rgba(218, 41, 28, 1);
      color: #ffffff;
      line-height: 45px;
      border-radius: 3px;
    }
    .btn-mid {
      margin-top: 10px;
      width: 43%;
      text-align: center;
      border: 1px solid rgba(218, 41, 28, 1);
      color: rgba(218, 41, 28, 1);
      line-height: 45px;
      height: 45px;
      border-radius: 3px;

    }
  }
}
</style>
