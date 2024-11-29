/*function pow(x, n) {
   if (n === 0){
    return 1;
   }
   else {
    return x * pow(x, n - 1)
   }
}

console.log(pow(10, 0));
*/

function fib(n) {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else if (n === 2) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
       
}
console.log(fib(8))

