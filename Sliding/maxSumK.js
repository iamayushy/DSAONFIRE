

const maxSumK = (arr, k) => {
    let i = 0;
    let j = 0;
    let sum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    while(j < arr.length){
        sum += arr[j]
        if(j - i + 1 < k){
            j++;
        }
        else if(j - i + 1 === k){
            maxSum = Math.max(maxSum, sum)
            
            sum -= arr[i]
            j++;
            i++;
        }
        
    }
    return maxSum
}
const arr = [22, 1, 23, 5, 45, 12]
const k = 3;
console.log(maxSumK(arr, k));