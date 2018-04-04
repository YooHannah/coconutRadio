// pages/search/search.js
const app = getApp();
Page({
  data: {
    playShow: true,
    pauseShow: false,
    info:{}
  },
  onLoad: function (options) {
    let self = this;
    self.audioCtx = wx.createAudioContext('myAudio')
    wx.getStorage({
      key: 'oneItem',
      success: function (res) {
        console.log(res.data)
        if (res.data.id) { //一般试听
          self.setData({
            info: res.data
          })
        } else {
          //去获取最新一期
          app.func.http(app.globalData.interface.getnewest, 'GET', app.globalData.userInfo, {})
            .then(function (response) {
              self.setData({
                info: response.data
              });
              console.log(response);
            }, function (error) {
              console.log(error);
            });
        }
      }
    })
  },
  audioPlay: function () {
    this.audioCtx.play()
    this.setData({
      playShow: false,
      pauseShow: true
    })
  },
  audioPause: function () {
    this.audioCtx.pause();
    this.setData({
      playShow: true,
      pauseShow: false
    })
  }
})