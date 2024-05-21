const Phone = require('../models/Phone');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/products
    storedProducts(req, res, next) {
        Promise.all([
            Phone.find({}),
            Phone.countDocumentsWithDeleted({ deleted: true }),
        ])
            .then(([phones, deletedCount]) =>
                res.render('me/stored-products', {
                    deletedCount,
                    phones: multipleMongooseToObject(phones),
                }),
            )
            .catch(next);
    }

    // [GET] /me/trash/products
    trashProducts(req, res, next) {
        Phone.findWithDeleted({ deleted: true })
            .lean()
            .then((phones) =>
                res.render('me/trash-products', {
                    // phones: multipleMongooseToObject(phones),
                    phones,
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
