# 组件通信
- 父子组件通信
- 兄弟组件通信
- 隔代组件通信

## props/$emit

- 父组件通过`props`向子组件传递数据
- 子组件通过`$emit`向父组件传递数据


## $children/$parent

- parent: 指定已创建实例的父实例，在两者之间建立父子关系，子实例可以通过`this.$parent`访问父实例，子实例被推入父实例的`$children`数组中
<!-- $children/$parent主要目的是作为访问组件的应急方法，更推荐使用props和events实现父子组件通信 -->
<!-- 拿到实例代表可以访问此组件的所有方法和data -->

## provide / inject

## ref / refs

## eventBus 事件总线

## vuex

