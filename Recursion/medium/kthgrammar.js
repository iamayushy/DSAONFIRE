//https://leetcode.com/problems/k-th-symbol-in-grammar/ => Medium Level

let k = 2;
let n = 2;

var kthGrammar = function(n, k) {
    if(k === 1 & n === 1){
        return 0;
    }
    let mid = Math.floor(Math.pow(2, n - 1) / 2)
    if(k <= mid){
        return kthGrammar(n - 1, k);
    }
    else{
        return !kthGrammar(n - 1, k - mid)
    }
};
console.log(kthGrammar(n, k))