<template>
  <view class="content">
    <div class="header">
      <img @click="goHome" src="../../../static/img/cummins.png">
      <span>
        <span style="cursor: pointer" @click="goProtal">经销商服务网</span>
        <span @click="showMessage = true" style="cursor: pointer">联系我们</span>
      </span>
    </div>
    <div style="height: 76vh;overflow-y: scroll;padding: 0 150px">
      <div class="detail-info">
        <div class="detail-left">
          <img mode="widthFix" src="../../../static/img-web/product.png" />
        </div>
        <div class="detail-right">
          <h2>B7 ( 126kw/169hp )</h2>
          <h3>
            <span>规格</span>
            <span @click="showSpecification = true" style="cursor: pointer" class="right-fix text-red-500">选择规格 (共六款) > </span>
          </h3>
          <div class="specs">
            <div >
              <div><img src="../../../static/img-web/power.png"></div>
              <div>
                <div class="specs-line1">额定功率</div>
                <div class="specs-line2">169<span>hp</span></div>
                <div class="specs-line3">126<span>kw</span></div>
              </div>
            </div>
            <div>
              <div><img src="../../../static/img-web/torque.png"></div>
              <div>
                <div class="specs-line1">扭矩</div>
                <div class="specs-line2">746<span>n·m</span></div>
                <div class="specs-line3">1200<span>rpm</span></div>
              </div>
            </div>
            <div>
              <div>
                <img src="../../../static/img-web/rotate.png">
              </div>
              <div>
                <div class="specs-line1">额定转速</div>
                <div class="specs-line2">2000<span>rpm</span></div>
              </div>
            </div>
          </div>
          <div class="detail-para">
            <h3>详细参数</h3>
            <div><img src="../../../static/img/size.png">尺寸（长*宽*高 mm）<span>1043*978*576</span></div>
            <div><img src="../../../static/img/weight.png">重量<span>552kg</span></div>
            <div><img src="../../../static/img/way.png">技术路线<span>DOC+DPF+SCR</span></div>
          </div>
          <div class="scenario">
            <h3>适用应用场景</h3>
            <div><i>履带挖掘机</i><span >20-21T</span><span class="text-gray-500">标准吨位：</span></div>
