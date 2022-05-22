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

console.log("First and Second Larget",max1, max2)
// for second smallest in the array
max1 = Number.MAX_SAFE_INTEGER
max2 = Number.MAX_SAFE_INTEGER
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
console.log("First And Second Smallest Element", max1, max2)