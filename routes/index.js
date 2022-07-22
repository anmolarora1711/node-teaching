const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/products');
const usersControllers = require('../controllers/users');

router.get('/users', usersControllers.list);

router.get('/products', productControllers.list);

module.exports = router;