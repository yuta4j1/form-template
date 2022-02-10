# form-template
React で SPA なフォーム画面を作る  

## 使用技術
### ルーティング
[react-router](https://reactrouter.com/) を使用  

### 状態管理
[Redux（Redux Tool Kit）](https://redux-toolkit.js.org/introduction/getting-started)  
[redux-persist](https://github.com/rt2zz/redux-persist) ... Reduxで保持している状態を、localStorage に同期する

### 単体テスト（ページ単位のテスト）
[react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) を jest と組み合わせて使用。  
```src/__tests__``` 配下にページ単位でテストを入れていく。  

### e2eテスト
Playwright を使用。  
```e2e``` フォルダ配下にテストを入れていく。  

### フォーム作成
[react-hook-form](https://react-hook-form.com/jp/) ... フォーム画面を作成する際の面倒ごとを簡単に実装できるようになるライブラリ。  

### APIモック
[Mock Service Worker](https://mswjs.io/) を使用。  
Service Worker のリクエストインターセプトを利用して、モック的にAPIレスポンスを実現できる。
ローカル環境用のAPIサーバを別途立てる必要がなくなる。

### バンドラ
開発環境 ... vite  
本番環境 ... webpack  

## ディレクトリ構成

以下、```src```ディレクトリ 配下のツリー
```
.
| -- pages
|     | -- xxx.tsx
|
| -- components
|     | -- [page]
|           | -- [component]
|                  | -- xxx.tsx
|     | -- common
|           | -- xxx.tsx
|
| -- redux
|     | -- reducer
|           | -- xxx.ts
|
| -- model
|     | -- xxx.ts
|
| -- api
      | -- xxx.ts
```

### pages
ページ単位のコンポーネント。  
urlに紐づく。  
```xxx.com/user``` なら、 ```user.tsx```。

### components
ページコンポーネントから呼び出されるコンポーネント。  
```user```ページから呼び出されるコンポーネントの場合、下のような形になる。  
```
components
  | -- user
        | -- user-list
        | -- profile
```

```common```ディレクトリ以下には、ページをまたいで参照される共通コンポーネントを配置する。

### redux
reducer やら store はここで定義する。  

### model
（グローバルな）データ型定義は全てここに集約する。  
※ 型定義のスコープがコンポーネントに閉じてるような場合は、別にここに入れなくて良い。

### api
APIリクエスト周りの共通化できそうな部分に関してはここに定義する。

## TODO

- [ ] eslint入れる
- [ ] husky入れる