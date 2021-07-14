
/* spread operator and clone are similar  */
    //primary objcet

        const person={
            name:"dinesh",
            age:21,
        };

        //type-1
        //copied object

        let Cloneperson=person;
        console.log(Cloneperson);

        //type->2

        
        let spread={...person};
        console.log(spread);


        // let personObj=Objcet.assign({},person);//not working if you want to add any key you can add here 
         // let personObj=Objcet.assign({age :21,clg:"bit"},person);
        // console.log(personObj);
         //spread operator after ES6 version 

        
