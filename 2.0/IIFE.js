const num1=12;
const num2=23;

// Immediately Invoked Function Expression or Self invoked fucntion



(function(num1,num2)
{
    let tot= num1+num2
    console.log("tot=",tot);
})(num1,num2)



// Arrow fucntion

const numa=12;
const numb=23;
((numa,numb) => 
{
    let totA= numa+numb
    console.log("totA=",totA);
})(numa,numb)
// try to avoid passing argument in IIFE
   
// self invoke fucntion

