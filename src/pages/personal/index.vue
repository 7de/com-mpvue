<style>

</style>
<template>
  <div class="com-cont">
    <infoCell :type="infoType" :cellData="infoData"/>
    <div class="page_spacing">
      <orderCell :type="orderType" :cellData="orderData"/>
      <walletCell :cellData="walletData"/>
      <setCell :cellData="setData" />
      <clearCell @tapeven="tapeven" :type="clearType" :cellData="clearData"/>
    </div>
  </div>
</template>
<script>
import comCell from '@/components/com-cell'
export default {
  data () {
    return {
      infoType: 1,
      infoData: {
        img: '/static/images/user_2.png',
        name: '未知用户',
        city: '未知'
      },
      orderType: 2,
      orderData: {
        mainHref: '/pages/order/main?selectedId=3',
        mainText: '全部订单',
        sublist: [
          {
            href: '/pages/order/main?selectedId=0',
            icon: 'electrical',
            text: '充电中'
          },
          {
            href: '/pages/order/main?selectedId=1',
            icon: 'wc',
            text: '充电完成'
          },
          {
            href: '/pages/order/main?selectedId=2',
            icon: 'history',
            text: '已关闭'
          }
        ]
      },
      walletData: {
        list: [
          {
            text: '交易记录',
            // rightcon: '查看余额明细',
            href: '/pages/wallet-detail/main'
          },
          {
            icon: 'wallet-c',
            text: '账户余额',
            href: '/pages/wallet/main'
          },
          {
            icon: 'card',
            text: '我的卡包',
            href: '/pages/card/main'
          },
          {
            icon: 'uutmoney',
            text: '充值记录',
            href: '/pages/wallet-topup-record/main'
          }
        ]
      },
      setData: {
        list: [
          {
            icon: 'set',
            text: '系统设置',
            href: '/pages/setting/main'
          },
          {
            icon: 'trust',
            text: '商户合作',
            href: '/pages/cooperation/main'
          },
          {
            icon: 'information',
            text: '关于我们',
            href: '/pages/about/main'
          },
          {
            icon: 'kefu',
            text: '帮助与反馈',
            href: '/pages/help/main'
          }
        ]
      },
      clearType: 3,
      clearData: {
        icon: 'remind',
        text: '清除本地缓存'
      }
    }
  },
  components: {
    infoCell: comCell,
    orderCell: comCell,
    walletCell: comCell,
    setCell: comCell,
    clearCell: comCell
  },
  methods: {
    tapeven (e) {
      wx.showModal({
        title: '温馨提示',
        content: '清除本地缓存将重新授权，是否继续？',
        confirmText: '继续',
        success: (res) => {
          if (res.confirm) {
            // this.$parent.token = ''
            wx.clearStorageSync()
            // page.goAuthorize()
          }
        }
      })
    }
  }
}
</script>
