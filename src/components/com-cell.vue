<style scoped>
/* type=1 */
.info {
  height: 70px;
  position: relative;
  background-color: #fff;
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
}
.me_icon {
  width: 65px;
  height: 65px;
  position: absolute;
}
.me_icon .icon_img{
  width:70px;
  height:70px;
  border-radius: 50%;
}
.wechat_info {
  padding-left: 90px;
  padding-top: 15px;
  font-size: 15px;
}
.wechat_info .wechat_id {
  margin-top: 10px;
  color: #333;
}
.wechat_id,.wechat_name{
  font-size: 14px;
}
/* type=2 */
.icon-classname{
  display: block
}
.typeB .iconfont{
  display:inline-block;
  font-size: 30px;
  color: #7fb80e;
}
</style>
<template>
  <div>
    <div class="info" v-if="type===1">
      <div class="me_icon">
        <image class="icon_img" mode="scaleToFill" :src="cellData.img"/>
      </div>
      <div class="wechat_info">
        <div class="wechat_name"><span class="zan-c-gray-darker">昵称：</span>{{cellData.name}}</div>
        <div class="wechat_id"><span class="zan-c-gray-darker">城市：</span>{{cellData.city}}</div>
      </div>
    </div>
    <div class="zan-panel" v-else-if="type===2">
      <a class="zan-cell zan-cell--access" :href="cellData.mainHref">
        <div class="zan-cell__bd">{{cellData.mainText}}</div>
        <div class="zan-cell__ft"></div>
      </a>
      <div class="zan-cell flex-justify-around zan-center">
        <a class="typeB" v-for="item in cellData.sublist" :key="item.id" :href="item.href" hover-class="none">
          <div class="iconfont" :class="[item.icon?'icon-'+ item.icon : '']"></div>
          <P class="icon-classname">{{item.text}}</P>
        </a>
      </div>
    </div>
    <div class="zan-panel" v-else-if="type===3">
      <div class="zan-cell" @tap="tapEvent">
        <div class="zan-cell__icon iconfont" :class="[cellData.icon? 'icon-' + cellData.icon : '']" style="color:#38f;" v-if="cellData.icon"></div>
        <div class="zan-cell__bd">{{cellData.text}}</div>
      </div>
    </div>
    <div class="zan-panel" v-else>
      <a v-for="item in cellData.list" :key="item.id" :href="item.href" class="zan-cell" :class="[item.arrow? '' : 'zan-cell--access']">
        <div class="zan-cell__icon iconfont" :class="[item.icon? 'icon-' + item.icon : '']" style="color:#38f;" v-if="item.icon"></div>
        <div class="zan-cell__bd">{{item.text}}</div>
        <div class="zan-cell__ft"><span class="zan-font-12 zan-c-gray-dark" v-if="item.righttext">{{item.righttext}}</span></div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: Number,
    cellData: Object
  },
  methods: {
    tapEvent (e) {
      this.$emit('tapeven')
    }
  }
}
</script>
