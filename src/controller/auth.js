const UserCredentials = require("../database/users");
const jwt = require("jsonwebtoken");

tokenGenrate = async (_id) => {
  const token = await jwt.sign({_id}, "secretKey", {
    expiresIn: "24h",
  });
  return token
};

const singUp = async (req,res) => {
  if(!req.body.email || !req.body.password){
    return res.send("Please fill all the details")
  }
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
    // saving user in database
    
    await userData.save().then(() => {
      res.json({ message: "SingUp Sucessfull please Login"});   
      }).catch((err) => {
        console.log(err);
      });
    }
};

const Login = async (req,res)=>{

    const userData = new UserCredentials({
        email: req.body.email,
        password: req.body.password,
      });

      let alreadyUserCheck = await UserCredentials.findOne({
        email: userData.email,password:userData.password
      });
      if (alreadyUserCheck) {
        token = await tokenGenrate(alreadyUserCheck._id);
        res.send(token)         
        }else{
            res.send("Invalid Credentials")
        }   
        
      } 
    
      
    


module.exports = { Login,singUp };
