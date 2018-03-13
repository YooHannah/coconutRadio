// pages/search/search.js
Page({
  data: {
  codeimg:'../../img/radio.jpg',
  imgalist: []},
  bindViewTap:function(){
    wx.previewImage({
      current: '',
      urls: this.data.imgalist
    }) 
  }
})