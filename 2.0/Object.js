
        var im={
            name:"dinesh",
            roll_no:"191ei117",
            clg:"bit",
                 };

        console.log(im);

        // we can create the object inside the object

       let person={
        name:"dinesh a",
        age:20,
        clg:"bit",
        issmoking:false,
        job:undefined,//if you mention nothing it will take as a undefind
        salary:null,
        sibiling:{
            bro:"vjs",
            sis:"rashmika"
                }
                };
       console.log(person);

       console.log(typeof(person)); //object
       //we can change the value of the key but,we can't change the key ,

       console.log(person.age);//dot notation
       console.log(person.age=21);

       console.log(person["name"]="dinesh_abubakar");//bracket notation

    //    access an element in array

    console.log(person.sibiling.bro);

