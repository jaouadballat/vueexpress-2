const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.get('/', function(req, res, next) {
  Product.find(function(err, products) {
    if(err) return console.log(err);
    res.status(200).json(products);
  })
});

router.get('/:id', function (req, res, next) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return console.log(err);
    res.status(200).json(product);
  })
});

module.exports = router;
