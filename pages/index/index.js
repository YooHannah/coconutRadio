//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    motto: 'Welcome!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    backgroundimg:'../../img/background.jpg',
  },
  //事件处理函数
  bindJump: function(e) {
    let val = e.currentTarget.dataset.val;
    let path='';
    if(val== 1){
      path = '../../pages/newest/newest'
    }else if(val == 2){
      path = '../../pages/search/search'
    }else if(val == 3){
      path = '../../pages/treeHole/treeHole'
    }
    wx.setStorage({
      key: 'oneItem',
      data: e.currentTarget.dataset.val
    })
    wx.navigateTo({
      url: path
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    app.func.http(app.globalData.interface.TEST, 'GET', app.globalData.userInfo, {})
      .then(function (response) {
        // that.setData({
        //   positionlist: response.data.list
        // });
        console.log(response);
      }, function (error) {
        console.log(error);
      });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
