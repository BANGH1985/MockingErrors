const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
    logger.error(err.stack);

    res.status(err.statusCode || 500).json({
        error: err.message || 'Algo salió mal, por favor intente nuevamente más tarde.'
    });
};

module.exports = { errorHandler };
