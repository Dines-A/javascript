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

console.log(issomeAdult);




// did by myself 

/* let objage = {
    name:["dinesh","abo","pavi"],
    age:[20,18,17],
    std:[12,11,13,14]
}
// console.log(objage.age);

let objeveryage=objage.every(function(value,index)
{
    console.log(value);
}) */

