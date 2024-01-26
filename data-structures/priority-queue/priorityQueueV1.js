// シンプルな実装
// 各要素は値と優先度を持ち、要素は優先度に基づいてキューに追加されます。
// この実装は効率的ではないため（特に enqueue メソッドは最悪の場合 O(n) の時間複雑度を持ちます
// 大きなデータセットまたは高頻度の操作に対しては、バイナリヒープに基づく実装を検討する
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // キューに要素を追加する
  enqueue(element, priority) {
    const queueElement = { element, priority };

    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      // 最後の要素として追加する
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }

  // 優先度が最も高い要素を取り出す
  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    let result = "";
    for (let i = 0; i < this.items.length; i++) {
      result += `${this.items[i].element} `;
    }
    return result;
  }
}

// 優先度付きキューの使用例
const priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty()); // 出力: true
priorityQueue.enqueue("a", 2);
priorityQueue.enqueue("b", 1);
priorityQueue.enqueue("c", 1);
console.log(priorityQueue.printQueue()); // 出力: b c a
console.log(priorityQueue.front().element); // 出力: b
console.log(priorityQueue.dequeue().element); // 出力: b
console.log(priorityQueue.printQueue()); // 出力: c a
