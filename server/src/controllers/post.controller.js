//upload image
const multer = require('multer')
const uploadImage = require('../helpers/cloud.helper');
const PostService = require('../services/post.service').Post;
const db = require('../db');

//config multer
const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
}).array("plant_image", 5);

const createPost = async (req, res) => {
    const myFile = req.files;
    if (!myFile) {
        return res.status(400).json({
            message: "Dont have image be upload"
        })
    }

    let typePlant = 'newPlant';
    if (req.body.mentionedPlant) {
        typePlant = 'oldPlant';
    }

    let listPathImage = [];
    let namePlant = req.body.namePlant;
    for (let i = 0; i < myFile.length; i++) {
        let imageUrl = '';
        imageUrl = await uploadImage(myFile[i], typePlant, namePlant);
        listPathImage.push(imageUrl);
    }

    const formatData = {
        content: req.body.content,
        postedBy: req.user.data._id,
        mentionedPlant: req.body.mentionedPlant,
        image: listPathImage
    }

    const postService = new PostService(db, formatData);

    let post = await postService.create();
    return res.status(200)
        .json({
            message: "Created was successful",
            result: {
                post
            }
        })

}

module.exports = {
    createPost,
    multerMid
};
