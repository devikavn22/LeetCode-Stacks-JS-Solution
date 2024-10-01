/* 

1) we need a stack to keep tracking the opening brackets first.

2) We need a obj to map corrsponding opening bracket for comparison.

3) Then we store opening brackets in this stack via iteration.

4) If we find a closing bracket while iteration , then comapre it 
with the peek of the stack and check if that is matching opening bracket 
This will return true : Otherwise return false if the stack is empty 

*/

function isBalancedStr(s) {
  let stack = []; // 1) Initialize a stack

  const mappingObj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let item of s) {
    if (item === "(" || item === "{" || item === "[") {
      stack.push(item); // Store opening brackets inside the initialized stack. LIFO
    } else if (item === ")" || item === "}" || item === "]") {
      if (stack.length === 0 || stack.pop() !== mappingObj[item]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalancedStr("[[}")); // false
console.log(isBalancedStr("[{}]()(){{{()}}}")); //true
