

        /* 
        1.assign [ ] to that array
        2.assign 0 to that arrays length
        3.use splice method
        4.use pop in loops        
         */


        let electronics =["laptop","mobile","headset","band","airbods"];

        // type-1  1st preforance
        // electronics = [];
        // console.log(electronics);

        //type-2  1st preforance
        // electronics.length=0;
        // console.log(electronics);

        //type-3 3rd  preforance
        // electronics.splice(0,electronics.length);
        // console.log(electronics);

        //type-4  4th preforance not preforable in big project it take ram to give op
         while(electronics.length){
              electronics.pop();
        }
        console.log(electronics);
