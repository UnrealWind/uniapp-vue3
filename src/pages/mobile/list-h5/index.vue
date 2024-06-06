<template>
  <view class="content">
    <div class="bg">
      <div class="chose">
        <div v-if="listParam.device" class="chose-item">{{listParam.device}}<img @click="clear" src="../../../static/img/delete.png"></div>
        <div class="chose-item" v-for="(item,index) in listParam.filters">{{item.label}}<img @click="clearFilter(index)" src="../../../static/img/delete.png"></div>
        <div @click="clear" class="clear"><img src="../../../static/img/clear.png">清除</div>
      </div>
      <div class="describe">
        共 <span class="text-red-500" v-if="listParam.total">{{listParam.total}}</span> 个产品符合条件
        <span @click="backFilter" class="right-fix text-red-500"><img src="../../../static/img/more.png"> 更多条件</span>
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
              <img :src="item.file && item.file.filePath ?item.file.filePath:''">
              <div class="des">{{item.productName}}</div>
            </div>
            <div class="info">
              <div class="scenarios"><span><img src="../../../static/img/power.png"> 功率 {{item.ratedPower}}kw/{{item.ratedHorsepower}}hp</span></div>
              <div class="scenarios"><span><img src="../../../static/img/torque.png"> 最大扭矩 {{item.maxTorque}}Nm/{{item.ratedSpeed}}rpm</span></div>
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

  const loading = ref(false)
  const finished = ref(false)
  const refreshing = ref(false);
  const list = ref([]);
  const pages = ref({
    pageNum:0,
    pageSize:5
  })

  function getProductSpecPage(){
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
      if(res.data.current == res.data.pages){
        finished.value = true;
      }
      refreshing.value = false
    })
  }
  function goDetail(item){
    uni.navigateTo({
      url:'/pages/mobile/detail/index?prodSpecId='+item.prodSpecId
    })
  }

  function backFilter(){
    uni.redirectTo({
      url:'/pages/mobile/filter-h5/index'
    })
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

  function clear(){
    listParam.value.specIds = []
    listParam.value.filters = []
    listParam.value.device = ''
    onRefresh()
  }

  function getFilterProductCount(){
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
    getFilterProductCount()
  }

  const listParam = ref({})
  onMounted(() => {
    let option = getCurrentInstance()
    listParam.value = JSON.parse(option.attrs.listParam)
  });

</script>


<style lang="scss" scoped>
@import "index";
</style>
