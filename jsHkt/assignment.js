// Q1
// for (let i = 30; i >=0; i--) {
// //    console.log(i);
//  process.stdout.write(i + (i > 0 ? ' ' : '\n'));
// }


//Q2
function showTime(t2){
    let t1=new Date();
    console.log(t2);
    console.log(t1);
    // console.log(t1.getTime());
    let t3=(t1.getTime()-t2.getTime())/1000;
    console.log(`Time Delay is : ${t3} seconds`);
    
}
let t2=new Date();
setTimeout(()=>showTime(t2),1*1000);


// Q3
// let time=new Date();
// let hours=time.getHours();
// let mint=time.getMinutes();
// let second=time.getSeconds();
// let formattedTime=`${String(hours).padStart(2,'0')}:${String(mint).padStart(2,'0')}:${String(second).padStart(2,'0')}`;
// console.log(formattedTime);



// node jsHkt/assignment.js