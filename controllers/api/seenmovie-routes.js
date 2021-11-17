const router = require('express').Router();
const { SeenMovie } = require('../../models/');

router.get('/', (req, res) => {
    SeenMovie.findAll({

    })
    .then(dbSeenMovieData => res.json(dbSeenMovieData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    SeenMovie.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbSeenMovieData => {
        if (!dbSeenMovieData) {
            res.status(404).json({ message: 'No movie with this id' });
            return;
        }
        res.json(dbSeenMovieData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    SeenMovie.create({
        movie_name: req.body.movie_name
    })
    .then(dbSeenMovieData => res.json(dbSeenMovieData)) 
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    SeenMovie.update({
          movie_name: req.body.movie_name
        },
        {
        where: {
            id: req.params.id
        }
    })
    .then(dbSeenMovieData => {
        if (!dbSeenMovieData) {
            res.status(404).json({ message: 'No movie found with this id'});
            return;
        }
        res.json(dbSeenMovieData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    SeenMovie.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbSeenMovieData => {
        if (!dbSeenMovieData) {
            res.status(404).json({ message: 'No movie found with this id'});
            return;
        }
        res.json(dbSeenMovieData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;