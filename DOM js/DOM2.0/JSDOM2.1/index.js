function getcube()
{
    const number=document.getElementById("getcube").value;
    if(number<0)
    {
        alert("Enter the proper number")
    }
    else
    {
        alert(number*number*number)
    }
    // alert(number*number*number)
}

console.log(undefined===0);