// Node class to represent each element in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Pointer to the next node in the list
  }
}

// Stack class using linked list
class Stack {
  constructor() {
    this.top = null; // The top node of the stack (initially empty)
    this.size = 0; // Size of the stack
  }

  // Add an element to the top of the stack
  push(element) {
    const newNode = new Node(element); // Create a new node
    newNode.next = this.top; // Link the new node to the current top
    this.top = newNode; // Update the top to be the new node
    this.size += 1; // Increment the stack size
  }

  // Remove and return the element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedNode = this.top; // Get the top node
    this.top = this.top.next; // Update the top to the next node
    this.size -= 1; // Decrement the size of the stack
    return poppedNode.value; // Return the value of the popped node
  }

  // View the element at the top of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.value; // Return the value of the top node
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === null;
  }

  // Get the size of the stack
  getSize() {
    return this.size;
  }

  // Clear the stack
  clear() {
    this.top = null; // Set top to null, effectively clearing the stack
    this.size = 0; // Reset the size to 0
  }
}

// Example usage:

const stack = new Stack();

// Adding elements to the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30
console.log(stack.getSize()); // Output: 3

// Removing elements from the stack
console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20
console.log(stack.getSize()); // Output: 1
console.log(stack.top); // Output: Node { value: 10, next: null }
