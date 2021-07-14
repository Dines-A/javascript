
        //array for of loop

        let wishlist = ["Orange","Apple","Banana","Mango"];
        for( let key of wishlist)
        {
            console.log(key);
        }

        //object for in loop
        // 
        let obj = {
            name:"Dinesh",
            age:21,
            clg:"BIT"
        }


       for(let keyobj of Object.keys(obj))
       {
           console.log(keyobj);
           //it only show key pair
       }
       
       for(let keyobj of Object.entries(obj))
       {
        //    it show key :value pair 
           console.log(keyobj);
       }
       //to find the key existed or what
       if ("name" in obj)
       {
           console.log("True");
       }

