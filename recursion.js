function pow(x, n) {
   if (n === 0){
    return 1;
   }
   else {
    return x * pow(x, n - 1)
   }
}

console.log(pow(10, 0));