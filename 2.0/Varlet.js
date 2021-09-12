/* 
var -> function scope
classic method the assing a value
you can call this name where-ever in the project ofter define
we can replace the var's value whenever you want

and let too -> but let is block scope block mean's => { }
let is advance lvl of var

const is advance lvl of let

*/

var Varname="Dinesh";
console.log(Varname);
Varname="Dineshpvi"; /* here the myname value is overwrited by Dineshpvi */
console.log(Varname);


let Letname="Dinesh";
console.log(Letname);
Letname="Dineshpvi"; /* here the myname value is overwrited by Dineshpvi */
console.log(Letname);


// 


function varlet()
{
    for(let i=1;i<=10;i++)
    {
        console.log(i);
    }
}
varlet()
