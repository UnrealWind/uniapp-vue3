<template>
  <view class="content">
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
            <div class="specs-line1"><img src="../../static/img/power.png">额定功率</div>
            <div class="specs-line2">321<span>hp</span></div>
            <div class="specs-line3">250<span>kw</span></div>
          </div>
          <div>
            <div class="specs-line1"><img src="../../static/img/torque.png">扭矩</div>
            <div class="specs-line2">1400<span>n·m</span></div>
            <div class="specs-line3">1400-1500<span>rpm</span></div>
          </div>
          <div>
            <div class="specs-line1"><img src="../../static/img/rotate.png">额定转速</div>
            <div class="specs-line2">2100<span>rpm</span></div>
          </div>
        </div>
        <div class="detail-para">
          <h3>详细参数</h3>
          <div><img src="../../static/img/size.png">尺寸（长*宽*高 mm）<span>1295*992*1000</span></div>
          <div><img src="../../static/img/weight.png">重量<span>900kg</span></div>
          <div><img src="../../static/img/way.png">技术路线<span>DOC+DPF+SCR</span></div>
        </div>
        <div class="scenario">
          <h3>适用应用场景</h3>
          <div><i>履带挖掘机</i><span >45-49T</span><span class="text-gray-500">标准吨位：</span></div>
          <div><i>旋挖钻机</i><span>360R</span><span class="text-gray-500">标称转矩：</span></div>
          <div><i>采棉机</i><span>6</span><span class="text-gray-500">作业行数（行箱式）：</span></div>
        </div>
        <div class="tec">
          <h3>技术特点</h3>
          <rich-text :nodes="richText"></rich-text>
        </div>
      </div>
      <div class="footer-btn">
        <div @click="showMessage=true" class="btn-mid"><img src="../../static/img/consultation.png">留言咨询</div>
        <div class="btn-mid"><img src="../../static/img/phone.png">电话咨询</div>
      </div>
      <div v-show="showSpecification" class="specification">
        <div :class="showSpecification?'active':''" class="info-part">
          <div class="info">
            <h3>选择规格</h3>
            <h4>所有规格（共6款）</h4>
            <div class="specs active">
              <div >
                <div class="specs-line1"><img src="../../static/img/power.png">额定功率</div>
                <div class="specs-line2">321<span>hp</span></div>
                <div class="specs-line3">250<span>kw</span></div>
              </div>
              <div>
                <div class="specs-line1"><img src="../../static/img/torque.png">扭矩</div>
                <div class="specs-line2">1400<span>n·m</span></div>
                <div class="specs-line3">1400-1500<span>rpm</span></div>
              </div>
              <div>
                <div class="specs-line1"><img src="../../static/img/rotate.png">额定转速</div>
                <div class="specs-line2">2100<span>rpm</span></div>
              </div>
              <span class="active-corner">
                <img src="../../static/img/active-corner.png">
              </span>
            </div>
            <div class="specs">
              <div >
                <div class="specs-line1"><img src="../../static/img/power.png">额定功率</div>
                <div class="specs-line2">321<span>hp</span></div>
                <div class="specs-line3">250<span>kw</span></div>
              </div>
              <div>
                <div class="specs-line1"><img src="../../static/img/torque.png">扭矩</div>
                <div class="specs-line2">1400<span>n·m</span></div>
                <div class="specs-line3">1400-1500<span>rpm</span></div>
              </div>
              <div>
                <div class="specs-line1"><img src="../../static/img/rotate.png">额定转速</div>
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
      <div  @click="showMessage= false" :class="showMessage?'active':''" class="info-part">
        <div class="info">
          <h3>留言咨询</h3>
          <h4>X15 Efficiency Series</h4>
          <div class="des">250Kw/1900rpm</div>
          <div class="form">

          </div>
          <div class="footer-btn fixed">
            <div @click="showMessage= false"  class="btn-large">确定</div>
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
  let richText = ref('')
  let showSpecification =ref(false)
  let showMessage = ref(false)

  const info = ref( [{
      url: '../../static/img/swiper1.png',
      content: '内容 1'
    },
  ])

  function change(e){
    current.value = e.detail.current;
  }

  onMounted(() => {

  });

</script>


<style lang="scss">
.content {
  background: url("../../static/img/background.png") no-repeat;
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
      animation:hide .5s forwards;
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
  }
  .footer-btn.fixed {
    position: fixed;
    bottom: 10px;
    width: 90%;
  }
}
</style>
