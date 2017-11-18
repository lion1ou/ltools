# ltools

>前端常用工具库

## 安装使用

* 直接下载min目录下的ltools.min.js使用，支持UMD通用模块规范
* 使用npm安装

### 浏览器:

```html
<script src="ltools.min.js"></script>
<script>
  var device = ltools.getDevice()
</script>
```

### npm:

```
npm install --save-dev ltools
webpack、RequireJS、SeaJS等

// 完整引入
const ltools = require('ltools')
const device = ltools.getDevice()

// 推荐使用方法，只引入部分方法('ltools/dist/<方法名>')
const getDevice = require('ltools/dist/getDevice')
const OS = getDevice()

```

## 发布

```
# 克隆项目
git clone https://github.com/lion1ou/ltools.git

# 安装依赖
npm install

# 构建代码
npm run build 

# 发布上线
npm publish

```
