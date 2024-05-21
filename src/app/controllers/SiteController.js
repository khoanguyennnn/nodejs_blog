const Blog = require('../models/Phone');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    async index(req, res, next) {
        Blog.find({})
            .then((blogs) => {
                res.render('home', {
                    blogs: multipleMongooseToObject(blogs),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
