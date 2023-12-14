// const promise = new Promise(function (resolve, reject){
//     setTimeout(() => {
//         console.log("task is complete");
//     }, 1000);
//     resolve();
// })

// promise.then(()=>{
//     console.log("Promise is consumed!");
// })

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "Akshay", age: 28 });
  }, 1000);
});

// promise.then((userData) => {
//      console.log("user data------->>>>>",userData);
// }).catch(() => {
//     console.log("error got........");
// })

// async function promiseFunction(){
//     const res = await promise;
//     console.log(res);
// }

// promiseFunction();

// async function getAllUsers(){
//    const res = await fetch('https://jsonplaceholder.typicode.com/posts/11');

//    const data = await res.json();

//    console.log(data);
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/posts/78")
.then((res) => {
    return res.json();
 
 // console.log(ans);
})
.then((res) => {
      console.log(res);
})
.catch((err) => {
      console.log("Something went wrong!!!!",err);
})
