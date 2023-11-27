//counting truthy
let booleanArray = [true, false, true, false, true, false, true, false];
let trueCount = 0;

for (let i of booleanArray) {
  if (i === true) {
    trueCount++;
  }
}

console.log("Amount of true values are:", trueCount);
