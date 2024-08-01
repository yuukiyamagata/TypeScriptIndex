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
- allowJs: JavaScriptもコンパイル対象にできるという設定。
- checkJs: JavaScriptをコードのチェック対象にできるという設定。
- sourceMap: デバックに役立つオプション。
- outFile: JavaScriptのファイルを一つにまとめて出力するというオプション
- outDir: JavaScriptの出力先の設定。
    - defaultの設定ではsrcフォルダの構造が出力先のフォルダにも反映される。
- rootDir: sourceが配置されるrootのフォルダのオプション。
- removeComments: コメントを削除するオプション。
- noEmit: JavaScriptを出力しないようにする設定。これを設定するとコンパイラはJavaScriptのファイルを作成しない。
- downlevelIteration: 古いversionのJavaScriptをターゲットにコンパイルする場合、forループが期待通り動作しない場合がある。そのような問題に直面したときにforループが必ず正しく動作するようにコンパイルしてくれる。
    - forループを使用していてかつ、その動作がうまく動作しないという場合に限ってonにする。
- noEmitOnError: 何かコンパイルエラーが出る場合はJavaScriptを出力しない。

- strict: TypeScriptの型チェックを厳格にする。
    - noImplicitAny: any型をエラーとして出力する。より良いコードを書くために寄与する。
    - strictNullChecks: NullかもしれないObjectにアクセスするときに確実にそれがNullではないということを厳格にチェックするオプション。
    - strictFunctionTypes: 関数の型に関して厳格にチェックするためのオプション。パラメータや戻り値に関するチェック。
    - 



