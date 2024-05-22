<template>
  <view class="content">
    <h2 class="w-full p-2 title-container">
      <span class="ml-3 font-bold title">应用场景</span>
    </h2>
    <div class="scenarios">
      <div class="device active">
        <img src="../../../static/img/device/device1.png">
        <div>挖掘机
          <span class="active-corner">
          <img src="../../../static/img/active-corner.png">
        </span>
        </div>
      </div>
      <div v-for="(item,index) in deviceTypeList" class="device" v-show=" !showMore && index<2">
        <img src="../../../static/img/device/ttj.png">
        <div>{{item.label}}</div>
      </div>
      <div v-for="(item,index) in deviceTypeList" class="device" v-show=" showMore">
        <img src="../../../static/img/device/ttj.png">
        <div>{{item.label}}</div>
      </div>
      <Button class="w-full" style="margin-top: 15px" v-show="!showMore" type="default" size="small" @click="changeScenarios">更多场景  <Icon name="arrow-down" /> </Button>
      <Button class="w-full" style="margin-top: 15px" v-show="showMore" type="default" size="small" @click="changeScenarios">收起  <Icon name="arrow-up" /> </Button>
    </div>
    <h2 class="w-full p-2 title-container mt-2">
      <span class="ml-3 font-bold title">生产工厂</span>
    </h2>
    <div class="radio">
      <div class="active">BFCEC</div>
      <div>DCEC</div>
      <div>GCIC</div>
    </div>
    <h2 class="w-full p-2 title-container mt-2">
      <span class="ml-3 font-bold title">额定功率</span>
      <span class="tar-value">{{priceValue[0]}}kw - {{priceValue[1]}}kw</span>
    </h2>
    <div class="slider" >
      <Slider v-model="priceValue" range @change="onChange"  active-color="#ee0a24">
        <template #left-button>
          <div class="custom-button">{{ priceValue[0] }}</div>
        </template>
        <template #right-button>
          <div class="custom-button">{{ priceValue[1] }}</div>
        </template>
      </Slider>
    </div>
    <h2 class="w-full p-2 title-container mt-2">
      <span class="ml-3 font-bold title">排放控制技术路线</span>
    </h2>
    <div class="radio">
      <div class="active">EGR</div>
      <div>DOC</div>
      <div>DPF</div>
      <div>SCR</div>
      <div>高压共轨</div>
    </div>
    <div class="btn-box">
      <Button class="w-full" style="margin-top: 15px"  type="danger" size="normal" @click="goList">共有112个产品符合条件 进入</Button>
    </div>
  </view>
</template>

<script setup>

  import { Slider,Icon,Button } from 'vant'
  import 'vant/lib/index.css';
  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()

  const priceValue = ref([0,100])
  const showMore = ref(false)
  const deviceTypeList = ref([
    {label:'履带式挖机',value:'ldswj'},
    {label:'轮式挖机',value:'lswj'},
    {label:'装载机',value:'zzj'},
    {label:'推土机',value:'ttj'},
    {label:'旋挖钻机',value:'xwzj'},
    {label:'水平定向钻',value:'spdxzj'},
    {label:'单钢轮压路机',value:'dglylj'},
    {label:'双钢轮压路机',value:'sglylj'},
    {label:'平地机',value:'pdj'},
    {label:'摊铺机',value:'tpj'},
    {label:'铣刨机',value:'xpj'},
    {label:'履带起重机',value:'ldqzj'},
    {label:'高空作业平台',value:'gkzyj'},
    {label:'地下铲运车',value:'dxcyc'},
    {label:'地下矿卡',value:'dxkk'},
    {label:'机场牵引车',value:'jcqyc'},
    {label:'机场皮带传送车',value:'jcpdcsc'},
    {label:'机场电源车',value:'jcdyc'},
    {label:'机场平台车',value:'jcptc'},
    {label:'采棉机-打包',value:'cmjdb'},
    {label:'采棉机-箱式',value:'cmjxs'},
    {label:'青储机',value:'qcj'},
    {label:'空压机',value:'kyj'},
    {label:'扫地车',value:'sdc'},
    {label:'叉车',value:'cc'},
    {label:'叉装车',value:'czc'},
  ])

  function onChange(e){
    console.log(e)
    console.log(priceValue)
  }

  function changeScenarios(){
    showMore.value = !showMore.value
  }

  function goList(){
    uni.navigateTo({
      url:'/pages/mobile/list-h5/index'
    })
  }

  onMounted(() => {
    const sys = uni.getSystemInfo({
      success:(res)=>{
        console.log(res,11111111111111)
        if(res.uniPlatform == 'mp-weixin'){
          // do wx
        }else if(res.uniPlatform == 'web'){
          // do web
        }
      }
    })
  });

</script>


<style lang="scss" scoped>
.content {
  background: url("../../../static/img/background.png") no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  .uni-slider-handle {
    z-index: 999;
  }

  .title-container {
    height: 20px;
    line-height: 20px;
    .tar-value {
      color: red;
      font-size: 13px;
      float: right;
      margin-right: 30px;
      position: relative;
      top: 3px;
    }
  }
  .title {
    font-size: 0.9rem;
  }

  .radio {
    width: 90%;
    margin:0 auto;
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    >div {
      margin-top: 5px;
      width: 30%;
      font-size: 12px;
      background: #efefef;
      text-align: center;
      padding: 6px 0;
      border-radius: 5px;
      margin-left: 10px;
    }
    .active {
      background: rgba(218, 41, 28, 1);
      color: #ffffff;
    }
  }
  .slider {
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
  }

  :deep(.custom-button) {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: red;
    border-radius: 100px;
  }
  .btn-box {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
  }

  .scenarios {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    .device {
      width: 26%;
      border: 1px solid #efefef;
      border-radius: 8px;
      text-align: center;
      padding: 10px 0 0px 0;
      margin-top: 10px;
      >div {
        text-align: center;
        font-size: 11px;
        margin-top: 3px;
        padding-bottom: 8px;
      }
      img {
        margin: 0 auto;
        width: 66px;
      }
    }
    .active {
      border: 1px solid red;
      position: relative;
      >div{
      }
      .active-corner {
        position: absolute;
        right: -1px;
        bottom: -3px;
        img {
          width: 20px;
        }
      }
    }
  }
}
</style>
