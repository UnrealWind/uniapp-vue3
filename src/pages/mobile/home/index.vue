<template>
  <view class="content">
    <swiper class="swiper-box" autoplay="true" interval="3000" @change="change">
      <swiper-item  @click="goFilter({sceneCode:''})">
        <view class="swiper-item">
          <img class="w-full h-full" :src="getImg(info[0].url)" />
          <p class="p">{{info[0].content}}</p>
        </view>
      </swiper-item>
      <swiper-item  @click="goFilter({sceneCode:''})">
        <view class="swiper-item">
          <img class="w-full h-full" :src="getImg(info[1].url)" />
          <p class="p" style="color: #c9c9c9">{{info[1].content}}</p>
        </view>
      </swiper-item>
    </swiper>
    <h2 class="p-2 fix-margin title-container">
      <span class="ml-3 font-bold title">适用于各种场景的动力系统</span>
      <span @click="goFilter({sceneCode:''})" class="more">更多应用场景 ></span>
    </h2>
    <div class="device">
      <div class="device-item" v-for="(item,index) in recommandProductSceneList">
        <img @click="goFilter(item)" mode="widthFix" :src="getImg(`https://uat.cs.cummins.com.cn/doem-h5/static/img/${item.sceneCode}.png`)" />
        <p class="p">{{item.sceneName}}</p>
      </div>
    </div>
    <h2 class="p-2 title-container">
      <span class="ml-3 font-bold title">推荐产品</span>
      <span @click="goFilter({sceneCode:''})" class="more">更多产品 ></span>
    </h2>
    <div class="product mt-1">
      <div @click="goDetail(item)" class="prod-item" v-for="(item,index) in recommandSpec">
        <img v-if="item.files && item.files.length" mode="widthFix" :src="getImg(item.files[0].filePath)" />
        <div class="prod-info">
          <div class="info">
            <div>{{item.productName}} ({{item.ratedHorsepower}}hp) </div>
            <div>{{item.ratedPower}}kw</div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-btn">
      <div @click="goFilter({sceneCode:''})" class="btn-large">帮我推荐</div>
      <div v-if="systype == 'h5'" @click="showMessage=true" class="btn-mid">留言咨询</div>
      <button v-if="systype == 'mp' && !commitInfo.phone" open-type="getPhoneNumber" @getphonenumber="getPhoneNum" class="btn-mid">留言咨询</button>
      <button v-if="systype == 'mp' && commitInfo.phone" @click="showMessage=true" class="btn-mid">留言咨询</button>
      <button @click="showCall=true" class="btn-mid">电话咨询</button>
    </div>

    <div v-if="showMessage" class="message">
      <div :class="showMessage?'active':''" class="info-part">
        <div class="info">
          <h3  class="h3">留言咨询 <img class="img" @click="showMessage = false" style="float: right" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/close.png')"></h3>
<!--          <h4 class="h4">{{detailInfo.doemProduct.name}}</h4>-->
<!--          <div class="des">{{detailInfo.ratedPower}}kw/{{detailInfo.ratedHorsepower}}hp</div>-->
          <div class="form">
            <div class="form-item">
              <div class="label"><span class="text-red-500">*</span> 姓名</div>
              <input class="uni-input input-item" :value="commitInfo.name" @input="input($event,'name')" placeholder="请输入您的姓名" />
            </div>
            <div class="form-item">
              <div class="label"><span class="text-red-500">*</span> 手机号码</div>
              <input type="number"  maxlength="11" :value="commitInfo.phone" @input="input($event,'phone')" class="uni-input input-item" placeholder="请留下您的手机号码" />
            </div>
            <div class="form-item">
              <div class="label"><span class="text-red-500">*</span> 所在地区</div>
              <input :disabled="true" class="uni-input input-item" :value="commitInfo.areas" @click="visible = true"  placeholder="请留下您的所在地区" />
              <cityPicker :column="column" :default-value="defaultValue" :mask-close-able="maskCloseAble" @confirm="confirm" @cancel="visible = false" :visible="visible"/>
            </div>
            <div class="form-item">
              <div class="label"><span class="text-red-500">*</span> 使用场景</div>
              <input class="uni-input input-item" :value="commitInfo.scene" @input="input($event,'scene')" placeholder="请留下您的使用场景" />
            </div>
            <div class="form-item">
              <div class="label"><span class="text-red-500">*</span> 留言</div>
              <textarea class="input-item text-area" :value="commitInfo.message" @input="input($event,'message')"  auto-height placeholder="请输入留言..." maxlength="-1" />
            </div>
          </div>
          <div class="footer-btn fixed">
            <checkbox-group class="checkPrivacy-box" @change="changeCheckBox">
              <label>
                <checkbox class="check-box" value="1" :checked="checkPrivacy.length" color="#FFCC33" style="transform:scale(0.7)"/>同意为您提供产品咨询服务
              </label>
            </checkbox-group>
            <div @click="commit"  class="btn-large">提交</div>
            <div class="privacy">Cummins将严格遵循<span @click="goPrivacy" style="color: rgba(218, 41, 28, 1)">《隐私政策》</span>保证您的信息安全</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showCall" class="message">
      <div :class="showCall?'active':''" class="info-part">
        <div class="info">
          <h3  class="h3">电话咨询 <img class="img" @click="showCall = false" style="float: right" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/close.png')"></h3>
