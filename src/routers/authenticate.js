'use strict';

const db = require('../db');
const express = require('express');
const passport = require('passport');

passport.deserializeUser(
  (id, cb) => {
    db.users.findById(id, (err, user) => {
      if (err) {
        return cb(err);
      }
      return cb(null, user);
    });
  }
);

passport.serializeUser(
  (user, cb) => cb(null, user.id)
);

passport.use(new (require('passport-local').Strategy)(
  (username, password, cb) => {
    db.users.findByUsername(username, (err, user) => {
      if (err) {
        return cb(err);
      }
      if (user.password !== password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

const router = express.Router();

router.use(require('body-parser').urlencoded({ extended: true }));
router.use(require('cookie-parser')());
router.use(require('express-session')({ resave: false, saveUninitialized: false, secret: 'secret' }));
router.use(passport.initialize());
router.use(passport.session());

router.route('/login')
  .get(
    require('../middlewares/ensureLoggedOut'),
    (req, res) => {
      res.render('login.ejs');
    })
  .post(
    passport.authenticate('local', { failureRedirect: '/login', successReturnToOrRedirect: '/' })
  );

router.get('/logout',
  (req, res) => {
    if (req.user) {
      req.logout();
    }
    res.redirect('/');
  }
);

module.exports = router;
