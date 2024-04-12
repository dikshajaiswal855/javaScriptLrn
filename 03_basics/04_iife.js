// Immediately Invoked Function Expressions (IIFE)
/*to remove the pollution caused by global scope we have used iife "()()"*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')