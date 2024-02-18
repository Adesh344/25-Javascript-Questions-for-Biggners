// console.log("one");
// console.log("2");

// setTimeout(async()=>{
//     await console.log("heelloooo");
// },0)

// console.log("3");
// console.log("4");
// console.log("5");


// function sum(a,b){
//     console.log( a+b);
// }

// function calculateSum(a,b,callback){
//     return callback(a,b);
// }

// calculateSum(2,3,sum);

// function getData(dataId,getnextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getnextData){
//             getnextData();
//         }
//     },2000)

// }

// getData(1,()=>{
//     getData(2)
// }
// );
// getData(2);
// getData(3);



// let promise = new Promise((resolve,reject)=>{
// console.log("I am a promise");
// })


// function getData(dataId,getnextData){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("Success")
//         if(getnextData){
//             getnextData();
//         }
//     },2000)

// })

// }


// let finalData = getData(123)

console.log("Start");

setTimeout(function() {
  console.log("Inside setTimeout, after 1000 milliseconds");
}, 1000);

setInterval(function() {
  console.log("Inside setInterval, every 1000 milliseconds");
}, 1000);

console.log("End");



// const getPromise =()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I a promise");
//         //resolve("Success")
//         reject("Error")
//     })
// }
// let promise = getPromise();

// promise.then((data)=>{
//     console.log("Promise fulfilled");
// })

// promise.catch((data)=>{
//     console.log("rejected");
// })







