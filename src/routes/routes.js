const express =require("express")
const router = express.Router();
const {makePost,followUser,all_posts,likePost,unlikePost,commentOnPost} = require("../controller/SocialMedia")
const {Login,singUp} =require("../controller/auth")
const {authTokenCheck} =require("../middleware/validator")



router.use(express.json())

router.route("/singup").post(singUp)
router.route("/authenticate").post(Login)
router.route("/posts").post(authTokenCheck ,makePost)
router.route("/all_posts").get(authTokenCheck ,all_posts)
router.route("/like/:id").post(authTokenCheck ,likePost)
router.route("/unlike/:id").post(authTokenCheck ,unlikePost)
router.route("/comment/:id").post(authTokenCheck ,commentOnPost)
router.route("/follow/:id").post(authTokenCheck ,followUser)

module.exports = router;