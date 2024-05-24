<template>
  <view class="content">
    <div  style="height: 85vh;overflow-y: scroll" >
      <swiper class="swiper-box" autoplay="true" interval="3000" @change="change">
        <swiper-item v-for="(item ,index) in info" :key="index" @click="goFilter">
          <view class="swiper-item">
            <img class="w-full h-full" :src="item.url" />
          </view>
        </swiper-item>
      </swiper>

      <div class="detail-info">
        <h2>x15 ( 2024 )</h2>
        <h3>
          <span>规格</span>
          <span @click="showSpecification = true" class="right-fix text-red-500">选择规格 (共六款) > </span>
        </h3>
        <div class="specs">
          <div >
            <div class="specs-line1"><img src="../../../static/img/power.png">额定功率</div>
            <div class="specs-line2">321<span>hp</span></div>
            <div class="specs-line3">250<span>kw</span></div>
          </div>
          <div>
            <div class="specs-line1"><img src="../../../static/img/torque.png">扭矩</div>
            <div class="specs-line2">1400<span>n·m</span></div>
            <div class="specs-line3">1400-1500<span>rpm</span></div>
          </div>
          <div>
            <div class="specs-line1"><img src="../../../static/img/rotate.png">额定转速</div>
            <div class="specs-line2">2100<span>rpm</span></div>
          </div>
        </div>
        <div class="detail-para">
          <h3>详细参数</h3>
          <div><img src="../../../static/img/size.png">尺寸（长*宽*高 mm）<span>1295*992*1000</span></div>
          <div><img src="../../../static/img/weight.png">重量<span>900kg</span></div>
          <div><img src="../../../static/img/way.png">技术路线<span>DOC+DPF+SCR</span></div>
        </div>
        <div class="scenario">
          <h3>适用应用场景</h3>
          <div><i>履带挖掘机</i><span >45-49T</span><span class="text-gray-500">标准吨位：</span></div>
          <div><i>旋挖钻机</i><span>360R</span><span class="text-gray-500">标称转矩：</span></div>
          <div><i>采棉机</i><span>6</span><span class="text-gray-500">作业行数（行箱式）：</span></div>
        </div>
        <div class="tec">
          <h3>技术特点</h3>
          <rich-text style="position:relative;top: 10px;" :nodes="richText"></rich-text>
        </div>
      </div>
    </div>
    <div class="footer-btn fixed" style="width: 100%;">
      <div @click="showMessage=true" class="btn-mid"><img src="../../../static/img/consultation.png">留言咨询</div>
      <div @click="showCall = true" class="btn-mid"><img src="../../../static/img/phone.png">电话咨询</div>
    </div>
    <div v-show="showSpecification" class="specification">
      <div :class="showSpecification?'active':''" class="info-part">
        <div class="info">
          <h3>选择规格 <img @click="showSpecification = false" style="float: right" src="../../../static/img/close.png"></h3>
          <h4>所有规格（共6款）</h4>
          <div class="specs active">
            <div >
              <div class="specs-line1"><img src="../../../static/img/power.png">额定功率</div>
              <div class="specs-line2">321<span>hp</span></div>
              <div class="specs-line3">250<span>kw</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/torque.png">扭矩</div>
              <div class="specs-line2">1400<span>n·m</span></div>
              <div class="specs-line3">1400-1500<span>rpm</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/rotate.png">额定转速</div>
              <div class="specs-line2">2100<span>rpm</span></div>
            </div>
            <span class="active-corner">
              <img src="../../../static/img/active-corner.png">
            </span>
          </div>
          <div class="specs">
            <div >
              <div class="specs-line1"><img src="../../../static/img/power.png">额定功率</div>
              <div class="specs-line2">321<span>hp</span></div>
              <div class="specs-line3">250<span>kw</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/torque.png">扭矩</div>
              <div class="specs-line2">1400<span>n·m</span></div>
              <div class="specs-line3">1400-1500<span>rpm</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/rotate.png">额定转速</div>
              <div class="specs-line2">2100<span>rpm</span></div>
            </div>
          </div>
          <div class="specs">
            <div >
              <div class="specs-line1"><img src="../../../static/img/power.png">额定功率</div>
              <div class="specs-line2">321<span>hp</span></div>
              <div class="specs-line3">250<span>kw</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/torque.png">扭矩</div>
              <div class="specs-line2">1400<span>n·m</span></div>
              <div class="specs-line3">1400-1500<span>rpm</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/rotate.png">额定转速</div>
              <div class="specs-line2">2100<span>rpm</span></div>
            </div>
          </div>
          <div class="specs">
            <div >
              <div class="specs-line1"><img src="../../../static/img/power.png">额定功率</div>
              <div class="specs-line2">321<span>hp</span></div>
              <div class="specs-line3">250<span>kw</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/torque.png">扭矩</div>
              <div class="specs-line2">1400<span>n·m</span></div>
              <div class="specs-line3">1400-1500<span>rpm</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/rotate.png">额定转速</div>
              <div class="specs-line2">2100<span>rpm</span></div>
            </div>
          </div>
          <div class="specs">
            <div >
              <div class="specs-line1"><img src="../../../static/img/power.png">额定功率</div>
              <div class="specs-line2">321<span>hp</span></div>
              <div class="specs-line3">250<span>kw</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/torque.png">扭矩</div>
              <div class="specs-line2">1400<span>n·m</span></div>
              <div class="specs-line3">1400-1500<span>rpm</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/rotate.png">额定转速</div>
              <div class="specs-line2">2100<span>rpm</span></div>
            </div>
          </div>
          <div class="specs">
            <div >
              <div class="specs-line1"><img src="../../../static/img/power.png">额定功率</div>
              <div class="specs-line2">321<span>hp</span></div>
              <div class="specs-line3">250<span>kw</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/torque.png">扭矩</div>
              <div class="specs-line2">1400<span>n·m</span></div>
              <div class="specs-line3">1400-1500<span>rpm</span></div>
            </div>
            <div>
              <div class="specs-line1"><img src="../../../static/img/rotate.png">额定转速</div>
              <div class="specs-line2">2100<span>rpm</span></div>
            </div>
          </div>
          <div style="height: 90px"></div>

          <div class="footer-btn fixed">
            <div @click="showSpecification= false" class="btn-large">确定</div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="showMessage" class="message">
      <div :class="showMessage?'active':''" class="info-part">
        <div class="info">
          <h3>留言咨询 <img @click="showMessage = false" style="float: right" src="../../../static/img/close.png"></h3>
          <h4>X15 Efficiency Series</h4>
          <div class="des">250Kw/1900rpm</div>
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
              <div class="label"><span class="text-red-500">*</span> 留言</div>
              <textarea class="input-item text-area"  auto-height placeholder="请输入留言..." maxlength="-1" />
            </div>
          </div>
          <div class="footer-btn fixed">
            <checkbox-group class="checkPrivacy-box">
              <label>
                <checkbox class="check-box" value="checkPrivacy" color="#FFCC33" style="transform:scale(0.7)"/>同意为您提供产品咨询服务
              </label>
            </checkbox-group>
            <div @click="showMessage= false"  class="btn-large">提交</div>
            <div class="privacy">Cummins将严格遵循<span>《隐私政策》</span>保证您的信息安全</div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="showCall" class="message">
      <div :class="showCall?'active':''" class="info-part">
        <div class="info">
          <h3>电话咨询 <img @click="showCall = false" style="float: right" src="../../../static/img/close.png"></h3>
          <h4>X15 Efficiency Series</h4>
          <div class="des">250Kw/1900rpm</div>
          <div class="contact-list">
            <div class="contact">
              <div class="img-box">
                <img src="../../../static/img/user.png">
              </div>
              <div class="contact-info">
                <p>赵日天</p>
                <p>AE</p>
              </div>
              <div class="contact-btn">
                <img @click="showMessage = true,showCall=false" src="../../../static/img/consultation-red.png">
                <img style="margin-right: 0" @click="makePhoneCall" src="../../../static/img/phone-red.png">
              </div>
            </div>
            <div class="contact">
              <div class="img-box">
                <img src="../../../static/img/user.png">
              </div>
              <div class="contact-info">
                <p>赵日天</p>
                <p>AE</p>
              </div>
              <div class="contact-btn">
                <img @click="showMessage = true,showCall=false" src="../../../static/img/consultation-red.png">
                <img style="margin-right: 0" @click="makePhoneCall" src="../../../static/img/phone-red.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup>

  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()

  let current = ref(0)
  let richText = ref('<p><span style="font-size: 13px;"><strong>可靠耐久</strong></span></p><p><span style="font-size: 13px;">通过近5000小时的可靠性路试验证，以及包括极端冷热冲击、工业循环、热箱试验和冷启动在内的近10000小时台架测试。</span></p><p><span style="font-size: 13px;"><strong>强劲高效</strong></span></p><p><span style="font-size: 13px;">新一代高效涡轮增压器，采用前言技术和工艺，全新优化的流道机叶轮型线设计，兼顾高、低速相应需求，显著提升节油和瞬态响应性，效率更高。</span></p><p><span style="font-size: 13px;"><strong>经济节省</strong></span></p><p><span style="font-size: 13px;">更广泛的经济油耗区，实现作业效率、效能和经济效益的最佳平衡；热管理能力更强，可靠性更高；采用康明斯超高压燃油系统XPI，采用先进的保压技术，实现超高压喷射，优化喷射角度，在提升燃油经济性的同时降低排放；高压缩比，全新活塞设计，燃烧效率更高，更节油。</span></p><p><span style="font-size: 13px;"><strong>高智能</strong></span></p><p><span style="font-size: 13px;">高端智能控制系统，与整机系统无缝链合，提供多达100项电控可选参数进行差异化定制，适配性更强，应用更广泛；康明斯数字化远程在线技术（OTA），能够实现工程设备在用期间的实时升级。</span></p><p><span style="font-size: 13px;"><strong>全面呵护</strong></span></p><p><span style="font-size: 13px;">根据中国油品使用现状，设置智能系统的提示功能，提示用户使用合格油品，保护发动机和整机系统正常运行，使用寿命更长；康明斯远程数字化诊断技术，自诊断、自维护能力更强，整机设备高效出勤更有保障。</span></p><p><span style="font-size: 13px;">高适应性</span></p><p><span style="font-size: 13px;">高寒适应性强，胜任零下40度工况作业，零下30度无需辅助加热器启动更轻松；高原适应性强，500米海拔无降扭，胜任4500米海拔作业。</span></p>')

  let showSpecification =ref(false)
  let showMessage = ref(false)
  let showCall = ref(false)

  const info = ref( [{
      url: '../../../static/img/swiper1.png',
      content: '内容 1'
    },
  ])

  function makePhoneCall(){
    uni.makePhoneCall({phoneNumber:'12312312312'})
  }

  function change(e){
    current.value = e.detail.current;
  }

  onMounted(() => {

  });

