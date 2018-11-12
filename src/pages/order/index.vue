<template>
  <div class="com-cont">
    <comTab :fixed="tabShow" :tab="tabData" @tabeven="tabeven"/>
  </div>
</template>

<script>
import comTab from '@/components/tab'
export default {
  data () {
    return {
      tabShow: true,
      tabData: {
        list: [
          {
            id: 3,
            title: '全部'
          },
          {
            id: 0,
            title: '充电中'
          },
          {
            id: 1,
            title: '充电完成'
          },
          {
            id: 2,
            title: '已关闭'
          }
        ],
        selectedId: 3
      }
    }
  },
  components: {
    comTab
  },
  onLoad (option) {
    if (option.selectedId) {
      console.log(typeof option.selectedId)
      this.tabData.selectedId = option.selectedId
    }
  },
  methods: {
    // tab切换
    tabeven (e) {
      if (this.tabData.selectedId !== e) {
        this.tabData.selectedId = e
      }
    }
  }
}
</script>
