const chalk = require('chalk');

/**
 * Logger utility for displaying messages with different styles using Chalk.
 */
const logger = {
    /**
     * Log a success message with bold green text.
     *
     * @param {string} message - The message to be logged.
     */
    success: (message) => {
        console.log(chalk.bold.green(message));
    },

    /**
     * Log an error message with red text and an optional comment without color
     *
     * @param {string} message - The message to be logged.
     */
    error: (message) => {
        console.log(chalk.bold.red(message));
    },

    /**
     * Log a warning message with yellow bold text.
     *
     * @param {string} message - The warning message to be logged
     */
    warning: (message) => {
        console.log(chalk.bold.yellow(message));
    },
};

module.exports = {
    logger,
};
