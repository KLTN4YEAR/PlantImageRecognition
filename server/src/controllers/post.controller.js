const multer = require('multer');
const uploadImage = require('../helpers/cloud.helper');
const { PostService } = require('../services');
const db = require('../db');

//config multer
const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
}).array("plant_images", 5);

const createPost = async (req, res) => {
    const myFile = req.files;
    if (!myFile) {
        return res.status(400).json({
            message: "Dont have image be upload"
        })
    }

    let typePlant = 'newPlant';

    //if name plant have in model trained
    if (req.body.mentionedPlant) {
        typePlant = 'oldPlant';
    }

    let listPathImage = [];

    //if dont know name plant
    let namePlant = req.body.namePlant;
    if (!namePlant) {
        typePlant = 'undefined';
        namePlant = null;
    }

    for (let i = 0; i < myFile.length; i++) {
        let imageUrl = '';
        imageUrl = await uploadImage.uploadImage(myFile[i], typePlant, namePlant);
        listPathImage.push(imageUrl);
    }

    const formatData = {
        content: req.body.content,
        postedBy: req.user.data._id,
        mentionedPlant: req.body.mentionedPlant,
        images: listPathImage
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

const getList = async (req, res) => {
    const formatData = {
        lastId: req.params.lastId
    }

    const postService = new PostService(db, formatData);

    let listPost = await postService.getList();
    return res.status(200)
        .json({
            message: "Get list post was successful",
            result: {
                listPost
            }
        })
}

const getInfoPost = async (req, res) => {
    const formatData = {
        postId: req.params._id
    }

    const postService = new PostService(db, formatData);

    let post = await postService.getInfoPost();
    return res.status(200)
        .json({
            message: "Get info post success",
            result: {
                post
            }
        })
}

module.exports = {
    createPost,
    multerMid,
    getInfoPost,
    getList
};
