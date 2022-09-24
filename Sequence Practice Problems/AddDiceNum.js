let min = 1, max = 7, sum;
let dice1 = Math.floor(Math.random() * (max - min) ) + min;
let dice2 = Math.floor(Math.random() * (max - min) ) + min;
sum = dice1 + dice2;
console.log("Adding two Random Dice Number", sum);