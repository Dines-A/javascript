/* 

joining 
spliting
Additional 

*/

// how to add sufix 

const dailyRoutine = ["Wak-up","Eat","Working","Sleep","puting"];

// this " 's " won't add at the last of the element

const myRoutine = dailyRoutine.join("'s  ");

console.log(myRoutine);

// split if you use this this output will be inside an array

let myState ="Tamil Nadu india" ;

let splitmyState = myState.split(" ");

console.log(splitmyState);

// join 

let mystateslug=splitmyState.join("_");

console.log(mystateslug);

// split

let myStatelower ="Tamil Nadu india".toLocaleLowerCase();

let splitmyStatelower = myStatelower.split(" ");

console.log(splitmyStatelower);




