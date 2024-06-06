<template>
  <view class="content">

    <div style="height: 85vh;overflow-y: scroll;">
      <div class="header">
        <img @click="goHome" src="../../../static/img/cummins.png">
        <span>
          <span style="cursor: pointer" @click="goProtal">经销商服务网</span>
          <span @click="showMessage = true" style="cursor: pointer">联系我们</span>
        </span>
      </div>
      <div class="detail-info">
        <div class="detail-left">
          <img mode="widthFix" src="../../../static/img-web/product.png" />
        </div>
        <div class="detail-right">
          <h2 v-if="detailInfo.doemProduct">{{detailInfo.doemProduct.name}} ( {{detailInfo.ratedPower}}kw/{{detailInfo.ratedHorsepower}}hp )</h2>
          <h3>
            <span>规格</span>
            <span v-if="detailInfo.specList" @click="showSpecification = true" class="specs-btn right-fix text-red-500">选择规格 (共{{detailInfo.specList.length}}款)</span>
          </h3>
          <div class="specs">
            <div >
              <div><img src="../../../static/img-web/power.png"></div>
              <div>
                <div class="specs-line1">额定功率</div>
                <div class="specs-line2">{{detailInfo.ratedHorsepower}}<span>hp</span></div>
                <div class="specs-line3">{{detailInfo.ratedPower}}<span>kw</span></div>
              </div>
            </div>
            <div>
              <div><img src="../../../static/img-web/torque.png"></div>
              <div>
                <div class="specs-line1">扭矩</div>
                <div class="specs-line2">{{detailInfo.maxTorque}}<span>n·m</span></div>
                <div class="specs-line3">{{detailInfo.maxTorqueSpeedMin}}-{{detailInfo.maxTorqueSpeedMax}}<span>rpm</span></div>
              </div>
            </div>
            <div>
              <div>
                <img src="../../../static/img-web/rotate.png">
              </div>
              <div>
                <div class="specs-line1">额定转速</div>
                <div class="specs-line2">{{detailInfo.ratedSpeed}}<span>rpm</span></div>
              </div>
            </div>
          </div>
          <div class="detail-para">
            <h3>详细参数</h3>
            <div><img src="../../../static/img/size.png">尺寸（长*宽*高 mm）
              <span>{{detailInfo.doemProduct['length']}}*{{detailInfo.doemProduct.width}}*{{detailInfo.doemProduct.height}}</span>
            </div>
            <div><img src="../../../static/img/weight.png">重量<span>{{detailInfo.doemProduct.weight}}kg</span></div>
            <div><img src="../../../static/img/way.png">技术路线<span>{{detailInfo.emissionControlRoutes}}</span></div>
          </div>
          <div class="scenario">
            <h3>适用应用场景</h3>
            <div v-for="(item,index) in detailInfo.sceneList">
              <i>{{item.sceneName}}</i><span class="text-gray-500">标准吨位： &nbsp;<span class="text-gray-900">
              {{item.matchFilters[0].valueEnum?item.matchFilters[0].valueEnum: item.matchFilters[0].valueMin + '-' + item.matchFilters[0].valueMax + item.matchFilters[0].filterUnit}}</span></span></div>
<!--            <div><i>旋挖钻机</i><span>360R</span><span class="text-gray-500">标称转矩：</span></div>-->
<!--            <div><i>采棉机</i><span>6</span><span class="text-gray-500">作业行数（行箱式）：</span></div>-->
          </div>
        </div>
        <div class="tec">
          <h3>技术特点</h3>
          <rich-text :nodes="detailInfo.doemProduct.features"></rich-text>
        </div>
      </div>
    </div>

    <div v-show="showSpecification" class="specification">
      <div :class="showSpecification?'active':''" class="info-part">
        <div class="info">
          <h3>选择规格 <img @click="showSpecification = false" style="float: right" src="../../../static/img/close.png"></h3>
          <h4>所有规格（共{{specList.length}}款）</h4>
          <div class="info-list">
            <div v-for="(item,index) in specList" @click="changeProdSpecId(item)" class="specs" :class="item.prodSpecId == prodSpecId ?'active':''">
              <div>
                <div><img src="../../../static/img-web/power.png"></div>
                <div>
                  <div class="specs-line1">额定功率</div>
                  <div class="specs-line2">{{item.ratedHorsepower}}<span>hp</span></div>
                  <div class="specs-line3">{{item.ratedPower}}<span>kw</span></div>
                </div>
              </div>
              <div>
                <div><img src="../../../static/img-web/torque.png"></div>
                <div>
                  <div class="specs-line1">扭矩</div>
                  <div class="specs-line2">{{item.maxTorque}}<span>n·m</span></div>
                  <div class="specs-line3">{{item.maxTorqueSpeedMin}}-{{item.maxTorqueSpeedMax}}<span>rpm</span></div>
                </div>
              </div>
              <div style="position:relative;">
                <div>
                  <img src="../../../static/img-web/rotate.png">
                </div>
                <div>
                  <div class="specs-line1">额定转速</div>
                  <div class="specs-line2">{{item.ratedSpeed}}<span>rpm</span></div>
                </div>
                <span class="active-corner" v-if="item.prodSpecId == prodSpecId" >
                  <img src="../../../static/img/active-corner.png">
                </span>
              </div>
            </div>
          </div>
          <div class="footer-btn fixed-circle">
            <div @click="showSpecification= false" class="btn-large">确定</div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="showMessage" class="message">
      <div :class="showMessage?'active':''" class="info-part">
        <div class="info">
          <h3>留言咨询  <img @click="showMessage = false" style="float: right" src="../../../static/img/close.png"></h3>
          <h4>{{detailInfo.doemProduct.name}}</h4>
          <div class="des">{{detailInfo.ratedPower}}kw/{{detailInfo.ratedHorsepower}}hp</div>
          <div class="form">
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
          <h4>{{detailInfo.doemProduct.name}}</h4>
          <div class="des">{{detailInfo.ratedPower}}kw/{{detailInfo.ratedHorsepower}}hp</div>
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

  import { Popup, Cascader} from 'vant'
  import { useUserStore } from '@/store/user.js'
  import { useCascaderAreaData } from '@vant/area-data';
  import 'vant/lib/index.css';
  import request from '@/utils/request'
  import {getCurrentInstance} from "vue";
  import cityPicker from '../../mobile/detail/components/piaoyi-cityPicker/piaoyi-cityPicker'

  const user = useUserStore()

  let current = ref(0)
  let showSpecification =ref(false)
  let showMessage = ref(false)
  let showCall = ref(false)
  let showTips = ref(false)

  const options = useCascaderAreaData();
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

  let visible = ref(false)
  let maskCloseAble = ref(true)
  let str = ref('')
  let defaultValue = ref('')
  let column = ref(3)

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
    uni.makePhoneCall({phoneNumber:phone})
  }

  function goHome(){
    uni.reLaunch({
      url:'/pages/web/home/index'
    })
  }

  function change(e){
    current.value = e.detail.current;
  }

  function goProtal(){
    window.location.href = 'https://cs.cummins.com.cn/dealer-portal/#/dealer-home/index'
  }

  onMounted(() => {
    let option = getCurrentInstance()
    prodSpecId.value = option.attrs.prodSpecId
    getProductSpec()
  });

</script>


<style lang="scss" scoped>
@import "index.scss";
</style>
