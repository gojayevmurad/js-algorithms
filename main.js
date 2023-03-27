//leetcode.com

//1. Two Sum => easy

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

let nums = [3, 2, 4, 1, 5],
    target = 6;

function twoSum(nums, target) {

    let returnArr = []

    for (let i = 0; i < nums.length; i++) {
        for (let k = i; k < nums.length; k++) {
            if (nums[i] + nums[k] == target && i != k) {
                returnArr.push([i, k])
            }
        }

    }

    return returnArr
}

