<template>
  <view class="content">
    <div class="header">
      <img @click="goHome" src="../../../static/img/cummins.png">
      <span>经销商服务网 / 联系我们</span>
    </div>
    <div class="content-box">
      <div class="content-item">
        <h2 class="w-full p-2 title-container">
          <span class="ml-3 font-bold title">应用场景 <span @click="changeScenarios"> > </span></span>
        </h2>
        <div class="radio">
          <div  v-for="(item,index) in deviceTypeList" :class="item.active? 'active':''" @click="choseDevice(item)">{{item.label}}</div>
        </div>
        <h2 class="w-full p-2 title-container mt-2">
          <span class="ml-3 font-bold title">生产工厂</span>
        </h2>
        <div class="radio">
          <div class="active">福田康明斯</div>
          <div>东风康明斯</div>
          <div>广西康明斯</div>
        </div>
        <div>
          <h2 v-if="chosed == '履带式挖机'" class="w-full p-2 title-container mt-2">
            <span class="ml-3 font-bold title">操作重量</span>
            <span class="tar-value">{{priceValue[0]}}T - {{priceValue[1]}}T</span>
          </h2>
          <h2 v-else-if="chosed == '履带起重机'" class="w-full p-2 title-container mt-2">
            <span class="ml-3 font-bold title">起重重量</span>
            <span class="tar-value">{{priceValue[0]}}T - {{priceValue[1]}}T</span>
          </h2>
          <h2 v-else class="w-full p-2 title-container mt-2">
            <span class="ml-3 font-bold title">额定功率</span>
            <span class="tar-value">{{priceValue[0]}}kw - {{priceValue[1]}}kw</span>
          </h2>
        </div>
        <div class="slider" >
          <Slider v-model="priceValue" inactive-color="#fff" range @change="onChange"  active-color="#ee0a24">
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
          <Button class="w-full" style="margin-top: 15px"  type="danger" size="small" @click="changeScenarios">重置</Button>
        </div>
      </div>
      <div class="content-info">
        <h3>筛选标签</h3>
        <div class="chose">
          <div class="chose-item">挖掘机<img src="../../../static/img/delete.png"></div>
          <div class="chose-item">100-400kw<img src="../../../static/img/delete.png"></div>
          <div class="clear"><img src="../../../static/img/clear.png">清除全部</div>
        </div>
        <p class="chose-des"> 共有 <span>122</span> 个产品符合条件</p>
        <div class="product">
          <div class="prod-item">
            <img mode="widthFix" src="../../../static/img-web/product.png" />
            <div class="prod-info">
              <div class="info">
                <div>B7
                  <span class="prod-info-mid">广西康明斯生产</span>
                  <span class="prod-info-last">EPA 2024</span>
                </div>
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
              <div class="hover">
                <div @click="goDetail">查看详情</div>
              </div>
            </div>
          </div>
          <div class="prod-item">
            <img mode="widthFix" src="../../../static/img-web/product.png" />
            <div class="prod-info">
              <div class="info">
                <div>B7
                  <span class="prod-info-mid">广西康明斯生产</span>
                  <span class="prod-info-last">EPA 2024</span>
                </div>
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
              <div class="hover">
                <div @click="goDetail">查看详情</div>
              </div>
            </div>
          </div>
          <div class="prod-item">
            <img mode="widthFix" src="../../../static/img-web/product.png" />
            <div class="prod-info">
              <div class="info">
                <div>L9
                  <span class="prod-info-mid">广西康明斯生产</span>
                  <span class="prod-info-last">EPA 2024</span>
                </div>
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
              <div class="hover">
                <div @click="goDetail">查看详情</div>
              </div>
            </div>
          </div>
          <div class="prod-item">
            <img mode="widthFix" src="../../../static/img-web/product.png" />
            <div class="prod-info">
              <div class="info">
                <div>L9
                  <span class="prod-info-mid">广西康明斯生产</span>
                  <span class="prod-info-last">EPA 2024</span>
                </div>
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
              <div class="hover">
                <div @click="goDetail">查看详情</div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <Pagination v-model="currentPage"  force-ellipses :total-items="100" :items-per-page="5" />
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup>

  import { Slider,Icon,Button,Pagination } from 'vant'
  import 'vant/lib/index.css';
  import { useUserStore } from '@/store/user.js'
  import '@vant/touch-emulator';
  const user = useUserStore()

  const priceValue = ref([0,100])
  const showMore = ref(false)
  const currentPage = ref(1)
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

  const chosed = ref('履带式挖机')
  function choseDevice(item){
    deviceTypeList.value.forEach((n,i)=>{
      n.active = false
    })
    item.active = true
    chosed.value = item.label
  }

  function onChange(e){
    console.log(e)
    console.log(priceValue)
  }

  function changeScenarios(){
    showMore.value = !showMore.value
  }

  function goHome(){
    uni.reLaunch({
      url:'/pages/web/home/index'
    })
  }

  function goDetail(){
    uni.navigateTo({
      url:'/pages/web/detail/index'
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
.header {
  background: #000000;
  padding: 15px;
  img {
    cursor: pointer;
  }
  span {
    color: #ffffff;
    margin-left: 20px;
    position: relative;
    top: -8px;
  }
}
.content {
  background: url("../../../static/img/background.png") no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  .uni-slider-handle {
    z-index: 999;
  }
  .content-box{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .content-item {
    width: 23%;
    background: #efefef;
    margin-top: 15px;
  }
  .content-info {
    width: 73%;
    h3 {
      font-size: 18px;
      margin-top: 20px;
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
      .pagination {
        width: 100%;
        margin-top:30px;
        :deep(.van-pagination__items) {
          :deep(button) {
            background: #ffffff !important;
          }
        }
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
          width: 100%;
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
          font-size: 20px;
          padding: 15px 20px;
          font-weight: 700;
          .prod-info-mid {
            color: rgba(218, 41, 28, 1);
            border: 1px solid red;
            border-radius: 3px;
            background: rgba(218, 41, 28, 0.1);
            font-weight: 500;
            font-size: 12px;
            padding: 2px 6px;
            position: relative;
            top: -2px;
            left: 6px;
          }
          .prod-info-last {
            color: #ffffff;
            background: rgba(54, 206, 127, 1);
            font-size: 12px;
            padding: 2px 6px;
            float: right;
            border-radius: 3px;
            margin-right: 30px
          }
        }
        .specs {
          display: flex;
          flex-direction: row;
          justify-content: left;
          flex-wrap: wrap;
          color: #333;
          font-size: 16px;
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
            font-size: 15px;
            img {
              position: relative;
              top: 3px;
              margin-right: 5px;
              width: 20px;
            }
          }
          .specs-line2 {
            margin-top: 10px;
            font-size: 17px;
            color: #000;
            font-weight: 600;
            span {
              font-size: 18px;
            }
          }
          .specs-line3 {
            margin-top: 10px;
            color: #666666;
            font-size: 13px;
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
          text-align: center;
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
      width: 28%;
      font-size: 12px;
      background: #ffffff;
      text-align: center;
      padding: 6px 0;
      border-radius: 5px;
      margin-left: 10px;
      cursor: pointer;
    }
    .active {
      border:1px solid rgba(218, 41, 28, 1);
      color: rgba(218, 41, 28, 1);
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
  .chose-des {
    font-size: 13px;
    padding: 15px 15px;
    span {
      color:red
    }
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
        cursor: pointer;
      }
    }
    .clear{
      height: 20px;
      line-height: 20px;
      position: absolute;
      right: 10px;
      cursor: pointer;
      img{
        position: relative;
        top: 4px;
      }
    }
  }
}

:root:root {
  --van-pagination-item-default-color: rgba(255, 0, 0, 0.2);
}
</style>
