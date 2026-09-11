/*
1. Two Sum
You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */
/*let nums = [2,7,11,15], target = 9
var twoSum = function(nums, target){
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]===target){
            return [i,j]
        }
    }
}
}
console.log(twoSum(nums,9));*/
/*
2.FIZZBUZZ problem
Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/
/*var fizzBuzz=function(n){
    let starr=[];
    for (let index=1;index<=n; index++){

    if(index%3==0 && index%5==0){
        starr.push("FizzBuzz");
        
    }
    else if(index%3==0){
        starr.push("Fizz")
    }
    else if(index%5==0){
        starr.push("Buzz")
    }
    else{
        starr.push(index.toString())
    }
    }
    return starr;
     console.log(starr);   //[1,2,"Fizz",4,"Bizz"]
};
fizzBuzz(15);*/
//3.Count Character Frequency
const CountCharacterFrequency=(letter)=>{
    //alli
    const freq={};
    let count=0;
    
        for (let i= 0;i<letter.length; i++){
            const char=letter.charAt(i);
            //console.log(char)
            if(freq[char]){
                freq[char]++;
                count++;
            }
            else{
                freq[char]=1;
            }
    
}
console.log("count is",count)
console.log(freq)
}
CountCharacterFrequency("AlliJaffar")
/*
4.Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]*/
var reverseString = function(s) {
    let left=0;
    let right=s.length-1;
    while(left<right){
        let temp=s[left];//H
        s[left]=s[right];//h
        s[right]=temp;
        left++;
        right--;
    }
    console.log(s);
};
reverseString(["H","a","n","n","a","h"])
/*
5.Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.*/
/*Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"*/
var reverseWords = function(s) {
    let result = "";
    let word = "";
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            word=s[i] + word;//blue
        } 
        else {
            if (word !== "") {
                //result needs space between words
                if (result !== ""){
                    result += " ";
                }
                result += word;
                word = "";
            }
        }
    }
    if (word !== "") {
        if (result !== "") {
            result += " ";
        }
        result += word;
    }

    return result;
};

console.log(reverseWords("the sky is blue"));
/*
6.Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1 
 */
/*var isPalindrome=function(x){
    let left=0;//121 0=>1 
    let right=x.toString().length-1;
    while(left<right){
        if(x.toString().charAt(left)!==x.toString().charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
    console.log('true')
};
console.log(isPalindrome(-121));*/
//7.Problem 
//Given an integer array nums , return the second largest element in array
//Example 1:
// Input: nums = [3,2,1,5,6,4]
//Output: 5
const orderedArray=(nums)=>{
    let max=nums[0];
    let orderedArray=[];
    for(let i=0;i<nums.length;i++){
       for (let j = i+1; j < nums.length; j++) {
            if (nums[i] > nums[j]){
                let temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
            }
       }
}
    console.log(nums);
}
orderedArray([3,2,1,5,6,4])
//using sort method i solve finding second largest element in array 
//with out using ready made sort method
const secondLargestNum=(myarr)=>{
    orderedArray(myarr);
    //i will not pass to the latest number in loop
    /*for(let i=myarr.length-2;i>=0;i--){
        if(myarr[i]<myarr[myarr.length-1]){
            console.log(myarr[i]);
            break;
        }
    }*/
   for(let i=myarr.length-1;i>=1;i--){//5
    if(myarr[i]<myarr[myarr.length-1]){//5<6
        let secondLargest=myarr[i];
        console.log(secondLargest );
        break;
    }
   }
}
secondLargestNum([3,2,1,5,6,4])