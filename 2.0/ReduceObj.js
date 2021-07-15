const e_ShopingList= [
    {id:1,item:"Milk",cost:20},
    {id:2,item:"Tomoto",cost:90},
    {id:3,item:"Pototo",cost:70},
    {id:4,item:"Curryleaves",cost:10}
]

// ReduceRight -> it start calculation from left

let totcost=e_ShopingList.reduce(function(costholder,costpiker)
{
    // console.log(costholder);
    // console.log(costpiker);

    return costholder+costpiker.cost
},40)

//  this 40 ruppies for shipping charge

console.log("Total-Cost=",totcost);

// ReduceRight -> it start calculation from right

let totcostR=e_ShopingList.reduceRight(function(costholderR,costpikerR)
{
    // console.log(costholder);
    // console.log(costpiker);

    return costholderR+costpikerR.cost
},40)

//  this 40 ruppies for shipping charge

console.log("Total-Cost=",totcostR);