<style scoped>
.logo-img{
  width: 115px;
}
.logo-tip{
  margin-top:-40px;
  margin-bottom:70px;
}
.logo-bd .logo-bd-info{
  padding-left: 180px;
}
.logo-bd .logo-bd__item{
  padding: 15px 0;
}
</style>
<template>
  <div class="com-cont">
    <div class="logo-hd zan-center">
      <image :src="logo" mode="aspectFit" class="logo-img" />
    </div>
    <div class="logo-tip zan-center">
      <p class="zan-c-gray zan-font-12">您所授权的信息，我们将不会对外公布，请放心授权！</p>
    </div>
    <div class="logo-bd">
      <div class="padding-rl-15 padding-bottom-15">
        <button type="primary" open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo" lang="zh_CN">点击授权</button>
      </div>
    </div>
    <comfooter :text="name"/>  
    <comTopTip ref="tip"/>
  </div>
</template>

<script>
import comfooter from '@/components/footer'
import comTopTip from '@/components/com-toptips'
import info from '@/utils/setinfo'

export default {
  data () {
    return {
      logo: info.data.logo,
      name: info.data.name
    }
  },

  components: {
    comfooter,
    comTopTip
  },

  methods: {
    // 顶部提示
    /* showTopTips (content) {
      this.$refs.tip.showTopTips({content: content, options: 2000})
    } */
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
}
</script>
