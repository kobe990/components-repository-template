#### 组件库规范
* 组件统一放置于components文件夹下
* 一个组件一个文件夹. 组件文件夹名与组件名相同
* 组件文档名定义为docs.md, 使用MarkDown编写
* 组件实例(用组件写出的例子)放置于samples文件夹下
* 每个组件样式需要在vue组件中引入, 以scope的方式或者是style标签@import进来均可, 如:

```
example1:
 <template></template>
 <style>
 	.class {
 		color: red
 	}
 </style>
 <script></script>
```

```
example2:
 <template></template>
 <style>
 	@import '../index.less'
 </style>
 <script></script>
```

* 模板build文件夹下的配置文件，尤其是webpack config 不建议修改，以免与组件portal平台的配置不一致导致在平台上无法显示仓库的组件。

#### 单个组件本地调试方式
1. 修改 build/main.js 里的 import 命令，导入想调试的组件
2. 仓库根目录执行 npm run build 命令，打开根目录下的 index.html 即可
3. 执行 npm run hot-build 命令可以进行实时编译