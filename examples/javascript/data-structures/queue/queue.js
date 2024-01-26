class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

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
    return this.items.join(" ");
  }
}

// キューの使用例
const queue = new Queue();
console.log(queue.isEmpty()); // 出力: true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.printQueue()); // 出力: 10 20 30
console.log(queue.front()); // 出力: 10
console.log(queue.dequeue()); // 出力: 10
console.log(queue.printQueue()); // 出力: 20 30
