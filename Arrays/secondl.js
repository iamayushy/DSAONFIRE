const arr =  [44,3, 1, 9, 12, 34, 11, 22]
let max1 = Number.MIN_SAFE_INTEGER
let max2 = Number.MIN_SAFE_INTEGER

// for the second maximum in the array
for(let i = 0; i < arr.length; i++){
    if(max1 < arr[i]){
        max2 = max1
        max1 = arr[i]
    }
    else{
        if(max2 < arr[i] && max1 !== arr[i]){
            max2 = arr[i]
        }
    }
}

console.log(max1, max2)
// for second smallest in the array
max1 = 9999
max2 = 9999
for(let i = 0; i < arr.length; i++){
    if(max1 > arr[i]){
        max2 = max1
        max1 = arr[i]
    }
    else{
        if(max2 > arr[i] && max1 !== arr[i]){
            max2 = arr[i]
        }
    }
}
console.log("Smallest", max1, max2)