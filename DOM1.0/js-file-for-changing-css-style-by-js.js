function check()
{
    box=document.getElementsByTagName("input");
    data=document.getElementsByTagName("p");

    for(var i=0;i<box.length;i++){
        data[i].innerHTML=box[i].value;
        //data[i].style.color="red";
        data[i].style.backgroundcolor="khaki";//not working
        data[i].className="myclass";
        console.log(data[i]);
    }
}
alert("hi bro!");
