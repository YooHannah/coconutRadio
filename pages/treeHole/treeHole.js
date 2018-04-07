// pages/treeHole/treeHole.js
const app = getApp();
Page({
  data: {
      message:'',
      flag:false,
      id:-1,
  },

  onReady: function (options) {
    let self = this;
    wx.getStorage({
      key: 'oneItem',
      success: function (res) {
        console.log(res.data)
        if (res.data.id) { //某一期评价
          self.setData({
           flag: true,
           id: res.data.id
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
    this.setData({
      message: e.detail.value
    })
  },
  bindButton:function(){
    console.log(this.data.message);
    let self = this;
    let senddata = { 
      id:this.data.id,
      message: this.data.message, 
      userInfo: app.globalData.userInfo 
    }
    app.func.http(app.globalData.interface.treeHole, 'POST', app.globalData.userInfo, {})
      .then(function (response) {
        self.setData({
          message: ''
        });
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        console.log(response);
      }, function (error) {
        console.log(error);
        wx.showToast({
          title: error,
          icon: 'none',
          duration: 2000
        })
      });
  }

})