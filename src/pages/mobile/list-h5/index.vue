<template>
  <view class="content">
    <div class="bg">
      <div class="chose">
        <div v-if="listParam.classIdentifier" class="chose-item">{{listParam.classIdentifier}}<img @click="clearBack('classIdentifier')" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/delete.png')"></div>
        <div v-if="listParam.area" class="chose-item">{{listParam.area}}<img @click="clearBack('area')" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/delete.png')"></div>

        <div v-if="listParam.device" class="chose-item">{{listParam.device}}<img @click="clearDevice" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/delete.png')"></div>
        <div class="chose-item" v-for="(item,index) in listParam.filters">{{item.label}}<img @click="clearFilter(index)" :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/delete.png')"></div>
        <div @click="clearAll" class="clear"><img :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/clear.png')">清除</div>
      </div>
      <div class="describe">
        共 <span class="text-red-500" v-if="listParam.total">{{listParam.total}}</span> 个产品符合条件
        <span @click="backFilter" class="right-fix text-red-500"><img :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/more.png')"> 更多条件</span>
      </div>

      <pull-refresh v-model="refreshing" @refresh="onRefresh">
        <List
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            style="height: 90vh;overflow-y: scroll"
        >
          <div class="list-item" v-for="(item,index) in list">
            <div class="img-box">
              <img v-if="item.files && item.files.length" :src="getImg(item.files[0].filePath)">
              <div class="des">{{item.productName}}</div>
            </div>
            <div class="info">
              <div class="scenarios"><span><img :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/power.png')"> 功率 {{item.ratedPower}}kw/{{item.ratedHorsepower}}hp</span></div>
              <div class="scenarios"><span><img :src="getImg('https://uat.cs.cummins.com.cn/doem-h5/static/img/torque.png')"> 最大扭矩 {{item.maxTorque}}Nm/{{item.ratedSpeed}}rpm</span></div>
              <div class="device-type">
                <span v-for="(opt,i) in item.sceneList">{{opt.sceneName}}</span>
              </div>
              <div class="produce">
                <span>{{item.manuName}}生产</span>
              </div>
              <!--            <div class="right-top"> &nbsp;&nbsp;&nbsp;EPA 2024</div>-->
              <div @click="goDetail(item)" class="detail-btn"></div>
            </div>
          </div>
        </List>
      </pull-refresh>
    </div>
  </view>
</template>

<script setup>

  import { getCurrentInstance, onMounted } from 'vue'
  import { List,Icon ,PullRefresh} from 'vant'
  import 'vant/lib/index.css';
  import { useUserStore } from '@/store/user.js'
  const user = useUserStore()
  import request from '@/utils/request'
  import wx from 'weixin-js-sdk'

  let pageList = getCurrentPages()
  let prevPage = pageList[pageList.length - 2]

  import {getAssetsFile} from "@/utils/pub-tool";

  function getImg(url){
    return getAssetsFile(url)
  }

  const loading = ref(false)
  const finished = ref(false)
  const refreshing = ref(false);
  const list = ref([]);
  const pages = ref({
    pageNum:0,
    pageSize:5
  })

  function getProductSpecPage(){
    if(!listParam.value.specIds){
      loading.value = false;
      finished.value = true;
      listParam.value.total = '0'
      return
    }
    request({
      url: 'dapi/productSpec/getProductSpecPage',
      method: 'get',
      params: {
        pageNum: pages.value.pageNum,
        pageSize: pages.value.pageSize,
        specIds: listParam.value.specIds
      },
    }).then((res)=>{
      list.value = list.value.concat(res.data.records)
      listParam.value.total = res.data.total
      // 加载状态结束
      loading.value = false;
      if(!res.data.records.length || res.data.current == res.data.pages ){
        finished.value = true;
      }
      refreshing.value = false
    })
  }
  function goDetail(item){

    if(systype.value == 'h5'){
      uni.navigateTo({
        url:'/pages/mobile/detail/index?prodSpecId='+item.prodSpecId
      })
    }else {
      // uni.navigateTo({
      //   url:'/pages/mobile/detail/index?prodSpecId='+item.prodSpecId
      // })
      // return
      // fydebugger 这块v3版本的uniapp无法获取到路由参数
      // uni.setStorageSync('prodSpecId', item.prodSpecId);
      // wx.miniProgram.postMessage({ data: { prodSpecId: item.prodSpecId } })
      wx.miniProgram.navigateTo({
        url:'/pages/mobile/detail/index?prodSpecId='+item.prodSpecId
      })
    }

  }

  function backFilter(){
    uni.navigateBack()
  }

  function onLoad(){
    pages.value.pageNum++
    getProductSpecPage()
  }

  const onRefresh = () => {
    // 清空列表数据
    finished.value = false;

    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true;
    list.value = []
    pages.value = {
      pageNum:0,
      pageSize:5
    }
    onLoad();
  };

  function clearDevice(){
    listParam.value.specIds = []
    listParam.value.filters = []
    listParam.value.device = ''
    listParam.value.sceneId = ''
    uni.$emit('clear','device')
    getFilterProductCount()
  }

  function clearAll(){
    listParam.value.specIds = []
    listParam.value.filters = []
    listParam.value.device = ''
    listParam.value.classIdentifier = ''
    listParam.value.area = ''
    listParam.value.sceneId = ''
    uni.$emit('clear','all')
    getFilterProductCount()
  }

  function clearBack(opt){
    uni.$emit('clear',opt)
    listParam.value[opt] = ''
    getFilterProductCount()
  }

  // 使用区域
  const areaList = ref([])
  const area = ref('home')
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
  const classIdentifier = ref('nonroad')
  function getProdClass(){
    request({
      url: 'dapi/productSpec/getProdClass',
      method: 'get',
      params: {},
    }).then((res)=>{
      prodClassList.value = res.data
    })
  }

  function getFilterProductCount(){
    let data = {
      "sceneId":listParam.value.sceneId,
      // area:listParam.value.area,
      // classIdentifier:listParam.value.classIdentifier,
      "filters":[]
    }

    areaList.value.forEach((n,i)=>{
      n.label == listParam.value.area? data['area'] = n.value:''
    })
    prodClassList.value.forEach((n,i)=>{
      n.label == listParam.value.classIdentifier? data['classIdentifier'] = n.value:''
    })

    listParam.value.filters.forEach((n,i)=>{
      if(n.value.filterType == 1){
        data.filters.push({
          "filterClassId" : n.value.filterClassId,
          "filterType": n.value.filterType,
          "valueMax": n.value.value[1],
          "valueMin": n.value.value[0]
        })
      }else {
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
      listParam.value.specIds = res.data.join(',')
      onRefresh()
    })
  }
  function clearFilter(index){
    listParam.value.filters.splice(index,1)
    uni.$emit('clear','filter')
    getFilterProductCount()
  }

  const listParam = ref({})
  const systype = ref('h5')
  onMounted(() => {
    getProdClass()
    getArea()
    let option = getCurrentInstance()
    listParam.value = JSON.parse(option.attrs.listParam)
    systype.value = option.attrs.systype
  });

</script>


<style lang="scss" scoped>
@import "index";
</style>
