let myfun = () => {
    console.log("hey there");
};
myfun();
//arrow function
let myparameters = (i,j) =>{
    console.log(i+j);
}
myparameters(1,2);
//without parenthesis
/*let myparametersSingleLine = (i,j) => console.log(i+j);
myparameters(1,2);

let myparametersSingleLine = (i,j) => i*j;
console.log(myparametersSingleLine (3,2));
*/
const years = [1998,2000,2001,2002,2003,2007,2011,2015,2020,2018,2017,2021];
const yrsbfpandemic = years.filter(function(year){
    return years!= 2020;
});
console.log(yrsbfpandemic);

const yrsbyarrow = years.filter(year => 2020-year);
console.log(yrsbyarrow);