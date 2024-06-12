<template>
  <view class="content">
    <h2 class="w-full p-2 title-container">
      <span class="ml-3 font-bold title">应用场景类型</span>
    </h2>
    <div class="radio">
      <div v-for="(item,index) in prodClassList" @click="classIdentifier = item.value,getFilterProductCount()" :class="item.value == classIdentifier?'active':''">{{item.label}}</div>
    </div>
    <h2 class="w-full p-2 title-container">
      <span class="ml-3 font-bold title">使用区域</span>
    </h2>
    <div class="radio">
      <div v-for="(item,index) in areaList" @click="area = item.value,getFilterProductCount()" :class="item.value == area?'active':''">{{item.label}}</div>
    </div>
    <h2 class="w-full p-2 title-container">
      <span class="ml-3 font-bold title">应用场景</span>
    </h2>
    <div class="scenarios">
      <div v-for="(item,index) in deviceTypeList" class="device" :class="item.active?'active':''" @click="choseDevice(item)" v-show="!showMore && index<3">
        <template v-if="!item.active">
          <img :src="getImg(`https://uat.cs.cummins.com.cn/doem-h5/static/img/device/${item.sceneCode}.png`)">
          <div>{{item.sceneName}}</div>
        </template>
        <template v-if="item.active">
          <img :src="getImg(`https://uat.cs.cummins.com.cn/doem-h5/static/img/device/${item.sceneCode}A.png`)">
          <div>{{item.sceneName}}
            <span class="active-corner">
              <img :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/active-corner.png')">
            </span>
          </div>
        </template>
      </div>
      <div v-for="(item,index) in deviceTypeList" class="device" :class="item.active?'active':''" @click="choseDevice(item)" v-show="showMore">
        <template v-if="!item.active">
          <img :src="getImg(`https://uat.cs.cummins.com.cn/doem-h5/static/img/device/${item.sceneCode}.png`)">
          <div>{{item.sceneName}}</div>
        </template>
        <template v-if="item.active">
          <img :src="getImg(`https://uat.cs.cummins.com.cn/doem-h5/static/img/device/${item.sceneCode}A.png`)">
          <div>{{item.sceneName}}
            <span class="active-corner">
              <img :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/active-corner.png')">
            </span>
          </div>
        </template>
      </div>

      <Button class="w-full" style="margin-top: 15px" v-show="!showMore" type="default" size="small" @click="changeScenarios">更多场景  <Icon name="arrow-down" /> </Button>
      <Button class="w-full" style="margin-top: 15px" v-show="showMore" type="default" size="small" @click="changeScenarios">收起  <Icon name="arrow-up" /> </Button>
    </div>
<!--    <h2 class="w-full p-2 title-container mt-2">-->
<!--      <span class="ml-3 font-bold title">生产工厂</span>-->
<!--    </h2>-->
<!--    <div class="radio">-->
<!--      <div v-for="(item,index) in manuList" @click="choseManu(item)" :class="item.active?'active':''">{{item.manuName}}</div>-->
<!--    </div>-->
    <div v-if="filter.filterClasses" v-for="(item,index) in filter.filterClasses">
      <div v-if="item.filterType == 1">
        <h2 class="w-full p-2 title-container mt-2">
          <span class="ml-3 font-bold title">{{item.filterName}}</span>
          <span class="tar-value">{{item.valueMin}}{{item.filterUnit}} - {{item.valueMax}}{{item.filterUnit}}</span>
        </h2>
        <div class="slider" >
          <Slider v-model="item.value" range @change="onChange($event,item)" min="0" :max="item.valueMax" :step="item.step" active-color="#ee0a24">
            <template #left-button>
              <div class="custom-button">{{ item.value[0] }}</div>
            </template>
            <template #right-button>
              <div class="custom-button">{{ item.value[1] }}</div>
            </template>
          </Slider>
        </div>
      </div>
      <div v-if="item.filterType == 2">
        <h2 class="w-full p-2 title-container mt-2">
          <span class="ml-3 font-bold title">{{item.filterName}}</span>
        </h2>
        <div class="radio">
          <div v-for="(opt,index) in item.valueEnum" @click="choseRadio(item,opt)" :class="item.value == opt?'active':''">{{opt}}</div>
        </div>
      </div>
    </div>
    <div class="btn-box">
      <Button class="w-full" style="margin-top: 15px"  type="danger" size="normal" @click="goList">共有{{total.length}}个产品符合条件 进入</Button>
    </div>
  </view>
</template>

