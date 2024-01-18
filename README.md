### UniAPP MiniProgram Template
```
  环境 Node Version 14.21.0
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
  npm run dev:mp-weixin 
  使用微信开发者工具载入dist\dev\mp-weixin
```

### Compiles and minifies for production
```
npm run build:mp-weixin
```

### 适配注意事项
``` 
以750px设计图开发,UniApp开发时以"rpx"作为单位   750px = 750rpx 1:1
参考: https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#尺寸单位
```
```
src/uni.scss  配置全局Css变量
src/styles/global.scss 配置全局类名
```

### 目录说明
```
├── api         // 请求API  
├── config      // 一些基础配置常量,避免魔法数字|字母                     
├── module      // UI Module               
├── pages       // 页面           
├── plugins     // 功能插件 如:消息提示,导出PDF...          
├── static      // 静态资源 如:图标,字体        
├── store       // 全局变量
├── styles      // 全局Css样式配置        
└── utils       // 常用工具函数        
```
