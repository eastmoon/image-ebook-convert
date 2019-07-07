## 電子書安裝程序

### 環境套件

+ nvm
  - [nvm for window](https://github.com/coreybutler/nvm-windows)
  - [nvm for linux / mac](https://github.com/nvm-sh/nvm)

+ [calibre-ebook](https://calibre-ebook.com/download)
> [Mac OS 需注意官方文件設定](https://toolchain.gitbook.com/ebook.html)

### 安裝

+ node.js 10.x
> 安裝 nvm 後安裝 10.x 版本以上的 node.js

```
nvm install 10.16.0
nvm use 10.16.0
```

+ yarn

```
npm install -g yarn
```
> 安裝 yarn 套件管理工具

```
yarn install
```
> 前往專案目錄下方，依據專案需要安裝相依套件

### 測試

```
npm start
```
> 啟動一個伺服器來觀看編寫結果
>
> 網址：http://localhost:4000

### 編譯

```
npm run build
```
> 重新將編譯內容輸出，讓測試檔可以重讀新內容

### 輸出

1. 確定安裝 Calibre-ebook

2. 執行輸出命令，並在 BUILD 檔案夾下輸出指定的電子書 (pdf, epub) 檔案
> 若未執行第一步將無法正確輸出電子檔

+ 產生電子書 (PDF、Epub)
```
npm run ebook
```

+ 產生 PDF 檔案
```
npm run pdf
```

+ 產生 Epub 檔案
```
npm run epub
```
