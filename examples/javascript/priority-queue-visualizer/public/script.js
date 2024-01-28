import PriorityQueue from "./priorityQueue.js";

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("A", 10);
priorityQueue.enqueue("B", 20);
priorityQueue.enqueue("C", 30);

document.addEventListener("DOMContentLoaded", init);

function init() {
  renderQueue();
  renderTree();

  document
    .getElementById("enqueue")
    .addEventListener("click", () => enqueueElement());

  document
    .getElementById("dequeue")
    .addEventListener("click", () => dequeueElement());
}

function enqueueElement() {
  const value = document.getElementById("elementValue").value;
  const priority = parseInt(document.getElementById("elementPriority").value);

  if (value && !isNaN(priority)) {
    priorityQueue.enqueue(value, priority);
    document.getElementById("elementValue").value = "";
    document.getElementById("elementPriority").value = "";
    renderQueue();
    renderTree();
  }
}

function dequeueElement() {
  const removedElement = priorityQueue.dequeue();
  renderQueue();
  renderTree();
  showToast(`${removedElement.value} がキューから取り出されました！`);
}

function renderQueue() {
  const queueList = document.getElementById("queueList");
  queueList.innerHTML = "";
  priorityQueue.heap.forEach((item, i) => {
    const node = document.createElement("div");
    node.className = "element";

    const indexNode = document.createElement("span");
    indexNode.className = "index";
    indexNode.textContent = i;
    node.appendChild(indexNode);

    const priorityNode = document.createElement("span");
    priorityNode.className = "priority";
    priorityNode.textContent = item.priority;
    node.appendChild(priorityNode);

    const valueNode = document.createElement("div");
    valueNode.className = "value";
    valueNode.textContent = item.value;
    node.appendChild(valueNode);

    queueList.appendChild(node);
  });
}

function renderTree() {
  console.log("heap", priorityQueue.heap);

  // ツリーを構築するための再帰関数
  function createNode(index) {
    if (index >= priorityQueue.heap.length) return null;

    // ノードを作成
    const node = document.createElement("div");
    node.textContent = priorityQueue.heap[index].value;

    if (index === 0) node.id = "rootNode"; // ルートノードのクラス名を設定

    // 子ノードが存在するか確認
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    if (
      leftChildIndex < priorityQueue.heap.length ||
      rightChildIndex < priorityQueue.heap.length
    ) {
      const nodeContainer = document.createElement("div");
      nodeContainer.className = "nodeContainer";

      const leftChild = createNode(leftChildIndex);
      if (leftChild) {
        node.className = "node"; // ノードのクラス名を設定
        nodeContainer.appendChild(leftChild);
      }

      const rightChild = createNode(rightChildIndex);
      if (rightChild) {
        node.className = "node"; // ノードのクラス名を設定
        nodeContainer.appendChild(rightChild);
      }

      node.appendChild(nodeContainer);
    } else {
      node.className = "leafNode"; // リーフノードのクラス名を設定
    }

    return node;
  }

  const container = document.getElementById("binaryHeap");
  container.innerHTML = "";
  const rootNode = createNode(0); // ルートノードの生成
  if (rootNode) container.appendChild(rootNode);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.className = "show";
  toast.textContent = message;
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
