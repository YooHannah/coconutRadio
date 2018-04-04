// pages/search/search.js
const app = getApp();
Page({
  data: {
    keywords: '',
    results: [{
      title: '孙燕姿',
      id: 1,
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
      "id": 76840905,
      "play_path_64": "http://audio.xmcdn.com/group40/M02/C1/D8/wKgJT1qrLqWS1_gWABk7781rNK8359.m4a",
      "play_path_32": "http://audio.xmcdn.com/group40/M02/C1/D8/wKgJT1qrLqSDsKIaAAmoSy5KokY407.m4a",
      "play_path": "http://audio.xmcdn.com/group40/M02/C1/D8/wKgJT1qrLqWS1_gWABk7781rNK8359.m4a",
      "duration": 204,
      "title": "Rainy Mood",
      "nickname": "3D体验馆",
      "uid": 1000139,
      "waveform": "group40/M02/C2/CD/wKgJVFqrLqWBAMJsAAAJ8zMYL4U8574.js",
      "upload_id": "u_79999868",
      "cover_url": "http://fdfs.xmcdn.com/group30/M02/F7/B6/wKgJXlmIFT7yp4oKAABi2-DeRVI855.jpg",
      "cover_url_142": "http://fdfs.xmcdn.com/group30/M02/F7/B6/wKgJXlmIFT7yp4oKAABi2-DeRVI855_web_large.jpg",
      "formatted_created_at": "3月16日 10:41",
      "is_favorited": false,
      "play_count": 14230,
      "comments_count": 0,
      "shares_count": 0,
      "favorites_count": 9,
      "album_id": 9843091,
      "album_title": "助眠圣器，安静舒缓的3D音乐",
      "intro": "",
      "have_more_intro": false,
      "time_until_now": "19天前",
      "category_name": "music",
      "category_title": "音乐",
      "played_secs": null,
      "is_paid": false,
      "is_free": null,
      "price": null,
      "discounted_price": null
    }, {
      title: 'S.H.E',
      id: 3,
      songs: [{
        title: 'super star'
      }, {
        title: '曾是少年'
      }]
    }]
  },
  onLoad: function (options) {
    let self = this;
    //去获取最新前五期
    app.func.http(app.globalData.interface.getnewest, 'GET', app.globalData.userInfo, {})
      .then(function (response) {
        self.setData({
          info: response.data
        });
        console.log(response);
      }, function (error) {
        console.log(error);
      });
  },
  bindKeyInput: function (e) {
    this.setData({
      keywords: e.detail.value
    })
  },
  bindSearch: function () {
    console.log(this.data.keywords);
    let self = this;
    let senddata = { keywords: this.data.keywords, userInfo: app.globalData.userInfo}
    app.func.http(app.globalData.interface.search, 'GET',senddata, {})
      .then(function (response) {
        self.setData({
          result: response.data
        });
        console.log(response);
      }, function (error) {
        console.log(error);
      });
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