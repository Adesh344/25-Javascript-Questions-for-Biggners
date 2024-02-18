//object literal

// const user ={
//     name:"Adesh",
//     age:14,
//     email:"XXXXXXXXXXXXXXX",
//     city:"Mumbai",
// }

// console.log(user["age"]);


//Object singalton


// const user = new Object()
// user.name="Adesh"
// console.log(user["name"]);


// const user = {  
//     name:"Adesh",
//     age:14,
//     fullname:{
//         fname:"Adesh",
//         lname:"Gaurav"
//     }
// }

// console.log(user.fullname.fname);

// const obj1 ={1:"a",2:"b"}
// const obj2 ={3:"c",4:"d"}
// const obj4 ={5:"e",6:"f"}

// const obj3 = Object.assign({},obj1,obj2,obj4);
// console.log(obj3);

const users ={
    name:"Adesh",
    age:14,
    email:"XXXXXXXXXXXXXXX",
    city:"Mumbai",
    address:{
        road:"Ramnagar"
    },
    "":""
}

//console.log(users.hasOwnProperty(''));

const {name} = users

console.log(name);