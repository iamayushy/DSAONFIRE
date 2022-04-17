function zero(arr){
    let max = arr[0];
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++){
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i] - min);
    }
    return max;
}

const arr = [3, 2, 4, 1, 4, 6, 7];
console.log(zero(arr));