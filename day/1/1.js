const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((i) => {
    return Number(i);
  }
);
var i =1;
var howMuchIncrease = 0;
for(i;i<input.length;i++){
    if(input[i]>input[i-1]){
        howMuchIncrease++;
        console.log("increase");
    }else{
        console.log("decrease");
    }
}
console.log(howMuchIncrease);