# lutils

>前端常用工具库

## 安装使用

* 直接下载min目录下的lutils.min.js使用，支持UMD通用模块规范
* 使用npm安装

### 浏览器:

```html
<script src="lutils.min.js"></script>
<script>
  var device = lutils.getDevice()
</script>
```

### npm:

```
npm install --save-dev lutils
webpack、RequireJS、SeaJS等

// 完整引入
const lutils = require('lutils')
const device = lutils.getDevice()

// 推荐使用方法，只引入部分方法('lutils/dist/<方法名>')
const getDevice = require('lutils/dist/getDevice')
const OS = getDevice()

```

## 发布

```
# 克隆项目
git clone https://github.com/lion1ou/lutils.git

# 安装依赖
npm install

# 构建代码
npm run build 

# 发布上线
npm publish

```
