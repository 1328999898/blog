# Monaco Editor
::: tip
`Monaco Editor`是`vs code`的在线代码编辑器
:::

- [monaco-editor 官网](https://microsoft.github.io/monaco-editor/)
- [monaco-editor github](https://github.com/microsoft/monaco-editor)
- [monaco-editor-webpack-plugin](https://github.com/Microsoft/monaco-editor-webpack-plugin)
- [Microsoft monaco-editor-samples](https://github.com/Microsoft/monaco-editor-samples)
- [git monaco-themes](https://github.com/brijeshb42/monaco-themes)
- [demo monaco-theme](https://editor.bitwiser.in/)

区别：
- `Monaco Editor`: 基于浏览器
- `vs code`: 基于electrons


## 1. 安装和配置

### 1.1 安装
```sh
yarn add monaco-editor
yarn add monaco-editor-webpack-plugin
```
### 1.2 webpack-vue-cli配置
```js
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
chainWebpack(config) {
  config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
    {
      // 加载的语言
      languages: ['json', 'javascript', 'html', 'xml', "sql", "java"]
    }
  ])
}
```

## 2. 自定义主题

### 2.1 eg:自定义日志
```js
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

// Register a new language
monaco.languages.register({ id: 'log' });

// Register a tokens provider for the language
monaco.languages.setMonarchTokensProvider('log', {
  tokenizer: {
    root: [
      [/TRACE.*/, "custom-trace"],
      [/DEBUG.*/, "custom-debug"],
      [/INFO.*/, "custom-info"],
      [/WARN.*/, "custom-warn"],
      [/ERROR.*/, "custom-error"],
      [/FATAL.*/, "custom-fatal"],
      [/[\d{4}-\d{2}-\d{2}]/, "custom-date"],
    ]
  }
});

// Define a new theme that contains only rules that match this language
monaco.editor.defineTheme('logTheme', {
  base: 'vs-dark',
  inherit: false,
  rules: [
    { token: 'custom-trace', foreground: '808080' },
    { token: 'custom-debug', foreground: '409eff' },
    { token: 'custom-info', foreground: '67c23a' },
    { token: 'custom-warn', foreground: 'f56c6c' },
    { token: 'custom-error', foreground: 'f56c6c', fontStyle: 'bold' },
    { token: 'custom-fatal', foreground: 'ffffff' },
    { token: 'custom-date', foreground: '008800' },
    { foreground: 'ffffff' }
  ]
});

// Register a completion item provider for the new language
monaco.languages.registerCompletionItemProvider('log', {
  provideCompletionItems: () => {
    var suggestions = [{
      label: 'simpleText',
      kind: monaco.languages.CompletionItemKind.Text,
      insertText: 'simpleText'
    }, {
      label: 'testing',
      kind: monaco.languages.CompletionItemKind.Keyword,
      insertText: 'testing(${1:condition})',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }, {
      label: 'ifelse',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        'if (${1:condition}) {',
        '\t$0',
        '} else {',
        '\t',
        '}'
      ].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'If-Else Statement'
    }];
    return { suggestions: suggestions };
  }
});

export default monaco
```

### 2.1 eg:自定义SQL
```js
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

// Define a new theme that contains only rules that match this language
monaco.editor.defineTheme('sqlTheme', {
  base: 'vs-dark',
  inherit: false,
  rules: [
    { token: 'keyword', foreground: 'cc7832' },
    { token: 'string', foreground: '678759' },
    { token: 'delimiter', foreground: 'cc7832' },
    { token: 'predefined', foreground: '7876aa' },
    { token: 'identifier', foreground: '7876aa' },
    { background: '1f1f1f', foreground: 'ffffff' },
  ]
});

export default monaco
```

## 3. 使用

### 3.1 使用LOG
```js
<template>
  <div ref="logContainer" style="height: 500px; width: 800px;">

  </div>
</template>
<script>
  mounted() {
      this.monacoInstance = monaco.editor.create(this.$refs.logContainer, {
        theme: 'logTheme',
        value: this.getValue(),
        language: 'log',
        readOnly: true,   // 只读模式
        minimap: {
          enabled: false // 关闭小地图
        },
      })
      this.$once("hook:beforeDestroy", () => {
        this.monacoInstance.dispose();//使用完成销毁实例
      });
  },
</script>
```
### 3.2 使用SQL
```js
<template>
  <div ref="monacoContainer" style="height: 500px; width: 800px;">

  </div>
</template>
<script>
  mounted() {
      const monacoInstance=monaco.editor.create(this.$refs.monacoContainer, {
        theme: 'sqlTheme',
        value: this.value,
        language: 'sql',
        fontWeight: "bold",
      })
      this.$once("hook:beforeDestroy", () => {
        monacoInstance.dispose();//使用完成销毁实例
      });
  },
</script>
```

## 说明

- `onDidChangeModelContent`: 变更`module`内容触发事件
- `onDidChangeOptions`: 配置改变触发事件
- `onDidChangeLanguage`: 语言改变触发事件


```js
// 查询语言
monaco.languages.getLanguages()

monacoInstance.onDidChangeModelContent((event) => {
  // event: 是一个IModelContentChangedEvent对象
  // 包含了详细的变更信息，包括：操作的类型(撤销、恢复、手动输入引发的文本变更，变更的文本位置，变更的文本内容等)
  // getValue用于获取最新的值
  const newValue=monacoInstance.getValue();
  console.log(newValue)
})

// 获取行号
monacoInstance.getPosition().lineNumber
// 获取列号
monacoInstance.getPosition().column

// 光标变化时触发
monacoInstance.onDidChangeCursorPosition((e) => {
  console.log('onDidChangeCursorPosition', e)
  // 获取行号
  console.log('onDidChangeCursorPosition lineNumber', e.position.lineNumber)
  // 获取列号
  console.log('onDidChangeCursorPosition column', e.position.column)
});

// 更新option的配置 - 启用小地图
monacoInstance.updateOptions({ minimap: { enabled: true } });
// 更新option的配置 - 禁用小地图
monacoInstance.updateOptions({ minimap: { enabled: false } });
```


## worker
> 实现代码补全及错误提示，目前支持Html、css、ts、js、json，使用时直接引入即可

- `Monaco`的实现采用`worker`的方式，因为语法解析需要耗费大量时间，所以用`worker`来异步处理返回结果

## 自定义语言
1. 注册语言
```js
// logupdatedAt
monaco.languages.register({ id: 'log' });
```
2. 加入高亮语法
```js
// monarchObj为JSON内容
monaco.languages.setMonarchTokensProvider('log', monarchObj);
```
3. monarchObj配置
```js
monaco.languages.setMonarchTokensProvider('log', {
	tokenizer: {
		root:[
      // 解析规则
      // 匹配正则表达式，并给匹配到的文本设置一个执行动作的action
			[/\d+/,{token:"keyword"}],
			[/[a-z]+/,{token:"string"}]
		],
	}
});
```

## 自己实现代码补全及错误提示
1. 解析输入的文本，需要写一个Parser
2. 根据Parser解析的结果来调用monaco的标注接口来标注错误的代码从而实现错误提示功能
3. 根据Parser即系的结果信息，提供上下文相关的代码候选项来实现代码补全功能

