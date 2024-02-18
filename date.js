const datee = new Date();

//console.log("toString() = ",datee.toString()); //Sun Jan 14 2024 01:35:19 GMT+0530 (India Standard Time)

//console.log("toDateString()",datee.toDateString()); // Sun Jan 14 2024

//console.log("toISOString()",datee.toISOString()); // toISOString() 2024-01-13T20:06:36.797Z

//console.log("toJSON()",datee.toJSON())  // 2024-01-13T20:08:38.550Z

console.log("toJSON()",datee.toUTCString()) //Sat, 13 Jan 2024 20:09:52 GMT