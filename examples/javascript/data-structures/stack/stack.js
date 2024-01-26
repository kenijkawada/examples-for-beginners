class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    return this.items.join(" ");
  }
}

// スタックの使用例
const stack = new Stack();
console.log(stack.isEmpty()); // 出力: true
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack()); // 出力: 10 20 30
console.log(stack.peek()); // 出力: 30
console.log(stack.pop()); // 出力: 30
console.log(stack.printStack()); // 出力: 10 20
