
let score1=0
let score2=0;
let score3=0;
let height1=170;
let height2=180;
let height3=175;
let age1=50;
let age2=40;
let age3=30;

score1=height1+5*age1;
score2=height2+5*age2;
score3=height3+5*age3;

console.log(`${score1}, ${score2}, ${score3}`);

if(score1>score2&&score1>score3){
    console.log("Score1 is the winner!");
}
else if(score2>score1&&score2>score3){
    console.log("Score2 is the winner!");
}
else if(score3>score2&&score3>score1){
    console.log("Score3 is the winner!");
}
else{
    console.log("It is a draw!");
}