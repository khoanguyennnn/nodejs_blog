const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Phone = new Schema(
    {
        image: {
            type: String,
            default:
                'https://shop.digitalhospital.com.sg/wp-content/uploads/2021/06/original.png',
        },
        title: { type: String, default: '', maxLength: 255, require: true },
        body: { type: String, default: '', maxLength: 1000 },
        videoId: { type: String, default: '', maxLength: 255, require: true },
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    },
);

// Add plugin
mongoose.plugin(slug);
Phone.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Phone', Phone);
