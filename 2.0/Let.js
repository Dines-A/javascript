//  let is block scope 

{
    let msglet="hello world";
    console.log("msglet=",msglet);
}
// console.log(msg); -> i won't work here if you can bcz it is a block lvl scope

{
    var msgvar="hello world";
    console.log("msgvar=",msgvar);
}
console.log("msgvar=",msgvar);