
        
        // basic of for in
        
        arr=["a","b","c"]
        for(var key in arr)
        {
            // console.log("values : "+key);//it shows index
        }
        
        var im={
           name:"dinesh",
           roll_no:"191ei117",
           clg:"bit",
       };

        //for in

        for(var key in im)
        {
            // console.log(key , im[key]);//key->key pares im[key]->value pares 
        }

         //basic of for of 

         arr=["a","b","c"]

        for(var key of arr)
        {
            console.log("values : "+key);//it shows values || for of dont have like this -> arr[key] 
        }


        //for of-> 

        for(var key of Object.keys(im))//it is inbuild constructor function
        {
            console.log(key);//it shows keys
        }
        

        var im1={
            name:"dinesh1",
            roll_no:"191ei1171",
            clg:"bit1",
        };
       
        // entries is not working for me

       for(var entry1 of Object.entries(im1))
        {
            console.log(entry1);//it show key value pairs
        }


        //find is it existed or not in object 

        if('name' in im){
            console.log("yes");
        }
        else{
            console.log("No")
        }
