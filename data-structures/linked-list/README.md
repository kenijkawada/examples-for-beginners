# Linked List

リンクドリスト（Linked List）は、データの順序付けられたコレクションを表す基本的なデータ構造の一つです。それはノードの列で構成されており、各ノードはデータと次のノードへの参照（または「リンク」）を保持しています。

### リンクドリストの主な特徴

1. **ノード構造**:
   リンクドリストの各要素は「ノード」と呼ばれ、二つの部分から構成されています：一つはデータ（または値）、もう一つは次のノードへのポインタ（またはリンク）です。
2. **先頭（Head）と終端（Tail）**:
   リンクドリストには「先頭（Head）」と呼ばれる始点があり、リストの最後のノードは通常「終端（Tail）」と呼ばれ、次のノードへのポインタは null です。
3. **単方向性**:
   標準的なリンクドリストは単方向性であり、各ノードは次のノードへのみリンクします。しかし、双方向リンクドリストの場合、各ノードは前後のノードの両方へのリンクを持ちます。
4. **動的サイズ**:
   リンクドリストは動的なサイズを持っており、実行時に要素を追加または削除することができます。
5. **メモリ効率**:
   リンクドリストは必要に応じてメモリを割り当てるため、配列に比べてメモリをより効率的に使用します。
6. **ランダムアクセスの不可**:
   リンクドリストではランダムアクセス（インデックスを使用した直接アクセス）ができません。ある要素にアクセスするには、先頭から順にリストをトラバース（走査）する必要があります。

### リンクドリストの操作

- **挿入**:
  リストの先頭、末尾、特定位置に新しいノードを挿入できます。
- **削除**:
  特定のノードをリストから削除できます。
- **検索**:
  特定の値を持つノードをリスト内で検索できます。
- **トラバース**:
  リストの各ノードを順に訪れることができます。

### 用途

リンクドリストは、要素の追加と削除が頻繁に行われる状況、またはデータのサイズが事前に不明な場合に適しています。スタック、キュー、グラフの実装など、さまざまな抽象データ型やデータ構造で基礎として使用されます。

### リンクドリストの種類

リンクドリストにはいくつかの種類があり、それぞれ異なる特徴と用途を持っています。主な種類は以下の通りです。

### 1. 単方向リンクドリスト（Singly Linked List）

- 最も基本的なタイプのリンクドリストです。
- 各ノードはデータ要素と次のノードへのポインタ（リンク）を持ちます。
- リストは単方向であるため、各ノードから次のノードにのみ進むことができます。
- 例: A -> B -> C -> null

### 2. 双方向リンクドリスト（Doubly Linked List）

- 各ノードは前のノードへのポインタと次のノードへのポインタの両方を持ちます。
- これにより、リスト内を前方向と後方向の両方にトラバースすることが可能になります。
- 例: null <- A <-> B <-> C -> null

### 3. 循環リンクドリスト（Circular Linked List）

- 単方向または双方向のいずれかであることができます。
- リストの最後のノードが最初のノードを指すようにリンクされており、「循環」しています。
- 循環リンクドリストでは、リストの任意のノードから出発してリスト全体をトラバースできます。
- 例: A -> B -> C -> A -> B -> C -> ...

### 4. ソートされたリンクドリスト（Sorted Linked List）

- ノードが特定の順序（通常は昇順または降順）で挿入されるように維持されるリンクドリストです。
- 挿入時に適切な位置が決定され、リスト全体が常にソートされた状態を保ちます。

### 5. スキップリスト（Skip List）

- リンクドリストの一種で、複数レベルのポインタを使用して高速な検索を可能にします。
- 追加の「レベル」のリンクを使用して、リストをより高速にトラバースすることができます。

これらのリンクドリストのバリエーションは、特定の要件や操作の効率に応じて選択されます。例えば、双方向リンクドリストはリスト内を逆方向にトラバースする必要がある場合に適しており、循環リンクドリストはリストを繰り返しトラバースする必要がある場合に適しています。

リンクドリストの各種類には特有のトレードオフがあります。以下の表にそれぞれの特徴とトレードオフをまとめます。

| リンクドリストの種類                             | 特徴                                                                                 | トレードオフ                                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 単方向リンクドリスト（Singly Linked List）       | 各ノードは次のノードへのポインタのみを持つ。                                         | シンプルでメモリ効率が良いが、前方向へのトラバースのみ可能。後方への移動ができない。         |
| 双方向リンクドリスト（Doubly Linked List）       | 各ノードは前後のノードへのポインタを持つ。                                           | 前後のトラバースが可能だが、追加のポインタにより単方向リンクドリストよりメモリ使用量が増加。 |
| 循環リンクドリスト（Circular Linked List）       | 最後のノードが最初のノードを指し、リストが循環する。単方向または双方向の形式がある。 | 循環構造によりリストの終端から始端へ簡単に移動できるが、終了条件の管理が複雑化。             |
| ソートされたリンクドリスト（Sorted Linked List） | ノードが特定の順序で挿入され、常にソートされた状態を維持する。                       | 挿入と削除がより複雑になるが、検索が効率的。                                                 |
| スキップリスト（Skip List）                      | 追加のレベルのリンクを使用し、高速な検索を可能にする。                               | 検索が高速だが、追加のレベルとリンクによるメモリのオーバーヘッドと複雑さが増加。             |

リンクドリストの選択は、使用するアプリケーションの特定の要件に基づいて行うべきです。例えば、メモリ使用量を最小限に抑えたい場合は単方向リンクドリストを、前後のトラバースが頻繁に必要な場合は双方向リンクドリストを選択すると良いでしょう。また、リストを頻繁に検索する場合は、スキップリストが適しています。

双方向リンクドリスト（Doubly Linked List）は、前後のノードへのポインタを持つことで、リストを前方向だけでなく後方向にもトラバース（走査）できるという特徴があります。この特性により、特定のユースケースにおいて非常に有用です。

### 双方向リンクドリストのユースケース

1. **ナビゲーションが必要なインターフェース**:
   ブラウザの戻る/進む機能や音楽プレイヤーの前の曲/次の曲のナビゲーションなど、前後に移動する機能が必要なアプリケーションで効果的です。

2. **編集可能なテキスト**:
   ワードプロセッサやテキストエディタでは、カーソルの前後移動やテキストの挿入・削除などを効率的に行うために双方向リンクドリストが使用されることがあります。

3. **最近使ったアイテムのトラッキング**:
   最近開いたファイルやアプリケーションの履歴を管理する際に、双方向リンクドリストを使うと、前後の履歴に簡単にアクセスできます。

4. **両端キュー（Deque, Double-Ended Queue）**:
   データの先頭と末尾の両方からの挿入と削除をサポートするデータ構造であり、双方向リンクドリストを使って効率的に実装できます。

5. **ページングやスクロールがあるリスト**:
   ウェブページやアプリケーション内でユーザーが前後にページを移動する際に、双方向リンクドリストを使ってデータのページングを管理できます。

6. **アンドゥ/リドゥ機能**:
   編集アプリケーションやゲームなどで、ユーザーのアクションの履歴を追跡し、アンドゥ（元に戻す）やリドゥ（やり直し）機能を提供する際に役立ちます。

これらのユースケースでは、双方向リンクドリストの能力を利用して、データ構造の柔軟性を高め、より複雑な操作を効率的に処理できます。
