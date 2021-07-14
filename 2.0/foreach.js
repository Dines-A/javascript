/* 
Iterating Array(Foreach)
foreach loop like
for in
for of 
*/
const myWork =["Wake-up","Eat","Work","Sleep"];

//for in loop

for(let forin in myWork)
{
    console.log(forin,myWork[forin]);
}

//for of

for(let forof of myWork)
{
    console.log(forof);
}

//foreach loop 

myWork.forEach(function(mydailyworks,workindex) 
/* mydailyworks-> it contain value of myWork if you just wanna value use this 
    workindex-> it contain index of myWork if you just wanna index value use this 
 */
{
    console.log(workindex,mydailyworks);
})

//foreach loop in arrow function

myWork.forEach((mydailyworks,workindex)  =>  console.log(workindex,mydailyworks))