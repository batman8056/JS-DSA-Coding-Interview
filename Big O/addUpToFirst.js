
// it will take some time to execute
// Method 1 :-

const addUpTo = (n) => {
    let total =0 ;
    for(let i = 1; i <=n; i++){ // 1+2+3+4 =10
        total += i;
    }
    return total;
}


// // Time calcutaion for time taken to execute
var t1=performance.now();
addUpTo(1000000000);
var t2=performance.now();
console.log(`Time Elapsed: ${(t2 -t1) / 1000} second`)

// console.log(addUpTo(4));