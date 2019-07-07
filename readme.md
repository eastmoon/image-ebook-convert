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

+ project dependencies

```
yarn install
```
> 前往專案目錄下方，依據專案需要安裝相依套件

### 編譯

```
yarn build
```

| 目錄 | 說明 |
| -- | ------- |
| resource | 構成電子書的影像檔案目錄集合 |
| build/temp | 電子書構成中緩存檔案 |
| build/output | 電子書輸出檔存放位置 |

對於電子書影像檔案目錄與輸出電子書關係如下

```
resource
  └ book1
    └ 001.jpg
    └ ...
  └ book2
    └ 001.png
```
> 在 resource 下的目錄內的圖檔會構成單一電子書，若有複數目錄則產生複數電子書
>
> 若專案內部不存在此目錄，則軟體不會開始執行

```
build
  └ temp
    └ cover.jpg
    └ ebook.html
```
> cover.jpg 是依據圖檔目錄中的第一張影像，如 book1/001.jpg

```
build
  └ output
    └ book1.epub
    └ book2.epub
```
> 在 output 內的 epub 會以 resource 內的目錄名稱作為書名
