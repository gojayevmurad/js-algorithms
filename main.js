//leetcode.com

//1. Two Sum => easy

// Input: nums = [3,2,4], target = 6
// Output: [1,2]



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


//9. Palindrome Number => easy 
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
// Could you solve it without converting the integer to a string?

function checkPalindrome(num) {
    if (num < 0 || num % 1 != 0) return false

    let valuableNum = num
    let reverseNum = 0

    while (true) {

        reverseNum = (num % 10) + reverseNum * 10
        num = (num / 10 - num % 10 / 10).toFixed()

        if (num < 1) {
            break
        }

    }

    if (reverseNum == valuableNum) {
        return true
    }


    return false

}


