// let sum = ()=>{
//     console.log(`sum is ${2+5}`)
// }
// let multiply = () => {
//   console.log(`sum is ${2 * 5}`);
// };
// const measureTime = ()=>{
//     console.time("sum()")
//     sum(2,5)
//     console.timeEnd("sum()")
//         console.time("multiply()");
//         sum(2, 5);
//         console.timeEnd("multiply()");
// }

// measureTime()
const ProgressBar = require("progress")
const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas",{
    total:20
})
const timer =setInterval(() => {
   bar.tick()
   if(bar.complete){
    clearInterval(timer)
   } 
}, 100);