let n = 9; // Printing the number from 1 --> n;

const count = (n) => {
    if(n === 1){
        console.log(n);
        return;
    }
    
    count(n - 1);
    console.log(n);
   
    
}
count(n);