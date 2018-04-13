//index.js
//获取应用实例
const app = getApp()
var statusLayout
Page({
  data: {
    datas: ['测试数据1', '测试数据2', '测试数据3', '测试数据4', '测试数据5'],
    system: {}
  },
  //事件处理函数
  onReady: function(){
    var that = this
    statusLayout = this.selectComponent("#statusLayout")
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        that.setData({
          system: res
        })
      }
    })
  },
  onLoad: function () {
  },
  testStatusLayout: function(e) {
    statusLayout.showLoading()
    // statusLayout.setStatus("LOADING")
    setTimeout(function(){
      var num = Math.floor(Math.random() * 10 + 1); //1-10

      if (num <= 3) {
        statusLayout.showContent()
        // statusLayout.setStatus("CONTENT")
      } else if (num <= 7) {
        statusLayout.showError()
        // statusLayout.setStatus("ERROR")
      } else {
        statusLayout.showEmpty()
        // statusLayout.setStatus("EMPTY")
      }
    },1000)
  }
})
