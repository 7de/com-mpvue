<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
@import "./utils/zanui/color.css";
@import "./utils/zanui/iconfont.css";
@import "./utils/zanui/helper.css";
@import "./utils/zanui/panel.css";
@import "./utils/zanui/cell.css";
@import "./utils/zanui/btn.css";
page {
  color:#444;
}
.com-cont {
  background: #f0eff5;
  overflow: hidden;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
}
.com-cont::before {
  position: fixed;
  top: 0;
  left: 0;
  content: ' ';
  width: 100%;
  height: 1px;
  background-color: #f0eff5;
  z-index: 5;
}
.page_spacing {
  padding: 0 15px 20px;
  overflow: hidden;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: all 2s;
  -moz-transition: all 2s;
  -webkit-transition: all 2s;
  -o-transition: all 2s;
}
/* flex布局 */
.com-flex{
  display: flex
}
.flex-justify-around{
  justify-content:space-around
}

</style>
