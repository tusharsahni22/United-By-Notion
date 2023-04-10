const express =require("express")
const router = express.Router();
const {getPostDetails} = require("../controller/SocialMedia")

router.route("/getdetails").get(getPostDetails)

module.exports = router;