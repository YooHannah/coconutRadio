// pages/songList/songList.js
Page({
  data: {
    list:[],
  },
  onReady: function (options) {
    let self = this;
    wx.getStorage({
      key: 'oneItem',
      success: function (res) {
          self.setData({
            list: res.data.songs
          })
      }
    })
  },
})