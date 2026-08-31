/*
// 1. Reverse a String
// Problem: Write a function that takes a string as an argument and returns the string reversed.

// Example:
// Input: "javascript"
// Output: "tpircsavaj"
function opposit(str){
    let opposit='';
    for(let i=str.length-1;i>=0;i--){
        opposit+=str[i];   
    }
    return opposit;
}
console.log(opposit('javascript'))// output is :tpircsavaj




// 2. Palindrome Check
// Problem: Write a function that checks if a given string is a palindrome (reads the same forwards and backward). It should return true if it is a palindrome and false if it is not.

// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false
function PalindromeCheck(str)
{
    let length=str.length;
    for(let i=0;i<length/2;i++)
    {
        if(str[i]!==str[length-1-i])
            return false;
    }
    return true;
}
//التحقق
console.log(PalindromeCheck('madam'))//true
console.log(PalindromeCheck('ali'))//false


// 3. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers and returns the largest number in it.

// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9
function maxNumberOfArray(arr){
    let max=arr[0];//جعل فرضا اول عنصر هو الاكبر
    for(i=0;i<arr.length;i++)
    {
        if(max<arr[i])
            max=arr[i];
    }
    return max
}
//التجريب
let arr=[3,5,7,20,8];
console.log(maxNumberOfArray(arr));



// 4. Factorial Calculation
// Problem: Write a function that calculates the factorial of a given number. (The factorial of 5 is 5 * 4 * 3 * 2 * 1).

// Example:
// Input: 5
// Output: 120
function factorial(number){
    let prod=1;
    for (let i = 1; i <= number; i++) {
        prod*=i;
    }
    return prod;

}
console.log("factorial is ",factorial(5))//120


// 5. Prime Number Check
// Problem: Write a function that takes an integer num and checks if it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function should return true if the number is prime and false otherwise.

// Example:
// Input: 7
// Output: true
// Input: 10
// Output: false (because it's divisible by 2 and 5)
function IsPrime(number)
{
    if(number%2==0)
    {
        return false;
    }
        return true;
}
console.log(IsPrime(7));//true
console.log(IsPrime(10));//false
// 6. Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array containing only the unique elements (no duplicates).

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]


function RemoveDuplicates(arr) {
    let uniqueElements = [];//Empty array that stores unique elements
    let k = 0;
    for (let i=0;i<arr.length;i++) {
        let j;
            for (j=0;j<k;j++) {
            if (arr[i]===uniqueElements[j]) {
                break;   
            }
        }
        
                if (j === k) {
                uniqueElements[k++] = arr[i];
        }
    }

    return uniqueElements;
}
let nums = [1, 2, 2, 3, 4, 4, 5];
console.log(RemoveDuplicates(nums)); // [ 1, 2, 3, 4, 5 ]

// 7. Find the Missing Number in a Sequence
// Problem: You are given an array containing 99 unique numbers whose values range from 1 to 100. Write a function to find the missing number.

// Example:
// Input: An array containing all numbers from 1 to 100 except for the number 55.
// Output: 55
function findMissingNumber(arr) {
  for (let i = 1; i <= 100; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) {
      return i;
    }
  }
}
let numbers=[1,2,4]
console.log(findMissingNumber(numbers)); //3



// 8. Capitalize the First Letter of Each Word
// Problem: Write a function that takes a sentence and returns a new sentence with the first letter of each word capitalized.

// Example:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"


function CapitalizetheFirstLetterofEachWord(sentence) {
  let result = '';
  let capitalizeNext = true;

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (char === ' ') {
      result += char;
      capitalizeNext = true;
    } else {
      if (capitalizeNext) {
        const code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) {
          result += String.fromCharCode(code - 32);
        } else {
          result += char;
        }
        capitalizeNext = false;
      } else {
        result += char;
      }
    }
  }

  return result;
}
console.log(CapitalizetheFirstLetterofEachWord('hello world from javascript'))//Hello World From Javascript

// 9. Anagram Check
// Problem: Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequency).

// Example:
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {//نختبر الطول اول شي
    return false;
    }
    let count = [];
    for (let i = 0; i < 26; i++) {
    count[i] = 0;
    }
    for (let i = 0; i < str1.length; i++) {
    let code = str1.charCodeAt(i) - 97; // 'a' = 97
    count[code] = count[code] + 1;
    }     
    for (let i = 0; i < str2.length; i++) {
    let code = str2.charCodeAt(i) - 97;
    count[code] = count[code] - 1;
    }   
    for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) {
        return false;
    }
    }

    return true;
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("word", "work"));   // false
console.log(isAnagram("ali", "lia"));     // true


// 10. Chunk an Array
// Problem: Write a function that takes an array and a size number, and splits the array into subarrays of the specified size.

// Example:
// Input: [1, 2, 3, 4, 5, 6, 7], 3
// Output: [[1, 2, 3], [4, 5, 6], [7]]

function ChunkArray(arr, size) {
  let result = [];        
  let temp = [];         

  for (let i = 0; i < arr.length; i++) {
    temp[temp.length] = arr[i]; 
  
    if (temp.length === size) {
      result[result.length] = temp; 
      temp = []; 
    }
  }
  if (temp.length > 0) {
    result[result.length] = temp;
  }

  return result;
}
let inputarr = [1, 2, 3, 4, 5, 6,7];
let subarrays = ChunkArray(inputarr, 3);
console.log("subarrays are:",subarrays);//subarrays are: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]


// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number, and returns the first pair of numbers from the array that sum up to the target.

// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]
function FindAPairofNumbers(arr,target_Num)
{
  for(let i=0;i<arr.length;i++)
  {
    for (let j = i+1; j < arr.length; j++) {
      if(arr[i]+arr[j]===target_Num)
      {
        return[arr[i],arr[j]];
      }
        
    }
  }
  return false;
}
console.log(FindAPairofNumbers([10, 5, 2, 7, 8, 3], 10))//[ 2, 8 ]
console.log(FindAPairofNumbers([10, 5, 2, 7, 8, 3], 7))//[ 5, 2 ]

// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.

// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]
function RotateanArraytotheLeft(arr, n) {
    let length = arr.length;
    for (let i = 0; i < n; i++) {
        let first = arr[0];//1
        for (let j = 0; j < length - 1; j++) {
            arr[j] = arr[j + 1];
                
        }
        arr[length - 1] = first;
    }

    return arr;
}
    arr = [1, 2, 3, 4, 5];
    console.log(RotateanArraytotheLeft(arr, 2));//[ 3, 4, 5, 1, 2 ]

// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays (the intersection).

// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

function FindtheIntersection(arr1,arr2){
  let score=[];
  let indx=0;
  for(let i=0;i<arr1.length;i++){
    let k=arr1[i];
    for(let j=0;j<arr2.length;j++)
    {
      if(k===arr2[j]){
        score[indx]=k;
        indx++;
        break;
      }
    }
  }
  return score;
}
console.log(FindtheIntersection([1, 2, 3, 4], [3, 4, 5, 6]))


// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map, where each key is a character and its value is the number of times it appears.

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
function CountCharacterFrequencyInAString(Str){
  let obj={};
  for (let i = 0; i < Str.length; i++) {
    let ch=Str[i];
    if(obj[ch]!==undefined){
      obj[ch]+=1;
    }
    else{
      obj[ch]=1;

    }
    
  }
  return obj;
}
console.log(CountCharacterFrequencyInAString("hello"))//{ h: 1, e: 1, l: 2, o: 1 }

// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that may themselves be arrays) into a single, flat array.

// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]

function FlattenANestedArray(arr) {
    let result = [];     
    let indx = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (typeof element === "object") {           
            for (let j = 0; j < element.length; j++) {
                let inner = element[j];               
                if (typeof inner === "object") {
                    for (let k = 0; k < inner.length; k++) {
                        result[indx] = inner[k];
                        indx++;
                    }
                } else {
                    result[indx] = inner;
                    indx++;
                }
            }
        } else {          
            result[indx] = element;
            indx++;
        }
    }
    return result;
}
let input_array = [1, [2, 3], [4, [5, 6]]];
console.log(FlattenANestedArray(input_array));

// 16. Find the Longest Word in a Sentence
// Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.

// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"
      function FindtheLongestWord(sentence) {
    let thelongestWord ="";   
    let currentWord ="";

    for (let i = 0; i<sentence.length; i++) {
        let char = sentence[i];

        if (char !== " ") {
            currentWord = currentWord + char;
        } else {if (currentWord.length > thelongestWord.length) {
                thelongestWord = currentWord;
            }
            currentWord ="";
        }
    }
    if (currentWord.length > thelongestWord.length) {
        thelongestWord = currentWord;
    }
    return thelongestWord;
}
            console.log(FindtheLongestWord("The quick brown fox jumped over the lazy dog"));  
            console.log(FindtheLongestWord("i am learning forntendBeg in FocalXCommunity"));//FocalXCommunity  


// 17. Find the Most Frequent Element in an Array
// Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'

function MostFrequentElement(arr) {
    let maxCount = 0;        // أكبر عدد تكرار
    let mostElementFrequent = null;  // العنصر الأكثر تكرارًا

    // حلقة على كل عنصر
    for (let i = 0; i < arr.length; i++) {
        let currentcount = 0; // عداد للتكرار الحالي

        // نقارن مع باقي العناصر
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentcount+=1;
            }
        }

        // إذا كان هذا العنصر أكثر تكرارًا من السابق
        if (currentcount > maxCount) {
            maxCount =currentcount;
            mostElementFrequent = arr[i];
        }
    }

    return mostElementFrequent;
}  
        console.log(MostFrequentElement([1, 2, 3, 2, 2, 4, 5, 2]));//2
        console.log(MostFrequentElement(['a', 'b', 'c', 'a', 'b', 'a']));//a
*/





















