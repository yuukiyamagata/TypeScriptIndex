## 文と宣言

JavaScriptのアプリケーションは、適切な構文で書かれた文から構成されます。
一つの文が数行にわたる場合もあります。また複数の文それぞれがセミコロンで区切られていれば
1行となる場合もあります。そのキーワードは一つではなく、キーワードのグループとなっています。

### for...in
キーが文字列であるオジェクトの列挙可能プロパティすべてに対して、継承された列挙可能プロパティ
も含めて反復処理を行います。(Symbolがキーになってものは無視します。)

### for...of
反復可能オブジェクトをソースとした一連の値を処理するループを実行します。
反復可能オブジェクトには、例えば組み込みのArray,String,TypedArray,Map,Set,NodeList
(およびその他のDOMコレクション)、同様にargumentsオブジェクトやジェネレータ関数から生成される
ジェネレータ、ユーザー定義の反復可能オブジェクトなどがあります。