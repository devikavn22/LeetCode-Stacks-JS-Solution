class Stack {
  constructor() {
    this.stack = [];
    this.top = -1; // Initialize top to -1, indicating an empty stack
  }

  // Push an element to the stack
  push(element) {
    this.top += 1; // Increment top
    this.stack[this.top] = element; // Add the element to the stack
  }

  // Pop an element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedElement = this.stack[this.top]; // Get the top element
    this.top -= 1; // Decrement top
    return poppedElement;
  }

  // Peek at the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.top];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === -1;
  }
}

// Example usage:
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.peek()); // Output: 30
console.log(myStack.pop()); // Output: 30
console.log(myStack.pop()); // Output: 20
console.log(myStack.isEmpty()); // Output: false
console.log(myStack.pop()); // Output: 10
console.log(myStack.isEmpty()); // Output: true
