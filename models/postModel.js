const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    caption: {
        type: String
    },
    comments: [
        {
            body: {
                type: String,
                required: true
            },
            username: {
                type: String,
                required: true
            },
        }
    ],
    likes: [
        {
            username: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;