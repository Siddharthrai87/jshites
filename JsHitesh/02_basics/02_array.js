// array p2

// const marvel_heros=["thor","ironman"];
// const dc_heros=["superman","batman","flash"];
// const ind_heros=["shaktimann","hatim","naagraj"];
// const concatArr=marvel_heros.concat(dc_heros,ind_heros);
// console.log(concatArr);

// const spreadArr=[...marvel_heros,...dc_heros,...ind_heros]
// console.log(spreadArr);

// const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const flatArr=anotherArray.flat(Infinity)
// console.log(flatArr)//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"Hitesh"}))//[] not given that is array is to formed from the keys or values

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]


// node 02_basics/02_array.js