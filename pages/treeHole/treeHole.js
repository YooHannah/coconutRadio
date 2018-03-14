// pages/treeHole/treeHole.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      message:'',
      flag:false
  },

  onReady: function (options) {
    let self = this;
    wx.getStorage({
      key: 'oneItem',
      success: function (res) {
        console.log(res.data)
        if (res.data.id) { //某一期评价
          self.setData({
           flag: true
          })
        } else {
          //首页入口
          self.setData({
            flag: false
          })
        }
      }
    })
  },

  bindUpdate: function (e) {
    console.log(e.detail.value)
    this.setData({
      message: e.detail.value
    })
  },
  bindButton:function(){
    console.log(this.data.message);
  }

})