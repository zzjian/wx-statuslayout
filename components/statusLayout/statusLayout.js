// components/statusLayout/statusLayout.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: String,
      value: 'CONTENT',  //LOADING、CONTENT、EMPTY、ERROR
      observer: function (newVal, oldVal) {
        console.log(newVal)
        if (newVal == oldVal) return
        this.setStatus(newVal)
      }
    },
    emptyImage:{
      type: String,
      value: 'http://p3gi5474i.bkt.clouddn.com/data_empty.jpg' 
    },
    emptyText: {
      type: String,
      value: '没有数据哦!'
    },
    errorImage: {
      type: String,
      value: 'http://p3gi5474i.bkt.clouddn.com/data_empty.jpg'
    },
    errorText: {
      type: String,
      value: '操作失败, 请稍后重试!'
    },
    loadingText:{
      type: String,
      value: '加载中, 请稍后!'
    },
    loadingImage: {
      type: String,
      value: '../../img/loading.png'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusText: '',
    statusImage: '',
    loadingAnimation:'',
    imgWidth:100,
    imgHeight: 100,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setStatus: function(status) {
      var anim = ''
      switch(status) {
        case 'LOADING':
          this.data.statusText = this.properties.loadingText
          this.data.statusImage = this.properties.loadingImage
          break
        case 'EMPTY':
          this.data.statusText = this.properties.emptyText
          this.data.statusImage = this.properties.emptyImage
          break
        case 'ERROR':
          this.data.statusText = this.properties.errorText
          this.data.statusImage = this.properties.errorImage
          break
        case 'CONTENT':
          break
        default:
          console.log("error: 未找到该status")
          break
      }
      this.setData({
        status: status,
        statusText: this.data.statusText,
        statusImage: this.data.statusImage,
      })
    },
    imageLoad:function(e){
        this.setData({
          imgWidth: e.detail.width/4,
          imgHeight: e.detail.height/4
        })
    }
  }
})
