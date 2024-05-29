<template>
  <view class="content">
    <div class="header">
      <img @click="goHome" src="../../../static/img/cummins.png">
      <span>
        <span style="cursor: pointer" @click="goProtal">经销商服务网</span>
        <span @click="showMessage = true" style="cursor: pointer">联系我们</span>
      </span>
    </div>
    <div class="info-box" style="height: 76vh;overflow-y: scroll;">
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
      <div style="padding: 0 200px">
        <h2 class="w-full fix-margin title-container">
          <p class="ml-3 font-bold title">适用于各种场景的动力系统</p>
          <span>从装载机到挖掘机和起重机，康明斯发动机几乎可以在所有可以想象到的应用场景中找到。</span>
        </h2>
        <div class="device">
          <div class="device-item" @click="goFilter">
            <img mode="widthFix" src="../../../static/img-web/device/device1.png" />
            <p>挖掘机</p>
          </div>
          <div class="device-item" @click="goFilter">
            <img mode="widthFix" src="../../../static/img-web/device/device2.png" />
            <p>压路机</p>
          </div>
          <div class="device-item" @click="goFilter">
            <img mode="widthFix" src="../../../static/img-web/device/device3.png" />
            <p>收割机</p>
          </div>
          <div class="device-item" @click="goFilter">
            <img mode="widthFix" src="../../../static/img-web/device/device4.png" />
            <p>喷雾机</p>
          </div>
          <div  @click="goFilter" class="more">查看应用场景 ></div>
        </div>

        <h2 class="w-full title-container mt-16">
          <p class="ml-3 font-bold title">热门产品</p>
        </h2>
        <div class="product">
          <div class="prod-item">
            <img mode="widthFix" src="../../../static/img-web/product.png" />
            <div class="prod-info">
              <div class="info">
                <div>B7 </div>
              </div>
              <div class="specs">
                <div>
                  <div class="specs-line1"><img src="../../../static/img/power.png">功率</div>
                  <div class="specs-line2">169<span>hp</span></div>
                  <div class="specs-line3">126<span>kw</span></div>
                </div>
                <div>
                  <div class="specs-line1"><img src="../../../static/img/torque.png">最大扭矩</div>
                  <div class="specs-line2">746<span>n·m</span></div>
                  <div class="specs-line3">1200<span>rpm</span></div>
                </div>
              </div>
              <div class="btn-des">
                <span>履带挖掘机</span>
              </div>
            </div>
            <div class="hover">
              <div @click="goDetail">查看详情</div>
            </div>
          </div>
          <div class="prod-item">
            <img mode="widthFix" src="../../../static/img-web/product.png" />
            <div class="prod-info">
              <div class="info">
                <div>B7 </div>
              </div>
              <div class="specs">
                <div>
                  <div class="specs-line1"><img src="../../../static/img/power.png">功率</div>
                  <div class="specs-line2">241<span>hp</span></div>
                  <div class="specs-line3">180<span>kw</span></div>
                </div>
                <div>
                  <div class="specs-line1"><img src="../../../static/img/torque.png">最大扭矩</div>
                  <div class="specs-line2">949<span>n·m</span></div>
                  <div class="specs-line3">1300<span>rpm</span></div>
                </div>
              </div>
              <div class="btn-des">
                <span>履带挖掘机</span>
              </div>
            </div>
            <div class="hover">
              <div @click="goDetail">查看详情</div>
            </div>
          </div>
          <div class="prod-item">
            <img mode="widthFix" src="../../../static/img-web/product.png" />
            <div class="prod-info">
              <div class="info">
                <div>L9 </div>
              </div>
              <div class="specs">
                <div>
                  <div class="specs-line1"><img src="../../../static/img/power.png">功率</div>
                  <div class="specs-line2">217<span>hp</span></div>
                  <div class="specs-line3">162<span>kw</span></div>
                </div>
                <div>
                  <div class="specs-line1"><img src="../../../static/img/torque.png">最大扭矩</div>
                  <div class="specs-line2">1187<span>n·m</span></div>
                  <div class="specs-line3">1100-1500<span>rpm</span></div>
                </div>
              </div>
              <div class="btn-des">
                <span>推土机</span>
              </div>
            </div>
            <div class="hover">
              <div @click="goDetail">查看详情</div>
            </div>
          </div>
          <div class="prod-item">
            <img mode="widthFix" src="../../../static/img-web/product.png" />
            <div class="prod-info">
              <div class="info">
                <div>L9 </div>
              </div>
              <div class="specs">
                <div>
                  <div class="specs-line1"><img src="../../../static/img/power.png">功率</div>
                  <div class="specs-line2">394<span>hp</span></div>
                  <div class="specs-line3">294<span>kw</span></div>
                </div>
                <div>
                  <div class="specs-line1"><img src="../../../static/img/torque.png">最大扭矩</div>
                  <div class="specs-line2">1800<span>n·m</span></div>
                  <div class="specs-line3">1200-1400<span>rpm</span></div>
                </div>
              </div>
              <div class="btn-des">
                <span>水平定向钻</span>
              </div>
            </div>
            <div class="hover">
              <div @click="goDetail">查看详情</div>
            </div>
          </div>
          <div class="footer">
            <div @click="goFilter" class="more">查看更多推荐 ></div>
          </div>
        </div>
      </div>

      <div v-show="showMessage" class="message">
        <div :class="showMessage?'active':''" class="info-part">
          <div class="info">
            <h3>留言咨询  <img @click="showMessage = false" style="float: right" src="../../../static/img/close.png"></h3>
            <h4>B7</h4>
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
            <div class="footer-btn fixed-circle" style="margin-top: 20px">
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
            <h3>电话咨询  <img @click="showCall = false" style="float: right" src="../../../static/img/close.png"></h3>
            <h4>B7</h4>
            <div class="des">126Kw/2000rpm</div>
            <div class="contact-list">
              <div class="contact">
                <div class="img-box">
                  <img src="../../../static/img-web/user.png">
                </div>
                <div class="contact-info">
                  <p>赵日天  18512312312</p>
                  <p>AE</p>
                </div>
                <div class="contact-btn">
                  <img @click="showMessage = true,showCall=false" src="../../../static/img-web/consultation-red.png">
                </div>
              </div>
              <div class="contact">
                <div class="img-box">
                  <img src="../../../static/img-web/user.png">
                </div>
                <div class="contact-info">
                  <p>赵日天  18512312312</p>
                  <p>AE</p>
                </div>
                <div class="contact-btn">
                  <img @click="showMessage = true,showCall=false" src="../../../static/img-web/consultation-red.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="showTips" class="message" @click="showTips=false">
        <div :class="showTips?'active':''" class="tips">
          <h3>提交成功</h3>
          <p>
            您的康明斯专属客户经理将会第一时间联系您！
          </p>
          <div>确定</div>
        </div>
      </div>
    </div>

    <div class="pos-footer-btn">
      <div class="btn-mid">
        <div @click="showMessage = true">
          <div>
            <img src="../../../static/img-web/consultation.png">
          </div>
          留言咨询
        </div>
      </div>
      <div class="btn-mid">
        <div @click="showCall = true">
          <div>
            <img src="../../../static/img-web/phone.png">
          </div>
          电话咨询
        </div>
      </div>
    </div>
  </view>
