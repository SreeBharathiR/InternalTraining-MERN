import { obj } from "./data.js";
import age from "./data.js";
console.log("Hi");
console.log(obj);
console.log(age);

//callback function

function greeting(firstName, callback) {
  console.log(`Hi ${firstName}`);
  callback();
}
function appre() {
  console.log("Great work");
}
greeting("sree", appre);

//asynchronous

const Appre = () => {};
console.log("Start");
setTimeout(() => {
  console.log("After some delay");
}, 2000);
console.log("stop");

//Destructuring

const { name, location } = obj;

console.log(location);

//map,filter,find

//spread ,rest (...)

const { dept, ...others } = obj;
console.log(dept);
console.log(others);

//async /await
