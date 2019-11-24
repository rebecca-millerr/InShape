const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;                   // runs on localhost:5000
const models = require('./models');  // see models/index.js and other files
const routes = require('./routes');  // see routes
let db;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

const startDB = (done) => {
  models.init((database) => {
    routes.init(database);
    db = database;
    db.sequelize.sync({ force: true }).then(() => {   // force true means the database clears every time it starts
      done();
    });
  }
}
              
// start app or defer to test env and provide utils
if (process.env.NODE_ENV !== 'test') {
  startDB(() => {
    app.listen(port, () => {
      console.log(`App running on port ${port}.`);
    });
  });
} else {
  app.startDB = startDB
  module.exports = app;
}

// app.get('/', function (req, res) {
//   res.send('Home');
// });

// app.get('/meals', function (req, res) {
//   res.send('Meals');
// });
