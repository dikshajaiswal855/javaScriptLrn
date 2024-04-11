// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//in js months starts with 0 if written in single digit and it starts with 1 if it is in 2 digits

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//milisec for defined date
// console.log(myTimeStamp);

//used for finding the value from the defined time
// console.log(myCreatedDate.getTime());

//for getting in sec it is divided by 1000
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toTimeString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})