// 18. Sort an Array of Objects by a Property
// Problem: You have an array of objects, where each object represents a person with a name and age. Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.

// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)
function SortanArrayofObjects(arr) {
    let n = arr.length;//longOfArray
    for (let i = 0; i<n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j].age > arr[j + 1].age) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
    return arr;
}
//EX
let person = [
    { name: "Alice", age: 30 },{ name: "Bob", age: 25 },{ name: "Charlie", age: 35 }
];

console.log(SortanArrayofObjects(person));//[{ name: 'Bob', age: 25 },{ name: 'Alice', age: 30 },{ name: 'Charlie', age: 35 }]

console.log("===========================================================================")
// 19. Find the First Non-Repeating Character
// Problem: Write a function that takes a string and finds the first character that does not repeat.
// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)
function FirstNonRepeatingCharacter(str) {
    for (let i = 0; i<str.length; i++) {
        let ch = str[i];
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === ch) {
                count = count + 1;
            }
        }
        if (count === 1) {
            return ch;
        }
    }
    return null;
}
          console.log(FirstNonRepeatingCharacter("swiss"));//w
          console.log(FirstNonRepeatingCharacter("aabbcc"));//null

// 20. Symmetric Difference of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing the elements that are present in one of the arrays, but not in both.

// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]

function SymmetricDifference(arr1, arr2) {
    let result = [];    
    let indx = 0;   
    for (let i = 0; i< arr1.length; i++) {
        let found = false;
        for (let j = 0; j< arr2.length; j++) {
            if (arr1[i]===arr2[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result[indx] = arr1[i];
            indx++;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let found = false;
        for (let j= 0; j< arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result[indx] = arr2[i];
            indx++;
        }
    }
    return result
}
console.log(SymmetricDifference([1, 2, 3], [3, 4, 5]));//[ 1, 2, 4, 5 ]
console.log("END OF THE TASK5")


