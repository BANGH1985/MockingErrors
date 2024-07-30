const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, errors, colorize } = format;

// Define los niveles de logging
const levels = {
    debug: 0,
    http: 1,
    info: 2,
    warning: 3,
    error: 4,
    fatal: 5,
};

// Definición de formato de salida
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}]: ${stack || message}`;
});

// Logger para desarrollo
const devLogger = createLogger({
    levels,
    format: combine(
        colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        errors({ stack: true }),
        logFormat
    ),
    transports: [
        new transports.Console({
        level: 'debug',
        }),
    ],
});

// Logger para producción
const prodLogger = createLogger({
    levels,
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        errors({ stack: true }),
        logFormat
    ),
    transports: [
        new transports.Console({
        level: 'info',
        }),
        new transports.File({
        filename: 'errors.log',
        level: 'error',
        }),
    ],
});

// Seleccionar logger basado en el entorno
const logger = process.env.NODE_ENV === 'production' ? prodLogger : devLogger;

module.exports = logger;
