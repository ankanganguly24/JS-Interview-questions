const date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d= date.getDay();
let day = days[d];

console.log(`The day is : ${day}`)

var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

console.log(`Current Time is = ${hr}:${min}:${sec}`)