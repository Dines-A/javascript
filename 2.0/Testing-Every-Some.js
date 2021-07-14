// the both methods return true/false value
const everyage = [age=21,age=17,age=23];

//every() this is like a and gate if one is false all are false

let iseveryAdult=everyage.every(function(age,index,array)
{
    return age>=18
})

// console.log(iseveryAdult);

//some() this is like a or gate if one is true all are true

let issomeAdult=everyage.some(function(age,index,array)
{
    return age>=18
})

// console.log(issomeAdult);




// did by myself  array inside object aren't acceptable in every some method

let objage = [
    {id:1,name:"Dinesh",age:20},
    {id:2,name:"abo",age:17},
    {id:3,name:"pvi",age:18},
    {id:4,name:"luna",age:23}]

let objeveryage=objage.every(function(value)
{
    return value.age >=18
})

console.log(objeveryage);
