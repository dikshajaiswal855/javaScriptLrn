// var c=300
// var is not used because it avoids scope block
if(true){
    // block scope
    let a=10
    const b=20
    // var c=30
    // console.log ("inner:",a);
}
//global scope
// console.log(a);
// console.log(b);
// console.log(c);

for (let index = 0; index < array.length; index++) {
    const element = array[index];   
}

//nested scope
//child can have acces of their parent scope but the parent can not take icecream of their child
function one(){
    const username="diksha";
     function two(){
        const website="yt";
        console.log(username);
     }
    //  console.log(website);
     two();
}
// one;

if(true){
    const username="hklp";
    if(username=="hklp"){
        const website="yt";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++ interesting +++++++++

console.log(addone(5));
function addone(num){
    return num+1
}


const addtwo=function(num){
    return num + 2
}
// since we have defined the function inside the variable so we can't write the functon call above the function the function call is always prefered to write below the function
addtwo(3);