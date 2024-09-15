const fs = require("fs")
const path = require("path")
 module.exports = (data) =>{
    // console.log("data to write in movies",path.join(__dirname,"../","data","movies.json"));
    
    try{
        fs.writeFileSync(path.join(__dirname,"../","data","movies.json"),JSON.stringify(data),"utf-8")
    }catch(err){
        console.log(err)
    }
 }