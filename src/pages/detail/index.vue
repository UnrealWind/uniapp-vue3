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
          <span class="right-fix text-red-500">选择规格 (共六款) > </span>
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
        <div>
          <h3>适用应用场景</h3>
          <div><span>履带挖掘机</span><span>标准吨位：<span>45-49T</span></span></div>
          <div><span>旋挖钻机</span><span>标称转矩：<span>360R</span></span></div>
          <div><span>采棉机</span><span>作业行数（行箱式）：<span>6</span></span></div>
        </div>
        <div>
          <h3>技术特点</h3>
          <rich-text :nodes="richText"></rich-text>
        </div>
      </div>
      <div class="footer-btn">
        <div class="btn-mid">留言咨询</div>
        <div class="btn-mid">电话咨询</div>
      </div>
  </view>
</template>

<script setup>

  import { Icon} from 'vant'
  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()

  let current = ref(0)
  let richText = ref('')

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
  background: rgba(239, 239, 239, 0.6);
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
  }

  .footer-btn {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 20px;
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
