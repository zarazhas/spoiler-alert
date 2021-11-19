const router = require('express').Router();
const { User, SeenMovie, UserSeenMovie } = require('../../models');
const withAuth = require('../../utils/auth');

// Getting all users 
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password']},
        include: [
            {
                model: SeenMovie,
                attributes: ['movie_name']
            }
        ]
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password']},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: SeenMovie,
                attributes: ['movie_name']
            }
        ]
        // Should we include more in this like their posts?
    })
      .then(dbUserData => {
          if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        favoriteMovie: req.body.favoriteMovie
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    })
   .catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

/*
router.get('/please', withAuth, (req, res) => {
    User.findOne({
        where: {
            id: req.session.user_id
        }
    })
    .then(dbUserData => {
        req.session.sav(() => {
            req.session.haveseen = 1;

            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/test', function(req, res) {
    if(!req.session.haveseen){
        req.session.save(() => {
            req.session.haveseen =  1;

            res.json({ message: 'torment unedning'});
        });
    } else {
        res.json({ message: 'req.session.haveseen' });
    }
    
});

router.post('/have-seen', withAuth, function(req, res, next) {
    if(!req.session.haveseen) {
        req.session.save(() => {
            req.session.haveseen = req.body.post_id;

            res.json({ message: 'You have seen this movie. '});
        });
    } else {
        req.session.haveseen = req.body.post_id;

        res.json({ message: 'free me from this torment.' });
    }

});
*/

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            // changed this from email to username
            username: req.body.username
        }
    }).then(dbUserData => {
          if (!dbUserData){
              res.status(400).json({ message: 'No user with that ussername!' });
              return;
          }
          const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
      }
     
      req.session.save(() => {
        // declaring session varbiles 
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});

// in order to update the movie list the route is WHILE LOGGED IN api/user/[id of the seen movie]
router.put('/:seen_movie_id', withAuth, (req, res) => {
    UserSeenMovie.create({
        user_id: req.session.user_id,
        seen_movie_id: req.params.seen_movie_id
    })
    .then(dbUserData => {
          if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
      .then(dbUserData => {
          if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() =>{
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;