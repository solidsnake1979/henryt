const prompt=require("prompt-sync")();

const pi=3.14;

const radius=Number(prompt("Enter the radius of the circle :"));

let area=0;
 area=pi*radius*radius;

 console.log(area.toFixed(2));