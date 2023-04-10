<template>
  <view class="content">
    <image class="logo" src="@/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <view class="iconfont icon-password icon"></view>
    <u-top-tips ref="uTips"></u-top-tips>
    <u-button type="primary" text="confirm" @click="confirm">confirm</u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'HI Text1'
    }
  },
  onLoad() {},
  onReady() {
    this.$refs.uTips.show({
      title: '铁马冰河入梦来',
      type: 'success',
      duration: '2300'
    })
  },
  methods: {
    confirm() {
      this.$refs.uTips.show({
        title: '铁马冰河入梦来',
        type: 'success',
        duration: '2300'
      })
      this.$modal.confirm('确定注销并退出系统吗？').then(() => {
        this.$store.dispatch('LogOut').then(() => {
          this.$tab.reLaunch('/pages/index')
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.icon {
  color: pink;
  font-size: 1rem;
}
</style>
