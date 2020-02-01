// pages/index/index.js

const _banners = [
  {
    id: 1,
    img: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2763523135,381182796&fm=26&gp=0.jpg',
    name: '披萨'
  },
  {
    id: 2,
    img: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2763523135,381182796&fm=26&gp=0.jpg',
    name: '披萨'
  },
  {
    id: 3,
    img: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2763523135,381182796&fm=26&gp=0.jpg',
    name: '披萨'
  }
];


Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: _banners,
    filterId: 1,
    scrollDown: false
  },
/**
 * 附近商家
 */
  tapFilter (e) {
    this.setData({
      filterId: e.currentTarget.dataset.id
    });
  },
  tapSearch () {
    console.log('ok');
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  /**
   * 滚动事件
   */
  onPageScroll (e) {
    if (e.scrollTop >= 100) {
      this.setData({
        scrollDown: true
      });
    }
    if (e.scrollTop < 100) {
      this.setData({
        scrollDown: false
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})