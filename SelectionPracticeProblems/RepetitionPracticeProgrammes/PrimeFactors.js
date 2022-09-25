const readline = require("readline-sync");
let n = parseInt(readline.question("Enter the number: "))
console.log("The Prime Factors are: ");
for(i =2; i<=n; i++){
    while(n%i == 0){
        console.log(i);
        n = n/i;
    }
}