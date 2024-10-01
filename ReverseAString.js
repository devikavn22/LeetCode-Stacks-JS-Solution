// Javascript implementation of
// the above approach

// Function to reverse the words
// of the given String without
// using strtok().
function reverse(s) {
  // Create an empty String stack
  let stc = [];

  // Create an empty temporary String
  let temp = "";

  // Traversing the entire String
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      // Push the temporary
      // variable into the stack
      stc.push(temp);

      // Assigning temporary
      // variable as empty
      temp = "";
    } else {
      temp = temp + s[i];
    }
  }

  // For the last word
  // of the String
  stc.push(temp);

  while (stc.length != 0) {
    // Get the words in
    // reverse order
    temp = stc[stc.length - 1];
    document.write(temp + " ");
    stc.pop();
  }
}

let s = "I Love To Code";
reverse(s);
