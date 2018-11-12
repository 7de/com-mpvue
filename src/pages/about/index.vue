<style scoped>
.logo-img{
  width: 140px;
}
.logo-bd .zan-left{
  padding-left: 90px;
}
.logo-bd .logo-bd__item{
    padding: 10px 0;
  }
</style>
<template>
  <div class="com-cont">
    <div class="logo-hd zan-center">
      <image :src="infoData.logo" mode="aspectFit" class="logo-img" />
    </div>
    <div class="logo-bd">
      <div class="zan-font-12 zan-c-gray-darker zan-left">
        <p>客服热线：{{infoData.tel}}</p>
        <p class="logo-bd__item">官方网站：<text>{{infoData.website}}</text></p>
        <p>当前版本：{{infoData.version}}</p>
      </div>
    </div>
    <comfooter :text="name"/>  
  </div>
</template>

<script>
import comfooter from '@/components/footer'
import info from '@/utils/setinfo'
export default {
  data () {
    return {
      name: info.data.name,
      infoData: {
        logo: info.data.logo,
        tel: info.data.telephone,
        website: info.data.website,
        version: info.data.version
      }
    }
  },
  components: {
    comfooter
  }
}
</script>
