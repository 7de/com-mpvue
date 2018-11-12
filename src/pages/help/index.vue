
<template>
  <web-view src="https://www.comtika.cn/help/"></web-view>
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
