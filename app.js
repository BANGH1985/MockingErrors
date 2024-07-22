const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes.js');
const { errorHandler } = require('./middlewares/errorHandler.js');
const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb+srv://Dante:1985112aA.@cluster0.dr7thbm.mongodb.net/MockingErrors?retryWrites=true&w=majority&appName=Cluster0');

app.use(express.json());
app.use('/api/products', productRoutes);

// Manejador de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
