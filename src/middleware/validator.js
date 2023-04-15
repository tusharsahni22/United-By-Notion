const jwt = require("jsonwebtoken")
const UserCredentials = require("../database/users")


const authTokenCheck = async(req,res,next)=> {
    let token = req.headers.token
        TokenArray = token.split(" ")

        const VerifyToken = await jwt.verify(TokenArray[1],"secretKey",(err,payload)=>{
            if (err) {
                res.send(err)
            }else {
                requser = async ()=>{
                    const{_id} =payload
                    req.user= await UserCredentials.findById(_id)
                    console.log(payload)
                    next()
                    
                }
                requser()
                
            }
        })   
        
}

module.exports = {authTokenCheck}