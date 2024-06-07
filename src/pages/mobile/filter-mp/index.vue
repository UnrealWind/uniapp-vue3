<template>
  <web-view :src="`http://repairtest.ctygps.com/#/pages/mobile/filter-h5/index?sceneCode=${sceneCode}&systype=mp`"></web-view>
</template>

<script setup>

import {getCurrentInstance} from "vue";

const sceneCode = ref('')
onMounted(() => {
  let option = getCurrentInstance()
  sceneCode.value = option.attrs.sceneCode
});

</script>


<style lang="scss" scoped>

</style>
