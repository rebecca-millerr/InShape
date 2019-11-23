const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Home');
});

app.get('/meals', function (req, res) {
  res.send('Meals');
});


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
