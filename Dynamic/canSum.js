const canSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true
    if(targetSum < 0) return false

    for(let num of numbers){
        if(canSum(targetSum - num, numbers, memo) === true){
            memo[targetSum] = true
            return memo[targetSum]
        }
    }
    memo[targetSum] = false
    return memo[targetSum]
}
let arr = [7, 14]
console.log(canSum(400, arr))