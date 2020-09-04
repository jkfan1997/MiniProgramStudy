// components/vanDialog/van-dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message: {
      type:String
    },
    isShow:{
      type:Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    labelatp(){
      console.log("label被点击了");
      
    },
    dialogBtnClick(e){
      this.setData({
        isShow:!this.data.isShow
      })
      console.log('被点击了');
      wx.hideTabBar()
    },
  }
})
