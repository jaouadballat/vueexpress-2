const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.get('/', function (req, res, next) {
  let perPage = 3;
  let page = parseInt(req.query.page) || 0;
  let pages = 0;
  let nextUrl = '';
  let prevUrl = '';
  Product.count().exec(function (err, count) {
    Product.find()
      .limit(perPage)
      .skip(perPage * page)
      .exec(function (err, products) {
        pages = Math.floor(count / perPage);
        if (page === 0) {
          res.json({
            products,
            currentPage: page,
            pages,
            count,
            prevUrl: ``,
            nextUrl: `http://localhost:3000/products?page=${page + 1}`
          })

        } else if (page === pages - 1) {
          res.json({
            products: products,
            currentPage: page,
            pages,
            count,
            prevUrl: `http://localhost:3000/products?page=${page - 1}`,
            nextUrl: ``
          })
        } else if (page > 0 && page < pages) {
          res.json({
            products: products,
            currentPage: page,
            pages,
            count,
            prevUrl: `http://localhost:3000/products?page=${page - 1}`,
            nextUrl: `http://localhost:3000/products?page=${page + 1}`
          })
        }else {
          res.redirect('/products')
        }

      });
  });
});

router.get('/:id', function (req, res, next) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return console.log(err);
    res.status(200).json(product);
  })
});

module.exports = router;
