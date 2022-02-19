// Program to remove the kth element from the array.

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3 // k is the index of the element in the array.
const remove = (arr, k) => {
    if(k === 0){
        arr.pop();
        return;
    }
    let temp = arr.pop();
    remove(arr, k - 1);
    arr.push(temp);
}
remove(arr, k);
console.log(arr); //  [1, 2, 3, 5, 6, 7] => element at position 3th is removed