let sum = 0;
let input;
let count = 5;

for (let i = 1; i <= count; i++) {
  input = parseInt(prompt("Enter number " + i + ":"));
  sum += input;
}

let average = sum / count;

console.log("Total: " + sum);
console.log("Average: " + average);

if (average > 95) {
    console.log("A+ grade");
}else if (average >90 && average <=95) {
    console.log("A grade");
}else if (average > 85 && average <= 90) {
    console.log("B+ grade");
}else if (average > 80 && average <=85) {
    console.log("B grade");
}else if (average >75 && average <= 80) {
    console.log("C grade");
}else if(average < 75){
    console.log("D grade");
}
