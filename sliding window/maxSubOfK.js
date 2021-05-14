/* 
Problem Statement #
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

*/

// O(1) space | O(n) time
const max_sub_array_of_size_k = function(k, arr) {
    // TODO: Write your code here
    let max = 0;
    let current = 0;
  
    // find the fist max subArray sum
    for (let i = 0; i < k; i++) { // O(n) time
      current += arr[i];
    }
  
    for (let i = k; i < arr.length; i++) { // O(n) time
      // check if the current is greater than the max
      if (current > max) { 
        max = current;
      }
  
      // add the next number to the sum in the array while removing earliest value
      current += (arr[i] - arr[i - k]) 
    }
  
  
    return max;
  };
  