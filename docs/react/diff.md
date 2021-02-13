# React Virtual DOM 和 Diff

- diff算法：高效 的 计算出虚拟dom真正变化的部分，并且只针对该部分进行实际的DOM操作

传统diff算法：循环递归对节点进行一次对比，算法复杂度O(n^3)

React将O(n^3)的复杂度转换为O(n)


## diff策略
1. Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。
2. 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。
3. 对于同一层级的一组子节点，它们可以通过唯一 id 进行区分

### tree diff
- 对树进行分层比较，两棵树只会对同一层次的节点进行比较
DOM节点不跨层级时：
- 当节点已经不存在，则该节点及其子节点都会被删除，不会进行进一步的比较
DOM节点跨层级时：React只有创建和删除操作
- 删除并重新创建
> React建议不要进行DOM跨节点操作


### component diff
React 是基于组件构建应用的，对于组件间的比较所采取的策略也是简洁高效。

- 如果是同一类型的组件，按照原策略继续比较 virtual DOM tree。
- 如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。
- 对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切的知道这点那可以节省大量的 diff 运算时间，因此 React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff。
### element diff
当节点处于同一层级时，React diff 提供了三种节点操作，分别为：INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除）。

- INSERT_MARKUP，新的 component 类型不在老集合里， 即是全新的节点，需要对新节点执行插入操作。
- MOVE_EXISTING，在老集合有新 component 类型，且 element 是可更新的类型，generateComponentChildren 已调用 receiveComponent，这种情况下 prevChild=nextChild，就需要做移动操作，可以复用以前的 DOM 节点。
- REMOVE_NODE，老 component 类型，在新集合里也有，但对应的 element 不同则不能直接复用和更新，需要执行删除操作，或者老 component 不在新集合里的，也需要执行删除操作。


## 算法复杂度
n:树中元素的数量
- 普通算法：O(n^3)
- React算法：O(n)
  
## 降低算法复杂度
React