<script setup>

  import { Slider,Icon,Button } from 'vant'
  import 'vant/lib/index.css';
  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()
  import request from '@/utils/request'
  import {getCurrentInstance, onMounted} from "vue";

  import {getAssetsFile} from "@/utils/pub-tool";

  function getImg(url){
    return getAssetsFile(url)
  }

  const showMore = ref(false)

  // 设备列表
  const deviceTypeList = ref([])
  let listParam = {
    device:'',
    filters: [],
    specIds:'',
    sceneId:''
  }
  function getDeviceTypeList(){
    request({
      url: 'dapi/scene/getProductSceneList',
      method: 'get',
      params: {},
    }).then((res)=>{
      res.data.forEach((n,i)=>{
        sceneCode.value == n.sceneCode ? (n['active'] = true,getSceneFilter(n),listParam.device = n.sceneName,getFilterProductCount()) :''
      })
      deviceTypeList.value = res.data
    })
  }
  function choseDevice(item){
    deviceTypeList.value.forEach((n,i)=>{
      n['active'] = false
    })
    item['active'] = true
    listParam.device = item.sceneName
    getSceneFilter(item)
  }

  // 使用区域
  const areaList = ref([])
  const area = ref('')
  function getArea(){
    request({
      url: 'dapi/productSpec/getArea',
      method: 'get',
      params: {},
    }).then((res)=>{
      areaList.value = res.data
    })
  }

  // 应用场景分类
  const prodClassList = ref([])
  const classIdentifier = ref('')
  function getProdClass(){
    request({
      url: 'dapi/productSpec/getProdClass',
      method: 'get',
      params: {},
    }).then((res)=>{
      prodClassList.value = res.data
    })
  }

  // 生产厂商列表
  const manuList = ref([])
  function getManuList(){
    request({
      url: 'dapi/manu/getManuList',
      method: 'get',
      params: {},
    }).then((res)=>{
      manuList.value = res.data
    })
  }
  function choseManu(item){
    manuList.value.forEach((n,i)=>{
      n['active'] = false
    })
    item['active'] = true
  }

  // 筛选条件
  const filter = ref({})
  const total = ref([])
  function getSceneFilter(item){
    listParam.sceneId = item.sceneId
    request({
      url: 'dapi/scene/getSceneFilter/'+ item.sceneId,
      method: 'get',
      params: {},
    }).then((res)=>{
      filter.value = []
      res.data.filterClasses.forEach((n,i)=>{
        if(n.filterType == 1){
          n['value'] = [Number(n.valueMin),Number(n.valueMax)]
        }else {
          n.valueEnum = n.valueEnum.split('/')
          n['value'] = null
        }
      })
      filter.value = res.data
      getFilterProductCount()
      // total.value = res.data.prodSpecIdArr
    })
  }
  function choseRadio(item,opt){
    item.value = opt
    getFilterProductCount()
  }
  function onChange(e,item){
    console.log(e)
    getFilterProductCount()
  }
  function getFilterProductCount(){
    let data = {
      "sceneId":listParam.sceneId,
      area:area.value,
      classIdentifier:classIdentifier.value,
      "filters":[]
    }
    filter.value.filterClasses?filter.value.filterClasses.forEach((n,i)=>{
      if(n.filterType == 1){
        data.filters.push({
          "filterClassId" : n.filterClassId,
          "filterType": n.filterType,
          "valueMax": n.value[1],
          "valueMin": n.value[0]
        })
      }else {
        data.filters.push({
          "filterClassId" : n.filterClassId,
          "filterType": n.filterType,
          "valueEnum": n.value,
        })
      }
    }):''
    request({
      url: 'dapi/productSpec/filterProductCount',
      method: 'post',
      params: {},
      data:data
    }).then((res)=>{
      total.value = res.data
    })
  }


  function changeScenarios(){
    showMore.value = !showMore.value
  }
  function goList(){
    listParam.specIds = total.value.join(',')
    listParam.filters = []
    filter.value.filterClasses? filter.value.filterClasses.forEach((n,i)=>{
      if(n.filterType == 1){
        listParam.filters.push({
          label:n.value[0]+ '-' + n.value[1]+ n.filterUnit,
          value:n
        })
      }else {
        if(!n.value) return
        listParam.filters.push({
          label:n.value + n.filterUnit,
          value:n
        })
      }
    }):''
    uni.navigateTo({
      url:'/pages/mobile/list-h5/index?listParam='+JSON.stringify(listParam) + '&systype='+systype.value
    })
  }

  const systype = ref('h5')
  const sceneCode = ref('')
  onMounted(() => {
    let option = getCurrentInstance()
    sceneCode.value = option.attrs.sceneCode
    option.attrs.systype?systype.value = option.attrs.systype:''
    getDeviceTypeList()
    getManuList()
    getProdClass()
    getArea()
  });

</script>


<style lang="scss" scoped>
@import "index.scss";
</style>
