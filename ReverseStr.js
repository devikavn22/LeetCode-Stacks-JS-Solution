class Stack {
  constructor(size) {
    this.stack = [];
    this.top = -1;
    this.maxSize = size; // Stack size limit
  }

  // Push an element to the stack
  push(element) {
    if (this.top + 1 === this.maxSize) {
      return "Stack overflow! Cannot push more elements.";
    }
    this.top += 1;
    this.stack[this.top] = element;
  }

  // Pop an element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedElement = this.stack[this.top];
    this.top -= 1;
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

  // Get the current size of the stack
  size() {
    return this.top + 1;
  }
}

// Function to reverse words in a sentence using a stack
function reverseWords(sentence) {
  const words = sentence.split(" ");
  console.log(words, "words");
  const stack = new Stack(words.length); // Set stack size to the number of words in the sentence

  // Push each word onto the stack
  for (let i = 0; i < words.length; i++) {
    stack.push(words[i]);
  }

  // Pop each word off the stack to reverse the order
  let reversedSentence = "";
  while (!stack.isEmpty()) {
    reversedSentence += stack.pop() + " ";
  }

  return reversedSentence.trim(); // Remove the trailing space
}

// Example usage:
const sentence = "Hello world from the stack";
const reversed = reverseWords(sentence);

console.log(reversed); // Output: "stack the from world Hello"
