<style>
.map-panel{
    position: relative;
    width: 100%;
    height: 94vh;
}
.mapCon{
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
<template>
    <div class="map-panel">
        <!-- <map id="mapCon" class="" latitude="{{latitude}}" longitude="{{longitude}}" markers="{{markers}}" controls="{{controls}}" bindcontroltap="bindcontroltap" bindmarkertap="bindmarkertap" bindregionchange="changeMap" show-location>
          <cover-view class="share-box share-bg {{shareShow?'display-show':'display-none'}}" @tap="shareBtn">
            <cover-view class="share-box share-img">
              <cover-image  src="https://www.comtika.cn/upload/channel/2eed3e26a7874c3c8d5a126ef6516961.png"></cover-image>
              </cover-view>
            </cover-view>
        </map> -->
        <map id="mapCon" class="mapCon" :latitude="lat" :longitude="lon" :controls="newControl" @controltap="bindcontroltap" show-location></map>
    </div>
</template>
<script>
export default {
  props: ['lat', 'lon'],
  data: {
    controls: [] // 地图控件
  },
  created () {
    this.mapCtx = wx.createMapContext('mapCon')
    this.movetoPosition()
  },
  computed: {
    // 地图控件
    newControl: function () {
      let _data = null
      wx.getSystemInfo({
        success: res => {
          _data = [
            {
              id: 1,
              iconPath: '/static/images/location_2.png',
              position: {
                left: 5,
                top: res.windowHeight - 165,
                width: 60,
                height: 60
              },
              clickable: true
            },
            {
              id: 2,
              iconPath: '/static/images/code_2.png',
              position: {
                left: res.windowWidth / 2 - 70,
                top: res.windowHeight - 162,
                width: 138,
                height: 55
              },
              clickable: true
            },
            {
              id: 3,
              iconPath: '/static/images/user_2.png',
              position: {
                left: res.windowWidth - 65,
                top: res.windowHeight - 165,
                width: 60,
                height: 60
              },
              clickable: true
            },
            {
              id: 4,
              iconPath: '/static/images/pos.png',
              position: {
                left: res.windowWidth / 2 - 15,
                top: res.windowHeight / 2 - 48,
                width: 30,
                height: 30
              },
              clickable: false
            }
          ]
        }
      })
      return _data
    }
  },
  methods: {
    // 定位到本地坐标
    movetoPosition () {
      this.mapCtx.moveToLocation()
    },
    // 控件点击事件
    bindcontroltap (e) {
      switch (e.mp.controlId) {
        case 1: this.movetoPosition()
          break
        case 2: console.log('2') // this.openCode()
          break
        case 3: wx.navigateTo({
          url: '/pages/personal/main'
        })
      }
    }
  }
}
</script>

