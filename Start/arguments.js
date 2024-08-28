const minimist = require("minimist")
// console.log(process.argv)
// process.argv.forEach((val,index)=>{
//     console.log(`${index} : ${val}`)
// })
let arg = minimist(process.argv.splice(2));
console.log(arg.name)