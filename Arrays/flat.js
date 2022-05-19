const ans = []
function flat(arr){
    let c = 0
    while(c < arr.length){
        let val = arr[c]
        if(Array.isArray(val)){
            flat(val)
        }
        else{
            ans.push(val)
            
        }
        c++
    }
    return ans
}

const flatme = [ 1, [ 2, 3 ], [ 3 ], [ [ [ 5]],  6]  ]
console.log(flat(flatme))
