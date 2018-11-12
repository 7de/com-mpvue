<style scoped>
.wallet-title{
  overflow: hidden;
  margin: 0 auto;
}
.wallet-title .iconfont{
  font-size: 80px;
  color: #999;
}
.money{
  font-size:50px;
}
.money_text{
  font-weight: bold
}
</style>
<template>
  <div class="com-cont" style="background-color:#fff;">
    <div class="page_spacing">
      <div class="zan-panel zan-panel--without-border zan-center">
        <div class="wallet-title">
          <span class="iconfont icon-user-menu-money"></span>
        </div>
        <div class="money" style="color:#f15b6c">
          ￥<text class="money_text">{{account}}</text>
        </div>
        <button class="zan-btn zan-btn--primary" :class="[showBtn?'zan-btn--disabled':'']" style="margin-top:60px;" :disabled="showBtn" @tap="goTopup">马上充值</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: '--',
      showBtn: true
    }
  },
  methods: {
    goTopup () {

    }
  }
}
</script>
