const error = new Error("someting went wrong !");
// console.log(error.stack)
// console.log(error.message)
// throw new Error("error object")
const CustomError = require("./CustomError");
// throw new CustomError("This is a custom error")

//handle error using try and catch.
// try{
//     doSomething()
// }catch(e){
//     console.log("Error occured")
//     console.log(e)
// }
function doSomething() {
  const data = fetch("localhost:3000/api");
}
// doSomething()
// uncaughtException

// process.on("uncaughtException",(err)=>{
//     console.log("There was an uncaught exception",err)
//     process.exit(1)
// })

//exception with promise
// const promise = new Promise((resolve,reject)=>{
//     if(false){
//         resolve(doSomething())
//     }else{
//         reject(doSomething())
//     }
// })
// promise.then((val) => {
//     console.log("val from promise",val)
// }).catch((err) => {
//     console.log("error occured in promise :")
//     console.log(err)
// })

//Exception with async/await
const someFunction = async () => {
  try {
    await doSomething();
  } catch (err) {
    throw new CustomError(err.message);
  }
};
someFunction();
