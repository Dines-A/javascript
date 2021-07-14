/* 

sort the reference value(non-premitive value)

refer ASCII  Value it will arange by ASCII steps
capital letter are first preference than lower cases

to avoid that
use              .toLocaleLowerCase

*/


const x=[{id:3,name:"Cat"},{id:2,name:"Ball"},{id:1,name:"Ant"}];

x.sort(function(a,b)
{
    // a.name and b.name are arrange by name
    if (a.name < b.name)
    {
        return -1
    } 
    else if(b.name>a.name)
    {
        return 1
    }
    else{
        return 0
    }
})
console.log("using name : ",x);

let holder=x.sort(function(a,b)
{
      // a.id and b.id are arrange by id
    if (a.id < b.id)
    {
        return -1
    } 
    else if(b.id>a.id)
    {
        return 1
    }
    else{
        return 0
    }
})

console.log("using id",holder);