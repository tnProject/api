var express = require('express');
var router = express.Router();

const { Product } = require('./../model/sequelize');
const ProductService = require('../services/ProductService');

let ProductController = {
    getAll: async (req, res, next) => {
        let productService = new ProductService();
        var result = productService.getAll().then((result) => {
            res.json(result);
        })
    },

    getById: (req, res, next) => {
        let productService = new ProductService();
        productService.getById(req.params.id).then((result) => {
            res.json(result);
        });
    },

    create: (req, res, next) => {
        let productService = new ProductService();
        let product = req.body;
        productService.create(product).then((result) => {
            res.json(result);
        })
    },

    update: (req, res, next) => {
        let productService = new ProductService();
        let product = req.body;
        productService.update(product).then((result) => {
            res.json(result);
        })
    }
}


module.exports = ProductController;