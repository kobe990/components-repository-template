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