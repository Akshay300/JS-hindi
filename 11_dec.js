//  (() => {
//     console.log("chai piyo!!!");
//  })()

//  (() => {
//     console.log("chai piyo!!!");
//  })()

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }

// let i = 10;

// do{
//     console.log("Hello");
//     i++;
// }while(i <20)

// const arr = [1,2,3,4,5];

// for (const iterator of arr) {

//     console.log(iterator);
// }

// const greetings = "Hello world";

// for (const greet of greetings) {

//     if(greet == ' '){
//         continue;
//     }

//     console.log(greet);
// }

//maps

// const map = new Map();

// map.set(1,"Akshay")
// map.set(2,2)
// map.set(3,3)
// map.set(4,4)
// map.set(5,5)

// console.log(map);

//iterate on array - for of loop
//on object -  for in loop

// const myObj = {
//     name: "Akshay",
//     age:28,
// }

// for (const key in myObj) {

//     const ans = `${key} = ${myObj[key]}`

//     console.log(ans);
// }

// const arr = [1,2,3,4,5];

// arr.forEach( (e) =>{
//     console.log(e);
// })

// const myArray = [
//   { name: "Sam", age: 28 },
//   { name: "Tam", age: 30 },
// ];

// const ans = myArray.forEach( (item) => {
//        console.log(item.name);
//        console.log(item.age);

// } )

// console.log(ans);

//filter

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const ans = nums.filter( (num) =>  num > 4 );  //filter return an array

// console.log(ans);

const arr = [];


//forEach loop does not return anything (void)
// nums.forEach((num) => {
//   if (num < 5) {
//     arr.push(num);
//   }
// });

// console.log(arr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  //const userBooks = books.filter( (item) => item.genre === "Non-Fiction")

//   const publish = books.filter( (bk) => bk.publish > 2000 );

//   console.log(publish);

// const nums = [1,2,3,4,5,6,7];

// const ans = nums.map( (num) => {
//     return num + 10;
// })

// nums.forEach(e => {
//     console.log(e+10);
// });

//console.log(ans);

//+++++++++++++ reduce ++++++++++++++++++++++++++++

// const nums = [1,2,3];

// const ans = nums.reduce( (acc, curval) => (acc+curval), 0)

// console.log(ans);

// const shoppingCart = [
//   {
//       itemName: "js course",
//       price: 2999
//   },
//   {
//       itemName: "py course",
//       price: 999
//   },
//   {
//       itemName: "mobile dev course",
//       price: 5999
//   },
//   {
//       itemName: "data science course",
//       price: 12999
//   },
// ]


// const total = shoppingCart.reduce( (acc, item) => (acc + item.price),0);

// console.log(total);

// const arr1 = [2,3,4,5,6,7];


// const ans = arr1.reduce( (acc, item) => acc+item,0);

// console.log(ans);

