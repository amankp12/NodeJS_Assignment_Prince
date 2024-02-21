function performOperation(a, b, callback){
    return callback(a, b);
}

function add(x, y){
    return x+y;
}

function subtract(x, y){
    return x-y;
}

function multiply(x, y){
    return x*y;
}

function divide(x, y){
    return x/y;
}

console.log(performOperation(10, 5, add));
console.log(performOperation(10, 5, subtract));
console.log(performOperation(10, 5, multiply));
console.log(performOperation(10, 5, divide));