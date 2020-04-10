const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: { type: String, required: true },

    images: [{ type: String }],

    state: { type: Boolean, default: false },

    hiden: { type: Boolean },

    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },

    mentionedPlant: { type: mongoose.Schema.ObjectId, ref: 'Plant' },

    created: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Post', PostSchema);