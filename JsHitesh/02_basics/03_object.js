// const user={
//     name:"Hitesh",
//     age:18,
//     location:"Jaipur",
//     email:"hitesh@google.com",
//     isLoggin:false,
//     LastLoginDays:["Monday","Saturday"],
//     "full name":"Hitesh Chaudhary"//here "" in the key is required because the key have spaces in the name
// }
// console.log(user.email)
// // console.log(user.[email])// error
// console.log(user["full name"])
// console.log(user.LastLoginDays)
// console.log(user.location)
// console.log(user.age)
// console.log(user.name)

const mySum=Symbol("key1");
const user1={
    name:"Hitesh",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggin:false,
    LastLoginDays:["Monday","Saturday"],
    "full name":"Hitesh Chaudhary",//here "" in the key is required because the key have spaces in the name
    mySum:"my key1"
}
console.log(user1.email)
// console.log(user.[email])// error
console.log(user1["full name"])
console.log(user1.LastLoginDays)
console.log(user1.location)
console.log(user1.age)
console.log(user1.name)
console.log(user1.mySum)
console.log(typeof mySum)

user1.email="raisk@1157";
console.log(user1.email);
user1.greeting=function(){
    console.log(`hello jsuser`)
}
user1.greeting2=function(){
    console.log(`Hello user ${user1.name}`)
}
console.log(user1.greeting())
console.log(user1.greeting2())
// node 02_basics/03_object.js