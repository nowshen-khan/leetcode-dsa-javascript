/*
LeetCode: 1. Two Sum
Category: Array, Hash Map
Difficulty: Easy
Link: https://leetcode.com/problems/two-sum/
*/

var twoSum = function (nums, target) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			sum = nums[i] + nums[j];
			if (sum == target) {
				return [i, j];
			}
		}
	}
};

/*
Time Complexity: O(n²)
Space Complexity: O(1)
*/
