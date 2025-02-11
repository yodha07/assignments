/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowercaseStr = str.toLowerCase();
  const filteredStr = lowercaseStr.split("").filter((char) => (char != '?' && char != ' ' && char !== '!' && char !== '.' && char !== ',')).join("");
  const reversedStr = filteredStr.split("").reverse().join("");
  if(filteredStr === reversedStr){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isPalindrome;
