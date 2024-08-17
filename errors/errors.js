const error = new Error("someting went wrong !");
// console.log(error.stack)
// console.log(error.message)
// throw new Error("error object")
const CustomError = require("./CustomError");
// throw new CustomError("This is a custom error")

//handle error using try and catch.
try{
    doSomething()
}catch(e){
    console.log("Error occured")
    console.log(e)
}