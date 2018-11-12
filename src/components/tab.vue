<style>
.zan-tab {
  width:100%;
  height: 45px;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
.zan-tab__bd {
  display: flex;
  flex-direction: row;
  background: #fff;
}
.zan-tab--fixed,.zan-tab__bd--fixed {
  position: fixed;
  top: 0;
  z-index: 2;
}
.zan-tab__item {
  flex: 1;
  display: inline-block;
  padding: 0 10px;
  line-height: 0;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
}

.zan-tab__title {
  display: inline-block;
  max-width: 100%;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  word-break: keep-all;
  font-size: 14px;
  color: #666;
}

.zan-tab__item--selected .zan-tab__title {
  color: #1AAD19;
  border-bottom: 2px solid #1AAD19;
}

.zan-tab__bd--scroll {
  display: block;
  white-space: nowrap;
}
.zan-tab__bd--scroll .zan-tab__item {
  min-width: 80px;
}
</style>
<template>
  <div class="zan-tab" :class="[fixed?'zan-tab--fixed':'']">
    <div class="zan-tab__bd">
      <div class="zan-tab__item" v-for="item in tab.list" :key="item.id" :class="[tab.selectedId == item.id?'zan-tab__item--selected' : '']" :data-item-id="item.id" @tap="tapevent">
        <div class="zan-tab__title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fixed: Boolean,
    tab: Object
  },
  methods: {
    tapevent (e) {
      let { itemId: selectedId } = e.currentTarget.dataset
      this.$emit('tabeven', selectedId)
    }
  }
}
</script>
