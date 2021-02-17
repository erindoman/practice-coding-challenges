// Easy
// 1. Reverse Integer (JS)

var reverse = function(x) {
    const n = parseInt(String(Math.abs(x)).toString().split('').reverse().join(''))
    return n > Math.pow(2,31) - 1 ? 0 : x > 0 ? n : n * - 1  
}

// 2. Palindrome Number (JS)

// ------------------------------------------------

// Medium

// ------------------------------------------------

// Hard 

