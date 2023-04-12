const express =require("express")
const router = express.Router();
const {getPostDetails} = require("../controller/SocialMedia")
const {authVerify} =require("../controller/auth")



router.use(express.json())

router.route("/getdetails").get(getPostDetails)
router.route("/authenticate").post(authVerify)

module.exports = router;