// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keywords: '',
    results:[{
      title:'孙燕姿',
      id:0,
      songs:[{
        title:'当冬夜渐暖'
      },{
        title:'第一天'
      }]
    }, {
      title: 'F.I.R',
      id: 1,
      songs: [{
        title: '你的微笑'
      },{
        title: '雨樱花'
      }]
    }]
  },
  bindKeyInput: function (e) {
    this.setData({
      keywords: e.detail.value
    })
  },
  bindSearch:function(){
    console.log(this.data.keywords);
  }
})