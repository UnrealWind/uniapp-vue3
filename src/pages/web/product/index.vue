<template>
  <view class="content">
    <div class="content-box">
      <div class="header">
        <img @click="goHome" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/cummins.png')">
        <span>
        <span style="cursor: pointer" @click="goProtal">经销商服务网</span>
        <span @click="showMessage = true" style="cursor: pointer">联系我们</span>
      </span>
      </div>
      <div class="content-item">
        <h2 class="w-full p-2 title-container">
          <span class="ml-3 font-bold title">应用场景</span>
        </h2>
        <div class="radio">
          <div  v-for="(item,index) in deviceTypeList" :class="item.active? 'active':''" @click="choseDevice(item)">{{item.sceneName}}</div>
        </div>

        <div v-if="filter.filterClasses" v-for="(item,index) in filter.filterClasses">
          <div v-if="item.filterType == 2">
            <h2 class="w-full p-2 title-container mt-2">
              <span class="ml-3 font-bold title">{{item.filterName}}</span>
            </h2>
            <div class="radio">
              <div v-for="(opt,index) in item.valueEnum" @click="choseRadio(item,opt)" :class="item.value == opt?'active':''">{{opt}}</div>
            </div>
          </div>
          <div v-if="item.filterType == 1">
            <h2  class="w-full p-2 title-container mt-2">
              <span class="ml-3 font-bold title">{{item.filterName}}</span>
              <span class="tar-value">{{item.valueMin}}{{item.filterUnit}} - {{item.valueMax}}{{item.filterUnit}}</span>
            </h2>
            <div class="slider" >
              <Slider v-model="item.value" range @change="onChange($event,item)" min="0" :max="item.valueMax" :step="item.step" active-color="#ee0a24" inactive-color="#fff">
                <template #left-button>
                  <div class="custom-button">{{ item.value[0] }}</div>
                </template>
                <template #right-button>
                  <div class="custom-button">{{ item.value[1] }}</div>
                </template>
              </Slider>
            </div>
          </div>
        </div>
        <div class="btn-box">
          <Button class="w-full" style="margin-top: 15px"  type="danger" size="small" @click="clear">重置</Button>
        </div>
      </div>
      <div class="content-info">
        <h3>筛选标签</h3>
        <div class="chose">
          <div v-if="listParam.device" class="chose-item">{{listParam.device}}<img @click="clear" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/delete.png')"></div>
          <div class="chose-item" v-for="(item,index) in listParam.filters">{{item.label}}<img @click="clearFilter(index)" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/delete.png')"></div>
          <div @click="clear"  class="clear"><img :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/clear.png')">清除全部</div>
        </div>
        <p class="chose-des"> 共有 <span>{{listParam.total || 0}}</span> 个产品符合条件</p>
        <div class="product">
          <div class="prod-item" v-for="(item,index) in list">
            <div class="prod-img">
              <img mode="widthFix" v-if="item.files && item.files.length" :src="getImg(item.files[0].filePath)" />
            </div>
            <div class="prod-info">
              <div class="info">
                <div>{{ item.productName }}
                  <span class="prod-info-mid">{{item.manuName}}</span>
<!--                  <span class="prod-info-last">EPA 2024</span>-->
                </div>
              </div>
              <div class="specs">
                <div>
                  <div class="specs-line1"><img :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/power.png')">功率</div>
                  <div class="specs-line2">{{item.ratedHorsepower}}<span>hp</span></div>
                  <div class="specs-line3">{{item.ratedPower}}<span>kw</span></div>
                </div>
                <div>
                  <div class="specs-line1"><img :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/torque.png')">最大扭矩</div>
                  <div class="specs-line2">{{item.maxTorque}}<span>n·m</span></div>
                  <div class="specs-line3">{{item.ratedSpeed}}<span>rpm</span></div>
                </div>
              </div>
              <div class="btn-des">
                <span v-for="(opt,i) in item.sceneList">{{opt.sceneName}}</span>
              </div>
              <div class="hover">
                <div @click="goDetail(item)">查看详情</div>
              </div>
            </div>
          </div>
          <div v-if="list.length" class="pagination">
            <Pagination v-model="pages.current"  force-ellipses :total-items="pages.total" :page-count="pages.pageCount" @change="changePage" :items-per-page="5" />
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
      <div v-show="showMessage" class="message">
        <div :class="showMessage?'active':''" class="info-part">
          <div class="info">
            <h3>留言咨询  <img @click="showMessage = false" style="float: right" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/close.png')"></h3>
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
    </div>
    <Overlay :show="loading" @click="loading = false">
      <div class="wrapper" @click.stop>
        <Loading color="#0094ff">加载中...</Loading>
      </div>
    </Overlay>
  </view>
</template>

