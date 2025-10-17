const str = "Hello, world!";
console.log(str);
let arr=['CE','IT','CSE']
console.log(arr);
let arr1=[...arr,'EE','ME'];
console.log(arr1);
let pro=[101,'Mobile',10,100]
let order=[100,`${Date(Date.now)}]`]
const stat=[...pro,...order,'delivered']
console .log(stat)
function add(...rest){
    let sum=0;
    for(let i of rest){
        sum+=i;
    }
    return sum;
}
console.log(add(1, 2, 3, 4, 5)); // Output: 15
// const sum =(n1,n2)=>{
//     return n1+n2;
// }
const sum = (n1, n2) => n1 + n2;
console.log(sum(10, 20)); // Output: 