let n = 9; // Printing the number from n --> 1;

const count = (n) => {
    if(n === 1){
        console.log(n);
        return;
    }
    console.log(n);
    count(n - 1);
   
    
}
count(n);