<template>
  <view class="content">
    <swiper class="swiper-box" autoplay="true" interval="3000" @change="change">
      <swiper-item  @click="goFilter">
        <view class="swiper-item">
          <img class="w-full h-full" :src="info[0].url" />
          <p class="p">{{info[0].content}}</p>
        </view>
      </swiper-item>
      <swiper-item  @click="goFilter">
        <view class="swiper-item">
          <img class="w-full h-full" :src="info[1].url" />
          <p class="p" style="color: #c9c9c9">{{info[1].content}}</p>
        </view>
      </swiper-item>
    </swiper>
    <h2 class="p-2 fix-margin title-container">
      <span class="ml-3 font-bold title">适用于各种场景的动力系统</span>
      <span @click="goFilter()" class="more">更多应用场景 ></span>
    </h2>
    <div class="device">
      <div class="device-item">
        <img @click="goFilter('ldswj')" mode="widthFix" src="../../../static/img/jump2.png" />
        <p class="p">履带式挖机</p>
      </div>
      <div class="device-item">
        <img @click="goFilter('ttj')" mode="widthFix" src="../../../static/img/jump1.png" />
        <p class="p">推土机</p>
      </div>
      <div class="device-item">
        <img @click="goFilter('ldqzj')" mode="widthFix" src="../../../static/img/jump4.png" />
        <p class="p">履带起重机</p>
      </div>
      <div class="device-item">
        <img @click="goFilter('tpj')" mode="widthFix" src="../../../static/img/jump3.png" />
        <p class="p">摊铺机</p>
      </div>
    </div>
    <h2 class="p-2 title-container">
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
      <div @click="showMessage=true" class="btn-mid">留言咨询</div>
      <div @click="showCall=true" class="btn-mid">电话咨询</div>
    </div>

    <div v-show="showMessage" class="message">
      <div :class="showMessage?'active':''" class="info-part">
        <div class="info">
          <h3  class="h3">留言咨询 <img class="img" @click="showMessage = false" style="float: right" src="../../../static/img/close.png"></h3>
          <h4 class="h4">B7</h4>
          <div class="des">126Kw/2000rpm</div>
          <div class="form">
            <div class="form-item">
              <div class="label"><span class="text-red-500">*</span> 姓名</div>
              <input class="uni-input input-item" placeholder="请输入您的姓名" />
            </div>
            <div class="form-item">
              <div class="label"><span class="text-red-500">*</span> 手机号码</div>
              <input class="uni-input input-item" placeholder="请留下您的手机号码" />
            </div>
            <div class="form-item">
              <div class="label"> 所在地区</div>
              <input class="uni-input input-item" placeholder="请留下您的所在地区" />
            </div>
            <div class="form-item">
              <div class="label"> 使用场景</div>
              <input class="uni-input input-item" placeholder="请留下您的使用场景" />
            </div>
            <div class="form-item">
              <div class="label"><span class="text-red-500">*</span> 留言</div>
              <textarea class="input-item text-area"  auto-height placeholder="请输入留言..." maxlength="-1" />
            </div>
          </div>
          <div class="model-footer-btn fixed">
            <checkbox-group class="checkPrivacy-box">
              <label>
                <checkbox class="check-box" value="checkPrivacy" color="#FFCC33" style="transform:scale(0.7)"/>同意为您提供产品咨询服务
              </label>
            </checkbox-group>
            <div @click="showMessage= false,showTips=true"  class="btn-large">提交</div>
            <div class="privacy">Cummins将严格遵循<span>《隐私政策》</span>保证您的信息安全</div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="showCall" class="message">
      <div :class="showCall?'active':''" class="info-part">
        <div class="info">
          <h3  class="h3">电话咨询 <img class="img" @click="showCall = false" style="float: right" src="../../../static/img/close.png"></h3>
          <h4 class="h4">B7 </h4>
          <div class="des">126Kw/2000rpm</div>
          <div class="contact-list">
            <div class="contact">
              <div class="img-box">
                <img class="img" src="../../../static/img/user.png">
              </div>
              <div class="contact-info">
                <p class="p">赵日天</p>
                <p class="p">AE</p>
              </div>
              <div class="contact-btn">
                <img class="img" @click="showMessage = true,showCall=false" src="../../../static/img/consultation-red.png">
                <img class="img" style="margin-right: 0" @click="makePhoneCall" src="../../../static/img/phone-red.png">
              </div>
            </div>
            <div class="contact">
              <div class="img-box">
                <img class="img" src="../../../static/img/user.png">
              </div>
              <div class="contact-info">
                <p class="p">赵日天</p>
                <p class="p">AE</p>
              </div>
              <div class="contact-btn">
                <img class="img" @click="showMessage = true,showCall=false" src="../../../static/img/consultation-red.png">
                <img class="img" style="margin-right: 0" @click="makePhoneCall" src="../../../static/img/phone-red.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="showTips" class="message" @click="showTips=false">
      <div :class="showTips?'active':''" class="tips">
        <h3  class="h3">提交成功</h3>
        <p class="p">
          您的康明斯专属客户经理将会第一时间联系您！
        </p>
        <div class="div">确定</div>
      </div>
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
  uni.getSystemInfo({
    success:(res)=>{
      console.log(res,11111111111111)
      if(res.uniPlatform == 'mp-weixin'){
        uni.navigateTo({
          url:'/pages/mobile/filter-mp/index'
        })
        // do wx
      }else if(res.uniPlatform == 'web'){
        uni.navigateTo({
          url:'/pages/mobile/filter-h5/index'
        })
        // do web
      }
    }
  })
}

