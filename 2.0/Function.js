
        //syntax
        function functionname( par1,par2){
        //    statment
        }
        function functionname()
        {
            console.log("hello pgmer");
        };
        
        functionname();
        functionname();

        //type 1
        function f1(name,message){
            console.log("hello "+name +"!"+message)
        }
        f1("dinesh","learn-program")
        //type-2
        function f2(name,message){
           return "hello "+name +"!"+message;
        }
        var hold=f2("dinesh","learn-program");
        console.log(hold);
        
        //here one 
        function f3(name,message){
            if(name){
                return "hi"+name+message;
            }
            else{
                return "hi, anonymous"+message;
            }
        }
        var holder=f3(name="",message='why are you gay!');
        console.log(holder);


        //find the squaree of the number;
        function square(num1){
            return num1*num1;
        }
        console.log(square(2));

        // input from user
        function square(num1){
            return num1*num1;
        }
        var num1=prompt("enter the number for square : ");
        console.log(square(num1));
