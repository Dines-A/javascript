// HOISTING

console.log(add(4,5)); 
/* 
here also be calling function(in 3rd line) 
before define fucntion but,
it will work 

actully function decleration like even you call the function 
before define a fucntion

function add(num1,num2)
{
    return num1+num2
}

console.log(add(4,5));

*/
 
function add(num1,num2)
{
    return num1+num2
}

console.log(add(4,5));