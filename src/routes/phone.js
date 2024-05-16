const express = require('express');
const router = express.Router();

const phoneController = require('../app/controllers/PhoneController');

router.get('/create', phoneController.create);
router.post('/store', phoneController.store);
router.get('/:id/edit', phoneController.edit);
router.put('/:id/', phoneController.update);
router.delete('/:id/', phoneController.destroy);
router.get('/:slug', phoneController.show);

module.exports = router;
