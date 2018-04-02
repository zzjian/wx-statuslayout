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
      value: '../../img/empty.png' 
    },
    emptyText: {
      type: String,
      value: '没有数据哦!'
    },
    emptyImageWidth: {
      type: Number,
      value: 64
    },
    emptyImageHeight: {
      type: Number,
      value: 64
    },
    errorImage: {
      type: String,
      value: '../../img/error.png'
    },
    errorText: {
      type: String,
      value: '操作失败, 请稍后重试!'
    },
    errorImageWidth: {
      type: Number,
      value: 64
    },
    errorImageHeight: {
      type: Number,
      value: 64
    },
    loadingText:{
      type: String,
      value: '加载中, 请稍后!'
    },
    loadingImage: {
      type: String,
      value: '../../img/loading.png'
    },
    loadingImageWidth: {
      type: Number,
      value: 40
    },
    loadingImageHeight: {
      type: Number,
      value: 40
    },
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
          this.data.imgWidth = this.properties.loadingImageWidth
          this.data.imgHeight = this.properties.loadingImageHeight
          break
        case 'EMPTY':
          this.data.statusText = this.properties.emptyText
          this.data.statusImage = this.properties.emptyImage
          this.data.imgWidth = this.properties.emptyImageWidth
          this.data.imgHeight = this.properties.emptyImageHeight
          break
        case 'ERROR':
          this.data.statusText = this.properties.errorText
          this.data.statusImage = this.properties.errorImage
          this.data.imgWidth = this.properties.errorImageWidth
          this.data.imgHeight = this.properties.errorImageHeight
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
        imgWidth: this.data.imgWidth,
        imgHeight: this.data.imgHeight
      })
    }
  }
})
