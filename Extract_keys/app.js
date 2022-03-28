// let a = [2, 3, 2, 5, 4, 7, 8, 6, 4, 3];
// console.log(a);
// console.log(a.filter(checkAdult));
// function checkAdult(num) {
//   return num >= 3;
// }
// console.log(a.find(checkAdult));

// function checkAdult(num) {
//         return num == 8;
//       }

// =================TEMPLATE LITERALS=======================
// let num1 = 3;
// let num2 = 2.6554;
// let a = `Result = ${(num1+num2).toFixed(2)}`;

// console.log(a);
// let a = 3;
// a<5 ? console.log("Hamza"):console.log("Bukhari");

// let a = 75;
// a > 80 ? console.log("A") : a > 70 && a < 80 ? console.log("B"): console.log("Fail")

// ===================================Pass by Value and Reference================================
// const obj1 = {
//     num1 : 2,
//     num2 : 5
// }
// const obj2 = obj1;

// obj2.num2 = obj1.num2 + 5;
// console.log(obj1);
// console.log(obj2);

// let val1 = 2;
// let val2  = val1;

// val2 = val1 + 5;
// console.log(val1);
// console.log(val2);

// =======================================Assignment================================
let obj = [{
  FirstName: "Hamza",
  LastName: "Bukhari"
},
{
  FirstName: "Bilal",
  LastName: "Fareed"
},
{
  FirstName: "Ahmed",
  LastName: "Faraz Ali"
},
{
  FirstName: "Arzoo",
  LastName: "Fatime"
},
{
  FirstName: "Hafiz",
  LastName: "Huzaifa"
}];

let map1 = obj.map(function(fn) {
if (fn.FirstName) {
  return fn.FirstName;
}
})

let map2 = obj.map(function(ln) {
if (ln.LastName) {
  return ln.LastName;
}
})
console.log(map1);
console.log(map2);
