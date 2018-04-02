// pages/search/search.js
const app = getApp();
Page({
  data: {
  codeimg:'../../img/radio.jpg',
  imgalist: ['http://www.3987.com/uploadfile/2017/0415/20170415105145627.png']
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
          // app.func.http(app.globalData.interface.getnewest, 'GET',     app.globalData.userInfo, {})
          //   .then(function (response) {
          //     // that.setData({
          //     //   positionlist: response.data.list
          //     // });
          //     console.log(response);
          //   }, function (error) {
          //     console.log(error);
          //   });
        }
      }
    })
  },

// https://m.ximalaya.com/tracks/76840905.json
  bindViewTap:function(){
    wx.previewImage({
      current: '',
      urls: this.data.imgalist
    }) 
  }
})