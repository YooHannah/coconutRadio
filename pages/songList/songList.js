// pages/songList/songList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src:'http://www.kugou.com/song/m7zhpd6.html#hash=75A1A10908C34BBB84FA08863FAA36D6&album_id=0'
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