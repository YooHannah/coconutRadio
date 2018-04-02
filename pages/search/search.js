// pages/search/search.js
Page({
  data: {
    keywords: '',
    results: [{
      title: '孙燕姿',
      id: 0,
      songs: [{
        name: '当冬夜渐暖',
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        author: '许巍',
        src: 'https://audio.xmcdn.com/group40/M02/C1/D8/wKgJT1qrLqWS1_gWABk7781rNK8359.m4a'
      }, {
        name: '第一天',
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        author: '许巍',
        src: 'http://audio.xmcdn.com/group40/M02/C1/D8/wKgJT1qrLqWS1_gWABk7781rNK8359.m4a'
      }]
    }, {
      title: 'F.I.R',
      id: 1,
      songs: [{
        title: '你的微笑'
      }, {
        title: '雨樱花'
      }]
    }, {
      title: 'S.H.E',
      id: 2,
      songs: [{
        title: 'super star'
      }, {
        title: '曾是少年'
      }]
    }]
  },
  bindKeyInput: function (e) {
    this.setData({
      keywords: e.detail.value
    })
  },
  bindSearch: function () {
    console.log(this.data.keywords);
  },
  bindJumpDetail: function (e) {
    // console.log(e.currentTarget.dataset.val)
    wx.setStorage({
      key: 'oneItem',
      data: e.currentTarget.dataset.val
    })

    wx.showActionSheet({
      itemList: ['** 试听 **', '** 歌单 **', '** 评价 **'],
      success: function (res) {
        let path = "";
        let index = res.tapIndex;
        if (index === 0) {
          path = '../../pages/newest/newest';
        } else if (index === 1) {
          path = '../../pages/songList/songList'
        } else {
          path = '../../pages/treeHole/treeHole'
        }
        wx.navigateTo({
          url: path
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  }
})