const marks = [49,50,34,35,79,98];
console.log(marks);
//map

const result = marks.map(

    marksmap => marksmap>=50?"pass":"fail"
)
console.log(result);

//filter

const pass = marks.filter(
    marksfilter => marksfilter>=50
)
console.log(pass);

//reduce

const total = marks.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log(total);