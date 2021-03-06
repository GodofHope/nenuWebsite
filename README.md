# inNENU & NENU StudentUnion Website

[![作者：Mr.Hope](https://img.shields.io/badge/作者-Mr.Hope-blue.svg?style=for-the-badge)](https://mrhope.site)
[![License](https://img.shields.io/github/license/nenuyouth/nenuWebsite?style=for-the-badge)](https://github.com/nenuyouth/nenuWebsite/blob/master/LICENSE)

[![Travis Ci](https://img.shields.io/travis/com/nenuyouth/nenuWebsite/master?style=flat-square&logo=travis-ci)](https://travis-ci.com/nenuyouth/nenuWebsite)
[![Netlify Status](https://img.shields.io/netlify/ac01e629-dcf9-4572-871a-32d580925d0b?style=flat-square&logo=netlify)](https://app.netlify.com/sites/vue2-ts/deploys)

Source code for **inNENU** & **NENU StudentUnion** Website

该项目使用 Node.js，基于 Vue 框架制作。

[→ 点击前往](https://vuets.nenuyouth.com) | [备用地址](https://vue2-ts.netlify.com/)

## 组件介绍与使用手册

可查看[自定义组件文档](https://mrhope.site/code/vue/component.html)。

## 别名设置

- @：`src/`
- \#：`src/components`
- |：`src/assets`
- %：`src/utils`

## Linter 配置

项目已配置一套风格预设。

启动项目之后，请严格按照 Linter 提示格式化代码。项目不应包含任何无法通过 Linter 配置检查的代码。

## Node.js 库使用

### 项目使用库

#### Vue 官方库

> 跟进使用最新版官方库

- @vue/cli
- vue
- vue-router
- vue-class-component
- vue-property-decorator
- vuex

#### 第三方库

- axios (基于 promise 的 html 访问功能)
  > 在本 demo 中未使用
- register-service-worker
- vue-wechat-title (设置网页标题)
  > 在本 demo 中未使用

#### CDN 引入

- Vue
- Vuex
- Vue-Router

### 开发依赖

#### Vue-cli 插件

- babel
- e2e-cypress
- eslint
- pwa
- router
- typescript
- unit-mocha
- vuex

#### 开发语言相关

- vue-template-compiler (vue 单文件编译器)
- sass
- sass-loader
- typescript

#### 代码检查与格式化工具

- eslint
- eslint-plugin-vue
- babel-eslint
- @vue/cli-plugin-eslint
- @vue/eslint-config-airbnb
- @vue/eslint-config-typescript

## 初始化项目

```bash
npm install
```

## 更新项目依赖

```bash
npm update
```

### 启动开发环境

```bash
npm run serve
```

> 运行开发环境，可在浏览器通过 [http://localhost:8080](http://localhost:8080) 直接访问。
> 使用 `ctrl + c` 组合键并输入 `y` 与 `enter` 来终止开发环境

### 构建生产环境

- 构建现代输出(ES5 标准支持，有 fallback)

```bash
npm run build
```

- 构建常规输出(ES5 标准支持，有 fallback)

```bash
npm run normal-build
```

> 执行构建，将构建成功的网页输出至/dist 目录

```bash
npm run rebuild
```

```bash
npm run normal-rebuild
```

> 重新构建(现代 | 常规)，不清空输出目录原内容

#### 执行文件提示和文件修复

```bash
npm run lint
```

#### 分析打包文件

- 分析现代构建打包

  ```bash
  npm run analyze
  ```

- 分析普通构建打包

  ```bash
  npm run normal-analyze
  ```

#### 查看浏览器支持

```bash
npm run browser
```

#### 输出 Webpack 模式打包配置

- 输出现代构建打包配置至当前目录的 moderm.js

  ```bash
  npm run inspect
  ```

- 输出普通构建打包配置至当前目录的 normal.js

  ```bash
  npm run normal-inspect
  ```

#### 执行测试

```bash
# e2e test
npm run e2e

# unit test
npm run unit
```

### 自定义配置

查看 [自定义配置](https://cli.vuejs.org/zh/config/).
