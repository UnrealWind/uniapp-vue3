<template>
  <view class="content">
      <swiper class="swiper-box" autoplay="true" interval="3000" @change="change">
        <swiper-item  @click="goFilter">
          <view class="swiper-item">
            <img class="w-full h-full" :src="info[0].url" />
            <p>{{info[0].content}}</p>
          </view>
        </swiper-item>
        <swiper-item  @click="goFilter">
          <view class="swiper-item">
            <img class="w-full h-full" :src="info[1].url" />
            <p style="color: #c9c9c9">{{info[1].content}}</p>
          </view>
        </swiper-item>
      </swiper>
      <h2 class="w-full p-2 fix-margin title-container">
        <span class="ml-3 font-bold title">适用于各种场景的动力系统</span>
        <span @click="goFilter()" class="more">更多应用场景 ></span>
      </h2>
      <div class="device">
        <div>
          <img @click="goFilter('ldswj')" mode="widthFix" src="../../../static/img/jump2.png" />
          <p>履带式挖机</p>
        </div>
        <div>
          <img @click="goFilter('ttj')" mode="widthFix" src="../../../static/img/jump1.png" />
          <p>推土机</p>
        </div>
        <div>
          <img @click="goFilter('ldqzj')" mode="widthFix" src="../../../static/img/jump4.png" />
          <p>履带起重机</p>
        </div>
        <div>
          <img @click="goFilter('tpj')" mode="widthFix" src="../../../static/img/jump3.png" />
          <p>摊铺机</p>
        </div>
      </div>
      <h2 class="w-full p-2 title-container">
        <span class="ml-3 font-bold title">推荐产品</span>
        <span @click="goFilter()" class="more">更多产品 ></span>
      </h2>
      <div class="product">
        <div @click="goDetail" class="prod-item">
          <img mode="widthFix" src="../../../static/img/B7-icon.png" />
          <div class="prod-info">
            <div class="info">
              <div>B7 (169hp) </div>
              <div>126kw</div>
            </div>
          </div>
        </div>
        <div @click="goDetail" class="prod-item">
          <img mode="widthFix" src="../../../static/img/B7-icon.png" />
          <div class="prod-info">
            <div class="info">
              <div>B7 (241hp) </div>
              <div>180kw</div>
            </div>
          </div>
        </div>
        <div @click="goDetail" class="prod-item">
          <img mode="widthFix" src="../../../static/img/L9-icon.png" />
          <div class="prod-info">
            <div class="info">
              <div>L9 (217hp) </div>
              <div>162kw</div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-btn">
        <div @click="goFilter()" class="btn-large">帮我推荐</div>
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
      url: '../../../static/img/swiper1.png',
      content: '传承经典，洞悉创编/打造面向燃油四阶段，全新系列发动机',
    },
    {
      url: '../../../static/img/swiper2.png',
      content: '凭借 100 多年的创新和为全球应用提供动力的经验，康明斯提供了运营商所期望的可靠性和耐用性'
    }
  ])

  function goFilter(){
    uni.navigateTo({
      url:'/pages/mobile/filter-h5/index'
    })
  }

  function goDetail(){
    uni.navigateTo({
      url:'/pages/mobile/detail/index'
    })
  }

  function change(e){
    current.value = e.detail.current;
  }

  onMounted(() => {

  });

</script>


<style lang="scss" scoped>
.content {
  background: #ffffff;

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
    position: relative;
    p {
      position: absolute;
      right: 10px;
      bottom: 10px;
      color: #666;
      width: 50%;
      font-size: 12px;
    }
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
    >div {
      width: 45%;
      position: relative;
      p {
        position: absolute;
        top: 15px;
        left: 10px;
        font-size: 15px;
        font-weight: 600;
      }
    }
    image,img {
      width: 100%;
      margin-bottom: 10px;
      margin-top: 5px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: -3px -3px 8px #eee;
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
      height: 145px;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: -3px -3px 8px #eee;
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
