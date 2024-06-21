const { BAD_GATEWAY } = require('http-status-codes');
const {BadRequestError} = require('../errors');

const testUserCheck = (req, res, next) => {
    if (!req.user.testUser) {
        next()
    } else {
        throw new BadRequestError('Test User, Read Only')
    }
}

module.exports = testUserCheck;