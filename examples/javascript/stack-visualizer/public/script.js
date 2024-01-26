let stack = [];

function pushElement() {
  const element = document.getElementById("inputElement").value;
  if (element) {
    stack.push(element);
    document.getElementById("inputElement").value = "";
    renderStack();
  }
}

function popElement() {
  if (stack.length > 0) {
    stack.pop();
    renderStack();
  }
}

function renderStack() {
  const stackList = document.getElementById("stackList");
  stackList.innerHTML = "";

  stack.slice().forEach((element) => {
    const elementNode = document.createElement("li");
    elementNode.textContent = element;
    stackList.insertBefore(elementNode, stackList.firstChild);
  });

  // update stack size
  const stackSizeDisplay = document.getElementById("stackSize");
  stackSizeDisplay.textContent = `Size: ${stack.length}`;
}

function popElement() {
  if (stack.length > 0) {
    const removedElement = stack.pop();
    showToast(`${removedElement} がスタックから取り出されました！`);
    renderStack();
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.className = "show";
  toast.textContent = message;
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
