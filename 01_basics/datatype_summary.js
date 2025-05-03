// // primitive data type
// // 7types : String , Number,Bollean, null , undefined ,Symbol, BigInt

// const score = 100
// const scoreValue = 100.3
// const isLogin=false
// const outSide=null
// let userEmail;//undefined 

// const id=Symbol('123');
// const anotherId=Symbol('123');
// console.log(id === anotherId);

// const bigNumber=207234857834787234n

// // non primitive data type or reference type
// //  Array , Objects , Functions

// const heros=["shaktimaan ","naagraj","doga"]
// let myObj={
//     name:"siddharth",
//     age:20
// }
// const myFunction=function(){
//     console.log("Hello World");
    
// }
// myFunction();
// console.log(typeof myFunction);//object function
// console.log(typeof outSide);//object
// //datatype of non primitive is function other than function whose datatype is object function


// stack is used by primitive datatype 
// heap is used by non primitive datatype
let myYoutubename="hiteshchaudharydotcom";
let anothername=myYoutubename;
anothername="chaiaurcode"
console.log(anothername);
console.log(myYoutubename);
 
let user1={
    email:"user@google.com",
    upi:"user@ybl"
}
let user2=user1;//this just got reference of user1;so change in any value in user2 will change the value in user1
user2.email="hitesh@google.com"
console.log(user1.email);
console.log(user2.email);


// node 01_basics/datatype_summary.js