</template>

<script setup>
  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()

  let current = ref(0)
  let showMessage = ref(false)
  let showCall = ref(false)
  let showTips = ref(false)


  const info = ref([{
      url: '../../../static/img-web/swiper1.png',
      content: '传承经典，洞悉创编/打造面向燃油四阶段，全新系列发动机',
    },
    {
      url: '../../../static/img-web/swiper2.png',
      content: '凭借 100 多年的创新和为全球应用提供动力的经验，康明斯提供了运营商所期望的可靠性和耐用性'
    }])

  function goProtal(){
    window.location.href = ''
  }

  function goHome(){
    uni.reLaunch({
      url:'/pages/web/home/index'
    })
  }

  function goFilter(){
    uni.navigateTo({
      url:'/pages/web/product/index'
    })
  }

  function goDetail(){
    uni.navigateTo({
      url:'/pages/web/detail/index'
    })
  }

  function change(e){
    current.value = e.detail.current;
  }

  onMounted(() => {

  });

</script>


<style lang="scss" scoped>

::-webkit-scrollbar{
  width:10px;
  height:10px;
  /**/
}
::-webkit-scrollbar-track{
  background: rgb(239, 239, 239);
  border-radius:2px;
}
::-webkit-scrollbar-thumb{
  background: #bfbfbf;
  border-radius:10px;
}
::-webkit-scrollbar-thumb:hover{
  background: #333;
}
::-webkit-scrollbar-corner{
  background: #179a16;
}

