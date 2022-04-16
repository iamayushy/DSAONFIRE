// Maximum Subarray Sum in an Array

function kadane(arr){
    let curr = 0;
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        curr += arr[i];
        max = Math.max(curr, max)
        if(curr < 0){
            curr = 0;
        }
    }
    return max
    
}
const arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(kadane(arr));