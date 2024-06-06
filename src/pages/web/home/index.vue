<template>
  <view class="content">
    <div class="info-box" style="height: 88vh;overflow-y: scroll;">
      <div class="header">
        <img @click="goHome" src="../../../static/img/cummins.png">
        <span>
        <span style="cursor: pointer" @click="goProtal">经销商服务网</span>
        <span @click="showMessage = true" style="cursor: pointer">联系我们</span>
      </span>
      </div>
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
      <div style="padding: 0 200px">
        <h2 class="w-full fix-margin title-container">
          <p class="ml-3 font-bold title">适用于各种场景的动力系统</p>
          <span>从装载机到挖掘机和起重机，康明斯发动机几乎可以在所有可以想象到的应用场景中找到。</span>
        </h2>
        <div class="device">
          <div class="device-item" v-for="(item,index) in recommandProductSceneList">
            <img @click="goFilter(item)" mode="widthFix" :src="`../../../static/img-web/device/${item.sceneCode}.png`" />
            <p class="p">{{item.sceneName}}</p>
          </div>
          <div  @click="goFilter" class="more">查看应用场景 ></div>
        </div>

        <h2 class="w-full title-container mt-16">
          <p class="ml-3 font-bold title">热门产品</p>
        </h2>
        <div class="product">
          <div class="prod-item" v-for="(item,index) in recommandSpec">
            <img mode="widthFix" src="../../../static/img-web/product.png" />
            <div class="prod-info">
              <div class="info">
                <div>{{item.productName}} </div>
              </div>
              <div class="specs">
                <div>
                  <div class="specs-line1"><img src="../../../static/img/power.png">功率</div>
                  <div class="specs-line2">{{item.ratedHorsepower}}<span>hp</span></div>
                  <div class="specs-line3">{{item.ratedPower}}<span>kw</span></div>
                </div>
                <div>
                  <div class="specs-line1"><img src="../../../static/img/torque.png">最大扭矩</div>
                  <div class="specs-line2">{{item.maxTorque}}<span>n·m</span></div>
                  <div class="specs-line3">{{item.ratedSpeed}}<span>rpm</span></div>
                </div>
              </div>
              <div class="btn-des">
                <span v-for="(opt,i) in item.sceneList">{{opt.sceneName}}</span>
              </div>
            </div>
            <div class="hover">
              <div @click="goDetail(item)">查看详情</div>
            </div>
          </div>
          <div class="footer">
            <div @click="goFilter" class="more">查看更多推荐 ></div>
          </div>
        </div>
      </div>

      <div v-show="showMessage" class="message">
        <div :class="showMessage?'active':''" class="info-part">
          <div class="info">
            <h3>留言咨询  <img @click="showMessage = false" style="float: right" src="../../../static/img/close.png"></h3>
<!--            <h4>{{detailInfo.doemProduct.name}}</h4>-->
<!--            <div class="des">{{detailInfo.ratedPower}}kw/{{detailInfo.ratedHorsepower}}hp</div>-->
            <div class="form" style="margin-top: 20px;">
              <div class="form-item">
                <div class="label"><span class="text-red-500">*</span> 姓名</div>
                <input class="uni-input input-item" :value="commitInfo.name" @input="input($event,'name')" placeholder="请输入您的姓名" />
              </div>
              <div class="form-item">
                <div class="label"><span class="text-red-500">*</span> 手机号码</div>
                <input maxlength="11" type="number" :value="commitInfo.phone" @input="input($event,'phone')" class="uni-input input-item" placeholder="请留下您的手机号码" />
              </div>
              <div class="form-item">
                <div class="label"><span class="text-red-500">*</span> 所在地区</div>
                <input class="uni-input input-item" :value="commitInfo.areas" @click="visible = true"  placeholder="请留下您的所在地区" />
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
            <div class="footer-btn fixed-circle">
              <checkbox-group class="checkPrivacy-box" @change="changeCheckBox">
                <label>
                  <checkbox class="check-box" value="1" :checked="checkPrivacy.length" color="#FFCC33" style="transform:scale(0.7)"/>同意为您提供产品咨询服务
                </label>
              </checkbox-group>
              <div @click="commit"  class="btn-large">提交</div>
              <div class="privacy">Cummins将严格遵循<span>《隐私政策》</span>保证您的信息安全</div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="showCall" class="message">
        <div :class="showCall?'active':''" class="info-part">
          <div class="info">
            <h3>电话咨询  <img @click="showCall = false" style="float: right" src="../../../static/img/close.png"></h3>
