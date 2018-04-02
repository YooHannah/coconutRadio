var rootDocment = 'https://www.baidu.com';//域名 
var sendRequest = function (url, method, data, header) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: rootDocment+url,
      data: data,
      method: method,
      header: header || { 'Content-Type': 'application/json', 'cookie':app.globalData.userInfo},
      success: resolve,
      fail: reject
    })
  });
  return promise;
};

module.exports.sendRequest = sendRequest 