const UserCredentials = require("../database/users");
const jwt = require("jsonwebtoken");

tokenGenrate = async (email, password) => {
  const token = await jwt.sign({ email, password }, "secretKey", {
    expiresIn: "300 seconds",
  });
  return token;
};

const singUp = async (req, res, next) => {
  const userData = new UserCredentials({
    email: req.body.email,
    password: req.body.password,
  });
 // checking if user is already exist
  let alreadyUserCheck = await UserCredentials.findOne({
    email: userData.email,
  });

  if (alreadyUserCheck) {
    res.send("User already exits");
  } else {

    // jwt token genration
    token = await tokenGenrate(userData.email, userData.password);
    // saving user in database

    await userData.save().then(() => {
        res.json({ message: "Token sucessfully genrated", acessToken: token });
      
    }).catch((err) => {
        console.log(err);
      });
    }
};

authVerify = async (req,res,next)=>{

    const userData = new UserCredentials({
        email: req.body.email,
        password: req.body.password,
      });

      let alreadyUserCheck = await UserCredentials.findOne({
        email: userData.email,password:userData.password
      });
      if (alreadyUserCheck) {
        token = await tokenGenrate(userData.email, userData.password);
        res.send(token)         
        }else{
            res.send("Invalid Credentials")
        }   
        
      } 
    
      
    


module.exports = { authVerify,singUp };
