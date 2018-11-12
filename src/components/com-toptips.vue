<style>
.zan-toptips {
  display: block;
  position: fixed;
  transform: translateY(-100%);
  width: 100%;
  height: 6vh;
  line-height: 6vh; /* 至少有一行的高度，保证第一次动画显示正常 */
  top: 0;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background-color: #f15b6c;
  z-index: 110;
}
.zan-toptips-oth{
  background-color: #f05b72;
}
</style>
<template>
  <div :animation="animationData" class="zan-toptips">
    <a :href="topTips.url" class="counter">{{ topTips.content }}</a>
  </div>
</template>
<script>
export default {
  // props: ['animationData', 'topTips'],
  data () {
    return {
      topTips: {},
      animationData: {}
    }
  },
  methods: {
    showTopTips ({ content = '', options = {}, url = '' }, event) {
      // console.log('showZanTopTips', content, options, url)
      let topTips = this.topTips || {}
      // 如果已经有一个计时器在了，就清理掉先
      if (topTips.timer) {
        clearTimeout(topTips.timer)
        topTips.timer = undefined
      }

      if (typeof options === 'number') {
        options = {
          duration: options
        }
      }

      // options参数默认参数扩展
      options = Object.assign(
        {
          duration: 3000
        },
        options
      )

      // 原生动画
      let animation = wx.createAnimation({
        duration: 400,
        timingFunction: 'ease'
      })
      this.animation = animation

      const toggle = () => {
        wx.createSelectorQuery()
          .select('.zan-toptips')
          .boundingClientRect(rect => {
            this.topTips.show ? animation.translateY().step() : animation.translateY(-rect.height).step()
            this.animationData = animation.export()
          })
          .exec()
      }

      // 设置定时器，定时关闭topTips
      let timer = setTimeout(() => {
        this.topTips.show = false
        this.topTips.timer = undefined
        toggle()
      }, options.duration)

      // 展示出topTips
      this.topTips = {
        show: true,
        content,
        url,
        timer
      }
      toggle()
    }
  }
}
</script>
