const Phone = require('../models/Phone');
const { mongooseToObject } = require('../../util/mongoose');

class PhoneController {
    // [GET] /phones/:slug
    show(req, res, next) {
        Phone.findOne({ slug: req.params.slug })
            .then((phone) => {
                res.render('phones/show', { phone: mongooseToObject(phone) });
            })
            .catch(next);
    }

    // [GET] /phones/create
    create(req, res, next) {
        res.render('phones/create');
    }

    // [POST] /phones/store
    store(req, res, next) {
        // res.json(req.body)

        const phone = new Phone(req.body);
        phone
            .save()
            .then(() => res.redirect('/me/stored/products'))
            .catch((err) => {});
    }

    // [GET] /phones/:id/edit
    edit(req, res, next) {
        Phone.findById(req.params.id)
            .then((phone) =>
                res.render('phones/edit', {
                    phone: mongooseToObject(phone),
                }),
            )
            .catch(next);
    }

    // [PUT] /phones/:id/
    update(req, res, next) {
        Phone.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/products'))
            .catch(next);
    }

    // [DELETE] /phones/:id/
    destroy(req, res, next) {
        Phone.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /phones/:id/force
    forceDestroy(req, res, next) {
        Phone.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /phones/:id/restore
    restore(req, res, next) {
        Phone.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new PhoneController();
