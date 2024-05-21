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
          <img mode="widthFix" src="../../../static/img-web/product.png" />
          <div class="prod-info">
            <div class="info">
              <div>X15 </div>
            </div>
            <div class="specs">
              <div>
                <div class="specs-line1"><img src="../../../static/img/power.png">功率</div>
                <div class="specs-line2">321<span>hp</span></div>
                <div class="specs-line3">250<span>kw</span></div>
              </div>
              <div>
                <div class="specs-line1"><img src="../../../static/img/torque.png">最大扭矩</div>
                <div class="specs-line2">1400<span>n·m</span></div>
                <div class="specs-line3">1400-1500<span>rpm</span></div>
              </div>
            </div>
            <div class="btn-des">
              <span>履带挖掘机</span>
              <span>旋挖钻机</span>
              <span>采棉机</span>
            </div>
          </div>
        </div>
        <div class="prod-item">
          <img mode="widthFix" src="../../../static/img-web/product.png" />
          <div class="prod-info">
            <div class="info">
              <div>X15 </div>
            </div>
            <div class="specs">
              <div>
                <div class="specs-line1"><img src="../../../static/img/power.png">功率</div>
                <div class="specs-line2">321<span>hp</span></div>
                <div class="specs-line3">250<span>kw</span></div>
              </div>
              <div>
                <div class="specs-line1"><img src="../../../static/img/torque.png">最大扭矩</div>
                <div class="specs-line2">1400<span>n·m</span></div>
                <div class="specs-line3">1400-1500<span>rpm</span></div>
              </div>
            </div>
            <div class="btn-des">
              <span>履带挖掘机</span>
              <span>旋挖钻机</span>
              <span>采棉机</span>
            </div>
          </div>
        </div>
        <div class="prod-item">
          <img mode="widthFix" src="../../../static/img-web/product.png" />
          <div class="prod-info">
            <div class="info">
              <div>X15 </div>
            </div>
            <div class="specs">
              <div>
                <div class="specs-line1"><img src="../../../static/img/power.png">功率</div>
                <div class="specs-line2">321<span>hp</span></div>
                <div class="specs-line3">250<span>kw</span></div>
              </div>
              <div>
                <div class="specs-line1"><img src="../../../static/img/torque.png">最大扭矩</div>
                <div class="specs-line2">1400<span>n·m</span></div>
                <div class="specs-line3">1400-1500<span>rpm</span></div>
              </div>
            </div>
            <div class="btn-des">
              <span>履带挖掘机</span>
              <span>旋挖钻机</span>
              <span>采棉机</span>
            </div>
          </div>
        </div>
        <div class="prod-item">
          <img mode="widthFix" src="../../../static/img-web/product.png" />
          <div class="prod-info">
            <div class="info">
              <div>X15 </div>
            </div>
            <div class="specs">
              <div>
                <div class="specs-line1"><img src="../../../static/img/power.png">功率</div>
                <div class="specs-line2">321<span>hp</span></div>
                <div class="specs-line3">250<span>kw</span></div>
              </div>
              <div>
                <div class="specs-line1"><img src="../../../static/img/torque.png">最大扭矩</div>
                <div class="specs-line2">1400<span>n·m</span></div>
                <div class="specs-line3">1400-1500<span>rpm</span></div>
              </div>
            </div>
            <div class="btn-des">
              <span>履带挖掘机</span>
              <span>旋挖钻机</span>
              <span>采棉机</span>
            </div>
          </div>
          <div class="hover">
            <div>查看详情</div>
          </div>
        </div>
        <div class="footer">
          <div class="more">查看更多推荐 ></div>
        </div>

      </div>

      <div class="footer-btn">
        <div class="btn-mid">
          <div><img src="../../../static/img/consultation.png"></div>
          留言咨询</div>
        <div class="btn-mid">
          <div><img src="../../../static/img/phone.png"></div>
          电话咨询</div>
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
      url:'/pages/web/product/index'
    })
  }

  function change(e){
    current.value = e.detail.current;
  }

  onMounted(() => {

  });

</script>


<style lang="scss" scoped>
uni-page-head {
  display: none !important;
}
.content {
  background: #ffffff;

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
    font-size: 17px;
    padding: 8px 36px;
    width: 150px;
    text-align: center;
    margin: 20px auto 0;
    font-weight: 700;
    cursor: pointer;
  }

  .product {
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    margin-top: 10px;
    position: relative;
    .footer {
      width: 100%;
      margin-top: 20px;
      margin-bottom: 50px;
    }
    .prod-item {
      width: 21%;
      position: relative;
      background: #ffffff;
      border-radius: 5px;
      overflow: hidden;
      margin-top: 20px;
      text-align: center;
      margin-left: 3%;
      >img,.image {
        width: 90%;
      }
    }
    .prod-info{
      text-align: left;
      width: 100%;
      height: 70%;
      margin: 0 auto;
      font-size: 13px;
      background: #efefef;
      .info {
        width: 100%;
        font-size: 22px;
        padding: 20px 20px;
        font-weight: 700;
      }
      .specs {
        display: flex;
        flex-direction: row;
        justify-content: left;
        flex-wrap: wrap;
        color: #333;
        font-size: 20px;
        background: rgba(245, 245, 245, 1);
        border-radius: 4px;
        overflow: hidden;
        width: 85%;
        margin: 0 auto;
        background: #ffffff;
        padding: 15px;
        >div{
          width: 35%;
          border-left: 1px solid rgba(204, 204, 204, 0.63);
          padding-left: 5px;
        }
        >div:first-child {
          border: 0;
        }
        >div:last-child {
          width:50%;
          padding-left: 15px;
        }
        .specs-line1 {
          margin-top: 3px;
          font-size: 18px;
          img {
            position: relative;
            top: 3px;
            margin-right: 5px;
            width: 20px;
          }
        }
        .specs-line2 {
          margin-top: 15px;
          font-size: 18px;
          color: #000;
          font-weight: 600;
          span {
            font-size: 18px;
          }
        }
        .specs-line3 {
          margin-top: 10px;
          color: #666666;
          font-size: 16px;
        }
      }
    }
    .btn-des {
      padding: 15px 3px;
      span {
        border: 1px solid rgba(218, 41, 28, 1);
        border-radius: 3px;
        padding: 3px 8px;
        color: rgba(218, 41, 28, 1);
        display: inline-block;
        margin-left: 10px;
        font-size: 15px;
      }
    }
    .hover {
      background: rgba(0,0,0,0);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 98;
      div {
        background: rgba(0,0,0,0);
        color:  rgba(0,0,0,0);
        padding: 10px;
        width: 90%;
        margin:0 auto;
        position: relative;
        top: 45%;
      }
    }
    .hover:hover {
      background: rgba(0,0,0,0.5);
      div {
        background: #333;
        color: #ffffff;
        padding: 10px;
        width: 90%;
        margin:0 auto;
        position: relative;
        top: 45%;
        cursor: pointer;
        border-radius: 4px;
      }
    }
  }

  .footer-btn {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 30px;
    padding-top: 20px;
    background: #000000;
    .btn-mid {
      img,image {
        width: 30px;
        position: relative;
        top: 10px;
      }
      margin-top: 10px;
      width: 49.5%;
      text-align: center;
      color: #ffffff;
      line-height: 45px;
      border-radius: 3px;
      font-size: 20px;
    }
    .btn-mid:last-child {
      border-left: 1px solid rgba(239, 239, 239, 0.38);
    }
    >div {
      cursor: pointer;
    }
  }
}
</style>
