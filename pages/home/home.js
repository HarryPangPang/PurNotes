var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var app = getApp()
Page({
  data: {
    userInfo: {},
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

  },
  go_index: function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },
  about: function (e) {
    common.showModal('手账记事本，任何建议欢迎留言');
  }
})