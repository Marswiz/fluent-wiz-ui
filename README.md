# fluent-wiz-ui

![FluentWiz Logo](./public/fluentWizLogo.svg)

一款基于Vue3的组件库，提供多种实用组件。

## 文档 Documentation

你可以查看以下页面，快速浏览、掌握FluentWiz UI的全部组件和API：

[FluentWiz UI Documentation](https://fluent-wiz-ui-9gthwmk139bb4c47-1254299756.tcloudbaseapp.com/)

## 当前组件列表 Component List

- 基础:
    - `<flex-box>`: 更容易理解的flexbox布局封装组件；
    - `<grid-box>`: grid布局容器的封装组件；
    - `<grid-item>`: grid布局容器内元素的封装组件；
- 列表:
    - `<card-list>`: 带有抽取动效的卡片类列表组件；
- Glitch:
    - `<tiktok-glitch>`: 模仿抖音Logo的故障效果;
- 按钮：
    - `<fluent-button>`: 基础按钮组件，包含常规、警告、成功、危险、信息等，可选圆角与扁平化按钮。
    
## 安装 Install

使用npm安装，配合打包工具如Webpack等：

```js
// main.js
import fluentWizUi from 'fluent-wiz-ui'
import {createApp} from 'vue'

// Use fluentWizAUi as Vue3 plugin.
app = createApp(App)
app.use(fluentWizUi)

app.mount('#app')
```
