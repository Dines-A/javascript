// this function return array value

const xy_z=[21,10,19,23,98];

let arange = xy_z.filter(function(value)
{
    return value >=18
})

console.log("Arange",arange);

//  sepration odd and even number

const nums=[1,2,3,4,5,6,7,8,9,0];

let odd =nums.filter(function(odds)
{
    return odds%2==1;
})
// console.log(odd);
let even =nums.filter(function(evens)
{
    return evens%2==0;
})

console.log(even);



//  test case

let objcost = [
    {id:1,name:"android phone",cost:10_000},
    {id:2,name:"ios phone",cost:20_000},
    {id:3,name:"blackberry phone",cost:5000},
    {id:4,name:"google phone",cost:50_000}]

let objfiltercost=objcost.filter(function(value)
{
    return value.cost >=20000
})

console.log(objfiltercost);

// using arrow function

let objcostArrow = [
    {id:1,name:"android phone",cost:10_000},
    {id:2,name:"ios phone",cost:20_000},
    {id:3,name:"blackberry phone",cost:5000},
    {id:4,name:"google phone",cost:50_000}]

let objfiltercostArrow=objcostArrow.filter(value =>  value.cost >=20000 )

console.log(objfiltercostArrow);