.header {
  background: #000000;
  padding: 15px 0 8px 15px;
  img {
    cursor: pointer;
    width: 25px;
  }
  span {
    color: #ffffff;
    margin-left: 20px;
    height: 20px;
    line-height: 20px;
    position: relative;
    top: -3px;
  }
}
.content {
  .info-box {

  }
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
    .p {
      position: absolute;
      right: 10px;
      bottom: 10px;
      color: #ccc;
      width: 50%;
      font-size: 16px;
      text-align: right;
      padding-right: 20px;
    }
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
      cursor: pointer;
      image,img {
        margin-bottom: 10px;
        margin-top: 5px;
        border-radius: 8px;
        overflow: hidden;
        width: 90%;
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
          font-size: 16px;
          img {
            position: relative;
            top: 3px;
            margin-right: 5px;
            width: 20px;
          }
        }
        .specs-line2 {
          margin-top: 15px;
          font-size: 16px;
          color: #000;
          font-weight: 600;
          span {
            font-size: 18px;
          }
        }
        .specs-line3 {
          margin-top: 10px;
          color: #666666;
          font-size: 14px;
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
        font-size: 13px;
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

  .specification,.message {
    z-index:99;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    background: rgba(1, 12, 23, 0.57);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    overflow: hidden;
    .info-part {
      height: 700px;
      width: 800px;
      background: #ffffff;
      position: absolute;
      bottom: -100%;
      border-radius: 20px;
      h3 {
        text-align: center;
        font-size: 18px;
        margin-top: 20px;
        img {
          cursor: pointer;
        }
      }
      h4 {
        font-size: 15px;
        margin-top: 10px;
      }
      .specs.active {
        border: 1px solid red;
        background: rgba(218, 41, 28, 0.04);
        .active-corner {
          position: absolute;
          right: -17px;
          bottom: -16px;
          img {
            width: 20px;
          }
        }
      }
      .info {
        width: 95%;
        margin: 0 auto;
        .info-list {
          height: 550px;
          overflow-y: scroll;
        }
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
        bottom: 20%;
        opacity: 1;
      }
    }
    @keyframes hide{
      to {
        bottom: -80%;
        opacity: 0;
      }
    }
  }

  .message {
    .info-part {
      background: #ffffff;
      position: absolute;
      bottom: -80%;
      height: 600px;
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
            img {
              height: 40px;
              width: 40px;
            }
          }
          .contact-info {
            width: 30%;
            p {
              font-weight: 700;
            }
            p:last-child {
              font-size: 14px;
              margin-top: 5px;
              font-weight: 300;
            }
          }
          .contact-btn {
            width: 50%;
            text-align: right;
            img {
              width: 44px;
              height: 44px;
              margin-right: 20px;
              cursor: pointer;
            }
          }
        }
      }

      @keyframes show{
        to {
          bottom: 10%;
          opacity: 1;
        }
      }
      @keyframes hide{
        to {
          bottom: -80%;
          opacity: 0;
        }
      }
      .des {
        font-size: 13px;
        color: #999;
        margin-top: 5px;
      }

      .form {
        height: 370px;
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
      width: 500px;
      height: 200px;
      background: #ffffff;
      margin: 0 auto;
      border-radius: 10px;
      padding: 10px;
      position: relative;
      top: 20%;
      h3 {
        text-align: center;
        font-size: 18px;
        margin-top: 10px;
      }
      p {
        font-size: 15px;
        margin-top: 10px;
        padding: 10px;
      }
      div {
        width: 400px;
        margin: 0 auto;
        text-align: center;
        height: 45px;
        background: rgba(218, 41, 28, 1);
        color: #ffffff;
        line-height: 45px;
        border-radius: 3px;
        margin-top: 50px;
      }
    }
  }

  .pos-footer-btn {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 10px;
    padding-top: 10px;
    background: #000000;
    position: fixed;
    bottom: 0;
    width: 100%;
    .btn-mid {
      img,image {
        width: 21px;
        position: relative;
        top: 10px;
        cursor: pointer;
      }
      width: 49.5%;
      text-align: center;
      color: #ffffff;
      line-height: 35px;
      border-radius: 3px;
      font-size: 18px;
    }
    .btn-mid:last-child {
      border-left: 1px solid rgba(239, 239, 239, 0.38);
    }
    >div {
      cursor: pointer;
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
  .fixed-circle {
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
    .btn-large {
      border-radius: 20px;
      cursor: pointer;
    }
  }
}
</style>
