
    //array is a object data type array is not homogeneous in javascript ..Arrays in JavaScript are heterogeneous. 

    //this is literal syntax

    var mycolorballs=[ 'red','green','orange','gold'];
    
    console.log(mycolorballs);//we can change the array value bcz js is a dynamicaly typed language
    console.log(mycolorballs.length)
    mycolorballs[4]='blue';
    console.log(mycolorballs);
    console.log(mycolorballs.length);

    //this is constractor syntax

    // array speeling starts with  ***Array****

    var lang = new Array();
    lang=['tamil','english','hindi','frinch','japneesh'];
    console.log(lang);

    var students= new Array(4);//not a mater it will accept if the value is  more then size value
    students=['dinesh1','dinesh2','dinesh3','dinesh4','dinesh5','dinesh6','dinesh7'];
    console.log(students);
    console.log(students.length);
    console.log(students[6]);
    // add a new value
    students[7]="abboo";
    console.log(students);
    //find the data type
    console.log(typeof lang,typeof students);
    //we are going to find the values are array or what in that variable
    console.log(lang instanceof Array); // if there are multiple lang file exist it will not show acctual value
    console.log(Array.isArray(lang));

    
    let lang1=['tamil','english','hindi','french','japneesh'];
    console.log(lang1);
    console.log(lang1.length);
    lang1[6]="kanada";
    console.log(lang1.length);
    console.log(lang1.sort());//it will arrange the array by alphabetical order 

    const home =new Array();
    homo =[191,"Dinesh",true,"BIT"];
    console.log(homo);
