//  basic method to perfom

const myname={
    firstname:"dinesh",
    lastname:"aboo",
    function() /* type-1  arrow function not acceptable */ 
    {
        return `${myname.firstname}${myname.lastname}`
    },
/*       addon :  function()  type-2
    {
        return `${myname.firstname}${myname.lastname}`
    }, */
};
myname.lastname="pvi";
// console.log(myname.addon()); -> type-2
console.log(myname.function());

/* 

const myname1={
    firstname:"dinesh",
    lastname:"aboo",
};

myname1.lastname="pvi";
console.log(myname1);
here we can change the value even in upper fucntion
*/