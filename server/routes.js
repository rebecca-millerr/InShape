const express = require('express');
let router = express.Router();
// const utils = require('./utils');
// const anyValuesUndefined = utils.anyValuesUndefined;
// const userKeyCheck = utils.userKeyCheck;
let db;

// every part of the database that needs to be accessed needs an endpoint
// endpoints are little URLs that are accessed from the front end like an API
// this is because we're essentially creating our own internal API
// here's an example (this creates a user):
/*
router.post('/create', (req, res) => {
  let createObj = {
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password // TODO hash password
  };

  if (anyValuesUndefined(createObj)) {
    res.status(400).json({ err: 'undefined fields' });
    return;
  }

  db.User.create(createObj).then((newUserInstance) => {
    res.json(newUserInstance.get({ plain: true }));
    return;
  }).catch((err) => {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(409).json({ err: 'username taken' });
      return;
    }

    console.log('Error while creating user.');
    console.log(err);
    res.status(500).json({ err: err });
    return;
  });
});
*/