<!--            <div><i>旋挖钻机</i><span>360R</span><span class="text-gray-500">标称转矩：</span></div>-->
<!--            <div><i>采棉机</i><span>6</span><span class="text-gray-500">作业行数（行箱式）：</span></div>-->
          </div>
        </div>
        <div class="tec">
          <h3>技术特点</h3>
          <rich-text :nodes="strs"></rich-text>
        </div>
      </div>
    </div>

    <div v-show="showSpecification" class="specification">
      <div :class="showSpecification?'active':''" class="info-part">
        <div class="info">
          <h3>选择规格 <img @click="showSpecification = false" style="float: right" src="../../../static/img/close.png"></h3>
          <h4>所有规格（共6款）</h4>
          <div class="info-list">
            <div class="specs active">
              <div>
                <div><img src="../../../static/img-web/power.png"></div>
                <div>
                  <div class="specs-line1">额定功率</div>
                  <div class="specs-line2">169<span>hp</span></div>
                  <div class="specs-line3">126<span>kw</span></div>
                </div>
              </div>
              <div>
                <div><img src="../../../static/img-web/torque.png"></div>
                <div>
                  <div class="specs-line1">扭矩</div>
                  <div class="specs-line2">746<span>n·m</span></div>
                  <div class="specs-line3">1200<span>rpm</span></div>
                </div>
              </div>
              <div style="position:relative;">
                <div>
                  <img src="../../../static/img-web/rotate.png">
                </div>
                <div>
                  <div class="specs-line1">额定转速</div>
                  <div class="specs-line2">2000<span>rpm</span></div>
                </div>
                <span class="active-corner">
                  <img src="../../../static/img/active-corner.png">
                </span>
              </div>

            </div>
            <div class="specs ">
              <div >
                <div><img src="../../../static/img-web/power.png"></div>
                <div>
                  <div class="specs-line1">额定功率</div>
                  <div class="specs-line2">174<span>hp</span></div>
                  <div class="specs-line3">130<span>kw</span></div>
                </div>
              </div>
              <div>
                <div><img src="../../../static/img-web/torque.png"></div>
                <div>
                  <div class="specs-line1">扭矩</div>
                  <div class="specs-line2">850<span>n·m</span></div>
                  <div class="specs-line3">1300<span>rpm</span></div>
                </div>
              </div>
              <div>
                <div>
                  <img src="../../../static/img-web/rotate.png">
                </div>
                <div>
                  <div class="specs-line1">额定转速</div>
                  <div class="specs-line2">2000<span>rpm</span></div>
                </div>
              </div>
            </div>
            <div class="specs ">
              <div >
                <div><img src="../../../static/img-web/power.png"></div>
                <div>
                  <div class="specs-line1">额定功率</div>
                  <div class="specs-line2">194<span>hp</span></div>
                  <div class="specs-line3">145<span>kw</span></div>
                </div>
              </div>
              <div>
                <div><img src="../../../static/img-web/torque.png"></div>
                <div>
                  <div class="specs-line1">扭矩</div>
                  <div class="specs-line2">850<span>n·m</span></div>
                  <div class="specs-line3">1200<span>rpm</span></div>
                </div>
              </div>
              <div>
                <div>
                  <img src="../../../static/img-web/rotate.png">
                </div>
                <div>
                  <div class="specs-line1">额定转速</div>
                  <div class="specs-line2">2000<span>rpm</span></div>
                </div>
              </div>
            </div>
            <div class="specs ">
              <div >
                <div><img src="../../../static/img-web/power.png"></div>
                <div>
                  <div class="specs-line1">额定功率</div>
                  <div class="specs-line2">201<span>hp</span></div>
                  <div class="specs-line3">150<span>kw</span></div>
                </div>
              </div>
              <div>
                <div><img src="../../../static/img-web/torque.png"></div>
                <div>
                  <div class="specs-line1">扭矩</div>
                  <div class="specs-line2">890<span>n·m</span></div>
                  <div class="specs-line3">1200<span>rpm</span></div>
                </div>
              </div>
              <div>
                <div>
                  <img src="../../../static/img-web/rotate.png">
                </div>
                <div>
                  <div class="specs-line1">额定转速</div>
                  <div class="specs-line2">2000<span>rpm</span></div>
                </div>
              </div>
            </div>
            <div class="specs ">
              <div >
                <div><img src="../../../static/img-web/power.png"></div>
                <div>
                  <div class="specs-line1">额定功率</div>
                  <div class="specs-line2">232<span>hp</span></div>
                  <div class="specs-line3">173<span>kw</span></div>
                </div>
              </div>
              <div>
                <div><img src="../../../static/img-web/torque.png"></div>
                <div>
                  <div class="specs-line1">扭矩</div>
                  <div class="specs-line2">949<span>n·m</span></div>
                  <div class="specs-line3">1200<span>rpm</span></div>
                </div>
              </div>
              <div>
                <div>
                  <img src="../../../static/img-web/rotate.png">
                </div>
                <div>
                  <div class="specs-line1">额定转速</div>
                  <div class="specs-line2">2000<span>rpm</span></div>
                </div>
              </div>
            </div>
            <div class="specs ">
              <div >
                <div><img src="../../../static/img-web/power.png"></div>
                <div>
                  <div class="specs-line1">额定功率</div>
                  <div class="specs-line2">241<span>hp</span></div>
                  <div class="specs-line3">180<span>kw</span></div>
                </div>
              </div>
              <div>
                <div><img src="../../../static/img-web/torque.png"></div>
                <div>
                  <div class="specs-line1">扭矩</div>
                  <div class="specs-line2">949<span>n·m</span></div>
                  <div class="specs-line3">1300<span>rpm</span></div>
                </div>
              </div>
              <div>
                <div>
                  <img src="../../../static/img-web/rotate.png">
                </div>
                <div>
                  <div class="specs-line1">额定转速</div>
                  <div class="specs-line2">2000<span>rpm</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-btn fixed-circle">
            <div @click="showSpecification= false" class="btn-large">确定</div>
          </div>
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
          <div class="footer-btn fixed-circle" style="margin-top: 50px">
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
                <img src="../../../static/img/user.png">
              </div>
              <div class="contact-info">
                <p>赵日天</p>
                <p>AE</p>
              </div>
              <div class="contact-btn">
                <img @click="showMessage = true,showCall=false" src="../../../static/img/consultation-red.png">
                <img style="margin-right: 0" @click="showCall = true,showCall=false" src="../../../static/img/phone-red.png">
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
                <img style="margin-right: 0" @click="showCall = true,showCall=false" src="../../../static/img/phone-red.png">
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
  let strs = ref('<p><span style="font-size: 13px;"><strong>可靠耐久</strong></span></p><p><span style="font-size: 13px;">通过近5000小时的可靠性路试验证，以及包括极端冷热冲击、工业循环、热箱试验和冷启动在内的近10000小时台架测试。</span></p><p><br></p><p><span style="font-size: 13px;"><strong>强劲高效</strong></span></p><p><span style="font-size: 13px;">新一代高效涡轮增压器，采用前言技术和工艺，全新优化的流道机叶轮型线设计，兼顾高、低速相应需求，显著提升节油和瞬态响应性，效率更高。</span></p><p><br></p><p><span style="font-size: 13px;"><strong>经济节省</strong></span></p><p><span style="font-size: 13px;">更广泛的经济油耗区，实现作业效率、效能和经济效益的最佳平衡；热管理能力更强，可靠性更高；采用康明斯超高压燃油系统XPI，采用先进的保压技术，实现超高压喷射，优化喷射角度，在提升燃油经济性的同时降低排放；高压缩比，全新活塞设计，燃烧效率更高，更节油。</span></p><p><br></p><p><span style="font-size: 13px;"><strong>高智能</strong></span></p><p><span style="font-size: 13px;">高端智能控制系统，与整机系统无缝链合，提供多达100项电控可选参数进行差异化定制，适配性更强，应用更广泛；康明斯数字化远程在线技术（OTA），能够实现工程设备在用期间的实时升级。</span></p><p><br></p><p><span style="font-size: 13px;"><strong>全面呵护</strong></span></p><p><span style="font-size: 13px;">根据中国油品使用现状，设置智能系统的提示功能，提示用户使用合格油品，保护发动机和整机系统正常运行，使用寿命更长；康明斯远程数字化诊断技术，自诊断、自维护能力更强，整机设备高效出勤更有保障。</span></p><p><br></p><p><span style="font-size: 13px;"><strong>高适应性</strong></span></p><p><span style="font-size: 13px;">高寒适应性强，胜任零下40度工况作业，零下30度无需辅助加热器启动更轻松；高原适应性强，500米海拔无降扭，胜任4500米海拔作业。</span></p>')
  let showSpecification =ref(false)
  let showMessage = ref(false)
  let showCall = ref(false)
  let showTips = ref(false)

  const info = ref( [{
      url: '../../../static/img/swiper.png',
      content: '内容 1'
    },
  ])

  function goHome(){
    uni.reLaunch({
      url:'/pages/web/home/index'
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
    width: 95%;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 6px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    .detail-left {
      width: 35%;
      text-align: center;
      img {
        margin-top: 20px;
      }
    }
    .detail-right {
      width: 65%;
    }
    h2 {
      font-size: 25px;
    }
    h3 {
      margin-top: 15px;
      font-size: 16px;
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
      display: flex;
      flex-direction: row;
      justify-content: left;
      flex-wrap: wrap;
      >div {
        width: 33%;
        padding-top: 15px;
      }
      >div:last-child {
        width: 63%;
        padding-top: 5px;
      }
    }
    >div:first-child {
      border: 0;
    }
    .specs-line1 {
      img {
        position: relative;
        top: 3px;
      }
    }
    .specs-line2 {
      margin-top: 5px;
      font-size: 16px;
      color: #000;
      font-weight: 600;
      span {
        font-size: 13px;
      }
    }
    .specs-line3 {
      margin-top: 5px;
    }
  }
  .detail-para {
    margin-top: 10px;

    h3 {
      border-top: 1px solid #efefef;
      padding-top: 10px;
      width: 100%;
      font-size: 15px;
    }
    div {
      display: inline-block;
      font-size: 13px;
      margin-top: 5px;
      height: 30px;
      line-height: 30px;
      padding: 0 30px 0 10px;
      img {
        margin-right: 5px;
        position: relative;
        top: 4px;
        width: 16px;
        height: 16px;
      }
      span {
        font-weight: 600;
        font-size: 13px;
        float: right;
        margin-left: 20px;
      }
    }
  }

  .scenario {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    h3 {
      border-top: 1px solid #efefef;
      padding-top: 10px;
      width: 100%;
      font-size: 15px;
    }
    div {
      margin-top: 10px;
      font-size: 13px;
      width: 30%;
      height: 30px;
      line-height: 30px;
      padding: 0 20px 0 0;
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
    width: 100%;
    margin-bottom: 50px;
    h3 {
      border-top: 1px solid #efefef;
      padding-top: 10px;
    }
    margin-top: 15px;
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
