## コアな型
TypeScriptはJavaScriptで必要な(データ)型を最初からサポートしている。
一般的な型からよりきめ細かい型の指定をすることに意味がある。
**TypeScriptが役に立つのはコードを書いているときだけ。ランタイム上ではTypeScriptは何もしない。コンパイルされたJavaScriptが実行されるだけ**



* 動的型付け言語  
事前に変数などの型を決定せず、実行時のデータ(値)によって種類を区別する言語。
これを「データ型」と呼ぶ。

| 型 | 例 | 説明 |
| ---- | ---- | ---- |
| number | 1,5.3,-10 | 整数や浮動小数点を含むすべての数値 |
| string | 'Hi', "Hi", `Hi` | すべての文字列 |
| boolean | true false | trueまたはfalse |
| object | { age: 30 } | JavaScriptの全てのObject  objectの型をより明確に定義することが可能 |
| Array | [1, 2, 3] | JavaScriptの全てのArray  要素の型は、柔軟にも厳格にも指定できる |
| Tuple | [1, 2] | TypeScript独自の型: 長さ固定の配列 |
| null | TD | TD |
| BigIng | TD | TD |

### テンプレート文字列
文字列に変数を埋め込むことができる構文。

### truthy/falsyとは
Booleanの文脈で使われたときにtrue/falseと表される値
truthyの例
true,1,{},[],"0"など
falsyの例
false,0,null,undefined,"",'',NaNなど

### typeof
未評価のオペランドの型を示す文字列を返します。

### 型の指定と型推論
TypeScriptは自動的に型を推論してくれる。常に型を明示的に書く必要はない。
コードから型を推論して一致しない婆ににはエラーを出してくれる。

### Object型
Objectリテラル: key => value
Object型: key => type(型)

### Array: 配列
複数の変数を格納できるデータ型
