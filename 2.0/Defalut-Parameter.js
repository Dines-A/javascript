
// if you wanna defalut parameter it must be place in very-last 

function Calc(cost,product,tax=18) /* tax=18 -> ->type-3 */ 
{
    // tax =tax || 18; type-1
    // tax = tax ?? 18; type-2
    let tax$=cost*(tax/100);
    console.log(`
   -> ${product} <-
My cost = ${cost}₹
My Tax [${tax}%] = ${tax$}₹
My Total Amout = ${cost+tax$}₹`);

}

// if the GST value increase you can add at the last the 18 will be overwrite 

let GST=Calc(100,"Bike",20)
