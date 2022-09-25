console.log("Priniting the table of 2 till given power");

let result;
let i = 1;
while(result != 256)
{
    result = Math.pow(2,i);
    console.log("2^"+i+": "+result);
    i++;
}