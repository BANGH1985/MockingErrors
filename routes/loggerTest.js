const express = require('express');
const router = express.Router();
const logger = require('../config/logger.js');

router.get('/', (req, res) => {
    logger.debug('This is a debug message');
    logger.http('This is an HTTP message');
    logger.info('This is an info message');
    logger.warn('This is a warning message');
    logger.error('This is an error message');
    logger.fatal('This is a fatal message');
    res.send('Logger test complete');
});

module.exports = router;
