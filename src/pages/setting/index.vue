
<template>
  <div class="com-cont">
    <comCell :cellData="userData" />
    <comfooter :text="name"/>
  </div>
</template>

<script>
import comCell from '@/components/com-cell'
import comfooter from '@/components/footer'
import info from '@/utils/setinfo'
export default {
  data () {
    return {
      userData: {
        list: [
          {
            href: '/pages/setting-user/main',
            text: '用户指南'
          }
        ]
      },
      name: info.data.name
    }
  },
  components: {
    comCell,
    comfooter
  }
}
</script>
