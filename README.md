# wx-statuslayout
微信小程序页面状态切换组件, 如果对您有帮助的话, 就赏个star吧~

## 效果图

![](https://raw.githubusercontent.com/zzjian/wx-statuslayout/0c87f17bd07381d82192200f1434aa74b1266872/preview/preview.gif)

## 自定义属性
- `rootStyle` 根容器样式, 可用来设置组件宽高等
- `status` 默认状态
- `emptyImage` 无数据时的图片
- `emptyText` 无数据时的文案
- `emptyImageWidth` 无数据时图片宽度
- `emptyImageHeight` 无数据时图片高度
- `errorImage` 发生错误时的图片
- `errorText` 发生错误时的文案
- `errorImageWidth` 错误图片宽
- `errorImageHeight` 错误图片高
- `loadingText` 加载文案
- `loadingImage`  加载图片
- `loadingImageWidth` 加载图片宽
- `loadingImageHeight` 加载图片高

## 使用
1. 将`statusLayout`组件拷贝到自己项目中
2. 修改`statuslayout.js` 中的属性默认值, 状态图片、文案及图片宽高
3. 在需要使用的页面json文件中添加引用
    ``` json
    "usingComponents": {
        "statusLayout": "../../components/statusLayout/statusLayout"
    }
    ```
4. 在页面wxss文件中添加`statusLayout`布局
    ``` json
    <statusLayout id="statusLayout" status='CONTENT' rootStyle="height:{{system.windowHeight-50}}px;">
        //内容
      <block wx:for="{{datas}}" wx:for-index="id" wx:for-item="item">
              <view id="{{id}}">{{item}} </view>
      </block>
    </statusLayout>
    ```

5. 在js文件中使用

    1. 获取statusLayout组件对象 `statusLayout = this.selectComponent("#statusLayout")`
    
    2. 切换布局`(两种切换布局的方法)`

    - 一个方法通过不同参数切换
        ```js
        statusLayout.setStatus("LOADING")

        statusLayout.setStatus("CONTENT")

        statusLayout.setStatus("ERROR")

        statusLayout.setStatus("EMPTY")
        ```
    - 直接调不同的方法切换 
    
        ``` js
        statusLayout.showLoading()
        
        statusLayout.showContent()
            
        statusLayout.showError()
            
        statusLayout.showEmpty()
         
        ```
    3. 绑定点击重新加载的回调
        ``` js
        <statusLayout id="statusLayout" errorText="加载失败, 请点击重试" bindOnClickListener='testStatusLayout'>

        //testStatusLayout 为页面js文件中加载数据的方法
        ```

### 在不同页面设置不同的状态图片及文案等
``` js
<statusLayout id="statusLayout" status='LOADING' errorImage='url' errorText='错误文案' emptyImage='url' emptyText='空文案' rootStyle="height:{{system.windowHeight-50}}px;">
    //内容
</statusLayout>
```


