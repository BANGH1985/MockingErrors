const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
const logger = require('./config/logger');
const loggerTestRoutes = require('./routes/loggerTest');
const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/my-ecommerce')
.then(() => {
    logger.info('MongoDB connected');
}).catch(err => {
    logger.error('MongoDB connection error', err);
});

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/loggerTest', loggerTestRoutes);

// Manejador de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
