'use strict';

const app = require('express')();

app.use(require('./routers/authenticate'));

app.get('/',
  (req, res) => {
    res.render('home.ejs', { user: req.user });
  }
);

app.get('/profile',
  require('./middlewares/ensureLoggedIn'),
  (req, res) => {
    res.render('profile.ejs', { user: req.user });
  }
);

app.listen(process.env.PORT);
