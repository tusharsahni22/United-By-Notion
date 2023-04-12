const UserCredentials = require("../database/users");
const jwt = require("jsonwebtoken");

tokenGenrate =  async(email,password) => {
  const token = await jwt.sign({email,password}, "secretKey", {expiresIn: "300 seconds",});
return token

  
};

const auth = async (req,res,next) => {
  const userData = new UserCredentials({
    email: req.body.email,
    password: req.body.password,
  });
token = await tokenGenrate(userData.email,userData.password)
console.log(token)

  
  
    await userData.save().then(() => {
        res.json({"message":"Token sucessfully genrated","acessToken":token});
      })
      .catch((err) => {
        console.log(err);
      });



};

// const authVerify = async (token)=>{

//     const VerifyToken = jwt.verify(token,"secretKey")

//     console.log(VerifyToken)
// }
// authVerify()

module.exports = { auth };
