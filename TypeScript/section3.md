## TypeScriptのコンパイラ
コンパイラの設定方法と使い方

## watchモード
TypeScriptはファイルの変更を監視し、何か少しでも変更があれば自動的にコンパイルする。

```
tsc ファイル名 --watch
```
```
tsc ファイル名 -w
```

## プロジェクト全体のコンパイルの設定
複数のファイルがあるときに一度にコンパイルする方法
`tsc --init`コマンドでフォルダが一つのTypeScriptのプロジェクトであることを伝える。
→ tsconfig.jsonを作成する。
tsconfig.jsonがあるフォル.ダとそのサブフォルダはTypeScriptによって管理されるべきものであることを意味する。


## tsconfig.json
TypeScriptがどのようにJavaScriptにコンパイルされるかということを決定するための設定ファイル。
compilerOptionsはTypeScriptのファイルがどのようにコンパイルされるかということをコントロールするもの。

- exclude: TypeScriptのコンパイル処理に含めたくないファイルを指定する。
    - node_modulesはdefaultで除外されるように設定されている。s
- include: 何らかの特定のファイルだけをコンパイル対象に含めることができる。
- files: ファイル単位のみで指定することができる。
- target: どのversionのJavaScriptをターゲットにしてTypeScriptをコンパイルするかという設定する。
- lib: TypeScriptでコードをかくときに、どのようなObjectや機能がでdefaultで使えるかということを指定するオプション。
- allowJs: 
- checkJs


