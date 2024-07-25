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
* Element: Nodeの種別がElementタイプ(HTML要素)のものを指す。
  * Documentが継承するオブジェクトの中にある全ての要素オブジェクト(すなわち、要素を表現するオブジェクト)が継承する、最も一般的な基底クラスです。全ての種類の要素の共通するメソッドとプロパティのみを持ちます。もっと具体的なクラスがElementを継承しています。

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
MDN: firstChildはNodeインターフェースの読み取り専用プロパティで、ツリー内におけるこのノードの最初の子、またはこのノードに子がない場合はnullを返します。

### lastElementChild
戻り値: Element
説明: childrenで取得される配列風オブジェクトの最後の要素を返す。
MDN: Document.lastElementChildは読み取り専用プロパティで、この文書の最後の子要素(Element)、または子要素がない場合はnullを返します。

### lastChild
戻り値: Node
説明: childNodesで取得される配列風オブジェクトの最後の要素を返す。
MDN: lastChildはNodeインターフェースの読み取り専用プロパティで、このノードの最後の子ノードを返します。子ノードがない場合はnullを返します。

### previousElementSibling
戻り値: Element
説明: 自要素と兄弟関係にある1つ前のElementを返す。
MDN: Element.previousElementSiblingは読み取り専用プロパティで、この要素(Element)の親の子リスト内ですぐ前にある要素を返します。このノードがリストの最初のノードであった場合はnullを返します。

### previousSibling
戻り値: Node
説明: 自要素と兄弟関係にある1つ前のNodeを返す。
MDN: Nodeインターフェースの読み取り専用プロパティで、指定されたノードの親ノードのchildNodesリスト内で、直前にあるノードを返します。指定されたノードがリストの先頭にあった場合はnullを返します。


### nextElementSibling
戻り値: Element
説明: 自要素と兄弟関係にある1つ後のElementを返す
MDN: Element.nextElementSiblingは読み取り専用プロパティで、この要素の親の子リスト内ですぐ次にある要素を返します。
このノードがリストの最後のノードであった場合はnullを返します。

### nextSibling
戻り値: Node
説明: 自要素と兄弟関係にある1つ後のNodeを返す。
MDN: Nodeインターフェースの読み取り専用プロパティで、指定されたノードの親のchildNodesの中で、そのすぐ次のノードを
返します。または、指定されたノードが親要素の最後の子要素である場合はnullを返します。

### textContent
Nodeのプロパティで、ノードおよびその子孫のテキストの内容を表します。

### ownerDocument
Nodeインターフェースの読み取り専用プロパティで、このノードの最上位の文書オブジェクトを返します。

### nodeValue
Nodeインターフェースのプロパティで、現在のノードの値を返したり設定したりします。

### nodeName
Nodeの読み取り専用プロパティで、現在のノードの名前を文字列で返します。


## DOM操作Method

### querySelector
DocumentのquerySelectorメソッドは、指定されたセレクターまたはセレクター群に一致する、文書内の最初のElementを返します。
一致するものが見つからない場合はnullを返します。

### querySelectorAll
querySelectorAllメソッドは、指定されたCSSセレクターに一致する文章中の要素のリストを示す静的な(生きていない)NodeListを返します。


### getElementById
