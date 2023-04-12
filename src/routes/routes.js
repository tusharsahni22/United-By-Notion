const express =require("express")
const router = express.Router();
const {getPostDetails} = require("../controller/SocialMedia")
const {auth} =require("../controller/auth")



router.use(express.json())

router.route("/getdetails").get(getPostDetails)
router.route("/authenticate").post(auth)

module.exports = router;