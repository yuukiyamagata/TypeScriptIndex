## DOM

### DOM(DOMインターフェース、DOM API)
JavaScriptのソースコード中では直接HTMLを扱うことができないため、DOMインターフェースを持つDOMオブジェクトを通してHTMLの情報を扱います。
DOM(Document Object Model)とは、HTML文書のオブジェクトのモデル(決められた構造)という意味。
JavaScriptからHTMLの情報を取得・変更するためのインターフェース。

ドキュメントオブジェクトモデル(DOM)は、(他の文書のツリー風の型の中で)HTMLやXML文書のDOMツリーを操作するためのAPIです。
このAPIはページ記述の根底にあり、ウェブ上スクリプティングのベースとなるものです。(MDN)


### document
Documentオブジェクトには、HTMLの構造がDOMオブジェクトに変換された状態で、ツリー構造で格納されています。
このツリー構造をDOMツリーと呼ぶ。

Documentインターフェースはブラウザで読み込まれたWebページを表し、DOMツリーであるウェブページのコンテンツへの入口としての役割を果たします。
(MDN)

## Node
DOMツリーを構成する個々のオブジェクト。
テキストやHTMLコメント、またHTMLなどの種別がある。
HTMLタグ以外のHTMlコメントやテキスト、タグとタグの間のスペースのことも指す。
Nodeの中でもHTMLタグのみを表す場合はElementと呼ぶ。
Elementとは、Nodeの種別がElementタイプ(HTML要素)のものを指す。

## Element
Nodeの種別がElementタイプ(HTML要素)のものを指す。

| Nodeの種類 | 説明 | 例 |
| ---- | ---- | ---- |
| ELEMENT_NODE | HTMLタグ(HTML要素)の情報を保持するノード | <p></p> |
| TEXT_NODE | タグ内ののテキストなどの文字情報を保持するノード | <p>この文字がテキストノード</p> |
| COMMENT_NODE | コメントを保持するノード | <!-- こめんと --> |


## ElementとNodeの格納場所
ElementとNodeのツリーは、それぞれDocumentオブジェクト(document)のchildren,childNodesに格納されている。
  - children: Nodeの中でもElementのみ格納されている
      - HTMLCollectionという配列風(array-like)オブジェクトにElementが格納されている。
  - childNodes: コメントやテキストなどを含むすべての種類のNodeが格納されている
      - Nodeツリーの場合は、childNodesというプロパティにNodeがツリー構造で格納されている。

## 親子関係を表すDOMインターフェース
NodeやElementなどのDOMオブジェクトには、親子関係を表すプロパティがある。


## DOM操作 プロパティ

* Node: DOMツリーを構成する個々のオブジェクト。

### parentElement
戻り値: Element
説明: 親のElementを返す
MDN: Nodeインターフェースの読み取り専用プロパティで、このDOMノードの親である要素(Element)を返します。
このノードに親ノードがないか、親がDOMのElementでない場合はnullを返します。


### parentNode
戻り値: Node
説明: 親のNodeを返す
MDN: Nodeインターフェースの読み取り専用プロパティで、DOMツリー内の特定のノードの親ノードを返します。


### children
戻り値: HTMCollection
説明: 子Elementを含む配列風オブジェクトを返します。
MDN: childrenは読み取り専用のプロパティで、生きたHTMLCollectionで呼び出された要素の子要素を全て返します。

### childNodes
戻り値: NodeList
説明: 子Nodeを含む配列風オブジェクトを返します。
MDN: Nodeインターフェースの読み取り専用プロパティであり、NodeListで指定された要素の子ノードの生きたリストを返し、
最初の子ノードは位置0に割り当てられます。子ノードには要素、テキスト、コメントが含まれます。


### firstElementChild
戻り値: Element
説明: childrenで取得される配列風オブジェクトの最初の要素を返す。
MDN: Element.firstElementChildは読み取り専用のプロパティで、要素の最初の子をElementで返す。
子要素がない場合はnullを返します。


### firstChild
戻り値: Node
説明: childNodesで取得される配列風オブジェクトの最初の要素を返す。
MDN:

### lastElementChild
戻り値: Element
説明: childrenで取得される配列風オブジェクトの最後の要素を返す。
MDN:

### lastChild
戻り値: Node
説明: childNodesで取得される配列風オブジェクトの最後の要素を返す。
MDN:

### previousElementSibling
戻り値: Element
説明: 自要素と兄弟関係にある1つ前のElementを返す。
MDN:

### previousSibling
戻り値: Node
説明: 自要素と兄弟関係にある1つ前のNodeを返す。
MDN:

### nextElementSibling
戻り値: Element
説明: 自要素と兄弟関係にある1つ後のElementを返す
MDN:

### nextSibling
戻り値: Node
説明: 自要素と兄弟関係にある1つ後のNodeを返す。
MDN:





## DOM操作Method

### querySelector
DocumentのquerySelectorメソッドは、指定されたセレクターまたはセレクター群に一致する、文書内の最初のElementを返します。
一致するものが見つからない場合はnullを返します。

### querySelectorAll
querySelectorAllメソッドは、指定されたCSSセレクターに一致する文章中の要素のリストを示す静的な(生きていない)NodeListを返します。

