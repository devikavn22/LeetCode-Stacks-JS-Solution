class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Empty Stack";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Empty Stack";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const stack = new Stack();

stack.push(21);
stack.push(74);
stack.push(35);

console.log(stack.peek()); // Output: 35
console.log(stack.size()); // Output: 3

console.log(stack.pop()); // Output: 35
console.log(stack.pop()); // Output: 74
console.log(stack.size()); // Output: 1
