const { CustomError, errorDictionary } = require('../utils/customErrors');

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            error: err.message
        });
    }

    res.status(500).json({
        error: 'Algo salió mal, por favor intente nuevamente más tarde.'
    });
};

module.exports = { errorHandler };
