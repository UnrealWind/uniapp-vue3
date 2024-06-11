<template>
  <web-view :src="`https://uat.cs.cummins.com.cn/doem-h5/#/pages/mobile/filter-h5/index?sceneCode=${sceneCode}&systype=mp`"></web-view>
</template>

<script setup>

import {getCurrentInstance,getOpenerEventChannel} from "vue";

const sceneCode = ref('')
onMounted(() => {
  sceneCode.value = uni.getStorageSync('sceneCode')

});

</script>


<style lang="scss" scoped>

</style>
