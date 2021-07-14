// find -> if the condition satisfy it will return the only very first value 

// find
let objcost = [
    {id:1,name:"android phone",cost:10_000},
    {id:2,name:"ios phone",cost:19999},
    {id:3,name:"blackberry phone",cost:5000},
    {id:4,name:"google phone",cost:50_000}]

let objfindcost=objcost.find(function(value)
{
    return value.cost >=20000
})
console.log("find-",objfindcost);

// filter

let objcostfilter = [
    {id:1,name:"android phone",cost:10_000},
    {id:2,name:"ios phone",cost:19999},
    {id:3,name:"blackberry phone",cost:5000},
    {id:4,name:"google phone",cost:50_000}]

let objfindcostfilter=objcostfilter.filter(function(value)
{
    return value.cost >=20000
})
console.log("filter",objfindcostfilter);


//findindex

let objcostfindindex = [
    {id:1,name:"android phone",cost:10_000},
    {id:2,name:"ios phone",cost:19999},
    {id:3,name:"blackberry phone",cost:5000},
    {id:4,name:"google phone",cost:50_000}]

let objfindcosfindindex=objcostfindindex.findIndex(function(value)
{
    return value.cost >=20000
})
console.log("filter",objfindcosfindindex);