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
  }
}
</script>

<style lang="scss">
/* 不能在main.js引入 否则微信打包失败 */
@import 'uview-ui/index.scss';
</style>
