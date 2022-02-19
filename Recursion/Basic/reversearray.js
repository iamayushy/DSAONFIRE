// Reverse an array with O(1) space

let arr = [1, 2, 3, 4, 5, 6]

const solve = (arr) => {
    if(arr.length === 0){
        return;
    }
    const last = arr.pop();
    solve(arr);
    reverse(arr, last);
    return;
}
const reverse = (arr, k) => {
    if(arr.length === 0){
        arr.push(k);
        return
    }
    const temp = arr.pop();
    reverse(arr, k);
    arr.push(temp);
    return;
}
solve(arr);
console.log(arr);
