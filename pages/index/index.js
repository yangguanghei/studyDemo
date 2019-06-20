//index.js
//获取应用实例(全局唯一的App实例)
const app = getApp()

/// 注册页面实例
Page({


  data: {
    mottoName: '叫什么？',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },


  //事件处理函数
  bindViewTap: function() {

    wx.navigateTo({
      url: '../logs/logs'
    })

  },


  /// 改变文字
  changeTextTap: function(){

    this.setData({ mottoName:"叫爸爸"})

    // wx.scanCode({
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })

    // 提示框
    wx.showModal({
      title: '提示',
      content: '这是提示内容',
      success:function(res){
        if(res.confirm){
          console.log('点击确定')
          wx.navigateTo({
            url: '../next/next',
          })
        }else if(res.cancel){
          console.log('点击取消')
        }
      }
    })
    wx.showToast({
      title: '成功了！',
    })
    // 是否可用
    wx.canIUse('openBluetoothAdapter')

    // 请求数据
    wx.request({

      url: 'https://mopai.wodesk.cn/wo/app/common/checkUpdate',
      method: 'POST',

      data: {

        osType : "ios",
        ukey : "567412067e2c453b9baabf506b6f5ef3"

      },

      success: function (res) {
        console.log("1111");
        console.log(res.data)// 服务器回包信息
        console.log("message:" + res.data["m"]);
      }

    })


  },
    // 微信内转发
  onShareAppMessage:function(){
      return{
        title: '自定义转发标题',
        path: 'pages/logs/logs'
      }
  },


  onPullDownRefresh:function(){
      console.log('下拉刷新')

      wx.getNetworkType({
        success: function(res) {
          console.log(res.networkType)
        },
      })
  },


  /// 渲染完界面之后进行回调
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },



  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }



})
