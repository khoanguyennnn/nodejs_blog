const Blog = require('../models/Blog');
const {mongooseToObject} = require('../../util/mongoose')

class PhoneController {
    // [GET] /phones/:slug
    show(req, res, next) {
        Blog.findOne({slug: req.params.slug})
            .then(phone => {
                res.render('phones/show', {phone: mongooseToObject(phone)})
            })
            .catch(next)
    }

    // [GET] /phones/create
    create(req, res, next) {
        res.render('phones/create');
    }

    // [POST] /phones/store
    store(req, res, next) {
        // res.json(req.body)

        const phone = new Blog(req.body);
        phone.save()
            .then(() =>  res.redirect('/'))
            .catch(err => {

            })        
    }

    // [GET] /phones/:id/edit
    edit(req, res, next) {
        Blog.findById(req.params.id)
            .then(phone => res.render('phones/edit', {
                phone: mongooseToObject(phone)
            }))
            .catch(next);
        
    }

    // [PUT] /phones/:id/
    update(req, res, next) {
        Blog.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/products'))
            .catch(next);
    }

}

module.exports = new PhoneController();
