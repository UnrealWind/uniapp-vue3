<template>
  <view class="content">
    <h2 class="w-full p-2 title-container">
      <span class="ml-3 font-bold title">应用场景</span>
    </h2>
    <div class="scenarios">

      <div v-for="(item,index) in deviceTypeList" class="device" :class="item.active?'active':''" @click="choseDevice(item)" v-show="!showMore && index<3">
        <template v-if="!item.active">
          <img :src="`../../../static/img/device/${item.value}.png`">
          <div>{{item.label}}</div>
        </template>
        <template v-if="item.active">
          <img :src="`../../../static/img/device/${item.value}A.png`">
          <div>{{item.label}}
            <span class="active-corner">
              <img src="../../../static/img/active-corner.png">
            </span>
          </div>
        </template>
      </div>
      <div v-for="(item,index) in deviceTypeList" class="device" :class="item.active?'active':''" @click="choseDevice(item)" v-show="showMore">
        <template v-if="!item.active">
          <img :src="`../../../static/img/device/${item.value}.png`">
          <div>{{item.label}}</div>
        </template>
        <template v-if="item.active">
          <img :src="`../../../static/img/device/${item.value}A.png`">
          <div>{{item.label}}
            <span class="active-corner">
              <img src="../../../static/img/active-corner.png">
            </span>
          </div>
        </template>
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
    {label:'履带式挖机',value:'ldswj',active:true},
    {label:'轮式挖机',value:'lswj',active:false}, //
    {label:'装载机',value:'zzj',active:false},
    {label:'推土机',value:'ttj',active:false},
    {label:'旋挖钻机',value:'xwzj',active:false},
    {label:'水平定向钻机',value:'spdxzj',active:false},
    {label:'单钢轮压路机',value:'dglylj',active:false},  //
    {label:'双钢轮压路机',value:'sglylj',active:false},
    {label:'平地机',value:'pdj',active:false},
    {label:'摊铺机',value:'tpj',active:false},
    {label:'铣刨机',value:'xpj',active:false},
    {label:'履带起重机',value:'ldqzj',active:false},
    {label:'高空作业平台',value:'gkzypt',active:false},
    {label:'地下铲运车',value:'dxcyc',active:false},
    {label:'地下矿卡',value:'dxkk',active:false},
    {label:'机场牵引车',value:'jcqyc',active:false},
    {label:'机场皮带传送车',value:'jcpdcsc',active:false},//
    {label:'机场电源车',value:'jcdyc',active:false},//
    {label:'机场平台车',value:'jcptc',active:false},//
    {label:'采棉机-打包',value:'cmjdb',active:false},
    {label:'采棉机-箱式',value:'cmjxs',active:false},//
    {label:'青储机',value:'qcj',active:false},
    {label:'空压机',value:'kyj',active:false},
    {label:'扫地车',value:'sdc',active:false},//
    {label:'叉车',value:'cc',active:false},
    {label:'叉装车',value:'czc',active:false},
  ])

  function choseDevice(item){
    deviceTypeList.value.forEach((n,i)=>{
      n.active = false
    })
    item.active = true
  }

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
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: left;
    .device {
      width: 26%;
      border: 1px solid #efefef;
      border-radius: 8px;
      text-align: center;
      padding: 10px 0 0px 0;
      margin-top: 10px;
      margin-left: 5%;
      overflow: hidden;
      >div {
        text-align: center;
        font-size: 11px;
        margin-top: 3px;
        padding-bottom: 8px;
        width: 100%;
      }
      img {
        margin: 0 auto;
        height: 50px;
        object-fit: contain;
      }
    }
    .active {
      border: 1px solid red;
      position: relative;
      background: #ffffff;
      .active-corner {
        position: absolute;
        right: -1px;
        bottom: -3px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
