const express = require('express');
const router = express.Router();
const faker = require('faker');
const Product = require('../../models/Product');
const Category = require('../../models/Category');

router.get('/products', function (req, res, next) {
    for (let i = 0; i < 20; i++) {
        let product = new Product({
            name : faker.commerce.productName(),
            price : faker.commerce.price(),
            category: faker.commerce.department(),
            description : faker.lorem.paragraph(),
            image : faker.image.technics()
        });
        
        product.save();
    }
    res.redirect('/')
});

router.get('/category', function (req, res, next) {
    for (let i = 0; i < 10; i++) {
        let category = new Category({
            title: faker.commerce.department(),
        });

        category.save();
    }
    res.redirect('/')
});

module.exports = router;
