
        //static type oops => which means value are const 
       let person1={
        name:"dinesh a",
        age:20,
        clg:"bit",
        issmoking:false,
        job:['ex-google','ex-apple'],
        salary:500000,
        sibiling:{
            bro:"a",
            sis:"aa"
        },

/* 
function fun1()
 {
 let msg=`i'm ${this.name} ${this.age} and im currently studing at ${this.clg} and i wiil be as a${this.job}`;
 console.log(msg);
 }
  */

           fun1 :function (){
// ${} =>dynamic type values ku edhu use pananu
// this. => object kulla irukura value va access panum bodu use pananu.
            let msg=`i'm ${this.name} ${this.age} and im currently studing at ${this.clg} and i wiil be as a ${this.job}`;
            console.log(msg);
        }
    };
    person1.fun1();
    //dynamic type oops
