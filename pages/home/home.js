

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'爸爸',

    sons:[
        {id:1, name:'00'},
        {id:2, name:'01'},
        {id:3, name:'10'},
        {id:4, name:'11'}
    ],

    counter:0
  },

  clickPlusBtn(){
      this.setData({
        counter:this.data.counter + 1
      })
  },
  // 获取用户信息的点击事件
  getUserInfo(event){
      console.log(event)
      const app = getApp()
      console.log('App名：' + app.globalData.appName)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})