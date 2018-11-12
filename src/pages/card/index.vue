<style>
.card-container {
  height:100vh;
  background: #f5f5f5;
  position: relative;
}
.card-add{
  position:fixed;
  bottom:0;
  left:0;
  height:90rpx;
  line-height: 90rpx;
  width: 100%;
  color: #fff;
  background-color: #ff7300;
  text-align: center;
  font-size: 16px;
}
.card__cont{
  background-color: #f5f5f5;
  padding-bottom: 95rpx;
}
</style>

<template>
  <div class="card-container">
    <div class="page_spacing card__cont"></div>
    <div class="card-add" @tap="addCard">添加卡号</div>
    <comTopTip ref="tip"/>
  </div>
</template>

<script>
import comTopTip from '@/components/com-toptips'
export default {
  data () {
    return {
      cardData: []
    }
  },
  components: {
    comTopTip
  },
  methods: {
    // 顶部提示
    showTopTips (content) {
      this.$refs.tip.showTopTips({content: content, options: 2000})
    }
  }
}
</script>