</script>


<style lang="scss" scoped>
.content {
  background: url("../../../static/img/background.png") no-repeat;
  background-size: 100% 100%;
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

  .detail-info {
    width: 90%;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 6px;
    padding: 10px;
    h2 {
      font-size: 16px;
    }
    h3 {
      margin-top: 5px;
      font-size: 14px;
      .right-fix {
        float: right;
        font-weight: normal;
      }
    }

  }

  .specs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    color: #333;
    font-size: 13px;
    background: rgba(245, 245, 245, 1);
    padding:8px 0 12px 0;
    margin-top: 8px;
    border-radius: 4px;
    overflow: hidden;
    >div{
      width: 28%;
      border-left: 1px solid rgba(204, 204, 204, 0.63);
      padding-left: 15px;
    }
    >div:first-child {
      border: 0;
    }
    .specs-line1 {
      margin-top: 3px;
      img {
        position: relative;
        top: 3px;
        margin-right: 5px;
      }
    }
    .specs-line2 {
      margin-top: 10px;
      font-size: 16px;
      color: #000;
      font-weight: 600;
      span {
        font-size: 13px;
      }
    }
    .specs-line3 {
      margin-top: 3px;
    }
  }
  .detail-para {
    margin-top: 10px;
    h3 {
      border-top: 1px solid #efefef;
      padding-top: 10px;
    }
    div {
      font-size: 13px;
      margin-top: 5px;
      img {
        position: relative;
        top: 3px;
        margin-right: 5px;
      }
      span {
        float: right;
        font-weight: 600;
        font-size: 13px;
      }
    }
  }

  .scenario {
    margin-top: 15px;
    h3 {
      border-top: 1px solid #efefef;
      padding-top: 10px;
    }
    div {
      margin-top: 10px;
      font-size: 13px;
      i {
        border: 1px solid #DA291CFF;
        color: rgba(218, 41, 28, 1);
        border-radius: 3px;
        font-size: 12px;
        padding: 2px 5px;
        margin-left: 5px;
        font-style: normal;
      }
      span {
        float: right;
      }
    }
  }
  .tec {
    h3 {
      border-top: 1px solid #efefef;
      padding-top: 10px;
    }
    margin-top: 15px;
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
      h3 {
        text-align: center;
        font-size: 15px;
        margin-top: 20px;
      }
      h4 {
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
          img {
            width: 20px;
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
      height: 80%;
      width: 100%;
      background: #ffffff;
      position: absolute;
      bottom: -80%;
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
            img {
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
  .footer-btn.fixed {
    position: fixed;
    bottom: 10px;
    width: 90%;
  }
}
</style>
