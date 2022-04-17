function maxProduct(arr){
    let max = arr[0];
    let min = arr[0];
    let ans = max;
    for(let i = 0; i < arr.length; i++){
        let temp = max;
        max = Math.max(temp * arr[i], Math.max(max * arr[i], arr[i]));
        min = Math.min(temp*arr[i], Math.min(min* arr[i], arr[i]))

        ans = Math.max(max, ans);
    }
    return ans;

}
let arr = [0, -1, 2, 2, 4];
console.log(maxProduct(arr));