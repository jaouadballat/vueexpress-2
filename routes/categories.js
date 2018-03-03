const express = require('express');
const router = express.Router();

const Category = require('../models/Category');
const Product = require('../models/Product');

router.get('/', function (req, res, next) {
    Category.find(function (err, categories) {
        if (err) return console.log(err);
        res.status(200).json(categories);
    });
    
});
//display all products in a specific Category
router.get('/:category', function (req, res, next) {
    Category.findOne({title: req.params.category}, function (err, category) {
        if (err) return console.log(err);
        Product.find({category: category.title}, function(err, products) {
            if(err) return console.log(err);
            res.status(200).json(products);
        });
    });
});

module.exports = router;
