<template>
  <view class="content">
    <div  style="height: 85vh;overflow-y: scroll" >
      <swiper class="swiper-box" autoplay="true" interval="3000" @change="change">
        <swiper-item v-for="(item,index) in detailInfo.files">
          <view class="swiper-item">
            <img class="" :src="item.filePath" />
          </view>
        </swiper-item>
      </swiper>

      <div class="detail-info">
        <h2 class="h2" v-if="detailInfo.doemProduct">{{detailInfo.doemProduct.name}} ( {{detailInfo.ratedPower}}kw/{{detailInfo.ratedHorsepower}}hp )</h2>
        <h3  class="h3">
          <span>规格</span>
          <span v-if="detailInfo.specList" @click="showSpecification = true" class="right-fix text-red-500">选择规格 (共{{detailInfo.specList.length}}款) > </span>
        </h3>
        <div class="specs">
          <div>
            <div class="specs-line1"><img class="img" mode="widthFix" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/power.png')">额定功率</div>
            <div class="specs-line2">{{detailInfo.ratedHorsepower}}<span>hp</span></div>
            <div class="specs-line3">{{detailInfo.ratedPower}}<span>kw</span></div>
          </div>
          <div>
            <div class="specs-line1"><img class="img" mode="widthFix" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/torque.png')">扭矩</div>
            <div class="specs-line2">{{detailInfo.maxTorque}}<span>n·m</span></div>
            <div class="specs-line3">{{detailInfo.maxTorqueSpeedMin}}-{{detailInfo.maxTorqueSpeedMax}}<span>rpm</span></div>
          </div>
          <div>
            <div class="specs-line1"><img class="img" mode="widthFix" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/rotate.png')">额定转速</div>
            <div class="specs-line2">{{detailInfo.ratedSpeed}}<span>rpm</span></div>
          </div>
        </div>
        <div class="detail-para" v-if="detailInfo.doemProduct">
          <h3  class="h3">详细参数</h3>
          <div class="div"><img class="img" mode="widthFix" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/size.png')">
            尺寸（长*宽*高 mm）<span class="span">{{detailInfo.doemProduct['length']}}*{{detailInfo.doemProduct.width}}*{{detailInfo.doemProduct.height}}</span></div>
          <div class="div"><img class="img" mode="widthFix" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/weight.png')">重量<span class="span">{{detailInfo.doemProduct.weight}}kg</span></div>
          <div class="div"><img class="img" mode="widthFix" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/way.png')">技术路线<span class="span">{{detailInfo.emissionControlRoutes}}</span></div>
        </div>
        <div class="scenario">
          <h3  class="h3">适用应用场景</h3>
          <div v-for="(item,index) in detailInfo.sceneList" class="div">
            <i class="i">{{item.sceneName}}</i>
            <span class="span">{{item.matchFilters[0].valueEnum?item.matchFilters[0].valueEnum: item.matchFilters[0].valueMin + '-' + item.matchFilters[0].valueMax + item.matchFilters[0].filterUnit}}</span>
            <span class="span text-gray-500">标准吨位：</span>
          </div>

        </div>
        <div class="tec" v-if="detailInfo.doemProduct">
          <h3  class="h3">技术特点</h3>
          <rich-text  type="text" :nodes="detailInfo.doemProduct.features"></rich-text>
        </div>
      </div>
    </div>
    <div class="footer-btn fixed" style="width: 100%;">
      <button v-if="systype == 'h5'" @click="showMessage=true" class="btn-mid">
        <img class="img" mode="widthFix" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/consultation.png')">留言咨询</button>
      <button v-if="systype == 'mp' && !commitInfo.phone" open-type="getPhoneNumber" @getphonenumber="getPhoneNum" class="btn-mid">
        <img class="img" mode="widthFix" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/consultation.png')">留言咨询</button>
      <button v-if="systype == 'mp' && commitInfo.phone" @click="showMessage=true" class="btn-mid">
        <img class="img" mode="widthFix" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/consultation.png')">留言咨询</button>
      <button @click="showCall=true" class="btn-mid">
        <img class="img" mode="widthFix" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/phone.png')">电话咨询</button>
    </div>
    <div v-show="showSpecification" class="specification">
      <div :class="showSpecification?'active':''" class="info-part">
        <div class="info">
          <h3  class="h3">选择规格 <img class="img" @click="showSpecification = false" style="float: right" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/close.png')"></h3>
          <h4 class="h4">所有规格（共{{specList.length}}款）</h4>
          <div v-for="(item,index) in specList" @click="changeProdSpecId(item)" class="specs" :class="item.prodSpecId == prodSpecId ?'active':''">
            <div >
              <div class="specs-line1"><img class="img" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/power.png')">额定功率</div>
              <div class="specs-line2">{{item.ratedHorsepower}}<span>hp</span></div>
              <div class="specs-line3">{{item.ratedPower}}<span>kw</span></div>
            </div>
            <div>
              <div class="specs-line1"><img class="img" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/torque.png')">扭矩</div>
              <div class="specs-line2">{{item.maxTorque}}<span>n·m</span></div>
              <div class="specs-line3">{{item.maxTorqueSpeedMin}}-{{item.maxTorqueSpeedMax}}<span>rpm</span></div>
            </div>
            <div>
              <div class="specs-line1"><img class="img" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/rotate.png')">额定转速</div>
              <div class="specs-line2">{{item.ratedSpeed}}<span>rpm</span></div>
            </div>
            <span v-if="item.prodSpecId == prodSpecId" class="active-corner">
              <img class="img" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/active-corner.png')">
            </span>
          </div>
          <div style="height: 90px"></div>
          <div class="footer-btn fixed">
            <div @click="showSpecification= false" class="btn-large">确定</div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showMessage" class="message">
      <div :class="showMessage?'active':''" class="info-part">
        <div class="info">
          <h3  class="h3">留言咨询 <img class="img" @click="showMessage = false" style="float: right" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/close.png')"></h3>
          <h4 class="h4">{{detailInfo.doemProduct.name}}</h4>
          <div class="des">{{detailInfo.ratedPower}}kw/{{detailInfo.ratedHorsepower}}hp</div>
          <div class="form">
            <div class="form-item">
              <div class="label"><span class="text-red-500">*</span> 姓名</div>
              <input class="uni-input input-item" :value="commitInfo.name" @input="input($event,'name')" placeholder="请输入您的姓名" />
            </div>
            <div class="form-item">
              <div class="label"><span class="text-red-500">*</span> 手机号码</div>
              <input type="number" maxlength="11" :value="commitInfo.phone" @input="input($event,'phone')" class="uni-input input-item" placeholder="请留下您的手机号码" />
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
          <h4 class="h4">{{detailInfo.doemProduct.name}}</h4>
          <div class="des">{{detailInfo.ratedPower}}kw/{{detailInfo.ratedHorsepower}}hp</div>
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

  import { getCurrentInstance, onMounted } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()
  import request from '@/utils/request'
  import cityPicker from './components/piaoyi-cityPicker/piaoyi-cityPicker'

  import {getAssetsFile} from "@/utils/pub-tool";

  function getImg(url){
    if(systype.value == 'mp') return url
    return getAssetsFile(url)
  }

  let current = ref(0)
  let strs = ref('<p class="p"><span style="font-size: 13px;"><strong>可靠耐久</strong></span></p><p class="p"><span style="font-size: 13px;">通过近5000小时的可靠性路试验证，以及包括极端冷热冲击、工业循环、热箱试验和冷启动在内的近10000小时台架测试。</span></p><p class="p"><span style="font-size: 13px;"><strong>强劲高效</strong></span></p><p class="p"><span style="font-size: 13px;">新一代高效涡轮增压器，采用前言技术和工艺，全新优化的流道机叶轮型线设计，兼顾高、低速相应需求，显著提升节油和瞬态响应性，效率更高。</span></p><p class="p"><span style="font-size: 13px;"><strong>经济节省</strong></span></p><p class="p"><span style="font-size: 13px;">更广泛的经济油耗区，实现作业效率、效能和经济效益的最佳平衡；热管理能力更强，可靠性更高；采用康明斯超高压燃油系统XPI，采用先进的保压技术，实现超高压喷射，优化喷射角度，在提升燃油经济性的同时降低排放；高压缩比，全新活塞设计，燃烧效率更高，更节油。</span></p><p class="p"><span style="font-size: 13px;"><strong>高智能</strong></span></p><p class="p"><span style="font-size: 13px;">高端智能控制系统，与整机系统无缝链合，提供多达100项电控可选参数进行差异化定制，适配性更强，应用更广泛；康明斯数字化远程在线技术（OTA），能够实现工程设备在用期间的实时升级。</span></p><p class="p"><span style="font-size: 13px;"><strong>全面呵护</strong></span></p><p class="p"><span style="font-size: 13px;">根据中国油品使用现状，设置智能系统的提示功能，提示用户使用合格油品，保护发动机和整机系统正常运行，使用寿命更长；康明斯远程数字化诊断技术，自诊断、自维护能力更强，整机设备高效出勤更有保障。</span></p><p class="p"><span style="font-size: 13px;"><strong>高适应性</strong></span></p><p class="p"><span style="font-size: 13px;">高寒适应性强，胜任零下40度工况作业，零下30度无需辅助加热器启动更轻松；高原适应性强，500米海拔无降扭，胜任4500米海拔作业。</span></p>')

  let showSpecification =ref(false)
  let showMessage = ref(false)
  let showCall = ref(false)
  let showTips = ref(false)


  let visible = ref(false)
  let maskCloseAble = ref(true)
  let str = ref('')
  let defaultValue = ref('')
  let column = ref(3)

  const info = ref( [{
      url: 'https://uat.cs.cummins.com.cn/doem-h5/static/img/B7-icon.png',
      content: '传承经典，洞悉创编/打造面向燃油四阶段，全新系列发动机',
    }
  ])

  let prodSpecId = ref('')
  const detailInfo = ref({})
  function getProductSpec(){
    request({
      url: 'dapi/productSpec/'+ prodSpecId.value,
      method: 'get',
      params: {},
    }).then((res)=>{
      detailInfo.value = res.data
      getSpecByProductId()
    })
  }

  const specList = ref([])
  function getSpecByProductId(){
    request({
      url: 'dapi/productSpec/getSpecByProductId/'+ detailInfo.value.doemProduct.prodId,
      method: 'get',
      params: {},
    }).then((res)=>{
      specList.value= res.data
      console.log(specList.value)
    })
  }

  function changeProdSpecId(item){
    prodSpecId.value = item.prodSpecId
    getProductSpec()
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

  function makePhoneCall(phone){
    uni.makePhoneCall({phoneNumber:phone+''})
  }

  function change(e){
    current.value = e.detail.current;
  }

  function goPrivacy(){
    uni.navigateTo({
      url:'/pages/mobile/privacy/index'
    })
  }

  function getPhoneNum(e){
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
  onLoad((opt) => {
    let option = getCurrentInstance()
    prodSpecId.value = option.attrs.prodSpecId || opt.prodSpecId
    commitInfo.value.phone = uni.getStorageSync('phone')
    getProductSpec()
    uni.getSystemInfo({
      success:(res)=>{
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
 @import "index";
</style>
