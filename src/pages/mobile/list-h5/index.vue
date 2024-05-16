<template>
  <view class="content">
    <div class="bg">
      <div class="chose">
        <div class="chose-item">挖掘机<img src="../../../static/img/delete.png"></div>
        <div class="chose-item">40-50T<img src="../../../static/img/delete.png"></div>
        <div class="clear"><img src="../../../static/img/clear.png">清除</div>
      </div>
      <div class="describe">
        共 <span class="text-red-500">112</span> 个产品符合条件
        <span class="right-fix text-red-500"><img src="../../../static/img/more.png"> 更多条件</span>
      </div>
      <List
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <div class="list-item">
          <div class="img-box">
            <img src="../../../static/img/product.png">
            <div class="des">x15</div>
          </div>
          <div class="info">
            <div class="scenarios"><span><img src="../../../static/img/power.png"> 功率 300kw/400hp</span></div>
            <div class="scenarios"><span><img src="../../../static/img/torque.png"> 最大扭矩 2000Nm/1400-1500rpm</span></div>
            <div class="device-type">
              <span>履带挖掘机</span>
              <span>旋挖钻机</span>
              <span>采棉机</span>
            </div>
            <div class="produce">
              <span>福田康明斯生产</span>
            </div>
            <div class="right-top"> &nbsp;&nbsp;&nbsp;EPA 2024</div>
            <div class="detail-btn"></div>
          </div>
        </div>

        <div class="list-item">
          <div class="img-box">
            <img src="../../../static/img/product.png">
            <div class="des">x15</div>
          </div>
          <div class="info">
            <div class="scenarios"><span><img src="../../../static/img/power.png"> 功率 300kw/400hp</span></div>
            <div class="scenarios"><span><img src="../../../static/img/torque.png"> 最大扭矩 2000Nm/1400-1500rpm</span></div>
            <div class="device-type">
              <span>履带挖掘机</span>
              <span>旋挖钻机</span>
              <span>采棉机</span>
            </div>
            <div class="produce">
              <span>福田康明斯生产</span>
            </div>
            <div class="right-top"> &nbsp;&nbsp;&nbsp;EPA 2024</div>
            <div class="detail-btn"></div>
          </div>
        </div>
      </List>
    </div>
  </view>
</template>

<script setup>

  import { List,Icon} from 'vant'
  import 'vant/lib/index.css';
  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()

  const loading = ref(false)
  const finished = ref(false)
  const list = ref([]);

  function onLoad(){
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        list.value.push(list.value.length + 1);
      }

      // 加载状态结束
      loading.value = false;

      // 数据全部加载完成
      if (list.value.length >= 40) {
        finished.value = true;
      }
    }, 1000);
  }

  onMounted(() => {

  });

</script>


<style lang="scss">
.content {
  background:#efefef;
  .bg {
    background: url("../../../static/img/background.png") no-repeat;
    background-size: 100% 100%;
    height: 100vh;
  }
  .chose {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: left;
    position: relative;
    font-size: 13px;
    padding-top: 10px;
    .chose-item {
      height: 20px;
      line-height: 20px;
      border: 1px solid #efefef;
      border-radius: 6px;
      padding: 5px 8px;
      background: #ffffff;
      margin-left: 10px;
      img {
        position: relative;
        top: 3px;
        margin-left: 5px;
      }
    }
    .clear{
      height: 20px;
      line-height: 20px;
      position: absolute;
      right: 10px;

      img{
        position: relative;
        top: 4px;
      }
    }
  }
  .describe {
    font-size: 13px;
    padding: 5px 10px;
    color: #999;
    position: relative;
    margin-top: 5px;
    .right-fix {
      position: absolute;
      top: -2px;
      right: 10px;
      img {
        position: relative;
        top: 4.5px;
      }
    }
  }
  .list-item {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: left;
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;
    background:#ffffff;
    font-size: 13px;
    border-radius: 8px;
    overflow: hidden;
    .img-box {
      width: 30%;
      text-align: center;
      margin-top: 6px;
      img {
        width: 80%;
        margin: 0 auto;
      }
      .des {
        text-align: center;
        font-size: 13px;
        padding-bottom: 10px;
      }
    }
    .info {
      width: 65%;
      padding-bottom: 25px;
      .scenarios {
        margin-top: 10px;
        margin-left: 5px;
       span {
         background: #efefef;
         border-radius: 3px;
         padding: 3px 5px;
         img {
           position: relative;
           top: 3px;
         }
       }
      }
    }
    .device-type {
      margin-top: 12px;
      span {
        border: 1px solid #DA291CFF;
        color: rgba(218, 41, 28, 1);
        border-radius: 3px;
        font-size: 12px;
        padding: 2px 5px;
        margin-left: 5px;
      }
    }
    .produce {
      margin-top: 12px;
      span {
        background: rgba(218, 41, 28, 0.1);
        color: rgba(218, 41, 28, 1);
        border-radius: 3px;
        font-size: 12px;
        padding: 2px 5px;
        margin-left: 5px;
      }
    }
    .right-top {
      background: url("../../../static/img/top-right.png");
      background-size: 100% 100%;
      position: absolute;
      width: 100px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      top: 0;
      right: 0;
      color: #ffffff;
    }
    .detail-btn {
      background: url("../../../static/img/detail-btn.png");
      background-size: 100% 100%;
      position: absolute;
      width: 93px;
      height: 35px;
      bottom: 5px;
      right: 0;
    }
  }
}
</style>
