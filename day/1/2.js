const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((i) => {
    return Number(i);
  }
);

var a=0;
var b=1;
var c=2;
var result =0;
for(a,b,c;c<input.length-2;a++,b++,c++){
  if(input[a]+input[b]+input[c]<input[b]+input[c]+input[c+1]){
    result++;
  }
}
console.log(result);