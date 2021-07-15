
// this is normal function

function add1(firestnum,secondnum)
{
    return firestnum+secondnum;
}
let holder1=add1(5,4)

console.log(holder1);

// pro function it accept n number of agruments 

function add2()
{
    let value=0

    // console.log(arguments);  

    /* it is inbuild function it says how many argument are passed in array format */

    for(let key of arguments)
    {
        // console.log(key);
        value+=key
    }
    return value;
}
let holder2=add2(1,2,3,4,5,6,7,8,9,0)

console.log(holder2);