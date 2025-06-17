printFibonacci

let a=0, b=1;

function printFibonacci (n){

    console.log ("fibonacciSeries:")

    for(let i=0; i < n; i++){

       console.log(a);

       let next =  a + b 
        
           a = b 

           b = next
        
        }
        
}

console.log(printFibonacci (10));


//  fibonacci with recurssion 

function fibonacciRecursive(n){

   if (n<2) {

    return n;
   }

   return fibonacciRecursive( n - 1) + fibonacciRecursive( n - 2)
}
 console.log(fibonacciRecursive(5))