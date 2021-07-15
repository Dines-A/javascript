 const e_ShopingList= [
    {id:1,item:"Milk",cost:20},
    {id:2,item:"Tomoto",cost:90},
    {id:3,item:"Pototo",cost:70},
    {id:4,item:"Curryleaves",cost:10}
]
// reduce extracting

function addon(a,b)
{
    return a+b.cost;
}

let totcost = e_ShopingList.reduce(addon,0);

console.log("totcost=",totcost);

// reduce arrow  ES6

let  addonA = (a,b) =>  a+b.cost;

let totcostA = e_ShopingList.reduce(addon,0);

console.log("totcostA=",totcostA);