let showMessage = ref(false)
let showCall = ref(false)
let showTips = ref(false  )

function makePhoneCall(){
  uni.makePhoneCall({phoneNumber:'12312312312'})
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
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
  .fix-margin {
    margin-top: 10px;
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
    color: #ccc;
    height: 100%;
    position: relative;
    .p {
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
    .device-item {
      width: 45%;
      position: relative;
      .p {
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

  .specification,.message {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    background: rgba(1, 12, 23, 0.57);
    .info-part {
      height: 100%;
      width: 100%;
      background: #ffffff;
      position: absolute;
      bottom: -100%;

      border-radius: 20px 20px 0 0;
      overflow: hidden;
      .h3 {
        text-align: center;
        font-size: 15px;
        margin-top: 20px;
        .img {
          width: 20px !important;
          height: 20px !important;
        }
      }
      .h4 {
        font-size: 13px;
        margin-top: 10px;
      }
      .specs.active {
        border: 1px solid red;
        position: relative;
        background: rgba(218, 41, 28, 0.04);
        .active-corner {
          position: absolute;
          right: -1px;
          bottom: -3px;
          .img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .info {
        width: 92%;
        margin: 0 auto;
        height: 100%;
        overflow-y: scroll;
      }
    }
    .active {
      animation:show .5s forwards;
    }
    .hide {
      animation:hide .5s forwards;
    }
    @keyframes show{
      to {
        bottom: 0;
        opacity: 1;
      }
    }
    @keyframes hide{
      to {
        bottom: -100%;
        opacity: 0;
      }
    }
  }

  .message {
    .info-part {
      height: 100%;
      width: 100%;
      background: #ffffff;
      position: absolute;
      bottom: -100%;
      .active {
        animation:show .5s forwards;
      }
      .contact-list {
        .contact {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-around;
          height: 45px;
          border-radius: 8px;
          background: rgba(248, 248, 248, 1);
          padding: 15px;
          margin-top: 10px;
          .img-box {
            width: 20%;
            .img {
              height: 40px;
              width: 40px;
            }
          }
          .contact-info {
            width: 30%;
          }
          .contact-btn {
            width: 50%;
            text-align: right;
            .img {
              width: 44px;
              height: 44px;
              margin-right: 20px;
            }
          }
        }
      }

      @keyframes show{
        to {
          bottom: 0;
          opacity: 1;
        }
      }
      @keyframes hide{
        to {
          bottom: -100%;
          opacity: 0;
        }
      }
      .des {
        font-size: 13px;
        color: #999;
        margin-top: 5px;
      }

      .form {
        height: 65vh;
        overflow-y: scroll;
        .form-item {
          .label {
            margin-top: 15px;
          }
          .input-item {
            width: 90%;
            margin-top: 10px;
            background: rgba(239, 239, 239, 0.47);
            padding: 10px;
            border-radius: 3px;
          }
          .text-area {
            width: 90%;
          }
        }
      }
    }
    .tips {
      width: 80%;
      height: 150px;
      background: #ffffff;
      margin: 0 auto;
      border-radius: 10px;
      padding: 10px;
      position: relative;
      top: 30%;
      .h3 {
        text-align: center;
        font-size: 15px;
      }
      .p {
        font-size: 15px;
        margin-top: 10px;
        padding: 10px;
      }
      .div {
        width: 50%;
        margin: 0 auto;
        text-align: center;
        height: 45px;
        background: rgba(218, 41, 28, 1);
        color: #ffffff;
        line-height: 45px;
        border-radius: 3px;
      }
    }
  }

  .footer-btn.fixed {
    position: fixed;
    bottom: 10px;
    width: 90%;
  }

  .model-footer-btn {
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
      color: #fff;
      line-height: 40px;
      height: 40px;
      border-radius: 3px;
      background: rgba(218, 41, 28, 1);
      img {
        position: relative;
        top: 6px;
        margin-right: 5px;
      }
    }
    .privacy {
      margin-top: 10px;
      font-size: 12px;
      color: #999999;
      span {
        color: #59a0ff;
      }
    }
    .checkPrivacy-box {
      text-align: left;
      width: 90%;
      font-size: 13px;
      margin-bottom: 5px;
      .check-box {
        position: relative;
        top: -1px;
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
      background: #ffffff;
    }
  }
}
</style>
