function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
function isPalindrome(str) {
  // Reverse the string
  const reversed = str.split('').reverse().join('');
  // Check if the original and reversed strings are equal
  return str === reversed;
}

// ✅ Test cases
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("racecar"));   // true
console.log(isPalindrome("robot"));     // false
console.log(isPalindrome("a"));         // true
console.log(isPalindrome("ab"));        // false
console.log(isPalindrome("noon"));      // true