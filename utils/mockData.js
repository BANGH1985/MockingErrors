const {faker} = require('@faker-js/faker');
const Product = require('../models/Product');

const generateMockData = () => {
    const products = [];
    for (let i = 0; i < 50; i++) {
        products.push({
            title: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            category: faker.commerce.department(),
            image: faker.image.imageUrl()
        });
    }
    return products;
};

module.exports = generateMockData;
