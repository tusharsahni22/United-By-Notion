const express  =require("express")
const app =express();
require("./database/connection")
const allRoutes = require("./routes/routes")
const port = process.env.PORT || 3000

app.use("/api",allRoutes)


const start = async(req,res)=>{
 try {
   await app.listen(port,()=>{
        console.log(`listeing at port ${port}`)
    })
}
catch(error){
    console.log(error)    
}
}

start()