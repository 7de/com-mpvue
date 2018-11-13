<style>
.map-bd{
  margin-top: 6vh;
}
.map-hd__tap{
  position: fixed;
  top: 0;
  left: 0;
  height: 6vh;
  line-height: 6vh;
  width: 100%;
  background-color: #fff;
  font-size: 16px;
  color: #7b7b7b;
  white-space: nowrap;
}
.map-hd__tap li {
  display: inline-block;
  width: 50%;
  text-align: center;
  position: relative;
}
.map-hd__tap li::after {
  content:'';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 30%;
  height: 3px;
  margin: 0 auto;
  background-color: #fff;
}
.map-hd__tap li.active {
  color: #1AAD19;
}
.map-hd__tap li.active::after{
    background-color: #1AAD19;
}
.map-bd{
  
}
</style>

<template>
  <div class="con">
    <div class="map-hd">
      <ul class="map-hd__tap">
        <li class="active">
          <span>电单车</span>
        </li>
        <li @tap="unableTopTips">
          <span>电动汽车</span>
        </li>
      </ul>
    </div>
    <div class="map-bd">
      <comMap :lat="latitude" :lon="longitude"/>
    </div>
    <comTopTip ref="tip"/>
  </div>
</template>

<script>
import comMap from '@/components/com-map'
import comTopTip from '@/components/com-toptips'

export default {
  data () {
    return {
      longitude: null,
      latitude: null
    }
  },

  components: {
    comMap,
    comTopTip
  },

  methods: {
    unableTopTips () {
      this.showTopTips('功能暂未开通，敬请期待...')
    },
    // 获取用户定位
    getLocation () {
      wx.getLocation({
        type: 'gcj02',
        success: (res) => {
          // 纬度
          let lat = res.latitude
          // 经度
          let lon = res.longitude
          this.longitude = lon
          this.latitude = lat
          // console.log(lon, lat)
          // this.getMarkers(latitude, longitude)
        },
        fail: (res) => {
          console.log('定位失败')
          this.getScopeLocation()
        }
      })
    },
    // 第一次拒接第二次授权当前位置
    getScopeLocation () {
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userLocation'] !== undefined && res.authSetting['scope.userLocation'] !== true) {
            wx.showModal({
              title: '是否授权当前位置',
              content: '需要获取您的地理位置，否则您的位置信息可能有误！',
              success: (res) => {
                if (res.confirm) {
                  wx.openSetting({
                    success: (data) => {
                      if (data.authSetting['scope.userLocation'] === true) {
                        wx.showToast({
                          title: '设置成功',
                          icon: 'success',
                          duration: 1000
                        })
                        wx.navigateBack({
                          delta: 1
                        })
                      } else {
                        wx.showToast({
                          title: '设置失败',
                          icon: 'none',
                          duration: 2000
                        })
                      }
                    }
                  })
                }
              }
            })
          }
        }
      })
    },
    // 顶部提示
    showTopTips (content, url) {
      this.$refs.tip.showTopTips({content: content, options: 2000, url: url})
    }
  },

  created () {
    this.getLocation()
  }
}
</script>
