# log4js

- [参考文档](http://shenyujie.cc/2018/05/25/log4js-basic/)
- [参考项目](https://github.com/log4js-node/log4js-example)

```js
const log4js = require('log4js');
log4js.configure(
  {
    "appenders": {
      "access": {
         category: "access",
         // 设置类型为 dateFiles
         type: 'dateFile',
         // 配置文件名为 access.log
         filename: 'logs/access.log',
         // 日志文件按日期（天）切割
         pattern: "yyyy-MM-dd",
         daysToKeep: "10",
         // 指定编码格式为 utf-8
         encoding: 'utf-8',
         // 配置 layout，此处使用自定义模式 pattern
         "layout": {
           "type": "pattern",
           // 日志输出日期 ( 默认以 ISO8601 方式格式化 ) 
           "pattern": "[%d{ISO8601}] [%p  %z  %h  %c] %m"
         },
         // 回滚旧的日志文件时，保证以 .log 结尾 （只有在 alwaysIncludePattern 为 false 生效）
         keepFileExt: true,
         // 输出的日志文件名是都始终包含 pattern 日期结尾
         alwaysIncludePattern: true,
      },
      "error": {
        // 设置类型为 dateFile
        type: 'dateFile',
        // 配置文件名为 error.log
        filename: 'logs/error.log',
        // 日志文件按日期（天）切割
        pattern: "yyyy-MM-dd",
        daysToKeep: "10",
        // 指定编码格式为 utf-8
        encoding: 'utf-8',
        // 配置 layout，此处使用自定义模式 pattern
        "layout": {
          "type": "pattern",
          // 日志输出日期 ( 默认以 ISO8601 方式格式化 ) 
          "pattern": "[%d{ISO8601}] [%p  %z  %h  %c] %m"
        },
        // 回滚旧的日志文件时，保证以 .log 结尾 （只有在 alwaysIncludePattern 为 false 生效）
        keepFileExt: true,
        // 输出的日志文件名是都始终包含 pattern 日期结尾
        alwaysIncludePattern: true,
      },
      "info": {
        // 设置类型为 dateFile
        type: 'dateFile',
        // 配置文件名为 error.log
        filename: 'logs/info.log',
        // 日志文件按日期（天）切割
        pattern: "yyyy-MM-dd",
        daysToKeep: "10",
        // 指定编码格式为 utf-8
        encoding: 'utf-8',
        // 配置 layout，此处使用自定义模式 pattern
        "layout": {
          "type": "pattern",
          // 日志输出日期 ( 默认以 ISO8601 方式格式化 ) 
          "pattern": "[%d{ISO8601}] [%p  %z  %h  %c] %m"
        },
        // 回滚旧的日志文件时，保证以 .log 结尾 （只有在 alwaysIncludePattern 为 false 生效）
        keepFileExt: true,
        // 输出的日志文件名是都始终包含 pattern 日期结尾
        alwaysIncludePattern: true,
      }
    },
    "categories": {
      "default": { "appenders": [ "info" ], "level": "ALL" },
      "access": { "appenders": [ "access" ], "level": "ALL" },
      "error": { "appenders": [ "error" ], "level": "ALL" }
    }
  }
);

const logger = log4js.getLogger("info");
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
```

```
pattern 配置项解析
%r 日志输出时间，以 toLocaleTimeString 函数格式化
%p 日志等级
%c 日志分类
%h 访问计算机的 hostname
%m 打印的日志主题内容
%n 换行标识
%d 日志输出日期 ( 默认以 ISO8601 方式格式化 )
可自定义输出类型 %d{yyyy/MM/dd-hh.mm.ss},输出 2018/05/22-15.42.18
%z 记录进程 pid 号 ( 数据来自 node 方法 process.pid )
%x{} 输出自定义 tokens 中的项目，例如上述例子中的 user
%[ 想要输出的内容 %] 用来给被扩起来的内容着色，颜色和日志 level 有关
```