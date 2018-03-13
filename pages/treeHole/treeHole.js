// pages/treeHole/treeHole.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      message:''
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