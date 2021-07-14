    //primitive datatypes

        let name="dinesh a";
        console.log("name=",typeof(name)); 

        let age=20;
        console.log("age=",typeof(age));

        let issmoking=false;
        console.log("boolean=",typeof(issmoking));

        let job=undefined;//if you mention nothing it will take as a undefind
        console.log("undefind=",typeof(job));

        let salary=null;  //i access this in console
        console.log("null=",typeof(salary));

        //non-premitive datatypes or reference data types
        console.log("\n\n");
        let x=[1,2,3,4,5];
        console.log("array=",typeof(x));

        let y={name:"dinesh",clg:"bit",age:20};
        console.log("object=",typeof(y));

        let z=function()
        {
            console.log(`hi`);
        }
        console.log("function=",typeof(z));