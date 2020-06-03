# Vuex
> 核心是store(仓库)，相当于一个容器，存储各种状态(state)

- vuex的状态存储是响应式的。即读取状态时，如果状态发生变化，相应的组件也会响应的更新
- 不能直接改变store中的状态，改变状态的唯一途径是显示的提交(commit)mutation
- vuex使用单一状态树，使用一个对象包含全部的应用层级状态

## 核心
### 一、State
> 状态，由于vuex的状态时响应式的，因此从store实例中读取状态的最简单的方法是从计算属性(computed)中获取某个状态

mapState
> 使用`mapState`辅助函数帮助我们生成计算属性，减少声明计算属性的重复和冗余

### 二、Getter
> state派生出来的状态

- 通过属性访问: Getter 会暴露为 store.getters 对象，可以通过获取属性的方式访问`store.getters.属性`
- 通过方法访问
- `mapGetters`辅助函数: 将store中的getter映射到局部的计算属性
```js
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'doneTodosCount',
        'anotherGetter',
        // ...
      ])
    }
  }
```

### 三、Mutation
> 改变状态，且必须是同步函数

### 四、Action
> 提交mutation，并且可以包含任何异步操作

- 分发`Action`: 通过`store.dispatch`方法触发


### 五、Module
> 可以将store分割成模块(module)，每个模块拥有自己的state、mutation、action、getter等

- 命名空间：`namespaced: true`，配置了命名空间的模块的所有的getter、action、mutation都会根据模块的注册路径调整命名





