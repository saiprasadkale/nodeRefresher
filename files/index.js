const path = require("path")

const filePath = `E:/Study/nodeRefresher/files/sample.txt`;
//dirname
// console.log("dir name",path.dirname(filePath))
// //basename
// console.log("base name",path.basename(filePath));

// //extension
// console.log("extension name", path.extname(filePath));

const fs = require("fs")
const fsPromise = require("fs").promises
// console.log(path.join(__dirname,"sample.txt"))
// fs.readFile(path.join(__dirname,"sample.txt"),"utf-8",(err,data) =>{
//     if(err) throw new Error("Something went wrong")
//         console.log(data)
// })

// write to file
// fs.writeFile(path.join(__dirname,"sample.txt"),"This is an addition to sample file.",(err)=>{
//     if(err) throw new Error("Something went wrong.")
// })

// write using cleaner method ie promise
const writingInFile = async ()=>{
    try{
        await fsPromise.writeFile(
          path.join(__dirname, "sample.txt"),
          "This is an addition to sample file."
        );
        await fsPromise.appendFile(
          path.join(__dirname, "sample.txt"),
          "This is an appended to sample file."
        );
        const data = await fsPromise.readFile(
          path.join(__dirname, "sample.txt"),"utf-8"
        );
        console.log(data)
    }catch(err){
        throw new Error("Something went wrong !")
    }
}
writingInFile()