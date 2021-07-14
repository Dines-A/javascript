/* 
Function Decleration ->it doesn't terminated with ;
let a; ->it a decleration
addon
define
let a=1; => this is define
*/

/* 
Function Expresion -> it does terminated with ;

*/

// named function

function add(num1,num2){
    return num1+num2
}

console.log(add(12,12));

// Function Expresion
// named fucntion

let FE=function sub(num3,num4){
    return num3-num4
};
console.log(FE(12,13));

// annonymous function bca it doesn't have a name
let ANFE=function (num3,num4){
    return num3*num4
};
console.log(ANFE(12,13));

// ARROW Function

let AFE = (num3,num4) =>  num3/num4 ;
console.log(AFE(12,2));

