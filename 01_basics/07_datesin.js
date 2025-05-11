// Dates

let myDate=new Date();
// console.log(myDate);
// console.log(typeof(myDate));
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate= new Date(2023,0,23);//month starts from 0
// let myCreatedDate= new Date(2023,0,23,5,3,4);
// let myCreatedDate= new Date("2023-01-23");
let myCreatedDate= new Date("01-13-2023");
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()//for current date and time in millisecond
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMilliseconds());
console.log(newDate.getSeconds());
console.log(newDate.getMinutes());
console.log(newDate.getHours());
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday:"long"
})

// node 01_basics/07_datesin.js