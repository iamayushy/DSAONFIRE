// Input = [11, 2, 4, 3, 6, 9, 8 , 1]
// Output = [1, 2, 3, 4, 6, 8, 9, 11]

const solve = (arr) => {
    if(arr.length === 1){
        return
    }
    let last = arr.pop();
    solve(arr);
    insert(arr, last)
    return

} 
const insert = (arr, k) => {
    if(arr.length === 0 || arr[arr.length - 1] < k){
        arr.push(k);
        return;
    }
    let temp = arr.pop();
    insert(arr, k);
    arr.push(temp);
    return;
}
let arr = [11, 2, 4, 3, 6, 9, 8 , 1, 0]
solve(arr);
console.log(arr);
