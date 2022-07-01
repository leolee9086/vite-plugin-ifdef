## 安装

```
npm i vite-plugin-ifdef
```

## 功能

在vite启动的时候支持配置条件解析.

例如在代码中写:

```
///#if!BROWSER
console.log(test)
///#endif
```

在配置vite.config中增加:

```
ifdef-define:{'BROWSER':false},
ifdef-config:{
    verbose:false
}
```

则上面这段代码在启动时会被忽略.

## 作用

在使用vite开发需要在不同环境下使用的应用时可能有一些作用.

## 感谢

解析部分完全来自webpack的 `ifdef-loader`插件，只增加了在verbose模式下控制台输出带行号。

`https://github.com/leolee9086/vite-plugin-ifdef`
