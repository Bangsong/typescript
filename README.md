## 初始化项目

```cmd
npm init -y
```

## 安装依赖

```cmd
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D html-webpack-plugin clean-webpack-plugin
yarn add -D ts-loader typescript
```

## 创建基础文件

`src/main.ts`

```typescript
let welcomeText: string = '欢迎来到XBLOG'

window.document.write(welcomeText)
```

`public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>typescript</title>
  </head>
  <body></body>
</html>
```

## 修改`package.json`

````diff
{
  "name": "pr_typescript",
  "version": "1.0.0",
  "description": "```cmd\r npm init -y\r ```",
  "main": "index.js",
  "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "tsc": "tsc --init",
+    "serve": "webpack-dev-server",
+    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^6.0.4",
    "typescript": "^3.5.3",
    "webpack": "^4.39.2",
    "webpack-cli": "^3.3.7",
    "webpack-dev-server": "^3.8.0"
  }
}

````

> tsc 是用来初始化`tsconfig.json`用的，因为我没有全局安装`typescript`,如果你全局安装了`typescript`，则可以直接执行`tsc --init`来初始化`tsconfig.json`，或者直接在根目录下创建`tsconfig.json`文件，然后自己手动添加配置

> serve 是开发时热部署，即改变文件后会直接更新，不需要重启服务

> build 是用来打包最终文件

### 执行脚本 tsc

```cmd
yarn tsc
```

## 添加 webpack 配置文件`webpack.config.js`

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  mode: 'development',
  entry: resolve('src/main.ts'),
  devServer: {
    open: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve('public/index.html') }),
    new CleanWebpackPlugin(),
  ],
}
```

## 运行项目

```cmd
yarn serve
```

若自动打开窗口并显示`欢迎来到XBLOG`，那么祝贺你，环境配置已经完成，你的第一步已经踏出，接下来跟着文章继续吧。
