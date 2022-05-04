/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b){
    return a + b

}

let all=addTwoNumbers(3,3)
console.log(all)
// Arrow Function With Parameters
const addNumbers=(a,b)=>{
return a+b


}
let sum=addNumbers(9,9)
console.log(sum)
// Single Line Arrow Function With Parameters
const addTwoNumbers2=(a,b)=>a+b;
let adding=addTwoNumbers2(80,90)
console.log(adding)
// Implicit Returns

const say=message=> console.log(message)
say("hello how are you");
const sayHello=()=>console.log('hello')

sayHello()
// Returning Multiple Lines
const multiString=()=>(
`<p>
This is a line
</p>`
)
console.log(multiString())
