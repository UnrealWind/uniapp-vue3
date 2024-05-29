<template>
  <view class="content">
    <web-view src="http://repairtest.ctygps.com/#/pages/mobile/filter-h5/index"></web-view>
  </view>
</template>

<script setup>

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

</style>
