// pages/search/search.js
Page({
  data: {
  codeimg:'../../img/radio.jpg',
  imgalist: []
  },
  onLoad: function (options) {
    let self = this;
    wx.getStorage({
      key: 'oneItem',
      success: function (res) {
        console.log(res.data)
        if(res.data.id){ //一般试听
          self.setData({
            codeimg: res.data.img
          })
        }else{
          //去获取最新一期
        }
      }
    })
  },

  bindViewTap:function(){
    wx.previewImage({
      current: '',
      urls: this.data.imgalist
    }) 
  }
})