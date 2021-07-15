
    //constructor-function

    function createperson(name,age){
    this.name=name,
    this.age=age;
    this.greeting =  function (){
            console.log(`im ${this.name} ,${this.age}`);
        }
    }

    let obj1=new createperson('dinesh',21);
    obj1.greeting();
