
        let mixed={
            name : 'Dinesh',
            age : 20,
            isalive :true,
            like:["eating,fcuking","licking"],
            welcome:()=>{
               console.log("hello everyone!"); 
            },
            welcomenormal:function(){
               console.log("hello everyone normal function!!"); 
            }
        }
        console.log(mixed);
        mixed.welcome();
        mixed.welcomenormal();
