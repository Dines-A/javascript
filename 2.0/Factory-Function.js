
        // continues of OOPS
        //factory function

    function createperson(name,age)
    {
    return {
        name,//name->name:name
        age,
        fun1 :function(){
            let msg=`im ${this.name} ,and ${this.age}`;
            console.log(msg);

    }}}
        //let dinesh=createperson("dinesh",20);
        //dinesh.fun1()
        
        createperson("dinesh",20).fun1();
        createperson("ex",20).fun1();
        createperson("exx",20).fun1();
        createperson("exxx",20).fun1();





        //new function
        function createperson1(name1,age1)
    
    {
    return {
        name1,//name->name=name
        age1,        
       greeting()
        {
            let msg1=`im ${this.name1} ,and ${this.age1}`;//instead of upper line u can use this function
            console.log(msg1);
        }

    }}
    createperson1("dinesh",20).greeting();
    createperson1("ex",20).greeting();
    createperson1("exx",20).greeting();
    createperson1("exxx",20).greeting();



