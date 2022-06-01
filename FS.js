var num1 = 1
var num2 = 0
//This function allows you to control the number of iterations
// call function with parameter 10 for first 10 numbers
function fibonacciS(iterations){
    let sum = num1 + num2;
    for (let i = 0; i < iterations; i++){
        console.log(sum)
        num1 = num2 
        num2 = sum
        sum = num1 + num2
        
    }

}
console.log("hello iX instructors!")