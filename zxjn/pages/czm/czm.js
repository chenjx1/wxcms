Page({
  data: {
    tiqu: {

    },
    ts: true,
    daan: true,
    TopMenuList: [{
      "mlno": "01",
      "mlname": "船长",
      "mltext": "海贼王路飞"
    }, {
      "mlno": "02",
      "mlname": "副船长",
      "mltext": "世界第一剑豪索隆"
    }, {
      "mlno": "03",
      "mlname": "厨师",
      "mltext": "找到All Blue山治"
    }, {
      "mlno": "04",
      "mlname": "狙击手",
      "mltext": "勇敢的海上战士乌索普"
    }, {
      "mlno": "05",
      "mlname": "航海士",
      "mltext": "绘制世界地图娜美"
    }, {
      "mlno": "06",
      "mlname": "船医",
      "mltext": "制作出万能药，帮助所有需要帮助的人乔巴"
    }, {
      "mlno": "07",
      "mlname": "考古学家",
      "mltext": "解开历史正文，找到关于三大武器的秘密罗宾"
    }, {
      "mlno": "08",
      "mlname": "船匠",
      "mltext": "乘坐自己制作的梦想之船绕伟大航线一周弗兰奇"
    }, {
      "mlno": "09",
      "mlname": "音乐家",
      "mltext": "与拉布汇合布鲁克"
    }, {
      "mlno": "10",
      "mlname": "舵手",
      "mltext": "帮助路飞成为海贼王，让鱼人族获得真正的自由甚平"
    }],
    imgList: [{
      imagePath: "/images/1.jpg",
      pagePath: "../lxjsq/lxjsq"
    }, {
      imagePath: "/images/5.png",
      pagePath: "../lyb/lyb"
    }, {
      imagePath: "/images/3.png",
      pagePath: "../map/map"
    }, {
      imagePath: "/images/5.png",
      pagePath: "../table/table"
    }],
  },
  XYT() {
    wx.navigateTo({
      url: '/pages/xiayiti/xiayiti',
    })
  },
  onLoad: function () {
    var qb = {};
    wx.request({
      url: 'http://132.232.88.15/cmsv1/apis/getchoiceques.ashx?id=1',
      success: function (data) {
        wx.setStorageSync('qb', data)
      }
    })
    qb = wx.getStorageSync('qb')
    this.setData({
      tiqu: qb
    })
  },
  TS: function () {
    this.setData({
      ts: false
    })
  },
  DA: function () {
    this.setData({
      daan: false
    })
  }
})

