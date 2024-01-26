class MaxHeap {
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

      if (parent >= current) break;
      this.swap(parentIdx, index);
      index = parentIdx;
    }
  }

  // 最大値（ルート）を削除し、新しいルートをヒープ化する
  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapify(0);
    }
    return max;
  }

  // シンクダウン操作（ヒープ化）
  heapify(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    const length = this.heap.length;

    if (left < length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    // 親ノードが子ノードより小さい場合は、ノードを交換し、再度ヒープ化する
    if (largest !== index) {
      this.swap(largest, index);
      this.heapify(largest);
    }
  }
}

// ヒープの使用例
const maxHeap = new MaxHeap();
maxHeap.insert(12);
maxHeap.insert(10);
maxHeap.insert(-20);
maxHeap.insert(100);

console.log(maxHeap.extractMax()); // 出力: 100
console.log(maxHeap.extractMax()); // 出力: 12
console.log(maxHeap.extractMax()); // 出力: 10
console.log(maxHeap.extractMax()); // 出力: -20
