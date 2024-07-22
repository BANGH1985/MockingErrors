class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const errorDictionary = {
    MISSING_TITLE: 'El título es requerido.',
    MISSING_PRICE: 'El precio es requerido.'
};

module.exports = { CustomError, errorDictionary };
