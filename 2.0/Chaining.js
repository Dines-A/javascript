const mobiles=[
{id:1,product:"nokia",cost:200},
{id:2,product:"IOs",cost:50000},
{id:3,product:"Samsung",cost:20000},
{id:4,product:"Google",cost:70000},
{id:5,product:"Mi",cost:7000},
{id:6,product:"Realme",cost:5000},
{id:7,product:"Jio",cost:500},
{id:8,product:"nokia1100",cost:1000},
{id:9,product:"poco",cost:15000},
];

 //sort it using lowest price

let lowest =mobiles.sort(function(a,b)
{
    if(a.cost<b.cost)
    {
        return -1
    }
    else if (a.cost>b.cost){
        return 1
    }
    else{
        return 0
    }

    // return b.cost-a.cost; why its not working

});


console.log("using cost->",lowest);

//sort it by title ascending

let product=mobiles.sort(function(ap,bp)
{
    apl=ap.product.toLocaleLowerCase();
    bpl=bp.product.toLocaleLowerCase();
    if(apl < bpl)
    {
        return -1
    }
    else if (apl > bpl)
    {
        return 1
    }
    else{
        return 0
    }
})

console.log("pased on products ->",product);

//filter products less than 8000

let lessthan8000 =mobiles.filter(function(value)
{
    return value.cost <= 8000
})

console.log("lessthan8000->",lessthan8000);

//map it like this ://android phone -7500



let maping =mobiles.map(function(mapvalue)
{
//    return [mapvalue.product ,mapvalue.cost].join("-")
    return [mapvalue.product,mapvalue.cost].join("$ ")
})
console.log(maping);



 
