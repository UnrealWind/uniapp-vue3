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
      <div class="device-item" v-for="(item,index) in recommandProductSceneList">
        <img @click="goFilter(item)" mode="widthFix" :src="`../../../static/img/${item.sceneCode}.png`" />
        <p class="p">{{item.sceneName}}</p>
      </div>
    </div>
    <h2 class="p-2 title-container">
      <span class="ml-3 font-bold title">推荐产品</span>
      <span @click="goFilter()" class="more">更多产品 ></span>
    </h2>
    <div class="product">
      <div @click="goDetail(item)" class="prod-item" v-for="(item,index) in recommandSpec">
        <img mode="widthFix" :src="item.file" />
        <div class="prod-info">
          <div class="info">
            <div>{{item.productName}} ({{item.ratedHorsepower}}hp) </div>
            <div>{{item.ratedPower}}kw</div>
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
import request from '@/utils/request'

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

const recommandProductSceneList = ref([])
function getRecommandProductSceneList(){
  request({
    url: 'dapi/scene/getRecommandProductSceneList',
    method: 'get',
    params: {},
  }).then((res)=>{
    recommandProductSceneList.value = res.data
  })
}

const recommandSpec = ref([])

function getRecommandSpec(){
  request({
    url: 'dapi/productSpec/getRecommandSpec',
    method: 'get',
    params: {},
  }).then((res)=>{
    recommandSpec.value = res.data
  })
}

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

function goDetail(item){
  uni.navigateTo({
    url:'/pages/mobile/detail/index'
  })
}

function change(e){
  current.value = e.detail.current;
}

onMounted(() => {
  getRecommandProductSceneList()
  getRecommandSpec()
});

</script>


<style lang="scss" scoped>
@import "index.scss";
</style>
