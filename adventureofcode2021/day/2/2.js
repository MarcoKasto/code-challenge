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
var down=0;
var aim=0;
var forward=0;

for(i;i<input.length;i++){
    switch(input[i][0]){
        case'down':
            aim=Number(aim+Number(input[i][1]));
            break;
        case'up':
            aim= Number(aim-Number(input[i][1]));
            break;
        case'forward':
            forward = Number(forward+Number(input[i][1]));
            down=Number(down+Number(aim*Number(input[i][1])));
            break;
    }
}

console.log(down*forward)