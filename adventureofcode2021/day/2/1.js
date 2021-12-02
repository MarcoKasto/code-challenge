const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((i) => {
    return i.split(" ")
  }
);

var i=0;
var up=0;
var down=0;
var forward=0;

for(i;i<input.length;i++){
    if(input[i][0]==='down'){
        down = Number(down+Number(input[i][1]));
    }
    if(input[i][0]==='up'){
        up = Number(up+Number(input[i][1]));
    }
    if(input[i][0]==='forward'){
        forward = Number(forward+Number(input[i][1]));
    }
}
down = Number(down-up);
console.log(down*forward)