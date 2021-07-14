

        //normal function type-1

            function welcome()
            {
                console.log(`hello guys `);
            }
            welcome()

        //normal function type-2

            function welcome( name,age)
            {
                console.log(`hello guys my name is ${name} and my ${age}`);
            }
            welcome("dinesh",20)

            //normal   function type-1

            let welcomer = function ()
            {
                console.log("welcomer Dinesh !!!");
                return 1;
            }
            console.log(welcomer());

            //normal  anonymous  function type-2

            let welcomeuser = function (name)
            {
                console.log("welcomer "+name+ "user!!!");
            }
            // console.log(welcomeuser("ABO")); // if you use this it will show undefind

            let haha=welcomeuser("DDIINNEESSHH");
            console.log(haha);

            //normal arrow function type-1

            let  looser = ()=> 
            {
                console.log("hello,dinesh");
            }
            looser();

            //normal arrow function type-2

            let  hello=(name)=> 
            {
                console.log(`hello,${name}`);
            }
            hello("Dinesh")


        //   const flipkart =[
        //     {
        //         id:1,item:"iphone-12",quantity:1
        //     },
        //     {
        //         id:2,item:"iphone-12pro",quantivy:1
        //     },
        //     {
        //         id:3,item:"iphone-11",quantivy:1
        //     },
        //     {
        //         id:4,item:"iphone-11pro",quantivy:1
        //     },
        // ]
        // //call back function
        // let result=flipkart.find((Order)=>Order.item==="iphone-12")
        //     console.log(result);



