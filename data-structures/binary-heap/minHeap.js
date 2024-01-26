class MinHeap {
  constructor() {
    this.heap = []; // ヒープを格納する配列
  }

  // ヒープの要素を入れ替えるヘルパー関数
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // 要素を追加する
  insert(node) {
    this.heap.push(node);
    let index = this.heap.length - 1;
    const current = this.heap[index];

    // バブルアップ操作
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIdx];

      if (parent <= current) break;
      this.swap(parentIdx, index);
      index = parentIdx;
    }
  }

  // 最小値（ルート）を削除し、最後の要素をルートに移動し、新しいルートをヒープ化する
  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapify(0);
    }
    return min;
  }

  // シンクダウン操作（ヒープ化）
  heapify(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;
    const length = this.heap.length;

    if (left < length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    // 親ノードが子ノードより大きい場合は、ノードを交換し、再度ヒープ化する
    if (smallest !== index) {
      this.swap(smallest, index);
      this.heapify(smallest);
    }
  }
}

// ヒープの使用例
const minHeap = new MinHeap();
minHeap.insert(12);
minHeap.insert(10);
minHeap.insert(-20);
minHeap.insert(100);

console.log(minHeap);

console.log(minHeap.extractMin()); // 出力: -20
console.log(minHeap.extractMin()); // 出力: 10
console.log(minHeap.extractMin()); // 出力: 12
console.log(minHeap.extractMin()); // 出力: 100
