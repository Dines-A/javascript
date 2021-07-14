//  this operations are perfome in permitive data type values
// using sort functioin

const numbers=[5,6,4,3,2,1,6,7,8,9,0];
 
// to reverse the value
// numbers.reverse();

// console.log(numbers);

// Assending order using sort function

// numbers.sort();

//  instate of usinf sort use function 

numbers.sort(function(a,b)
{
    return b+a 
    /* 
    b-a -> disanding order ,
    a-b -> assending order , 
    a+b-> it show as it is , 
    b+a-> it show as it is  
    */
});

console.log(numbers);

// this for assending order 

// numbers.sort(function(a,b)
// {
//     return b-a
// });


// console.log(numbers);



