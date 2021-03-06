// Easy
// 1. Reverse Integer (JS)

var reverse = function(x) {
    const n = parseInt(String(Math.abs(x)).toString().split('').reverse().join(''))
    return n > Math.pow(2,31) - 1 ? 0 : x > 0 ? n : n * - 1  
}

// 2. Two Sum 

var twoSum = function(nums, target) {
    const result = {}
    for (let i = 0; i < nums.length; i++) {
        if (result[nums[i]] >= 0){
            return [result[nums[i]], i]
        } 
        result[target-nums[i]] = i
    }
};

// 3. Shuffle String

var restoreString = function(s, indices) {
    var len = indices.length
    var str = new Array(len)
    for(let i = 0; i < len; i++){
        str[indices[i]] = s[i]
        }
    return str.join("")
};

// ------------------------------------------------

// Medium

// ------------------------------------------------

// Hard 

