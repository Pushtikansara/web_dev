let num = Math.floor(Math.random()*10);
console.log(num); 
let num1 = Math.floor(Math.random()*100);
console.log(num); 
let num2 = Math.floor(Math.random()*100);
console.log("-",num); 
for(let i=1;i<=10;i++)
{
    setTimeout(function(){
        console.log(i);
    },i*1000)
}
for(let i=1;i<=10;i++)
{
    setTimeout(function(){
        console.log(11-i);
    },i*500)
}