const router = require('express').Router();

const userRouters = require('./user-routes');

router.use('/users', userRouters);

module.exports = router;