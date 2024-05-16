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
        <p class="ml-3 font-bold title">适用于各种场景的动力系统</p>
        <span>从装载机到挖掘机和起重机，康明斯发动机几乎可以在所有可以想象到的应用场景中找到。</span>
      </h2>
      <div class="device">
        <div class="device-item">
          <img mode="widthFix" src="../../../static/img-web/device/device.png" />
          <p>挖掘机</p>
        </div>
        <div class="device-item">
          <img mode="widthFix" src="../../../static/img-web/device/device.png" />
          <p>挖掘机</p>
        </div>
        <div class="device-item">
          <img mode="widthFix" src="../../../static/img-web/device/device.png" />
          <p>挖掘机</p>
        </div>
        <div class="device-item">
          <img mode="widthFix" src="../../../static/img-web/device/device.png" />
          <p>挖掘机</p>
        </div>
        <div class="more">查看应用场景 ></div>
      </div>

      <h2 class="w-full p-2 title-container mt-16">
        <p class="ml-3 font-bold title">热门产品</p>
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

        <div class="more">查看更多推荐 ></div>

      </div>

      <div class="footer-btn">
        <div class="btn-large">帮我推荐</div>
        <div class="btn-mid">留言咨询</div>
        <div class="btn-mid">电话咨询</div>
      </div>
  </view>
</template>

<script setup>
  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()

  let current = ref(0)

  const info = ref( [{
      url: '../../../static/img-web/swiper1.png',
      content: '内容 1'
    },
    {
      url: '../../../static/img-web/swiper2.png',
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
uni-page-head {
  display: none;
}
.content {
  background: rgba(239, 239, 239, 0.6);

  .fix-margin {
    margin-top: 30px;
  }
  .swiper-box {
    height: 450px;
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
    text-align: center;
    span {
      font-size: 15px;
      color: #666;
      font-weight: 300;
      position: relative;
      top: 20px;
    }
  }
  .title {
    font-size: 30px;
  }

  .device {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 50px;
    .device-item {
      width: 25%;
      text-align: center;
      image,img {
        margin-bottom: 10px;
        margin-top: 5px;
        border-radius: 8px;
        overflow: hidden;
      }
      p {
        text-align: center;
        font-size: 23px;
        position: relative;
        top: -20px;
      }
    }
  }

  .more {
    border: 1px solid #de1111;
    border-radius: 3px;
    color: #de1111;
    font-size: 15px;
    padding: 6px 36px;
    margin-top: 20px;
  }

  .product {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10px;
    image,img {
      width: 100%;
    }
    .prod-item {
      width: 23%;
      position: relative;
      background: #ffffff;
      height: 160px;
      border-radius: 5px;
      overflow: hidden;
      margin-top: 20px;
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
