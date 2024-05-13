const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Blog = new Schema({
    image: {type:String, default: 'https://shop.digitalhospital.com.sg/wp-content/uploads/2021/06/original.png'},
    title: {type: String, default: '', maxLength: 255, require: true},
    body: {type: String, default: '', maxLength: 1000},
    videoId: {type: String, default: '', maxLength: 255, require: true},
    slug: { type: String, slug: 'title' , unique: true},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Blog', Blog);