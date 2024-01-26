# Binary Heap

バイナリヒープ（Binary Heap）は、特定の順序特性を持つ完全二分木（Complete Binary Tree）に基づくデータ構造です。この順序特性により、バイナリヒープは優先度付きキューやヒープソートなど、さまざまなアルゴリズムで役立ちます。バイナリヒープには主に二種類あります：最大ヒープ（Max Heap）と最小ヒープ（Min Heap）です。

### **特徴**

1. **完全二分木**:
   バイナリヒープは完全二分木です。つまり、リーフノード以外のすべてのノードが２つの子ノードを持ち、また、すべてのリーフノードがルートから等しい距離にある構造です。
2. **ヒープ特性**:
   - **最大ヒープ**では、各ノードの値はその子ノードの値よりも大きいか等しいです。つまり、ヒープのルートには最大値が格納されます。
   - **最小ヒープ**では、各ノードの値はその子ノードの値よりも小さいか等しいです。つまり、ヒープのルートには最小値が格納されます。

### **操作**

バイナリヒープでは、主に次の操作が行われます：

1. **挿入（Insertion）**:
   新しい要素をヒープに挿入します。挿入は完全二分木の性質を保ちながら行われ、新しい要素はヒープの最後に追加された後、ヒープ特性を満たすように上方に移動（ヒープ化）されることがあります。
2. **削除（Deletion）**:
   最大ヒープでは最大値、最小ヒープでは最小値（通常はルート）を削除します。削除操作の後、ヒープの最後の要素がルートに移動し、ヒープ特性を満たすように下方に移動（ヒープ化）されることがあります。
3. **ヒープ化（Heapify）**:
   ヒープの特定のノードに対し、子ノードと比較し、ヒープ特性を満たすようにそのノードをツリー上で適切な位置に移動します。これには上方に移動する「バブルアップ（Bubble Up）」または下方に移動する「シンクダウン（Sink Down）」の操作が含まれます。
4. **ヒープソート（Heap Sort）**:
   バイナリヒープを利用して配列をソートする効率的なアルゴリズムです。

### **実装**

バイナリヒープは、通常、配列で効率的に実装されます。配列のインデックスを利用して、各ノードの親子関係を簡単に計算できます。例えば、配列で表されるヒープにおいて、インデックス**`i`**の要素に対して：

- 親ノードのインデックスは **`floor((i-1)/2)`**
- 左の子ノードのインデックスは **`2*i + 1`**
- 右の子ノードのインデックスは **`2*i + 2`**

バイナリヒープは、その効率的な操作時間（特に挿入と削除における O(log n)の時間複雑度）により、データの優先順位管理やソートなど多くのアルゴリズムで重宝されます。