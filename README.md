## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
npm run dev:mp-weixin
```

### Compiles and minifies for production
```
npm run build
```

### 适配注意事项
```
以750px设计图开发,UniApp开发时以"rpx"作为单位
参考: https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#尺寸单位
```
```
src/uni.scss  配置全局Css变量
src/styles/global.scss 配置全局类名
```

### 目录说明
```
├── api         ## 请求API              
├── module      ## UI Module               
├── pages       // 页面           
├── plugins     // 功能插件 如:消息提示,导出PDF...          
├── static      // 静态资源 如:图标,字体        
├── store       // 全局变量
├── styles      // 全局Css样式配置        
└── utils       // 常用工具函数        
```
