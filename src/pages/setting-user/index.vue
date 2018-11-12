
<template>
  <web-view src="https://mp.weixin.qq.com/s/wTv-cF8802ylOyQJpcQb7g"></web-view>
</template>

<script>
export default {
  onReady () {
    wx.showLoading({
      title: '加载中'
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  }
}
</script>
