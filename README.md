# GitHub 一键汉化

一个轻量级浏览器扩展，会自动将 GitHub 常见导航、按钮、仓库页面、议题和设置界面翻译为简体中文。页面右下角的按钮可以在中文和原文之间切换。

## 安装（Chrome / Edge）

1. 下载或克隆本仓库，并将文件解压到一个文件夹。
2. 在地址栏打开 `chrome://extensions`（Edge 用户打开 `edge://extensions`）。
3. 打开“开发者模式”，点击“加载已解压的扩展程序”。
4. 选择包含 `manifest.json` 和 `content.js` 的文件夹，然后访问或刷新 `https://github.com`。

## 使用

扩展会自动翻译 GitHub 页面。点击页面右下角的“中文”按钮可切换原文，再次点击恢复中文。扩展只在 `github.com` 页面运行，不需要额外权限，也不会向外部服务发送数据。

## 说明

这是基于内置词条的界面翻译，GitHub 更新或未收录的文字可能仍显示英文；代码、命令、仓库内容和用户撰写的文本不会被翻译。欢迎通过修改 `content.js` 中的 `translations` 词条补充翻译。

## 文件

- `manifest.json`：扩展配置（Manifest V3）
- `content.js`：页面翻译、动态内容处理及中英文切换
