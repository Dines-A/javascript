// this rest operator get the value in array format 
// refer cloing-object.js
// ... expences must be in a last parameter 

function add1(...expences)
{

// to sum the values useing reduce method

    let addon=expences.reduce((a,b) => a+b );

    return addon;
}
let holder1=add1(10,5,5,5)

console.log(holder1);



// to perform minus  

function addGST(GST,...expences)
{

// to sum the values useing reduce method

    let addon=expences.reduce((a,b) => a+b );
        /* 
        a=10
        b=5,5,10 => 5+5+10=> 20
        */
    
    return addon-GST;
    /* 
    b-a => 20-10 => 10
    */
}
let holderGST=addGST(10,5,5,10)

console.log(holderGST);