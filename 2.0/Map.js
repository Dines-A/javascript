// basic of map
const mapval = [
{ id:1,name:"Dinesh",age:20},
{ id:2,name:"abo",age:21},
{ id:3,name:"dinu",age:22},
]

let mapmap =mapval.map(function(values)
{
    return values.age * 2;
})

// console.log(mapmap:

// addtion names

const myName = [
{
    id:1 ,firstname:"Dinesh",Lastname:"Aboo"
},
{
    id:2 ,firstname:"Dinesh",Lastname:"pvi"
},
{
    id:3 ,firstname:"Dinesh",Lastname:"Agmal"
},
]

let first_last_name=myName.map(function(names)
{
    // return {Id:names.id ,Fullname:names.firstname+" "+names.Lastname} type-1
    // return [names.firstname,names.Lastname].join(" ") typ-2
    // let fullname=[names.firstname,names.Lastname].join(" "); type-3
    let fullname=names.firstname.concat(names.Lastname); //type-4
    return {id:names.id,fullname}
})

console.log("first_last_name:",first_last_name);