
let X=1;
let Y=90;
let Z=10;

let total=0;

total=(X+(Y/100))*Z;

console.log(`Total cost of ${Z} muffins is $${total.toFixed(2)}. $${Math.floor(total)}, ${Math.floor((total.toFixed(2)-Math.floor(total))*100)}cents`);