<!--          <h4 class="h4">{{detailInfo.doemProduct.name}}</h4>-->
<!--          <div class="des">{{detailInfo.ratedPower}}kw/{{detailInfo.ratedHorsepower}}hp</div>-->
          <div class="contact-list">
            <div class="contact">
              <div class="img-box">
                <img class="img" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/user.png')">
              </div>
              <div class="contact-info">
                <p class="p">张延昭</p>
                <p class="p">AE（北区）</p>
              </div>
              <div class="contact-btn">
                <img class="img" @click="showMessage = true,showCall=false" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/consultation-red.png')">
                <img class="img" style="margin-right: 0" @click="makePhoneCall(15810139248)" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/phone-red.png')">
              </div>
            </div>
            <div class="contact">
              <div class="img-box">
                <img class="img" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/user.png')">
              </div>
              <div class="contact-info">
                <p class="p">王建平</p>
                <p class="p">AE（南区）</p>
              </div>
              <div class="contact-btn">
                <img class="img" @click="showMessage = true,showCall=false" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/consultation-red.png')">
                <img class="img" style="margin-right: 0" @click="makePhoneCall(13671669950)" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/phone-red.png')">
              </div>
            </div>
            <div class="contact">
              <div class="img-box">
                <img class="img" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/user.png')">
              </div>
              <div class="contact-info">
                <p class="p">杨懿</p>
                <p class="p">AE（西区）</p>
              </div>
              <div class="contact-btn">
                <img class="img" @click="showMessage = true,showCall=false" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/consultation-red.png')">
                <img class="img" style="margin-right: 0" @click="makePhoneCall(18615711430)" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/phone-red.png')">
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
import cityPicker from '../detail/components/piaoyi-cityPicker/piaoyi-cityPicker'
import {getAssetsFile} from "@/utils/pub-tool";

function getImg(url){
  if(systype.value == 'mp') return url
  return getAssetsFile(url)
}

let current = ref(0)
let visible = ref(false)

const info = ref( [{
  url: 'https://uat.cs.cummins.com.cn/doem-h5/static/img/swiper1.png',
  content: '传承经典，洞悉创编/打造面向燃油四阶段，全新系列发动机',
},
  {
    url: 'https://uat.cs.cummins.com.cn/doem-h5/static/img/swiper2.png',
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

const checkPrivacy = ref([])
function changeCheckBox(e){
  checkPrivacy.value = e.detail.value
}
function confirm(val){
  commitInfo.value.province = val.provinceName
  commitInfo.value.city = val.cityName
  commitInfo.value.county = val.areaName
  commitInfo.value.areas = val.name
  visible.value = false
}
const commitInfo = ref({
  "name":"",
  "phone":"",
  "message":"",
  "province":"",
  "city":"",
  "county":"",
  "scene":"",
  "areas":''
})
function input(e,tar){
  commitInfo.value[tar] = e.detail.value
}
let commiting = false
function commit(){
  if(commiting) return;
  let jud = {
    "name":"请输入您的姓名",
    "phone":"请留下您的手机号码  ",
    "areas":'请留下您的所在地区',
    "scene":"请留下您的使用场景",
    "message":"请输入留言"
  }
  for(let i in commitInfo.value){
    if(!commitInfo.value[i]){
      uni.showToast({
        icon:'none',
        title: jud[i],
        duration:2000
      })
      return
    }
  }
  if(!checkPrivacy.value.length){
    uni.showToast({
      title: '请点击同意为您提供产品咨询服务 !',
      icon: 'none',
      duration: 2000
    })
    return
  }
  commiting = true
  request({
    url: 'dapi/message',
    method: 'post',
    params: {},
    data:commitInfo.value
  }).then((res)=>{
    commiting = false
    showMessage.value = false,
    showTips.value = true
    commitInfo.value = {
      "name":"",
      "phone":"",
      "message":"",
      "province":"",
      "city":"",
      "county":"",
      "scene":"",
      "areas":''
    }
    checkPrivacy.value = []
  })
}
function makePhoneCall(phone){
  uni.makePhoneCall({phoneNumber:phone+''})
}

function goFilter(item){
  if(systype.value == 'mp'){
    uni.setStorageSync('sceneCode', item.sceneCode);
    uni.navigateTo({
      url:'/pages/mobile/filter-mp/index?sceneCode='+item.sceneCode
    })
  }else if(systype.value == 'h5'){
    uni.navigateTo({
      url:'/pages/mobile/filter-h5/index?sceneCode='+item.sceneCode,
    })
  }
}

let showMessage = ref(false)
let showCall = ref(false)
let showTips = ref(false  )

function goDetail(item){
  uni.navigateTo({
    url:'/pages/mobile/detail/index?prodSpecId='+item.prodSpecId
  })
}

function goPrivacy(){
  uni.navigateTo({
    url:'/pages/mobile/privacy/index'
  })
}

function change(e){
  current.value = e.detail.current;
}

function getPhoneNum(e){
  console.log(e,1111111111)
  if(!e.detail.code || commitInfo.value.phone){
    showMessage.value = true
    return
  }
  wx.login({
    success: async (res) => {
      request({
        url: 'dapi/weixin/getPhoneNumber',
        method: 'post',
        params: {},
        data:{
          code:e.detail.code
        }
      }).then((res)=>{
        console.log(res.data.phone_info.phoneNumber)
        commitInfo.value.phone = res.data.phone_info.phoneNumber
        uni.setStorageSync('phone', commitInfo.value.phone);
        showMessage.value = true
      })
    },
  })
}

let systype = ref('h5')
onMounted(() => {
  getRecommandProductSceneList()
  getRecommandSpec()

  uni.getSystemInfo({
    success:(res)=>{
      console.log(res,11111111111111)
      if(res.uniPlatform == 'mp-weixin'){
        systype.value = 'mp'
      }else if(res.uniPlatform == 'web'){
        systype.value = 'h5'
      }
    }
  })

});

</script>


<style lang="scss" scoped>
@import "index.scss";
</style>
