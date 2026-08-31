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
FIZZBUZZ problem
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
//Count Character Frequency
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