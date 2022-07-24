// Maximum Subarray Sum in an Array
// kadane algorithm
function kadane(nums){
    let sum = 0;
    let max = -9999
    for(num of nums){
        sum += num
        max = Math.max(sum, max)
        if(sum < 0) sum = 0
    }
    return max
    
}
const arr = [-2,1,-3,4,-1,2,1,-5,3, 4,5 ,6 7, 8,-19293, 12345, 11345, -111]
console.log(kadane(arr));
