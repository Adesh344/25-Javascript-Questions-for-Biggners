// //const arr = "Sttrrinng"
// const map = new Map();

// map.set(1,["One","i"])
// map.set(2, "Two")
// map.set(3, "Three")
// map.set(4, "Four")

// // for(let i of map.values){
// //     console.log(i)
// // }

// for(let [key,v] of map){
//     console.log()
// }   


// const obj = {
//     name:"Adesh",
//     age:23,
//     phone:"023849384093"
// }

// for(let i in obj){
//    console.log(i+":"+obj[i]);
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr.forEach((item, index, array)=>{
//     console.log();
// })


// let arr =[{
//     name:"Adesh",
//     age:23,
// },
// {
//     name:"Gaurav",
//     age:23,
// },
// {
//     name:"Rahul",
//     age:23,
// }
// ]

// arr.forEach((item, index, array)=>{ 
   
//     for(let i in item){
        
//         if(i == "name"){
//             console.log(item[i])
//         }
//     }
// })


// let arr = [1, 2, 3, 4, 5, 7,6, 8, 10,9]

// let res = arr.filter((item)=> {return item%2==0})
// console.log(res)

// arr.sort((a,b)=>{return a-b})
// console.log(arr)


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];


// const res = books.filter((item)=>{
//     //return item.genre=='Science' && item.title=='Book Eight'
//     return item.edition>2000
// })


// console.log(res);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let res = arr
//            .map((item)=>item*10)
//            .map((item)=>item+1)
//            .filter((item)=>item%11==0)

// console.log(res);


//reduce

// let arr = [1, 2, 2, 6]

// const total = arr.reduce((acc, item)=>{
//     //console.log(acc);
//     return item
// })

// console.log(total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2
    },
    {
        itemName: "py course",
        price: 9
    },
    {
        itemName: "mobile dev course",
        price: 5
    },
    {
        itemName: "data science course",
        price: 1
    },
]


let res = shoppingCart
.reduce((acc, item)=>acc+item.price,0)

console.log(res);