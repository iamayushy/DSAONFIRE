let arr =  [-4, 3, 2, 1]
let cs = 0
let Min = Number.MAX_SAFE_INTEGER
for(x of arr){
    cs += x
    Min = Math.min(Min, cs)
}
console.log(1 - Min)
