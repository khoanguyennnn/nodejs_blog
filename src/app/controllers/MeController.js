const Blog = require('../models/Blog');
const {multipleMongooseToObject} = require('../../util/mongoose')

class MeController {
    // [GET] /me/stored/products
    storedProducts(req, res, next) {
        Blog.find({})
            .then(phones => res.render('me/stored-products', {
                phones: multipleMongooseToObject(phones)
            }))
            .catch(next)
        
    }
}

module.exports = new MeController();
