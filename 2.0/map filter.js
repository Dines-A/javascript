
const marks = [12,56,34,78,89,67,89,98,09,65];

const grades = marks.map(function(marksgrade)
{
    let hold = marksgrade>=50? "pass" : "fail";
    return hold;
})

console.log(grades);

const pass = marks.filter((pass) => pass>=50)
console.log(pass);