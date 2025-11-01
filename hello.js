
const prompt=require("prompt-sync")();

let n1=Number(prompt("Enter first Number :"));
let n2=Number(prompt("Enter second Number :"));
let n3=Number(prompt("Enter third Number :"));
let n4=Number(prompt("Enter fourth Number :"));

let sum=0;
sum=n1+n2+n3+n4;
let avg=sum/4;

console.log(avg);