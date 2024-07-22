const Product = require('../models/Product');
const generateMockData = require('../utils/mockData');
const { CustomError, errorDictionary } = require('../utils/customErrors');

const getMockProducts = async (req, res, next) => {
    try {
        const mockProducts = generateMockData();
        res.status(200).json(mockProducts);
    } catch (err) {
        next(err);
    }
};

const createProduct = async (req, res, next) => {
    try {
        const { title, price } = req.body;

        if (!title) throw new CustomError(errorDictionary.MISSING_TITLE, 400);
        if (!price) throw new CustomError(errorDictionary.MISSING_PRICE, 400);

        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        next(err);
    }
};

module.exports = { getMockProducts, createProduct };
