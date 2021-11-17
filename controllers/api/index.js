const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');
const seenmovieRoutes = require('./seenmovie-routes');
//const userseenmovieRoutes = require('./userseenmovie-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/seen-movies', seenmovieRoutes);
//router.use('/user-seen-movie', userseenmovieRoutes);

module.exports = router;