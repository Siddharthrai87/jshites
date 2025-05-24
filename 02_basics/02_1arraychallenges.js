//1
// let teaFlavors=["green tea","black tea","oolong tea"]
// let firsttea=teaFlavors[0];
// console.log(teaFlavors);
// console.log(firsttea);


//2
// let cities=["London","Tokyo","Paris","New York"]
// let favouriteCity=cities[3];
// console.log(cities);
// console.log(favouriteCity);

//3
// let teaTypes=["herbal tea","white tea","masala tea"]
// console.log(teaTypes);
// teaTypes[1]="jasmine tea";
// console.log(teaTypes);

//4
// let citiesVisited=["Mumbai","Sydney"];
// // citiesVisited[2]="Berlin";
// citiesVisited.push("Berlin")
// console.log(citiesVisited);

//5
// let teaOrders=["chai","iced tea","earl grey"];
// let tea1=teaOrders.pop();
// console.log(tea1);
// console.log(teaOrders);

//6
// let popularTeas=["green tea","oolong tea","chai"];
// let softCopy=popularTeas;
// popularTeas.pop();
// console.log(popularTeas);
// console.log(softCopy);

//7
// let topCities=["Berlin","Singapore","New York"]
// let hardCopyCities=[...topCities];
// let hardCopyCities=topCities.slice();
// topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);

//8
let europeanCities=["Paris","Rome"];
let asianCities=["Tokyo","Bangkok"];
let WorldCities=[...europeanCities , ...asianCities]
console.log(WorldCities);


// node 02_basics/02_1arraychallenges.js