<script setup>

  import { Slider,Icon,Button,Pagination,Overlay,Loading } from 'vant'
  import 'vant/lib/index.css';
  import { useUserStore } from '@/store/user.js'
  import '@vant/touch-emulator';
  const user = useUserStore()
  import request from '@/utils/request'
  import {getCurrentInstance, onMounted} from "vue";
  import cityPicker from '../../mobile/detail/components/piaoyi-cityPicker/piaoyi-cityPicker'

  import {getAssetsFile} from "@/utils/pub-tool";

  function getImg(url){
    return getAssetsFile(url)
  }

  const showMore = ref(false)

  // 设备列表
  const deviceTypeList = ref([])
  let listParam = ref({
    device:'',
    filters: [],
    specIds:'',
    sceneId:''
  }
  )
  function getDeviceTypeList(){
    request({
      url: 'dapi/scene/getProductSceneList',
      method: 'get',
      params: {},
    }).then((res)=>{
      res.data.forEach(async (n,i)=>{
        if(sceneCode.value == n.sceneCode){
          n['active'] = true
          await choseDevice(n)
          listParam.device = n.sceneName
        }
      })
      deviceTypeList.value = res.data
    })
  }
  async function choseDevice(item){
    deviceTypeList.value.forEach((n,i)=>{
      n['active'] = false
    })
    item['active'] = true
    listParam.value.device = item.sceneName
    await getSceneFilter(item)
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
  async function getSceneFilter(item){
    listParam.value.sceneId = item.sceneId
     await request({
      url: 'dapi/scene/getSceneFilter/'+ item.sceneId,
      method: 'get',
      params: {},
    }).then((res)=>{
      res.data.filterClasses.forEach((n,i)=>{
        if(n.filterType == 1){
          n['value'] = [Number(n.valueMin),Number(n.valueMax)]
        }else {
          n.valueEnum = n.valueEnum.split('/')
          n['value'] = null
        }
      })
      console.log(res.data.filterClasses[0].value)
      filter.value = res.data
      total.value = res.data.prodSpecIdArr
      getFilterProductCount()
    })
  }
  function choseRadio(item,opt){
    item.value = opt
    pages.value = {
      pageNum:1,
      pageSize:4,
      current:1,
      total:0,
      pageCount:0
    }
    getFilterProductCount()
  }
  function onChange(e,item){
    console.log(e)
    pages.value = {
      pageNum:1,
      pageSize:4,
      current:1,
      total:0,
      pageCount:0
    }
    getFilterProductCount()
  }
  function getFilterProductCount(){
    let data = {
      "sceneId":listParam.value.sceneId ,
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
        if(!n.value) return
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
      if(res.data.length){
        goList()
      }else {
        list.value = []
        listParam.value.total = 0
      }
    })
  }

  function getFilterProductCountClear(){
    let data = {
      "sceneId":listParam.value.sceneId,
      "filters":[]
    }
    listParam.value.filters.forEach((n,i)=>{
      if(n.value.filterType == 1){
        data.filters.push({
          "filterClassId" : n.value.filterClassId,
          "filterType": n.value.filterType,
          "valueMax": n.value.value[1],
          "valueMin": n.value.value[0]
        })
      }else {
        if(!n.value.value) return
        data.filters.push({
          "filterClassId" : n.value.filterClassId,
          "filterType": n.value.filterType,
          "valueEnum": n.value.value,
        })
      }
    })
    request({
      url: 'dapi/productSpec/filterProductCount',
      method: 'post',
      params: {},
      data:data
    }).then((res)=>{
      total.value = res.data
      goList(total.value)
    })
  }

  const pages = ref({
    pageNum:1,
    pageSize:4,
    current:1,
    total:0,
    pageCount:0
  })
  const list = ref([]);

  function clear(){
    listParam.value.specIds = []
    listParam.value.filters = []
    listParam.value.device = ''
    total.value = []
    filter.value = {}

    sceneCode.value = ''
    getDeviceTypeList()
    getManuList()
    goList()
  }

  function clearFilter(index){
    listParam.value.filters.splice(index,1)
    filter.value.filterClasses[index].value = [filter.value.filterClasses[index].valueMin,filter.value.filterClasses[index].valueMax]
    getFilterProductCountClear()
  }

  function changePage(e){
    pages.value.pageNum = e
    goList()
  }

  const loading = ref(false)
  function goList(final){
    loading.value = true
    if(final){

    }else {
      listParam.value.specIds = total.value.join(',')
      listParam.value.filters = []
      console.log(filter.value)
      filter.value.filterClasses?filter.value.filterClasses.forEach((n,i)=>{
        if(n.filterType == 1){
          listParam.value.filters.push({
            label:n.value[0]+ '-' + n.value[1]+ n.filterUnit,
            value:n
          })
        }else {
          if(!n.value) return
          listParam.value.filters.push({
            label:n.value + n.filterUnit,
            value:n
          })
        }
      }):''
    }

    request({
      url: 'dapi/productSpec/getProductSpecPage',
      method: 'get',
      params: {
        pageNum: pages.value.pageNum,
        pageSize: pages.value.pageSize,
        specIds: final? final.join(',') :listParam.value.specIds
      },
    }).then((res)=>{
      loading.value = false
      list.value = res.data.records
      listParam.value.total = res.data.total
      pages.value.current = res.data.current
      pages.value.total = res.data.total
      pages.value.pageCount = res.data.pages
      console.log(list.value)
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
  let showMessage = ref(false)
  let showTips = ref(false)

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


  function goProtal(){
    window.location.href = 'https://cs.cummins.com.cn/dealer-portal/#/dealer-home/index'
  }

  function goHome(){
    uni.reLaunch({
      url:'/pages/web/home/index'
    })
  }

  const sceneCode = ref('')
  onMounted(() => {
    let option = getCurrentInstance()
    sceneCode.value = option.attrs.sceneCode
    getDeviceTypeList()
    getManuList()
    if(!option.attrs.sceneCode) goList()
  });

</script>


<style lang="scss" scoped>
@import "index.scss";
</style>
