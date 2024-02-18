//1 Reverse each word in the sentence 

// const stat = "The quick brown fox jumps over the lazy dog";
// let ans = stat.split(" ")
 //.map((word)=>{
//  // return word.split("").reverse().join("")
// })
//console.log(ans.join(" "))

//how to check if an object is an array or not

// let obj = {
//     name: "Rohan",
//     age: 25,
//     city: "Delhi"
// }

// let obj2 =[{
//     name: "Rohan",
//     age: 25,
//     city: "Delhi"
// }]

// console.log(Array.isArray(obj2))


//Empty array without using loop or new array

//let arr = [1,23,4,5,6,3,67,4,8,43,86]
// arr.splice(0,arr.length)
// console.log(arr);

// let arr2 = arr.slice(3,9)
// console.log(arr2);


//Check the number is integer or not

// let a = 19.5
// let b = 19

// function isInteger(a){
//     if(a%1==0){
//         console.log("Integer");
//     }else{
//         console.log("Not Integer");
//     }
// }

// isInteger(a)

//Dublicate the array and return it in new array

// function duplicate(arr){
//     let arr2 = arr.slice(0,arr.length+1)
//     let res = arr.concat(arr2)
//     console.log(res);
// }

// let arr = [12,34,123,5,2]
// duplicate(arr)


//6 Reverse number using function

// function revNum(n){
//     let res= String(n).split('').reverse().join('')
//      return Number(res)
// }

// let res = revNum(2345)


//7 String is palandrom or not

// function isPalandrome(str){
//     let temp = str.split('').reverse().join('')
//     if(temp==str){
//         console.log("True")
//     }else{
//         console.log("False");
//     }
// }

// let str = "abccba"

// isPalandrome(str)


//8 Arrange string words in alpha order

// function arrange(str){
//     let res = str.split('').sort().join('')
//     console.log(res);
// }

// let name = "deash"
// arrange(name)


//9 function that converts the first letter of the sentecne into upper case

// let statement = "the quick brown fox jumps over the lazy dog"  

// let res = statement.split(" ").map((word)=>{
//     return word.charAt(0).toUpperCase()+word.slice(1)
// }).join(" ")
// console.log(res);

//11 Number of occurence of each letter in string


//Object se bhi banega


// let map = new Map()

// let str = "AabcDDdeFF"

// for(let i = 0 ; i < str.length ; i++){
//     let charr = str.charAt(i)
//    if(map.has(charr)){
//     let val = map.get(charr)
//     map.set(charr , val+1)
//    }else{
//     map.set(charr,1)
//    }
// }

// console.log(map);


//Remove all the object that dosnt value male

let arr = [{
name:"Adesh",
age:22,
gender:"male"    
},{
    name:"hiney",
age:22,
gender:"female" 
},{
    name:"Yiyo",
age:22,
gender:"male" 
},{
    name:"Gaurav",
age:22,
gender:"female "
}]



// for(let i of arr){
//     i.gender['male']
// }


let a = [2,5,3,8,6,2]


a.pop()


console.log(a);















