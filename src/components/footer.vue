<style>
.com-ft{
  position: absolute;
  bottom:30px;
  left: 0;
  right: 0;
}
</style>
<template>
  <div class="com-ft zan-center">
    <p class="zan-font-12 zan-c-gray">CopyRight® {{text}}所有</p>
  </div>
</template>
<script>
export default {
  props: ['text']
  /* data () {
    return {
      // name: info.data.name
      name: '撒打开'
    }
  } */
}
</script>
