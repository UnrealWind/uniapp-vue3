<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
 /*每个页面公共css */
 /*fydebugger  这个如果不放在wxcomponents中的话，组件的props就无法生效*/
  @import "wxcomponents/vant-weapp/common/index.wxss";
</style>
