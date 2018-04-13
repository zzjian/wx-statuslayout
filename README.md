# wx-statuslayout
微信小程序页面状态切换组件

## 效果图

![](https://raw.githubusercontent.com/ZzjBeatYou/wx-statuslayout/4b84a5513cf5e9a810cc56d322c29830b39b4fdb/preview/preview.gif)
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
    <statusLayout id="statusLayout" status='CONTENT'>
        //内容
      <block wx:for="{{datas}}" wx:for-index="id" wx:for-item="item">
              <view id="{{id}}">{{item}} </view>
      </block>
    </statusLayout>
    ```
5. 在js文件中获取组件对象

    `statusLayout = this.selectComponent("#statusLayout")`
    
    一个方法即可设置4种布局 `statusLayout.setStatus("CONTENT") `

状态类型：`CONTENT`、`ERROR`、`EMPTY`、`LOADING`

### 在不同页面使用不同的状态图片及文案

    ``` json
    <statusLayout id="statusLayout" status='CONTENT' errorImage='url' errorText='错误文案' emptyImage='url' emptyText='空文案'>
        //内容
    </statusLayout>
    ```


