# UnderStanding TypeScript

## Section1

### TypeScriptとは
1. Microsoftが開発したプログラミング言語
2. JavaScriptの厳密なスーパーセット(上位互換)
3. 任意の静的型付け機能(static typing)を提供する

### 型とは
プログラムで扱うデータの種類をコンパイラやインタプリタに伝えるためのもの。数値、文字列など

### Expressとは
Node.jsで動作するWebアプリケーションフレーム

### モジュールバンドラ
JavaScriptの依存関係を解決し、複数のソースを1つのファイルにまとめるためのツール

## Section2

### TypeScriptとは
1. JavaScriptのスーパーセット(上位互換)
2. JavaScriptの仕様をベースに拡張したプログラミング言語
3. JavaScriptを利用して、JavaScriptの上に新しい機能と利便性を追加
    → TypeScriptはJavaScriptのコーディングを簡単にしてかつ、より強力にしてくれる
4. ブラウザで直接実行できない(JavaScriptの開発環境はTypeScriptをサポートしていない)
5. 新しい機能をJavaScriptコードに変換する+潜在的なエラーのチェック(型チェック)


### TypeScriptはプログラミング言語でありツールである
TypeScriptをJavaScriptにコンパイル(変換)する強力なコンパイラでもある。
→最終的に得られるものはコンパイラから出力されたJavaScriptである。

### TypeScriptを使う理由

```js
  function add(num1, num2) {
    return num1 + num2;
  }

  console.log(add('2', '3'));
  // 実行時に期待と異なる動作が発生する。
  // どうやって回避?
  // → ユーザー入力値のバリデーション & サニタイズ(関数に if 文を追加し、値を検証)
  // → それでも、開発者が誤ったコードを書いてしまう可能性がある
  // → TypeScriptは開発者が、より良い正しいコードを書くことを支援するツール
```

