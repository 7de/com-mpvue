<style scoped>
.tab-con{
  margin-top: 47px;
}
</style>

<template>
  <div class="com-cont">
    <div v-if="showPage">
      <load :load="tabShow"/>
    </div>
    <div v-else>
      <comTab :fixed="tabShow" :tab="tabData" @tabeven="tabeven"/>
      <div class="tab-con">
        <loadmore :loading="loadingShow" />
      </div>
    </div>
  </div>
</template>

<script>
import comTab from '@/components/tab'
import loadmore from '@/components/com-loadmore'
import load from '@/components/com-load'
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
      },
      loadingShow: true,
      showPage: true
    }
  },
  components: {
    comTab,
    loadmore,
    load
  },
  onLoad (option) {
    if (option.selectedId) {
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
