const PostModel = require("../database/post");
const postModel = require("../database/post");

const makePost = async (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res.send("Please Fill all details");
  } else {
    const { title, description } = req.body;
    const postData = new postModel({
      title,
      description,
      postedBy: req.user._id,
    });

    postData
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const all_posts = async (req, res) => {
  await postModel
    .find({ postedBy: req.user._id })
    .populate("postedBy"," _id name")
    .populate("likes"," _id name")
    .populate("comments.postedBy"," _id name")
    .then((requestedData) => {
      res.send(requestedData);
    })
    .catch((err) => {
      console.log(err);
    });
};

const likePost = async (req, res) => {
  postId = req.params.id;
  PostModel.findByIdAndUpdate(
    postId,
    {
      $push: { likes: req.user._id },
    },
    { new: true }
  ).then((result, err) => {
    if (err) {
      return res.json({ error: err });
    } else {
      res.json(result);
    }
  });
};
const unlikePost = async (req, res) => {
  postId = req.params.id;
  await PostModel.findByIdAndUpdate(postId,{$pull:{likes: req.user._id }},
    { new: true }
  ).then((result, err) => {
    if (err) {
      return res.json({ error: err });
    } else {
      res.json(result);
    }
  });
};
const commentOnPost = async (req, res) => {
  postId = req.params.id;
  const comment = {
    comment: req.body.comment,
    postedBy: req.user.id,
  };
  await PostModel.findByIdAndUpdate(postId,{$push:{comments: comment}},{ new: true }
     // .populate("comments.postedBy","_id name")
     // .populate("postedBy","_id name")
     )
     .then((result) => {
      res.json(result);
    }).catch((err) => {console.log(err)});
};


const followUser = async (req, res) => {
  res.send("working");
};

module.exports = {
  makePost,
  followUser,
  all_posts,
  likePost,
  unlikePost,
  commentOnPost,
};
