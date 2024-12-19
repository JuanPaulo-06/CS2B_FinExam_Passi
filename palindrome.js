const word1 = prompt("Enter the first word (e.g., RACECAR):"); 
const word2 = prompt("Enter the second word (e.g., RECORDER):"); 

function reverseString(str) {    
  return str.split('').reverse().join(''); 
}  

const reversedWord1 = reverseString(word1); 
const reversedWord2 = reverseString(word2);  

console.log(`Original Word 1: ${word1}, 
  Reversed Word 1: ${reversedWord1}`); 
console.log(`Original Word 2: ${word2}, 
  Reversed Word 2: ${reversedWord2}`);  

const isPalindrome1 = word1 === reversedWord1; 
const isPalindrome2 = word2 === reversedWord2;

console.log('Is "${word1}" a palindrome? ${isPalindrome1}');
console.log('Is "${word2}" a palindrome? ${isPalindrome2}');