<!--            <h4>B7</h4>-->
<!--            <div class="des">126Kw/2000rpm</div>-->
            <div class="contact-list">
              <div class="contact">
                <div class="img-box">
                  <img src="../../../static/img-web/user.png">
                </div>
                <div class="contact-info">
                  <p>张延昭 （15810139248）</p>
                  <p>AE（北区）</p>
                </div>
                <div class="contact-btn">
                  <img @click="showMessage = true,showCall=false" src="../../../static/img-web/consultation-red.png">
                </div>
              </div>
              <div class="contact">
                <div class="img-box">
                  <img src="../../../static/img-web/user.png">
                </div>
                <div class="contact-info">
                  <p>王建平 （13671669950）</p>
                  <p>AE（南区）</p>
                </div>
                <div class="contact-btn">
                  <img @click="showMessage = true,showCall=false" src="../../../static/img-web/consultation-red.png">
                </div>
              </div>
              <div class="contact">
                <div class="img-box">
                  <img src="../../../static/img-web/user.png">
                </div>
                <div class="contact-info">
                  <p>杨懿 （18615711430）</p>
                  <p>AE（西区）</p>
                </div>
                <div class="contact-btn">
                  <img @click="showMessage = true,showCall=false" src="../../../static/img-web/consultation-red.png">
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
  import { Popup, Cascader} from 'vant'
  import 'vant/lib/index.css';
  import {useCascaderAreaData} from "@vant/area-data";
  import request from '@/utils/request'
  import cityPicker from '../../mobile/detail/components/piaoyi-cityPicker/piaoyi-cityPicker'

  let current = ref(0)
  let showMessage = ref(false)
  let showCall = ref(false)
  let showTips = ref(false)
  let showArea = ref(false)

  const fieldValue = ref('');
  const cascaderValue = ref('');
  const options = useCascaderAreaData();

  const onFinish = ({ selectedOptions }) => {
    showArea.value = false;
    fieldValue.value = selectedOptions.map((option) => option.text).join('/');
  };

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

  const info = ref([{
      url: '../../../static/img-web/swiper1.png',
      content: '传承经典，洞悉创编/打造面向燃油四阶段，全新系列发动机',
    },
    {
      url: '../../../static/img-web/swiper2.png',
      content: '凭借 100 多年的创新和为全球应用提供动力的经验，康明斯提供了运营商所期望的可靠性和耐用性'
    }])

  function goProtal(){
    window.location.href = 'https://cs.cummins.com.cn/dealer-portal/#/dealer-home/index'
  }

  function goHome(){
    uni.reLaunch({
      url:'/pages/web/home/index'
    })
  }

  function goFilter(item){
    uni.navigateTo({
      url:'/pages/web/product/index?sceneCode='+item.sceneCode
    })
  }

  function goDetail(item){
    uni.navigateTo({
      url:'/pages/web/detail/index?prodSpecId='+item.prodSpecId
    })
  }

  // 留言部分
  let visible = ref(false)
  let maskCloseAble = ref(true)
  let str = ref('')
  let defaultValue = ref('')
  let column = ref(3)

  function change(e){
    current.value = e.detail.current;
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
    for(let i in jud){
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

  onMounted(() => {
    getRecommandProductSceneList()
    getRecommandSpec()
  });

</script>


<style lang="scss" scoped>
 @import "index.scss";
</style>
