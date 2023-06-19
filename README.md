# 每个主题切换 DEMO 分析

## App1

优点
- 不需要重新加载样式文件，样式切换时候不卡顿

缺点
- 首屏加载牺牲了性能，因为需要加载所有的样式文件
- 各个主题样式写死，耦合了具体的样式选择器，后续针对某一个主题样式表修改或者新增主题麻烦
- 样式优先级问题

## App2

动态修改 CSS Variables，更适合主题颜色不固定，比如选色板

优点
- 新增/修改主题方便，只需要新增/修改 CSS 变量即可，在 var() 绑定样式变量地方可自动替换
- 没样式优先级问题

缺点
- 首屏加载慢


## App3

CSS Variables + 修改 body class 类型方式。更适合主题颜色固定的，比如就暗黑主题和 Light 主题

优点
- 新增/修改主题方便，只需要新增/修改 CSS 变量即可，在 var() 绑定样式变量地方可自动替换
- 没样式优先级问题

缺点
- 首屏加载慢

## App-antd3

- antd3 默认没提供暗黑主题，需要根据 https://github.com/ant-design/ant-design-dark-theme/blob/f3a15c682862ec5f44cd4872d450b6e7c1246017/index.ts 生成一套

## App-antd4

antd4 默认提供 antd.dark.less 和 antd.less 两套主题，通过 Prefix 区分不同主题

参考：https://juejin.cn/post/7143821503576932359

缺点：
- Light 和 Dark 有重复的样式
- Antd4 官方没有暗黑主题的 Variables（对标 antd/dist/antd.variable.css），需要根据 [这里](https://github.com/ant-design/ant-design-dark-theme/blob/master/index.ts) 生成一个 antd.dark.variable.css

其他主题切换的参考例子：https://github.com/ant-design/ant-design-dark-theme/issues/8

## App-antd4-css-Variables

在切换主题时，动态修改根节点上的 CSS Variable 变量，达到换肤的效果，同时避免加载多份冗余的样式内容。

但是，antd 4 提供的 variable.css 里面，有部分的样式没有使用主题变量。比如：`.ant-form-item-label > label` 里的 color 属性。

